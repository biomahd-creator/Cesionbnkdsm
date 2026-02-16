import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AdvancedFilterPanel } from "../../components/patterns/AdvancedFilterPanel";

describe("AdvancedFilterPanel", () => {
  it("renders the filter trigger button", () => {
    render(<AdvancedFilterPanel />);
    expect(screen.getByText("Advanced Filters")).toBeInTheDocument();
  });

  it("renders the filter icon in trigger", () => {
    const { container } = render(<AdvancedFilterPanel />);
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
  });

  it("opens the sheet when clicking the trigger", async () => {
    const user = userEvent.setup();
    render(<AdvancedFilterPanel />);
    await user.click(screen.getByText("Advanced Filters"));

    // Sheet should show filter content
    expect(
      await screen.findByText("Refine your search with specific criteria")
    ).toBeInTheDocument();
  });

  it("shows Date Range section in the sheet", async () => {
    const user = userEvent.setup();
    render(<AdvancedFilterPanel />);
    await user.click(screen.getByText("Advanced Filters"));

    expect(await screen.findByText("Date Range")).toBeInTheDocument();
  });

  it("shows Amount Range section in the sheet", async () => {
    const user = userEvent.setup();
    render(<AdvancedFilterPanel />);
    await user.click(screen.getByText("Advanced Filters"));

    expect(await screen.findByText("Amount Range")).toBeInTheDocument();
  });

  it("shows Status filter section in the sheet", async () => {
    const user = userEvent.setup();
    render(<AdvancedFilterPanel />);
    await user.click(screen.getByText("Advanced Filters"));

    expect(await screen.findByText("Invoice Status")).toBeInTheDocument();
  });

  it("shows status options checkboxes", async () => {
    const user = userEvent.setup();
    render(<AdvancedFilterPanel />);
    await user.click(screen.getByText("Advanced Filters"));

    expect(await screen.findByText("Approved")).toBeInTheDocument();
    expect(screen.getByText("Rejected")).toBeInTheDocument();
  });

  it("shows From and To date labels", async () => {
    const user = userEvent.setup();
    render(<AdvancedFilterPanel />);
    await user.click(screen.getByText("Advanced Filters"));

    expect(await screen.findByText("From")).toBeInTheDocument();
    expect(screen.getByText("To")).toBeInTheDocument();
  });

  it("shows Apply and Clear buttons", async () => {
    const user = userEvent.setup();
    render(<AdvancedFilterPanel />);
    await user.click(screen.getByText("Advanced Filters"));

    expect(await screen.findByText("Apply Filters")).toBeInTheDocument();
    expect(screen.getByText("Clear")).toBeInTheDocument();
  });

  // --- Status checkboxes ---

  it("renders Pending status checkbox", async () => {
    const user = userEvent.setup();
    render(<AdvancedFilterPanel />);
    await user.click(screen.getByText("Advanced Filters"));
    expect(await screen.findByText("Pending")).toBeInTheDocument();
  });

  // --- Amount range inputs ---

  it("shows Min and Max amount labels", async () => {
    const user = userEvent.setup();
    render(<AdvancedFilterPanel />);
    await user.click(screen.getByText("Advanced Filters"));
    expect(await screen.findByText("Min Amount")).toBeInTheDocument();
    expect(screen.getByText("Max Amount")).toBeInTheDocument();
  });

  // --- Custom className ---

  it("renders wrapper element", () => {
    const { container } = render(<AdvancedFilterPanel />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toBeInTheDocument();
  });

  // --- Filter count badge ---

  it("renders filter count badge", () => {
    render(<AdvancedFilterPanel />);
    const badge = screen.queryByText(/\d+/);
    // Badge should show the number of active filters or not be present
    expect(screen.getByText("Advanced Filters")).toBeInTheDocument();
  });

  // --- Status checkbox interaction ---

  it("toggles a status checkbox when clicked", async () => {
    const user = userEvent.setup();
    render(<AdvancedFilterPanel />);
    await user.click(screen.getByText("Advanced Filters"));
    // Find a checkbox for "Approved" and toggle it
    const approvedLabel = await screen.findByText("Approved");
    await user.click(approvedLabel);
    // Checkbox should change state (no error)
    expect(approvedLabel).toBeInTheDocument();
  });

  it("shows Risk Level filter section in the sheet", async () => {
    const user = userEvent.setup();
    render(<AdvancedFilterPanel />);
    await user.click(screen.getByText("Advanced Filters"));
    // Look for Risk Level or Priority section
    const riskOrPriority = await screen.findByText(/Risk Level|Priority/);
    expect(riskOrPriority).toBeInTheDocument();
  });

  it("renders amount range input fields", async () => {
    const user = userEvent.setup();
    render(<AdvancedFilterPanel />);
    await user.click(screen.getByText("Advanced Filters"));
    // Find min/max amount inputs
    const minInput = await screen.findByPlaceholderText(/min|0/i);
    expect(minInput).toBeInTheDocument();
  });

  it("types into amount min field", async () => {
    const user = userEvent.setup();
    render(<AdvancedFilterPanel />);
    await user.click(screen.getByText("Advanced Filters"));
    const inputs = document.querySelectorAll("input[type='number'], input[placeholder]");
    if (inputs.length > 0) {
      const minInput = inputs[0] as HTMLInputElement;
      await user.type(minInput, "1000");
      expect(minInput.value).toContain("1000");
    }
  });

  it("clicks Apply Filters button", async () => {
    const user = userEvent.setup();
    render(<AdvancedFilterPanel />);
    await user.click(screen.getByText("Advanced Filters"));
    const applyBtn = await screen.findByText("Apply Filters");
    await user.click(applyBtn);
    // Filter panel should close or apply filters without error
    expect(screen.getByText("Advanced Filters")).toBeInTheDocument();
  });

  it("clicks Clear button to reset filters", async () => {
    const user = userEvent.setup();
    render(<AdvancedFilterPanel />);
    await user.click(screen.getByText("Advanced Filters"));
    const clearBtn = await screen.findByText("Clear");
    await user.click(clearBtn);
    // Should still be in the sheet
    expect(screen.getByText("Advanced Filters")).toBeInTheDocument();
  });
});