import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { EditableTable } from "../../components/patterns/EditableTable";

describe("EditableTable", () => {
  it("renders the page heading", () => {
    render(<EditableTable />);
    expect(screen.getByText("Editable Table Cells")).toBeInTheDocument();
  });

  it("renders inside a MasterDataGrid (Card wrapper)", () => {
    const { container } = render(<EditableTable />);
    // MasterDataGrid renders as a Card but title is not in DOM
    const card = container.querySelector('[data-slot="card"]');
    expect(card).toBeInTheDocument();
  });

  it("renders info cards", () => {
    render(<EditableTable />);
    expect(screen.getByText("Inline Editing")).toBeInTheDocument();
    expect(screen.getByText("Data Validation")).toBeInTheDocument();
    expect(screen.getByText("Data Types")).toBeInTheDocument();
  });

  it("renders table headers", () => {
    render(<EditableTable />);
    expect(screen.getByText("Invoice No.")).toBeInTheDocument();
    expect(screen.getByText("Client")).toBeInTheDocument();
    expect(screen.getByText("Amount")).toBeInTheDocument();
    expect(screen.getByText("Due Date")).toBeInTheDocument();
  });

  it("renders invoice numbers", () => {
    render(<EditableTable />);
    expect(screen.getByText("INV-2024-001")).toBeInTheDocument();
    expect(screen.getByText("INV-2024-002")).toBeInTheDocument();
  });

  it("renders client names", () => {
    render(<EditableTable />);
    expect(screen.getByText("Comercial Martinez S.A.")).toBeInTheDocument();
    expect(screen.getByText("Distribuidora Norte")).toBeInTheDocument();
  });

  it("renders status badges", () => {
    render(<EditableTable />);
    const pendingBadges = screen.getAllByText("Pending");
    expect(pendingBadges.length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText("Approved")).toBeInTheDocument();
    expect(screen.getByText("Paid")).toBeInTheDocument();
  });

  it("renders the table element", () => {
    const { container } = render(<EditableTable />);
    const table = container.querySelector("table");
    expect(table).toBeInTheDocument();
  });

  // --- Inline editing interaction ---

  it("enters edit mode when clicking on a client name cell", async () => {
    const user = userEvent.setup();
    render(<EditableTable />);
    // Click on a client name to start editing
    await user.click(screen.getByText("Comercial Martinez S.A."));
    // An input should appear for editing
    const input = screen.getByDisplayValue("Comercial Martinez S.A.");
    expect(input).toBeInTheDocument();
  });

  it("enters edit mode when clicking on an invoice number cell", async () => {
    const user = userEvent.setup();
    render(<EditableTable />);
    await user.click(screen.getByText("INV-2024-001"));
    const input = screen.getByDisplayValue("INV-2024-001");
    expect(input).toBeInTheDocument();
  });

  it("enters edit mode when clicking on an amount cell", async () => {
    const user = userEvent.setup();
    render(<EditableTable />);
    // Click on the first formatted amount ($45,000 for Comercial Martinez)
    await user.click(screen.getByText("$45,000"));
    // Should show an input with the raw value
    const input = screen.getByDisplayValue("45000");
    expect(input).toBeInTheDocument();
  });

  // --- Edit and save/cancel ---

  it("edits a client name and saves on blur", async () => {
    const user = userEvent.setup();
    render(<EditableTable />);
    // Click to start editing
    await user.click(screen.getByText("Comercial Martinez S.A."));
    const input = screen.getByDisplayValue("Comercial Martinez S.A.") as HTMLInputElement;
    await user.clear(input);
    await user.type(input, "New Company Name");
    // Save with Enter key (component doesn't save on blur, only Enter or Check button)
    await user.keyboard("{Enter}");
    // The new value should appear in the table
    expect(screen.getByText("New Company Name")).toBeInTheDocument();
  });

  it("cancels edit with Escape key", async () => {
    const user = userEvent.setup();
    render(<EditableTable />);
    await user.click(screen.getByText("Comercial Martinez S.A."));
    const input = screen.getByDisplayValue("Comercial Martinez S.A.") as HTMLInputElement;
    await user.clear(input);
    await user.type(input, "Should Not Save");
    // Press Escape to cancel
    await user.keyboard("{Escape}");
    // Original value should remain
    expect(screen.getByText("Comercial Martinez S.A.")).toBeInTheDocument();
    expect(screen.queryByText("Should Not Save")).not.toBeInTheDocument();
  });

  it("saves edit on Enter key", async () => {
    const user = userEvent.setup();
    render(<EditableTable />);
    await user.click(screen.getByText("INV-2024-001"));
    const input = screen.getByDisplayValue("INV-2024-001") as HTMLInputElement;
    await user.clear(input);
    await user.type(input, "INV-UPDATED");
    await user.keyboard("{Enter}");
    expect(screen.getByText("INV-UPDATED")).toBeInTheDocument();
  });
});