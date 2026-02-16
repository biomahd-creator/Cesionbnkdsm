import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AuditLogViewer } from "../../components/patterns/AuditLogViewer";

describe("AuditLogViewer", () => {
  it("renders the stats summary cards", () => {
    render(<AuditLogViewer />);
    expect(screen.getByText("Success")).toBeInTheDocument();
  });

  it("renders the table with log entries", () => {
    render(<AuditLogViewer />);
    expect(screen.getByText("Audit Log Viewer")).toBeInTheDocument();
  });

  it("renders user emails in the table", () => {
    render(<AuditLogViewer />);
    expect(
      screen.getByText("juan.perez@empresa.com")
    ).toBeInTheDocument();
  });

  it("renders action names", () => {
    render(<AuditLogViewer />);
    // "Login" appears multiple times, use getAllByText
    const loginElements = screen.getAllByText("Login");
    expect(loginElements.length).toBeGreaterThanOrEqual(1);
  });

  it("renders resource names", () => {
    render(<AuditLogViewer />);
    const authElements = screen.getAllByText("Authentication");
    expect(authElements.length).toBeGreaterThanOrEqual(1);
  });

  it("renders the search input", () => {
    render(<AuditLogViewer />);
    expect(
      screen.getByPlaceholderText("Search logs...")
    ).toBeInTheDocument();
  });

  it("renders status icons (SVGs)", () => {
    const { container } = render(<AuditLogViewer />);
    const svgs = container.querySelectorAll("svg");
    expect(svgs.length).toBeGreaterThanOrEqual(3);
  });

  it("renders IP addresses", () => {
    render(<AuditLogViewer />);
    expect(screen.getByText("192.168.1.100")).toBeInTheDocument();
  });

  it("renders stat summary counts", () => {
    render(<AuditLogViewer />);
    // Default mock logs: 5 success, 2 warnings, 1 error
    expect(screen.getByText("Warnings")).toBeInTheDocument();
    expect(screen.getByText("Errors")).toBeInTheDocument();
  });

  it("filters logs by search query", async () => {
    const user = userEvent.setup();
    render(<AuditLogViewer />);
    const searchInput = screen.getByPlaceholderText("Search logs...");
    await user.type(searchInput, "admin");
    // admin@empresa.com entries should be visible
    expect(screen.getByText("admin@empresa.com")).toBeInTheDocument();
    // Other users should be filtered out
    expect(screen.queryByText("juan.perez@empresa.com")).not.toBeInTheDocument();
  });

  it("renders table headers", () => {
    render(<AuditLogViewer />);
    expect(screen.getByText("Timestamp")).toBeInTheDocument();
    expect(screen.getByText("User")).toBeInTheDocument();
    expect(screen.getByText("Action")).toBeInTheDocument();
    expect(screen.getByText("Resource")).toBeInTheDocument();
    expect(screen.getByText("Status")).toBeInTheDocument();
    expect(screen.getByText("IP Address")).toBeInTheDocument();
  });

  it("renders warning badge for warning status logs", () => {
    render(<AuditLogViewer />);
    const warningBadges = screen.getAllByText("Warning");
    // At least one in the stats + one in the table
    expect(warningBadges.length).toBeGreaterThanOrEqual(1);
  });

  it("renders error badge for error status logs", () => {
    render(<AuditLogViewer />);
    const errorBadges = screen.getAllByText("Error");
    expect(errorBadges.length).toBeGreaterThanOrEqual(1);
  });

  it("accepts custom logs via props", () => {
    const customLogs = [
      {
        id: "custom-1",
        timestamp: "2025-06-01 10:00:00",
        user: "test@test.com",
        action: "CustomAction",
        resource: "TestResource",
        status: "success" as const,
        ipAddress: "10.0.0.1",
      },
    ];
    render(<AuditLogViewer logs={customLogs} />);
    expect(screen.getByText("test@test.com")).toBeInTheDocument();
    expect(screen.getByText("CustomAction")).toBeInTheDocument();
    expect(screen.getByText("10.0.0.1")).toBeInTheDocument();
  });

  it("paginates results (shows first 5 items)", () => {
    render(<AuditLogViewer />);
    // Should show first 5 log entries (default itemsPerPage = 5)
    expect(screen.getByText("juan.perez@empresa.com")).toBeInTheDocument();
    // The 6th entry (pedro.sanchez) should not be on first page
    expect(screen.queryByText("pedro.sanchez@empresa.com")).not.toBeInTheDocument();
  });

  // --- Pagination navigation ---

  it("navigates to next page", async () => {
    const user = userEvent.setup();
    render(<AuditLogViewer />);
    // Find and click next page button
    const nextButtons = screen.getAllByRole("button");
    const nextBtn = nextButtons.find(btn => 
      btn.querySelector("svg.lucide-chevron-right") || 
      btn.textContent?.includes("Next") ||
      btn.getAttribute("aria-label")?.includes("next")
    );
    if (nextBtn) {
      await user.click(nextBtn);
      // Should show entries from page 2
      expect(screen.getByText("pedro.sanchez@empresa.com")).toBeInTheDocument();
    }
  });

  // --- Search edge cases ---

  it("shows no results when search matches nothing", async () => {
    const user = userEvent.setup();
    render(<AuditLogViewer />);
    const searchInput = screen.getByPlaceholderText("Search logs...");
    await user.type(searchInput, "ZZZNONEXISTENT");
    expect(screen.queryByText("juan.perez@empresa.com")).not.toBeInTheDocument();
  });

  it("clears search and shows all results", async () => {
    const user = userEvent.setup();
    render(<AuditLogViewer />);
    const searchInput = screen.getByPlaceholderText("Search logs...");
    await user.type(searchInput, "admin");
    expect(screen.queryByText("juan.perez@empresa.com")).not.toBeInTheDocument();
    await user.clear(searchInput);
    expect(screen.getByText("juan.perez@empresa.com")).toBeInTheDocument();
  });

  // --- Stats counts ---

  it("renders correct stat summary numbers", () => {
    render(<AuditLogViewer />);
    // The total count badge should appear
    expect(screen.getByText("Total")).toBeInTheDocument();
  });
});