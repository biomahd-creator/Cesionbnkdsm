import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DataTable } from "../../components/advanced/DataTable";
import { ColumnDef } from "@tanstack/react-table";

interface TestData {
  id: string;
  name: string;
  status: string;
}

const columns: ColumnDef<TestData, any>[] = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "name", header: "Name" },
  { accessorKey: "status", header: "Status" },
];

const data: TestData[] = [
  { id: "1", name: "Alice", status: "Active" },
  { id: "2", name: "Bob", status: "Inactive" },
  { id: "3", name: "Charlie", status: "Active" },
];

describe("DataTable", () => {
  it("renders the table with column headers", () => {
    render(<DataTable columns={columns} data={data} />);
    expect(screen.getByText("ID")).toBeInTheDocument();
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Status")).toBeInTheDocument();
  });

  it("renders data rows", () => {
    render(<DataTable columns={columns} data={data} />);
    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("Bob")).toBeInTheDocument();
    expect(screen.getByText("Charlie")).toBeInTheDocument();
  });

  it("renders with title and description", () => {
    render(
      <DataTable
        columns={columns}
        data={data}
        title="Test Table"
        description="A test description"
      />
    );
    expect(screen.getByText("Test Table")).toBeInTheDocument();
    expect(screen.getByText("A test description")).toBeInTheDocument();
  });

  it("renders the search input when searchKey is provided", () => {
    render(
      <DataTable
        columns={columns}
        data={data}
        searchKey="name"
        searchPlaceholder="Search names..."
      />
    );
    expect(
      screen.getByPlaceholderText("Search names...")
    ).toBeInTheDocument();
  });

  it("renders the View button for column visibility", () => {
    render(<DataTable columns={columns} data={data} />);
    expect(screen.getByText("View")).toBeInTheDocument();
  });

  it("shows 'No results.' when data is empty", () => {
    render(<DataTable columns={columns} data={[]} />);
    expect(screen.getByText("No results.")).toBeInTheDocument();
  });

  it("filters data when typing in search input", async () => {
    const user = userEvent.setup();
    render(
      <DataTable
        columns={columns}
        data={data}
        searchKey="name"
        searchPlaceholder="Search names..."
      />
    );
    await user.type(screen.getByPlaceholderText("Search names..."), "Alice");
    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.queryByText("Bob")).not.toBeInTheDocument();
  });

  it("renders row count text", () => {
    render(<DataTable columns={columns} data={data} />);
    // Default: "0 of 3 row(s) selected."
    expect(screen.getByText(/of 3 row/)).toBeInTheDocument();
  });

  it("does not render search input when searchKey is not provided", () => {
    render(<DataTable columns={columns} data={data} />);
    const inputs = screen.queryAllByRole("textbox");
    // No search input should be present
    expect(inputs.length).toBe(0);
  });

  // --- Column visibility ---

  it("opens View dropdown when clicked", async () => {
    const user = userEvent.setup();
    render(<DataTable columns={columns} data={data} />);
    await user.click(screen.getByText("View"));
    // Should show a dropdown with column names
    expect(screen.getByText("Toggle columns")).toBeInTheDocument();
  });

  // --- Pagination ---

  it("renders Previous and Next pagination buttons", () => {
    render(<DataTable columns={columns} data={data} />);
    expect(screen.getByText("Previous")).toBeInTheDocument();
    expect(screen.getByText("Next")).toBeInTheDocument();
  });

  it("Previous button is disabled on first page", () => {
    render(<DataTable columns={columns} data={data} />);
    const prevBtn = screen.getByText("Previous");
    expect(prevBtn).toBeDisabled();
  });

  // --- Clearing search ---

  it("clears search and shows all rows", async () => {
    const user = userEvent.setup();
    render(
      <DataTable
        columns={columns}
        data={data}
        searchKey="name"
        searchPlaceholder="Search..."
      />
    );
    await user.type(screen.getByPlaceholderText("Search..."), "Alice");
    expect(screen.queryByText("Bob")).not.toBeInTheDocument();
    await user.clear(screen.getByPlaceholderText("Search..."));
    expect(screen.getByText("Bob")).toBeInTheDocument();
  });

  // --- Large dataset ---

  it("handles single row data", () => {
    render(<DataTable columns={columns} data={[data[0]]} />);
    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText(/of 1 row/)).toBeInTheDocument();
  });
});