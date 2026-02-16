import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BookingCalendar } from "../../components/widgets/BookingCalendar";

describe("BookingCalendar", () => {
  it("renders the card title", () => {
    render(<BookingCalendar />);
    expect(screen.getByText("Schedule Appointment")).toBeInTheDocument();
  });

  it("renders the card description", () => {
    render(<BookingCalendar />);
    expect(
      screen.getByText("Select a date, time, and service for your appointment")
    ).toBeInTheDocument();
  });

  it("renders step indicator starting at step 1", () => {
    render(<BookingCalendar />);
    expect(screen.getByText("Step 1/3")).toBeInTheDocument();
  });

  it("renders service label", () => {
    render(<BookingCalendar />);
    expect(screen.getByText("Service")).toBeInTheDocument();
  });

  it("renders date label", () => {
    render(<BookingCalendar />);
    expect(screen.getByText("Date")).toBeInTheDocument();
  });

  it("renders the placeholder message for time slots", () => {
    render(<BookingCalendar />);
    expect(
      screen.getByText("Select a date to see available time slots")
    ).toBeInTheDocument();
  });

  it("renders service select with placeholder", () => {
    render(<BookingCalendar />);
    expect(screen.getByText("Select a service")).toBeInTheDocument();
  });

  it("renders the calendar component", () => {
    const { container } = render(<BookingCalendar />);
    // Calendar renders a table
    const table = container.querySelector("table");
    expect(table).toBeInTheDocument();
  });

  it("renders icons", () => {
    const { container } = render(<BookingCalendar />);
    const svgs = container.querySelectorAll("svg");
    expect(svgs.length).toBeGreaterThanOrEqual(1);
  });

  // --- Step progression ---

  it("starts at step 1 when no date selected", () => {
    render(<BookingCalendar />);
    expect(screen.getByText("Step 1/3")).toBeInTheDocument();
  });

  it("shows time slot placeholder when no date selected", () => {
    render(<BookingCalendar />);
    expect(screen.getByText("Select a date to see available time slots")).toBeInTheDocument();
  });

  // --- Service select ---

  it("renders Service label", () => {
    render(<BookingCalendar />);
    expect(screen.getByText("Service")).toBeInTheDocument();
  });

  it("renders Date label", () => {
    render(<BookingCalendar />);
    expect(screen.getByText("Date")).toBeInTheDocument();
  });

  // --- Calendar ---

  it("renders the calendar table", () => {
    const { container } = render(<BookingCalendar />);
    const table = container.querySelector("table");
    expect(table).toBeInTheDocument();
  });

  it("renders navigation buttons in calendar", () => {
    render(<BookingCalendar />);
    // Calendar has month navigation buttons
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBeGreaterThanOrEqual(2);
  });

  // --- Card structure ---

  it("renders within a card", () => {
    const { container } = render(<BookingCalendar />);
    const card = container.querySelector('[data-slot="card"]');
    expect(card).toBeTruthy();
  });

  it("renders card header and content", () => {
    const { container } = render(<BookingCalendar />);
    const header = container.querySelector('[data-slot="card-header"]');
    const content = container.querySelector('[data-slot="card-content"]');
    expect(header).toBeTruthy();
    expect(content).toBeTruthy();
  });
});