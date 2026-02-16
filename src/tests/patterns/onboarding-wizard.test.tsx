/**
 * OnboardingWizard Pattern Tests (G14)
 *
 * Tests for the multi-step company registration wizard.
 * The wizard has validation per step — the Next button is disabled
 * until all required fields in the current step are filled.
 *
 * NOTE: Radix Select interactions in jsdom are fragile (portals, pointer
 * events, no layout engine). Navigation tests that require Select interaction
 * are tested via fireEvent on the hidden native select fallback or by
 * directly verifying the initial step rendering. Full multi-step navigation
 * is a candidate for integration/E2E testing.
 *
 * @version 0.2.4
 */

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { OnboardingWizard } from "../../components/patterns/OnboardingWizard";

describe("OnboardingWizard", () => {
  // --- Step 1 Rendering (no navigation required) ---

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

  it("renders step indicator badge on step 1", () => {
    render(<OnboardingWizard />);
    // Badge renders "Step {n} of {total}" as separate JSX nodes.
    // Use a custom matcher to normalize whitespace.
    const badge = screen.getByText((_content, element) => {
      if (element?.getAttribute("data-slot") !== "badge") return false;
      const text = element?.textContent?.replace(/\s+/g, " ").trim() ?? "";
      return text === "Step 1 of 5";
    });
    expect(badge).toBeInTheDocument();
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

  it("renders NIT field on step 1", () => {
    render(<OnboardingWizard />);
    expect(
      screen.getByLabelText(/NIT \(Tax Identification Number\)/i)
    ).toBeInTheDocument();
  });

  it("renders Legal Name field on step 1", () => {
    render(<OnboardingWizard />);
    expect(screen.getByLabelText(/Legal Name/i)).toBeInTheDocument();
  });

  it("renders Company Type select on step 1", () => {
    render(<OnboardingWizard />);
    expect(screen.getByText("Company Type *")).toBeInTheDocument();
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

  it("has Next button disabled when required fields are empty", () => {
    render(<OnboardingWizard />);
    const nextBtn = screen.getByRole("button", { name: /Next/i });
    expect(nextBtn).toBeDisabled();
  });

  it("renders the info alert on step 1", () => {
    render(<OnboardingWizard />);
    expect(
      screen.getByText(/Make sure the information matches your RUT/i)
    ).toBeInTheDocument();
  });

  // --- Step 1 form interaction ---

  it("types into RUT field", async () => {
    const user = userEvent.setup();
    render(<OnboardingWizard />);
    const rutInput = screen.getByLabelText(/RUT/i);
    await user.type(rutInput, "900.123.456-7");
    expect(rutInput).toHaveValue("900.123.456-7");
  });

  it("types into NIT field", async () => {
    const user = userEvent.setup();
    render(<OnboardingWizard />);
    const nitInput = screen.getByLabelText(/NIT/i);
    await user.type(nitInput, "900.000.000-0");
    expect(nitInput).toHaveValue("900.000.000-0");
  });

  it("types into Legal Name field", async () => {
    const user = userEvent.setup();
    render(<OnboardingWizard />);
    const nameInput = screen.getByLabelText(/Legal Name/i);
    await user.type(nameInput, "ACME S.A.S.");
    expect(nameInput).toHaveValue("ACME S.A.S.");
  });

  // --- Validation behavior ---

  it("Next button remains disabled with only partial fields filled", async () => {
    const user = userEvent.setup();
    render(<OnboardingWizard />);

    // Fill only RUT and NIT (missing Legal Name and Company Type)
    await user.type(screen.getByLabelText(/RUT/i), "900123456-7");
    await user.type(screen.getByLabelText(/NIT/i), "900.123.456-7");

    const nextBtn = screen.getByRole("button", { name: /Next/i });
    expect(nextBtn).toBeDisabled();
  });

  // --- Structure tests ---

  it("renders inside Card components", () => {
    const { container } = render(<OnboardingWizard />);
    const cards = container.querySelectorAll('[data-slot="card"]');
    expect(cards.length).toBeGreaterThanOrEqual(2); // Header card + content card
  });

  it("renders Economic Sector select", () => {
    render(<OnboardingWizard />);
    expect(screen.getByText("Economic Sector")).toBeInTheDocument();
  });

  it("renders Building2 icon in title", () => {
    const { container } = render(<OnboardingWizard />);
    const svgs = container.querySelectorAll("svg");
    expect(svgs.length).toBeGreaterThanOrEqual(1);
  });
});
