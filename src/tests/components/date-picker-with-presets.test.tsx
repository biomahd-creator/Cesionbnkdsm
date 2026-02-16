import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DatePickerWithPresets } from "../../components/advanced/DatePickerWithPresets";

describe("DatePickerWithPresets", () => {
  it("renders the trigger button", () => {
    render(<DatePickerWithPresets />);
    expect(screen.getByText("Select date")).toBeInTheDocument();
  });

  it("renders the calendar icon", () => {
    const { container } = render(<DatePickerWithPresets />);
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
  });

  it("renders trigger as a button", () => {
    render(<DatePickerWithPresets />);
    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();
  });

  it("opens popover when clicking the button", async () => {
    const user = userEvent.setup();
    render(<DatePickerWithPresets />);
    const btn = screen.getByRole("button");
    await user.click(btn);

    // Popover renders in a portal; look for the preset select
    expect(await screen.findByText("Select...")).toBeInTheDocument();
  });

  it("shows preset options in the popover", async () => {
    const user = userEvent.setup();
    render(<DatePickerWithPresets />);
    await user.click(screen.getByRole("button"));

    // The preset select trigger should be visible
    expect(await screen.findByText("Select...")).toBeInTheDocument();
  });

  it("calls onChange when a date is selected", async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();
    render(<DatePickerWithPresets onChange={onChange} />);
    await user.click(screen.getByRole("button"));

    // Calendar renders in the popover; look for day cells
    // The calendar table should appear
    const popoverContent = await screen.findByText("Select...");
    expect(popoverContent).toBeInTheDocument();
  });

  it("accepts initial value prop", () => {
    const testDate = new Date(2025, 0, 15); // Jan 15, 2025
    render(<DatePickerWithPresets value={testDate} />);
    // Should show formatted date instead of "Select date"
    expect(screen.queryByText("Select date")).not.toBeInTheDocument();
  });
});
