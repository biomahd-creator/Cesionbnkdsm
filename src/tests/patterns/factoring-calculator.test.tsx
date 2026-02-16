import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FactoringCalculator } from "../../components/patterns/FactoringCalculator";

describe("FactoringCalculator", () => {
  it("renders the calculator title", () => {
    render(<FactoringCalculator />);
    expect(screen.getByText("Factoring Calculator")).toBeInTheDocument();
  });

  it("renders the description", () => {
    render(<FactoringCalculator />);
    expect(
      screen.getByText("Calculate cost and receivable amount in real time")
    ).toBeInTheDocument();
  });

  it("renders the Real Time badge", () => {
    render(<FactoringCalculator />);
    expect(screen.getByText("Real Time")).toBeInTheDocument();
  });

  it("renders the Operation Details section", () => {
    render(<FactoringCalculator />);
    expect(screen.getByText("Operation Details")).toBeInTheDocument();
  });

  it("renders Invoice Amount input", () => {
    render(<FactoringCalculator />);
    const elements = screen.getAllByText("Invoice Amount");
    expect(elements.length).toBeGreaterThanOrEqual(1);
  });

  it("renders Payment Term section", () => {
    render(<FactoringCalculator />);
    expect(screen.getByText("Payment Term")).toBeInTheDocument();
    const dayElements = screen.getAllByText("30 days");
    expect(dayElements.length).toBeGreaterThanOrEqual(1);
  });

  it("renders Monthly Rate section", () => {
    render(<FactoringCalculator />);
    expect(screen.getByText("Monthly Rate")).toBeInTheDocument();
    expect(screen.getByText("2.50%")).toBeInTheDocument();
  });

  it("renders sliders for term and rate", () => {
    const { container } = render(<FactoringCalculator />);
    const sliders = container.querySelectorAll('[role="slider"]');
    expect(sliders.length).toBe(2);
  });

  it("renders Calculation Result section", () => {
    render(<FactoringCalculator />);
    expect(screen.getByText("Calculation Result")).toBeInTheDocument();
  });

  it("renders the invoice amount value", () => {
    render(<FactoringCalculator />);
    const elements = screen.getAllByText("$50,000.00");
    expect(elements.length).toBeGreaterThanOrEqual(1);
  });

  it("renders Commission label", () => {
    render(<FactoringCalculator />);
    const elements = screen.getAllByText("Commission");
    expect(elements.length).toBeGreaterThanOrEqual(1);
  });

  it("renders To Receive label", () => {
    render(<FactoringCalculator />);
    const elements = screen.getAllByText("To Receive");
    expect(elements.length).toBeGreaterThanOrEqual(1);
  });

  it("renders action buttons", () => {
    render(<FactoringCalculator />);
    expect(screen.getByText("Reset")).toBeInTheDocument();
    expect(screen.getByText("Request Financing")).toBeInTheDocument();
  });

  it("renders Effective Annual Cost", () => {
    render(<FactoringCalculator />);
    expect(screen.getByText("Effective Annual Cost")).toBeInTheDocument();
  });

  // --- User interaction tests ---

  it("updates amount when typing in the Invoice Amount input", async () => {
    const user = userEvent.setup();
    render(<FactoringCalculator />);
    const amountInput = screen.getByLabelText("Invoice Amount") as HTMLInputElement;
    await user.clear(amountInput);
    await user.type(amountInput, "100000");
    expect(amountInput.value).toBe("100000");
    // The calculation result should update — may appear in multiple places
    const results = screen.getAllByText("$100,000.00");
    expect(results.length).toBeGreaterThanOrEqual(1);
  });

  it("resets to default values when Reset is clicked", async () => {
    const user = userEvent.setup();
    render(<FactoringCalculator />);
    const amountInput = screen.getByLabelText("Invoice Amount") as HTMLInputElement;
    // Change the amount
    await user.clear(amountInput);
    await user.type(amountInput, "75000");
    expect(amountInput.value).toBe("75000");
    // Click reset
    await user.click(screen.getByText("Reset"));
    // Should return to default values
    expect(amountInput.value).toBe("50000");
  });

  it("shows zero values when amount is empty", async () => {
    const user = userEvent.setup();
    render(<FactoringCalculator />);
    const amountInput = screen.getByLabelText("Invoice Amount") as HTMLInputElement;
    await user.clear(amountInput);
    // Commission should be $0.00 and To Receive should be $0.00
    const zeroValues = screen.getAllByText("$0.00");
    expect(zeroValues.length).toBeGreaterThanOrEqual(1);
  });

  it("renders date information", () => {
    render(<FactoringCalculator />);
    // Should render disbursement date and client payment date
    expect(screen.getByText("Disbursement date")).toBeInTheDocument();
    expect(screen.getByText("Client payment date")).toBeInTheDocument();
  });
});