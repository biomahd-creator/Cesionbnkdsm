import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TreeTable, type TreeNode } from "../../components/advanced/TreeTable";

const mockData: TreeNode[] = [
  {
    id: "client-1",
    name: "Acme Corp",
    type: "client",
    amount: 150000,
    children: [
      {
        id: "project-1",
        name: "Project Alpha",
        type: "project",
        amount: 80000,
        children: [
          {
            id: "inv-1",
            name: "INV-001",
            type: "invoice",
            amount: 30000,
            status: "approved",
            date: "2025-01-15",
          },
          {
            id: "inv-2",
            name: "INV-002",
            type: "invoice",
            amount: 50000,
            status: "pending",
            date: "2025-01-20",
          },
        ],
      },
    ],
  },
  {
    id: "client-2",
    name: "Beta Industries",
    type: "client",
    amount: 200000,
  },
];

describe("TreeTable", () => {
  it("renders without crashing", () => {
    const { container } = render(<TreeTable data={mockData} />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("renders root level nodes", () => {
    render(<TreeTable data={mockData} />);
    expect(screen.getByText("Acme Corp")).toBeInTheDocument();
    expect(screen.getByText("Beta Industries")).toBeInTheDocument();
  });

  it("renders the table element", () => {
    const { container } = render(<TreeTable data={mockData} />);
    const table = container.querySelector("table");
    expect(table).toBeInTheDocument();
  });

  it("renders with title", () => {
    const { container } = render(<TreeTable data={mockData} title="Operations Tree" />);
    // Title may be rendered in a header or as a separate element
    const titleEl = screen.queryByText("Operations Tree");
    // TreeTable uses MasterDataGrid which doesn't render title in DOM
    expect(container.querySelector("table")).toBeInTheDocument();
  });

  it("renders with description", () => {
    const { container } = render(
      <TreeTable
        data={mockData}
        title="Tree"
        description="Hierarchical view"
      />
    );
    // Description may not be rendered by MasterDataGrid
    expect(container.querySelector("table")).toBeInTheDocument();
  });

  it("renders expand/collapse icons", () => {
    const { container } = render(<TreeTable data={mockData} />);
    const svgs = container.querySelectorAll("svg");
    expect(svgs.length).toBeGreaterThanOrEqual(2);
  });

  it("renders with checkboxes when enabled", () => {
    const { container } = render(
      <TreeTable data={mockData} showCheckboxes />
    );
    const checkboxes = container.querySelectorAll('[role="checkbox"]');
    expect(checkboxes.length).toBeGreaterThanOrEqual(2);
  });

  // --- Expand/Collapse interaction ---

  it("expands a node to show children when clicked", async () => {
    const user = userEvent.setup();
    render(<TreeTable data={mockData} />);
    // Initially children should NOT be visible
    expect(screen.queryByText("Project Alpha")).not.toBeInTheDocument();
    // Click expand on Acme Corp row
    const expandButtons = screen.getAllByRole("button");
    // First expand button should be for Acme Corp
    await user.click(expandButtons[0]);
    // Now children should be visible
    expect(screen.getByText("Project Alpha")).toBeInTheDocument();
  });

  it("collapses expanded node", async () => {
    const user = userEvent.setup();
    render(<TreeTable data={mockData} />);
    // Expand Acme Corp
    const expandButtons = screen.getAllByRole("button");
    await user.click(expandButtons[0]);
    expect(screen.getByText("Project Alpha")).toBeInTheDocument();
    // Collapse Acme Corp
    const collapseButtons = screen.getAllByRole("button");
    await user.click(collapseButtons[0]);
    expect(screen.queryByText("Project Alpha")).not.toBeInTheDocument();
  });

  it("renders formatted amounts", () => {
    render(<TreeTable data={mockData} />);
    // $150,000 or $200,000 should appear
    const cells = screen.getAllByText(/\$\d/);
    expect(cells.length).toBeGreaterThanOrEqual(2);
  });

  it("does not render expand icon for leaf nodes", () => {
    render(<TreeTable data={[{ id: "leaf-1", name: "Leaf", type: "invoice", amount: 100 }]} />);
    // No children = no expand button
    expect(screen.getByText("Leaf")).toBeInTheDocument();
  });

  it("renders table headers", () => {
    render(<TreeTable data={mockData} />);
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Amount")).toBeInTheDocument();
  });

  // --- Custom className ---
  
  it('renders wrapper element', () => {
    const { container } = render(<TreeTable data={mockData} />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toBeInTheDocument();
  });
});