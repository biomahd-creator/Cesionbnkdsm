import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ApprovalFlowWizard } from "../../components/patterns/ApprovalFlowWizard";

describe("ApprovalFlowWizard", () => {
  it("renders the wizard title", () => {
    render(<ApprovalFlowWizard />);
    expect(screen.getByText("Factoring Approval Process")).toBeInTheDocument();
  });

  it("renders the current step title", () => {
    render(<ApprovalFlowWizard />);
    // Step 1 title should be visible in the card header
    expect(screen.getByText("Invoice Selection")).toBeInTheDocument();
  });

  it("renders step description", () => {
    render(<ApprovalFlowWizard />);
    expect(
      screen.getByText("Select the invoices to finance")
    ).toBeInTheDocument();
  });

  it("renders available invoices on step 1", () => {
    render(<ApprovalFlowWizard />);
    expect(screen.getByText("F-2025-001")).toBeInTheDocument();
    expect(screen.getByText("F-2025-002")).toBeInTheDocument();
    expect(screen.getByText("F-2025-003")).toBeInTheDocument();
  });

  it("renders client names in invoices", () => {
    render(<ApprovalFlowWizard />);
    const clientElements = screen.getAllByText("Distribuidora XYZ S.A.");
    expect(clientElements.length).toBeGreaterThanOrEqual(1);
  });

  it("renders progress bar", () => {
    const { container } = render(<ApprovalFlowWizard />);
    const progressBar = container.querySelector('[role="progressbar"]');
    expect(progressBar).toBeInTheDocument();
  });

  it("renders step indicators", () => {
    render(<ApprovalFlowWizard />);
    // All 5 steps should be listed
    expect(screen.getByText("Credit Line Validation")).toBeInTheDocument();
    expect(screen.getByText("Calculation & Terms")).toBeInTheDocument();
    expect(screen.getByText("Review")).toBeInTheDocument();
  });

  it("renders Next button", () => {
    render(<ApprovalFlowWizard />);
    expect(screen.getByRole("button", { name: /Next/i })).toBeInTheDocument();
  });

  // --- Step navigation ---

  it("advances to step 2 (Credit Line Validation) on Next click", async () => {
    const user = userEvent.setup();
    render(<ApprovalFlowWizard />);
    await user.click(screen.getByRole("button", { name: /Next/i }));
    // Step 2 content should appear — CupoValidator is embedded
    expect(screen.getByText("Factoring Credit Line")).toBeInTheDocument();
  });

  it("advances to step 3 (Calculation & Terms)", async () => {
    const user = userEvent.setup();
    render(<ApprovalFlowWizard />);
    await user.click(screen.getByRole("button", { name: /Next/i })); // → 2
    await user.click(screen.getByRole("button", { name: /Next/i })); // → 3
    // Step 3 should show the FactoringCalculator
    expect(screen.getByText("Factoring Calculator")).toBeInTheDocument();
  });

  it("advances to step 4 (Review)", async () => {
    const user = userEvent.setup();
    render(<ApprovalFlowWizard />);
    await user.click(screen.getByRole("button", { name: /Next/i })); // → 2
    await user.click(screen.getByRole("button", { name: /Next/i })); // → 3
    await user.click(screen.getByRole("button", { name: /Next/i })); // → 4
    expect(screen.getByText("Operation Summary")).toBeInTheDocument();
  });

  it("shows Previous button on step 2+", async () => {
    const user = userEvent.setup();
    render(<ApprovalFlowWizard />);
    await user.click(screen.getByRole("button", { name: /Next/i }));
    expect(screen.getByRole("button", { name: /Previous/i })).toBeInTheDocument();
  });

  it("navigates back to step 1 from step 2", async () => {
    const user = userEvent.setup();
    render(<ApprovalFlowWizard />);
    await user.click(screen.getByRole("button", { name: /Next/i })); // → 2
    await user.click(screen.getByRole("button", { name: /Previous/i })); // → 1
    expect(screen.getByText("Invoice Selection")).toBeInTheDocument();
  });

  // --- Step 1 content details ---

  it("renders invoice amounts", () => {
    render(<ApprovalFlowWizard />);
    const amounts = screen.getAllByText(/\$/);
    expect(amounts.length).toBeGreaterThanOrEqual(1);
  });

  it("renders the step progress percentage", () => {
    render(<ApprovalFlowWizard />);
    // Step 1 of 5 = 20%
    expect(screen.getByText("20%")).toBeInTheDocument();
  });

  // --- Step 5 (Confirmation) ---

  it("advances to step 5 (Confirmation) and shows Confirm button", async () => {
    const user = userEvent.setup();
    render(<ApprovalFlowWizard />);
    await user.click(screen.getByRole("button", { name: /Next/i })); // → 2
    await user.click(screen.getByRole("button", { name: /Next/i })); // → 3
    await user.click(screen.getByRole("button", { name: /Next/i })); // → 4
    await user.click(screen.getByRole("button", { name: /Next/i })); // → 5
    // Should show Confirm/Submit button
    const confirmBtn = screen.queryByRole("button", { name: /Confirm|Submit|Approve/i });
    expect(confirmBtn).toBeInTheDocument();
  });

  // --- Progress updates per step ---

  it("updates progress percentage per step", async () => {
    const user = userEvent.setup();
    render(<ApprovalFlowWizard />);
    expect(screen.getByText("20%")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: /Next/i }));
    expect(screen.getByText("40%")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: /Next/i }));
    expect(screen.getByText("60%")).toBeInTheDocument();
  });

  // --- Full round trip navigation ---

  it("navigates forward and backward through all steps", async () => {
    const user = userEvent.setup();
    render(<ApprovalFlowWizard />);
    // Forward to step 3
    await user.click(screen.getByRole("button", { name: /Next/i })); // → 2
    await user.click(screen.getByRole("button", { name: /Next/i })); // → 3
    expect(screen.getByText("Factoring Calculator")).toBeInTheDocument();
    // Back to step 1
    await user.click(screen.getByRole("button", { name: /Previous/i })); // → 2
    await user.click(screen.getByRole("button", { name: /Previous/i })); // → 1
    expect(screen.getByText("Invoice Selection")).toBeInTheDocument();
  });

  // --- Step 4 review content ---

  it("step 4 renders operation summary details", async () => {
    const user = userEvent.setup();
    render(<ApprovalFlowWizard />);
    await user.click(screen.getByRole("button", { name: /Next/i })); // → 2
    await user.click(screen.getByRole("button", { name: /Next/i })); // → 3
    await user.click(screen.getByRole("button", { name: /Next/i })); // → 4
    // Should show summary with amounts
    const amounts = screen.getAllByText(/\$/);
    expect(amounts.length).toBeGreaterThanOrEqual(1);
  });

  // --- Invoice selection on step 1 ---

  it("renders checkboxes for invoice selection on step 1", () => {
    const { container } = render(<ApprovalFlowWizard />);
    const checkboxes = container.querySelectorAll('[role="checkbox"]');
    expect(checkboxes.length).toBeGreaterThanOrEqual(3);
  });
});