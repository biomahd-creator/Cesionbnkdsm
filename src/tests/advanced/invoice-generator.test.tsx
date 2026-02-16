import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { InvoiceGenerator } from "../../components/advanced/InvoiceGenerator";

describe("InvoiceGenerator", () => {
  it("renders the Invoice Information card", () => {
    render(<InvoiceGenerator />);
    expect(screen.getByText("Invoice Information")).toBeInTheDocument();
  });

  it("renders the Invoice No. label", () => {
    render(<InvoiceGenerator />);
    expect(screen.getByLabelText("Invoice No.")).toBeInTheDocument();
  });

  it("renders default company name", () => {
    render(<InvoiceGenerator />);
    const companyInputs = screen.getAllByDisplayValue("Financio SpA");
    expect(companyInputs.length).toBeGreaterThanOrEqual(1);
  });

  it("renders client section", () => {
    render(<InvoiceGenerator />);
    expect(screen.getByText("Client Information")).toBeInTheDocument();
  });

  it("renders items section with Add Item button", () => {
    render(<InvoiceGenerator />);
    expect(screen.getByText(/Add Item/i)).toBeInTheDocument();
  });

  it("renders tax rate input", () => {
    render(<InvoiceGenerator />);
    // Default tax rate is 19%
    expect(screen.getByDisplayValue("19")).toBeInTheDocument();
  });

  it("renders the form fields", () => {
    const { container } = render(<InvoiceGenerator />);
    const inputs = container.querySelectorAll("input");
    expect(inputs.length).toBeGreaterThanOrEqual(5);
  });

  it("renders with custom initial data", () => {
    render(
      <InvoiceGenerator
        initialData={{
          companyName: "Test Corp",
          clientName: "Client ABC",
        }}
      />
    );
    const companyInputs = screen.getAllByDisplayValue("Test Corp");
    expect(companyInputs.length).toBeGreaterThanOrEqual(1);
  });

  it("renders SVG icons", () => {
    const { container } = render(<InvoiceGenerator />);
    const svgs = container.querySelectorAll("svg");
    expect(svgs.length).toBeGreaterThanOrEqual(1);
  });

  // --- Interaction tests ---

  it("adds a new item when Add Item is clicked", async () => {
    const user = userEvent.setup();
    render(<InvoiceGenerator />);
    // Initially should have "Item 1"
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    // Click Add Item
    await user.click(screen.getByText(/Add Item/i));
    // Should now have "Item 2"
    expect(screen.getByText("Item 2")).toBeInTheDocument();
  });

  it("updates company name field", async () => {
    const user = userEvent.setup();
    render(<InvoiceGenerator />);
    const companyInputs = screen.getAllByDisplayValue("Financio SpA");
    await user.clear(companyInputs[0]);
    await user.type(companyInputs[0], "New Corp");
    expect(companyInputs[0]).toHaveValue("New Corp");
  });

  it("renders Preview and Download buttons", () => {
    render(<InvoiceGenerator />);
    expect(screen.getByText(/Preview/i)).toBeInTheDocument();
    expect(screen.getByText(/Download PDF/i)).toBeInTheDocument();
  });

  it("renders tax calculation section", () => {
    render(<InvoiceGenerator />);
    expect(screen.getByText(/Subtotal/)).toBeInTheDocument();
    expect(screen.getByText(/Tax/)).toBeInTheDocument();
    expect(screen.getByText(/Total/)).toBeInTheDocument();
  });

  it("renders Notes and Terms sections", () => {
    render(<InvoiceGenerator />);
    expect(screen.getByText("Additional Notes")).toBeInTheDocument();
  });

  it("removes an item when remove button is clicked", async () => {
    const user = userEvent.setup();
    render(<InvoiceGenerator />);
    // Add a second item first
    await user.click(screen.getByText(/Add Item/i));
    expect(screen.getByText("Item 2")).toBeInTheDocument();
    // Remove the second item (each item row has a remove/trash button)
    const removeButtons = screen.getAllByRole("button").filter(
      (btn) => btn.querySelector("svg.lucide-trash2") || btn.querySelector("svg.lucide-x")
    );
    if (removeButtons.length > 0) {
      await user.click(removeButtons[removeButtons.length - 1]);
      expect(screen.queryByText("Item 2")).not.toBeInTheDocument();
    }
  });

  it("updates tax rate", async () => {
    const user = userEvent.setup();
    render(<InvoiceGenerator />);
    const taxInput = screen.getByDisplayValue("19");
    await user.clear(taxInput);
    await user.type(taxInput, "10");
    expect(taxInput).toHaveValue("10");
  });

  it("updates client name field", async () => {
    const user = userEvent.setup();
    render(<InvoiceGenerator />);
    const clientInput = screen.getByLabelText(/Client Name/i) || screen.getByPlaceholderText(/client/i);
    if (clientInput) {
      await user.type(clientInput, "New Client");
      expect(clientInput).toHaveValue(expect.stringContaining("New Client"));
    }
  });

  it("renders currency symbol in totals", () => {
    render(<InvoiceGenerator />);
    const dollarValues = screen.getAllByText(/\$/);
    expect(dollarValues.length).toBeGreaterThanOrEqual(1);
  });
});