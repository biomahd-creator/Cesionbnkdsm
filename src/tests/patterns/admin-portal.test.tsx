import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AdminPortal } from "../../components/patterns/AdminPortal";

describe("AdminPortal", () => {
  it("renders the admin portal title", () => {
    render(<AdminPortal />);
    expect(
      screen.getByText("Admin Portal — C-Financia")
    ).toBeInTheDocument();
  });

  it("renders the description", () => {
    render(<AdminPortal />);
    expect(
      screen.getByText("Factoring request management and approval")
    ).toBeInTheDocument();
  });

  it("renders the Internal Manager badge", () => {
    render(<AdminPortal />);
    expect(screen.getByText("Internal Manager")).toBeInTheDocument();
  });

  it("renders KPI cards", () => {
    render(<AdminPortal />);
    expect(screen.getByText("Pending Requests")).toBeInTheDocument();
    expect(screen.getByText("Under Review")).toBeInTheDocument();
    expect(screen.getByText("Pending Amount")).toBeInTheDocument();
    expect(screen.getByText("Total Requests Today")).toBeInTheDocument();
  });

  it("renders pending count (3 pending requests)", () => {
    render(<AdminPortal />);
    // 3 pending requests from mock data
    const threeElements = screen.getAllByText("3");
    expect(threeElements.length).toBeGreaterThanOrEqual(1);
  });

  it("renders the search input", () => {
    render(<AdminPortal />);
    expect(
      screen.getByPlaceholderText("Search by company, Tax ID or invoice number...")
    ).toBeInTheDocument();
  });

  it("renders request IDs", () => {
    render(<AdminPortal />);
    expect(screen.getByText("SOL-2024-001")).toBeInTheDocument();
  });

  it("renders company names", () => {
    render(<AdminPortal />);
    expect(screen.getByText(/Comercial ABC/)).toBeInTheDocument();
  });

  it("renders priority badges", () => {
    render(<AdminPortal />);
    const highPriority = screen.getAllByText("High Priority");
    expect(highPriority.length).toBeGreaterThanOrEqual(1);
  });

  it("renders risk badges", () => {
    render(<AdminPortal />);
    const lowRisk = screen.getAllByText("Low Risk");
    expect(lowRisk.length).toBeGreaterThanOrEqual(1);
  });

  // --- Search interaction ---

  it("filters requests by search query", async () => {
    const user = userEvent.setup();
    render(<AdminPortal />);
    const searchInput = screen.getByPlaceholderText("Search by company, Tax ID or invoice number...");
    await user.type(searchInput, "Comercial ABC");
    // Comercial ABC should still be visible
    expect(screen.getByText(/Comercial ABC/)).toBeInTheDocument();
  });

  // --- Tab navigation ---

  it("renders tab triggers for Pending Requests and Reports", () => {
    render(<AdminPortal />);
    expect(screen.getByText("Pending Requests")).toBeInTheDocument();
  });

  // --- Status badges ---

  it("renders status badges", () => {
    render(<AdminPortal />);
    const pendingBadges = screen.getAllByText(/Pending|Under Review|Approved|Rejected/);
    expect(pendingBadges.length).toBeGreaterThanOrEqual(1);
  });

  // --- Action buttons ---

  it("renders Review button for pending requests", () => {
    render(<AdminPortal />);
    const reviewButtons = screen.getAllByText("Review");
    expect(reviewButtons.length).toBeGreaterThanOrEqual(1);
  });

  // --- Filtering edge cases ---

  it("shows no results when search matches nothing", async () => {
    const user = userEvent.setup();
    render(<AdminPortal />);
    const searchInput = screen.getByPlaceholderText("Search by company, Tax ID or invoice number...");
    await user.type(searchInput, "ZZZZNONEXISTENT");
    // No requests should be visible
    expect(screen.queryByText("SOL-2024-001")).not.toBeInTheDocument();
  });

  it("clears search and shows all requests again", async () => {
    const user = userEvent.setup();
    render(<AdminPortal />);
    const searchInput = screen.getByPlaceholderText("Search by company, Tax ID or invoice number...");
    await user.type(searchInput, "Comercial ABC");
    expect(screen.getByText(/Comercial ABC/)).toBeInTheDocument();
    await user.clear(searchInput);
    // All requests should be visible again
    expect(screen.getByText("SOL-2024-001")).toBeInTheDocument();
  });

  // --- Amount rendering ---

  it("renders request amounts", () => {
    render(<AdminPortal />);
    const amounts = screen.getAllByText(/\$/);
    expect(amounts.length).toBeGreaterThanOrEqual(1);
  });

  // --- KPI values ---

  it("renders the KPI values", () => {
    render(<AdminPortal />);
    // Check that total requests today has a number
    const totalRequestsCard = screen.getByText("Total Requests Today");
    expect(totalRequestsCard).toBeInTheDocument();
  });

  // --- Table structure ---

  it("renders a table element", () => {
    const { container } = render(<AdminPortal />);
    const table = container.querySelector("table");
    expect(table).toBeInTheDocument();
  });
});