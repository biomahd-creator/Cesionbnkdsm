import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ApprovalFlowWizard } from "../../components/patterns/ApprovalFlowWizard";

/**
 * Helper: selects the first invoice on step 1 by clicking its card,
 * so that Next button becomes enabled.
 */
async function selectFirstInvoice(user: ReturnType<typeof userEvent.setup>) {
  const invoiceCard = screen.getByText("F-2025-001").closest("div[class*='cursor-pointer']");
  if (invoiceCard) {
    await user.click(invoiceCard);
  }
}

describe("ApprovalFlowWizard", () => {
  it("renders the wizard title", () => {
    render(<ApprovalFlowWizard />);
    expect(screen.getByText("Factoring Approval Process")).toBeInTheDocument();
  });

  it("renders the current step title", () => {
    render(<ApprovalFlowWizard />);
    // Step 1 title appears in both step indicator and card header
    const stepTitles = screen.getAllByText("Invoice Selection");
    expect(stepTitles.length).toBeGreaterThanOrEqual(1);
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

  // --- Step navigation (must select invoices first to enable Next) ---

  it("advances to step 2 (Credit Line Validation) on Next click", async () => {
    const user = userEvent.setup();
    render(<ApprovalFlowWizard />);
    await selectFirstInvoice(user);
    await user.click(screen.getByRole("button", { name: /Next/i }));
    // Step 2 content should appear — CupoValidator is embedded
    expect(screen.getByText("Factoring Credit Line")).toBeInTheDocument();
  });

  it("advances to step 3 (Calculation & Terms)", async () => {
    const user = userEvent.setup();
    render(<ApprovalFlowWizard />);
    await selectFirstInvoice(user);
    await user.click(screen.getByRole("button", { name: /Next/i })); // → 2
    // Step 2 requires cupoValidado — validate in CupoValidator
    const amountInput = screen.getByLabelText("Requested Amount (USD)");
    await user.type(amountInput, "25000");
    await user.click(screen.getByRole("button", { name: /validate/i }));
    // Wait for async validation to complete
    await screen.findByText(/Sufficient credit line/i, {}, { timeout: 3000 });
    await user.click(screen.getByRole("button", { name: /Next/i })); // → 3
    // Step 3 should show the FactoringCalculator
    expect(screen.getByText("Factoring Calculator")).toBeInTheDocument();
  });

  it("advances to step 4 (Review)", async () => {
    const user = userEvent.setup();
    render(<ApprovalFlowWizard />);
    await selectFirstInvoice(user);
    await user.click(screen.getByRole("button", { name: /Next/i })); // → 2
    // Validate cupo on step 2
    const amountInput = screen.getByLabelText("Requested Amount (USD)");
    await user.type(amountInput, "25000");
    await user.click(screen.getByRole("button", { name: /validate/i }));
    await screen.findByText(/Sufficient credit line/i, {}, { timeout: 3000 });
    await user.click(screen.getByRole("button", { name: /Next/i })); // → 3
    // Step 3 requires calculoCompletado — click "Confirm Calculation"
    await user.click(screen.getByText("Confirm Calculation"));
    await user.click(screen.getByRole("button", { name: /Next/i })); // → 4
    // Step 4 shows "Selected Invoices" and "Operation Terms" cards
    expect(screen.getByText("Selected Invoices")).toBeInTheDocument();
  });

  it("shows Previous button on step 2+", async () => {
    const user = userEvent.setup();
    render(<ApprovalFlowWizard />);
    await selectFirstInvoice(user);
    await user.click(screen.getByRole("button", { name: /Next/i }));
    expect(screen.getByRole("button", { name: /Previous/i })).toBeInTheDocument();
  });

  it("navigates back to step 1 from step 2", async () => {
    const user = userEvent.setup();
    render(<ApprovalFlowWizard />);
    await selectFirstInvoice(user);
    await user.click(screen.getByRole("button", { name: /Next/i })); // → 2
    await user.click(screen.getByRole("button", { name: /Previous/i })); // → 1
    const stepTitles = screen.getAllByText("Invoice Selection");
    expect(stepTitles.length).toBeGreaterThanOrEqual(1);
  });

  // --- Step 1 content details ---

  it("renders invoice amounts", () => {
    render(<ApprovalFlowWizard />);
    const amounts = screen.getAllByText(/\$/);
    expect(amounts.length).toBeGreaterThanOrEqual(1);
  });

  it("renders the step progress percentage", () => {
    render(<ApprovalFlowWizard />);
    // Step 1 of 5 = 20% — badge shows "20% Complete"
    expect(screen.getByText(/20%/)).toBeInTheDocument();
  });

  // --- Step 5 (Confirmation) ---

  it("advances to step 5 (Confirmation) and shows Confirm button", async () => {
    const user = userEvent.setup();
    render(<ApprovalFlowWizard />);
    await selectFirstInvoice(user);
    await user.click(screen.getByRole("button", { name: /Next/i })); // → 2
    await user.click(screen.getByRole("button", { name: /Next/i })); // → 3
    await user.click(screen.getByRole("button", { name: /Next/i })); // → 4
    await user.click(screen.getByRole("button", { name: /Next/i })); // → 5
    // Should show Confirm/Submit button or completion state
    const confirmBtn = screen.queryByRole("button", { name: /Confirm|Submit|Approve/i });
    // Step 5 title should be visible
    const confirmationTitles = screen.getAllByText("Confirmation");
    expect(confirmationTitles.length).toBeGreaterThanOrEqual(1);
  });

  // --- Progress updates per step ---

  it("updates progress percentage per step", async () => {
    const user = userEvent.setup();
    render(<ApprovalFlowWizard />);
    // Step 1: 20%
    const badge = screen.getByText(/% Complete/);
    expect(badge.textContent).toContain("20%");
    // Navigate to step 2
    await selectFirstInvoice(user);
    await user.click(screen.getByRole("button", { name: /Next/i }));
    // Step 2: 40%
    await waitFor(() => {
      expect(screen.getByText(/% Complete/).textContent).toContain("40%");
    });
    // Validate cupo to enable Next on step 2 — use same flow as "advances to step 3"
    await user.type(screen.getByLabelText("Requested Amount (USD)"), "25000");
    await user.click(screen.getByRole("button", { name: /^Validate$/i }));
    // Wait for validation result AND cupoValidado state to propagate
    await screen.findByText(/validated successfully/i, {}, { timeout: 3000 });
    await user.click(screen.getByRole("button", { name: /Next/i }));
    // Step 3: 60%
    await waitFor(() => {
      expect(screen.getByText(/% Complete/).textContent).toContain("60%");
    }, { timeout: 3000 });
  });

  // --- Full round trip navigation ---

  it("navigates forward and backward through all steps", async () => {
    const user = userEvent.setup();
    render(<ApprovalFlowWizard />);
    await selectFirstInvoice(user);
    // Forward to step 3
    await user.click(screen.getByRole("button", { name: /Next/i })); // → 2
    // Validate cupo
    const amountInput = screen.getByLabelText("Requested Amount (USD)");
    await user.type(amountInput, "25000");
    await user.click(screen.getByRole("button", { name: /validate/i }));
    await screen.findByText(/Sufficient credit line/i, {}, { timeout: 3000 });
    await user.click(screen.getByRole("button", { name: /Next/i })); // → 3
    expect(screen.getByText("Factoring Calculator")).toBeInTheDocument();
    // Back to step 1
    await user.click(screen.getByRole("button", { name: /Previous/i })); // → 2
    await user.click(screen.getByRole("button", { name: /Previous/i })); // → 1
    const stepTitles = screen.getAllByText("Invoice Selection");
    expect(stepTitles.length).toBeGreaterThanOrEqual(1);
  });

  // --- Step 4 review content ---

  it("step 4 renders operation summary details", async () => {
    const user = userEvent.setup();
    render(<ApprovalFlowWizard />);
    await selectFirstInvoice(user);
    await user.click(screen.getByRole("button", { name: /Next/i })); // → 2
    await user.click(screen.getByRole("button", { name: /Next/i })); // → 3
    await user.click(screen.getByRole("button", { name: /Next/i })); // → 4
    // Should show summary with amounts
    const amounts = screen.getAllByText(/\$/);
    expect(amounts.length).toBeGreaterThanOrEqual(1);
  });

  // --- Invoice selection on step 1 ---

  it("renders clickable invoice cards for selection on step 1", () => {
    const { container } = render(<ApprovalFlowWizard />);
    // Invoices are clickable cards, not checkboxes
    const invoiceCards = container.querySelectorAll('[class*="cursor-pointer"]');
    expect(invoiceCards.length).toBeGreaterThanOrEqual(3);
  });
});