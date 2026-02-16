import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CupoValidator } from "../../components/patterns/CupoValidator";

describe("CupoValidator", () => {
  it("renders the credit line card title", () => {
    render(<CupoValidator />);
    expect(screen.getByText("Factoring Credit Line")).toBeInTheDocument();
  });

  it("renders the validator card title", () => {
    render(<CupoValidator />);
    expect(screen.getByText("Validate Financing Amount")).toBeInTheDocument();
  });

  it("renders the card description", () => {
    render(<CupoValidator />);
    expect(screen.getByText("Available financing limit")).toBeInTheDocument();
  });

  it("renders total credit in K format", () => {
    render(<CupoValidator />);
    // Default cupoTotal 500000 → $500K
    expect(screen.getByText("$500K")).toBeInTheDocument();
  });

  it("renders used credit in K format", () => {
    render(<CupoValidator />);
    // Default cupoUtilizado 328000 → $328K
    expect(screen.getByText("$328K")).toBeInTheDocument();
  });

  it("renders available credit in K format", () => {
    render(<CupoValidator />);
    // Available = 500000 - 328000 = 172000 → $172K
    expect(screen.getByText("$172K")).toBeInTheDocument();
  });

  it("renders labels for credit sections", () => {
    render(<CupoValidator />);
    expect(screen.getByText("Total Credit Line")).toBeInTheDocument();
    expect(screen.getByText("Used")).toBeInTheDocument();
    expect(screen.getByText("Available")).toBeInTheDocument();
  });

  it("renders utilization percentage", () => {
    render(<CupoValidator />);
    // 328000/500000 = 65.6%
    expect(screen.getByText("65.6%")).toBeInTheDocument();
  });

  it("renders progress bar", () => {
    const { container } = render(<CupoValidator />);
    const progressBar = container.querySelector('[role="progressbar"]');
    expect(progressBar).toBeInTheDocument();
  });

  it("renders the amount input", () => {
    render(<CupoValidator />);
    expect(screen.getByLabelText("Requested Amount (USD)")).toBeInTheDocument();
  });

  it("renders the validate button", () => {
    render(<CupoValidator />);
    expect(
      screen.getByRole("button", { name: /validate/i })
    ).toBeInTheDocument();
  });

  it("shows warning when utilization > 80%", () => {
    render(<CupoValidator cupoTotal={100000} cupoUtilizado={85000} />);
    expect(screen.getByText(/Credit line nearly exhausted/)).toBeInTheDocument();
  });

  it("does not show warning when utilization <= 80%", () => {
    render(<CupoValidator cupoTotal={500000} cupoUtilizado={100000} />);
    expect(
      screen.queryByText(/Credit line nearly exhausted/)
    ).not.toBeInTheDocument();
  });

  it("accepts custom cupoTotal and cupoUtilizado", () => {
    render(<CupoValidator cupoTotal={1000000} cupoUtilizado={250000} />);
    expect(screen.getByText("$1000K")).toBeInTheDocument();
    expect(screen.getByText("$250K")).toBeInTheDocument();
    expect(screen.getByText("$750K")).toBeInTheDocument();
  });

  // --- Validation interaction ---

  it("shows error for invalid amount (empty)", async () => {
    const user = userEvent.setup();
    render(<CupoValidator />);
    await user.click(screen.getByRole("button", { name: /validate/i }));
    // Should show "Please enter a valid amount"
    expect(await screen.findByText("Please enter a valid amount")).toBeInTheDocument();
  });

  it("shows error for negative amount", async () => {
    const user = userEvent.setup();
    render(<CupoValidator />);
    await user.type(screen.getByLabelText("Requested Amount (USD)"), "-100");
    await user.click(screen.getByRole("button", { name: /validate/i }));
    expect(await screen.findByText("Please enter a valid amount")).toBeInTheDocument();
  });

  it("shows success for valid amount within credit line", async () => {
    const user = userEvent.setup();
    render(<CupoValidator cupoTotal={500000} cupoUtilizado={100000} />);
    await user.type(screen.getByLabelText("Requested Amount (USD)"), "50000");
    await user.click(screen.getByRole("button", { name: /validate/i }));
    // Should show success message after async validation
    expect(await screen.findByText(/Sufficient credit line/)).toBeInTheDocument();
  });

  it("shows error for amount exceeding credit line", async () => {
    const user = userEvent.setup();
    render(<CupoValidator cupoTotal={500000} cupoUtilizado={400000} />);
    // Available = 100K, request 200K
    await user.type(screen.getByLabelText("Requested Amount (USD)"), "200000");
    await user.click(screen.getByRole("button", { name: /validate/i }));
    expect(await screen.findByText(/Insufficient credit line/)).toBeInTheDocument();
  });

  it("calls onValidate callback when provided", async () => {
    const user = userEvent.setup();
    const onValidate = vi.fn();
    render(<CupoValidator onValidate={onValidate} />);
    await user.type(screen.getByLabelText("Requested Amount (USD)"), "50000");
    await user.click(screen.getByRole("button", { name: /validate/i }));
    // Wait for async validation
    await screen.findByText(/credit line/i);
    expect(onValidate).toHaveBeenCalledWith(50000);
  });
});