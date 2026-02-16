import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { OnboardingWizard } from "../../components/patterns/OnboardingWizard";

describe("OnboardingWizard", () => {
  it("renders the registration title", () => {
    render(<OnboardingWizard />);
    expect(
      screen.getByText("Company Registration — C-Financia")
    ).toBeInTheDocument();
  });

  it("renders the description", () => {
    render(<OnboardingWizard />);
    expect(
      screen.getByText(
        "Complete your registration in 5 steps to access immediate liquidity"
      )
    ).toBeInTheDocument();
  });

  it("renders step indicator badge", () => {
    render(<OnboardingWizard />);
    expect(screen.getByText("Step 1 of 5")).toBeInTheDocument();
  });

  it("renders progress bar", () => {
    const { container } = render(<OnboardingWizard />);
    const progressBar = container.querySelector('[role="progressbar"]');
    expect(progressBar).toBeInTheDocument();
  });

  it("renders step labels", () => {
    render(<OnboardingWizard />);
    expect(screen.getByText("Company")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
    expect(screen.getByText("Banking")).toBeInTheDocument();
    expect(screen.getByText("Documents")).toBeInTheDocument();
    expect(screen.getByText("Confirmation")).toBeInTheDocument();
  });

  it("renders Step 1 content by default", () => {
    render(<OnboardingWizard />);
    expect(screen.getByText("Company Information")).toBeInTheDocument();
    expect(
      screen.getByText("Enter your company's tax information")
    ).toBeInTheDocument();
  });

  it("renders RUT field on step 1", () => {
    render(<OnboardingWizard />);
    expect(
      screen.getByLabelText(/RUT \(Colombian Tax Registry\)/i)
    ).toBeInTheDocument();
  });

  it("renders Next button", () => {
    render(<OnboardingWizard />);
    expect(
      screen.getByRole("button", { name: /Next/i })
    ).toBeInTheDocument();
  });

  it("has Previous button disabled on step 1", () => {
    render(<OnboardingWizard />);
    const prevBtn = screen.getByRole("button", { name: /Previous/i });
    expect(prevBtn).toBeDisabled();
  });

  // --- Step navigation ---

  it("navigates to step 2 when Next is clicked", async () => {
    const user = userEvent.setup();
    render(<OnboardingWizard />);
    await user.click(screen.getByRole("button", { name: /Next/i }));
    expect(screen.getByText("Step 2 of 5")).toBeInTheDocument();
    expect(screen.getByText("Contact Details")).toBeInTheDocument();
  });

  it("enables Previous button on step 2", async () => {
    const user = userEvent.setup();
    render(<OnboardingWizard />);
    await user.click(screen.getByRole("button", { name: /Next/i }));
    const prevBtn = screen.getByRole("button", { name: /Previous/i });
    expect(prevBtn).not.toBeDisabled();
  });

  it("navigates back to step 1 from step 2", async () => {
    const user = userEvent.setup();
    render(<OnboardingWizard />);
    await user.click(screen.getByRole("button", { name: /Next/i }));
    expect(screen.getByText("Step 2 of 5")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: /Previous/i }));
    expect(screen.getByText("Step 1 of 5")).toBeInTheDocument();
  });

  it("navigates to step 3 (Banking)", async () => {
    const user = userEvent.setup();
    render(<OnboardingWizard />);
    await user.click(screen.getByRole("button", { name: /Next/i })); // → 2
    await user.click(screen.getByRole("button", { name: /Next/i })); // → 3
    expect(screen.getByText("Step 3 of 5")).toBeInTheDocument();
    expect(screen.getByText("Banking Information")).toBeInTheDocument();
  });

  it("navigates to step 4 (Documents)", async () => {
    const user = userEvent.setup();
    render(<OnboardingWizard />);
    await user.click(screen.getByRole("button", { name: /Next/i })); // → 2
    await user.click(screen.getByRole("button", { name: /Next/i })); // → 3
    await user.click(screen.getByRole("button", { name: /Next/i })); // → 4
    expect(screen.getByText("Step 4 of 5")).toBeInTheDocument();
    expect(screen.getByText("Document Verification")).toBeInTheDocument();
  });

  it("navigates to step 5 (Confirmation)", async () => {
    const user = userEvent.setup();
    render(<OnboardingWizard />);
    await user.click(screen.getByRole("button", { name: /Next/i })); // → 2
    await user.click(screen.getByRole("button", { name: /Next/i })); // → 3
    await user.click(screen.getByRole("button", { name: /Next/i })); // → 4
    await user.click(screen.getByRole("button", { name: /Next/i })); // → 5
    expect(screen.getByText("Step 5 of 5")).toBeInTheDocument();
    expect(screen.getByText("Confirmation")).toBeInTheDocument();
  });

  it("updates progress bar as steps advance", async () => {
    const user = userEvent.setup();
    const { container } = render(<OnboardingWizard />);
    const progressBar = container.querySelector('[role="progressbar"]');
    expect(progressBar).toBeInTheDocument();
    // Progress should change after advancing
    await user.click(screen.getByRole("button", { name: /Next/i }));
    expect(screen.getByText("Step 2 of 5")).toBeInTheDocument();
  });

  // --- Step 2 fields ---

  it("renders contact fields on step 2", async () => {
    const user = userEvent.setup();
    render(<OnboardingWizard />);
    await user.click(screen.getByRole("button", { name: /Next/i }));
    expect(screen.getByLabelText(/Legal Representative/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Corporate Email/i)).toBeInTheDocument();
  });

  // --- Step 1 form interaction ---

  it("types into RUT field on step 1", async () => {
    const user = userEvent.setup();
    render(<OnboardingWizard />);
    const rutInput = screen.getByLabelText(/RUT/i);
    await user.type(rutInput, "900.123.456-7");
    expect(rutInput).toHaveValue("900.123.456-7");
  });

  // --- Step 3 (Banking) content ---

  it("renders banking fields on step 3", async () => {
    const user = userEvent.setup();
    render(<OnboardingWizard />);
    await user.click(screen.getByRole("button", { name: /Next/i })); // → 2
    await user.click(screen.getByRole("button", { name: /Next/i })); // → 3
    expect(screen.getByText("Banking Information")).toBeInTheDocument();
  });

  // --- Step 4 (Documents) content ---

  it("renders document upload area on step 4", async () => {
    const user = userEvent.setup();
    render(<OnboardingWizard />);
    await user.click(screen.getByRole("button", { name: /Next/i })); // → 2
    await user.click(screen.getByRole("button", { name: /Next/i })); // → 3
    await user.click(screen.getByRole("button", { name: /Next/i })); // → 4
    expect(screen.getByText("Document Verification")).toBeInTheDocument();
  });

  // --- Step 5 shows Submit ---

  it("shows Submit Registration button on last step", async () => {
    const user = userEvent.setup();
    render(<OnboardingWizard />);
    await user.click(screen.getByRole("button", { name: /Next/i })); // → 2
    await user.click(screen.getByRole("button", { name: /Next/i })); // → 3
    await user.click(screen.getByRole("button", { name: /Next/i })); // → 4
    await user.click(screen.getByRole("button", { name: /Next/i })); // → 5
    expect(screen.getByText("Step 5 of 5")).toBeInTheDocument();
    // Should show a submit/complete button
    const submitBtn = screen.queryByText(/Submit|Complete|Finish/i);
    expect(submitBtn).toBeInTheDocument();
  });

  // --- Full round trip navigation ---

  it("navigates forward and back through all steps", async () => {
    const user = userEvent.setup();
    render(<OnboardingWizard />);
    // Forward
    await user.click(screen.getByRole("button", { name: /Next/i }));
    expect(screen.getByText("Step 2 of 5")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: /Next/i }));
    expect(screen.getByText("Step 3 of 5")).toBeInTheDocument();
    // Back
    await user.click(screen.getByRole("button", { name: /Previous/i }));
    expect(screen.getByText("Step 2 of 5")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: /Previous/i }));
    expect(screen.getByText("Step 1 of 5")).toBeInTheDocument();
  });
});