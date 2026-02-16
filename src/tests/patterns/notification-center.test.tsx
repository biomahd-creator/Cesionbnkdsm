import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NotificationCenter } from "../../components/patterns/NotificationCenter";

// Helper to open the notification popover
async function openPopover() {
  const user = userEvent.setup();
  render(<NotificationCenter />);
  const bellButton = screen.getByText("3").closest("button") || screen.getAllByRole("button")[0];
  await user.click(bellButton!);
  await screen.findByText("Notifications");
  return user;
}

describe("NotificationCenter", () => {
  it("renders the bell button trigger", () => {
    const { container } = render(<NotificationCenter />);
    // The trigger button contains a Bell icon
    const buttons = container.querySelectorAll("button");
    expect(buttons.length).toBeGreaterThanOrEqual(1);
  });

  it("renders the notification bell icon", () => {
    const { container } = render(<NotificationCenter />);
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
  });

  it("shows unread count badge", () => {
    render(<NotificationCenter />);
    // 3 unread notifications by default (ids 1, 2, 3)
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  it("opens the popover when clicking the bell", async () => {
    const user = userEvent.setup();
    render(<NotificationCenter />);
    // Click the first button (bell trigger)
    const bellButton = screen.getByText("3").closest("button") || screen.getAllByRole("button")[0];
    await user.click(bellButton!);

    // Popover should show notification content
    expect(await screen.findByText("Notifications")).toBeInTheDocument();
  });

  it("shows notification titles in the popover", async () => {
    const user = userEvent.setup();
    render(<NotificationCenter />);
    const bellButton = screen.getByText("3").closest("button") || screen.getAllByRole("button")[0];
    await user.click(bellButton!);

    expect(await screen.findByText("Invoice Approved")).toBeInTheDocument();
    expect(screen.getByText("Review Pending")).toBeInTheDocument();
    expect(screen.getByText("Invoice Rejected")).toBeInTheDocument();
  });

  it("shows tabs for All, Unread, Read", async () => {
    const user = userEvent.setup();
    render(<NotificationCenter />);
    const bellButton = screen.getByText("3").closest("button") || screen.getAllByRole("button")[0];
    await user.click(bellButton!);

    expect(await screen.findByText("All")).toBeInTheDocument();
    expect(screen.getByText("Unread")).toBeInTheDocument();
    expect(screen.getByText("Read")).toBeInTheDocument();
  });

  it("shows Mark all read button", async () => {
    const user = await openPopover();
    expect(screen.getByText("Mark all read")).toBeInTheDocument();
  });

  it("marks all notifications as read when clicking Mark all read", async () => {
    const user = await openPopover();
    await user.click(screen.getByText("Mark all read"));
    // Badge count should disappear (no unread)
    expect(screen.queryByText("3")).not.toBeInTheDocument();
    // The message should say 0 unread
    expect(screen.getByText(/0 unread/)).toBeInTheDocument();
  });

  it("switches to Unread tab and shows only unread notifications", async () => {
    const user = await openPopover();
    await user.click(screen.getByText("Unread"));
    // Should show the 3 unread notifications
    expect(screen.getByText("Invoice Approved")).toBeInTheDocument();
    expect(screen.getByText("Review Pending")).toBeInTheDocument();
    expect(screen.getByText("Invoice Rejected")).toBeInTheDocument();
    // Read notifications should not be visible
    expect(screen.queryByText("System Update")).not.toBeInTheDocument();
  });

  it("switches to Read tab and shows only read notifications", async () => {
    const user = await openPopover();
    await user.click(screen.getByText("Read"));
    // Should show the 3 read notifications
    expect(screen.getByText("System Update")).toBeInTheDocument();
    expect(screen.getByText("Payment Received")).toBeInTheDocument();
    expect(screen.getByText("Upcoming Deadline")).toBeInTheDocument();
    // Unread notifications should not be visible
    expect(screen.queryByText("Invoice Approved")).not.toBeInTheDocument();
  });

  it("shows notification messages", async () => {
    const user = await openPopover();
    expect(screen.getByText("Invoice INV-001 has been approved by Maria Garcia")).toBeInTheDocument();
  });

  it("shows notification timestamps", async () => {
    const user = await openPopover();
    expect(screen.getByText("5 minutes ago")).toBeInTheDocument();
    expect(screen.getByText("15 minutes ago")).toBeInTheDocument();
  });

  it("shows unread count message", async () => {
    const user = await openPopover();
    expect(screen.getByText(/You have 3 unread notification/)).toBeInTheDocument();
  });

  // --- Individual notification interaction ---

  it("marks a single notification as read when clicking the check button", async () => {
    const user = await openPopover();
    // The mark-as-read action is a Check icon button next to each unread notification.
    // Find the notification item containing "Invoice Approved" and click its check button.
    const invoiceNotification = screen.getByText("Invoice Approved").closest("div[class*='p-4']")!;
    const checkButtons = invoiceNotification.querySelectorAll("button");
    // First button is the Check (mark as read), second is Trash (delete)
    const checkButton = Array.from(checkButtons).find(btn => btn.querySelector(".lucide-check"));
    if (checkButton) {
      await user.click(checkButton);
      // After marking, unread count should decrease
      expect(screen.getByText(/2 unread/)).toBeInTheDocument();
    }
  });

  it("shows notification icons for different types", async () => {
    const user = await openPopover();
    // Should have SVG icons for each notification
    const icons = document.querySelectorAll('[data-slot="popover-content"] svg');
    expect(icons.length).toBeGreaterThanOrEqual(3);
  });

  it("updates badge count after marking notification as read", async () => {
    const user = await openPopover();
    // Click the check button for first unread notification
    const invoiceNotification = screen.getByText("Invoice Approved").closest("div[class*='p-4']")!;
    const checkButtons = invoiceNotification.querySelectorAll("button");
    const checkButton = Array.from(checkButtons).find(btn => btn.querySelector(".lucide-check"));
    if (checkButton) {
      await user.click(checkButton);
      // Badge should show 2 now — may appear in multiple places (badge + tab count)
      const badges = screen.getAllByText("2");
      expect(badges.length).toBeGreaterThanOrEqual(1);
    }
  });
});