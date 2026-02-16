import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MultiColumnForm } from "../../components/advanced/MultiColumnForm";

describe("MultiColumnForm", () => {
  it("renders the card title", () => {
    render(<MultiColumnForm />);
    expect(screen.getByText("Multi-Column Form")).toBeInTheDocument();
  });

  it("renders the card description", () => {
    render(<MultiColumnForm />);
    expect(
      screen.getByText("Responsive layout that adapts to screen size")
    ).toBeInTheDocument();
  });

  it("renders the Personal Information section", () => {
    render(<MultiColumnForm />);
    expect(screen.getByText("Personal Information")).toBeInTheDocument();
  });

  it("renders first name input", () => {
    render(<MultiColumnForm />);
    expect(screen.getByLabelText(/First Name/)).toBeInTheDocument();
  });

  it("renders last name input", () => {
    render(<MultiColumnForm />);
    expect(screen.getByLabelText(/Last Name/)).toBeInTheDocument();
  });

  it("renders email input", () => {
    render(<MultiColumnForm />);
    expect(screen.getByLabelText(/Email/)).toBeInTheDocument();
  });

  it("renders the Responsive badge", () => {
    render(<MultiColumnForm />);
    expect(screen.getByText("Responsive")).toBeInTheDocument();
  });

  it("renders the form element", () => {
    const { container } = render(<MultiColumnForm />);
    const form = container.querySelector("form");
    expect(form).toBeInTheDocument();
  });

  it("renders multiple input fields", () => {
    const { container } = render(<MultiColumnForm />);
    const inputs = container.querySelectorAll("input");
    expect(inputs.length).toBeGreaterThanOrEqual(5);
  });

  it("renders separators between sections", () => {
    const { container } = render(<MultiColumnForm />);
    const separators = container.querySelectorAll('[data-slot="separator-root"]');
    expect(separators.length).toBeGreaterThanOrEqual(1);
  });

  // --- Interaction tests ---

  it("types into first name field", async () => {
    const user = userEvent.setup();
    render(<MultiColumnForm />);
    const firstName = screen.getByLabelText(/First Name/);
    await user.type(firstName, "John");
    expect(firstName).toHaveValue("John");
  });

  it("types into email field", async () => {
    const user = userEvent.setup();
    render(<MultiColumnForm />);
    const email = screen.getByLabelText(/Email/);
    await user.type(email, "john@test.com");
    expect(email).toHaveValue("john@test.com");
  });

  it("shows success message after form submission", async () => {
    const user = userEvent.setup();
    render(<MultiColumnForm />);
    // Fill required-ish fields and submit
    await user.type(screen.getByLabelText(/First Name/), "John");
    await user.type(screen.getByLabelText(/Last Name/), "Doe");
    // Submit the form
    await user.click(screen.getByText("Submit Application"));
    // Should show success message
    expect(screen.getByText("Successfully Submitted!")).toBeInTheDocument();
    expect(screen.getByText("Your information has been saved.")).toBeInTheDocument();
  });

  it("renders Submit Application button", () => {
    render(<MultiColumnForm />);
    expect(screen.getByText("Submit Application")).toBeInTheDocument();
  });

  it("renders Reset button", () => {
    render(<MultiColumnForm />);
    expect(screen.getByText("Reset")).toBeInTheDocument();
  });

  it("renders Address section", () => {
    render(<MultiColumnForm />);
    expect(screen.getByText("Address")).toBeInTheDocument();
  });

  it("renders Additional Information section", () => {
    render(<MultiColumnForm />);
    expect(screen.getByText("Additional Information")).toBeInTheDocument();
  });

  it("resets form when Reset button is clicked", async () => {
    const user = userEvent.setup();
    render(<MultiColumnForm />);
    // Type something first
    await user.type(screen.getByLabelText(/First Name/), "John");
    expect(screen.getByLabelText(/First Name/)).toHaveValue("John");
    // Click Reset
    await user.click(screen.getByText("Reset"));
    // Field should be empty again
    expect(screen.getByLabelText(/First Name/)).toHaveValue("");
  });

  it("types into last name field", async () => {
    const user = userEvent.setup();
    render(<MultiColumnForm />);
    const lastName = screen.getByLabelText(/Last Name/);
    await user.type(lastName, "Smith");
    expect(lastName).toHaveValue("Smith");
  });

  it("renders phone field", () => {
    render(<MultiColumnForm />);
    expect(screen.getByLabelText(/Phone/)).toBeInTheDocument();
  });
});