import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ApprovalTimeline } from "../../components/patterns/ApprovalTimeline";

describe("ApprovalTimeline", () => {
  it("renders the card title", () => {
    render(<ApprovalTimeline />);
    expect(
      screen.getByText("Approval Timeline — INV-001")
    ).toBeInTheDocument();
  });

  it("renders all 5 timeline events", () => {
    render(<ApprovalTimeline />);
    expect(screen.getByText("Invoice created")).toBeInTheDocument();
    expect(screen.getByText("Documentation verified")).toBeInTheDocument();
    expect(screen.getByText("Credit analysis")).toBeInTheDocument();
    expect(screen.getByText("Approval pending")).toBeInTheDocument();
    expect(screen.getByText("Disbursement scheduled")).toBeInTheDocument();
  });

  it("renders user names", () => {
    render(<ApprovalTimeline />);
    expect(screen.getByText("John Smith")).toBeInTheDocument();
    expect(screen.getByText("Maria Garcia")).toBeInTheDocument();
    expect(screen.getByText("Carlos Rodriguez")).toBeInTheDocument();
    expect(screen.getByText("Ana Martinez")).toBeInTheDocument();
    expect(screen.getByText("System")).toBeInTheDocument();
  });

  it("renders user roles", () => {
    render(<ApprovalTimeline />);
    expect(screen.getByText("Financial Analyst")).toBeInTheDocument();
    expect(screen.getByText("Supervisor")).toBeInTheDocument();
    expect(screen.getByText("Risk Analyst")).toBeInTheDocument();
    expect(screen.getByText("Commercial Manager")).toBeInTheDocument();
    expect(screen.getByText("Automated")).toBeInTheDocument();
  });

  it("renders status badges", () => {
    render(<ApprovalTimeline />);
    // 3 completed + 1 pending + 1 waiting
    const completedBadges = screen.getAllByText("Completed");
    expect(completedBadges.length).toBe(3);
    // "Pending" appears both as badge text and as timestamp for event 5
    const pendingElements = screen.getAllByText("Pending");
    expect(pendingElements.length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText("Waiting")).toBeInTheDocument();
  });

  it("renders comments", () => {
    render(<ApprovalTimeline />);
    expect(
      screen.getByText("Invoice entered into the system for review")
    ).toBeInTheDocument();
    expect(
      screen.getByText("All documents are complete and valid")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Credit score approved: 850/1000")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Final review before approval")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Will execute after final approval")
    ).toBeInTheDocument();
  });

  it("renders timestamps", () => {
    render(<ApprovalTimeline />);
    expect(
      screen.getByText("Jan 15, 2024, 10:30 AM")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Jan 16, 2024, 11:20 AM")
    ).toBeInTheDocument();
  });

  it("renders avatar fallbacks with initials", () => {
    render(<ApprovalTimeline />);
    // John Smith → JS, Maria Garcia → MG, etc.
    expect(screen.getByText("JS")).toBeInTheDocument();
    expect(screen.getByText("MG")).toBeInTheDocument();
    expect(screen.getByText("CR")).toBeInTheDocument();
    expect(screen.getByText("AM")).toBeInTheDocument();
    expect(screen.getByText("S")).toBeInTheDocument();
  });

  it("renders status icons (SVGs)", () => {
    const { container } = render(<ApprovalTimeline />);
    // 5 events × 1 status icon each = at least 5 SVGs
    const svgs = container.querySelectorAll("svg");
    expect(svgs.length).toBeGreaterThanOrEqual(5);
  });
});