import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { QuickActionToolbar } from "../../components/patterns/QuickActionToolbar";

// cmdk requires scrollIntoView mock
if (!Element.prototype.scrollIntoView) {
  Element.prototype.scrollIntoView = () => {};
}

describe("QuickActionToolbar", () => {
  it("renders the menubar triggers", () => {
    render(<QuickActionToolbar />);
    expect(screen.getByText("File")).toBeInTheDocument();
    expect(screen.getByText("Edit")).toBeInTheDocument();
    expect(screen.getByText("Operations")).toBeInTheDocument();
    expect(screen.getByText("Reports")).toBeInTheDocument();
    expect(screen.getByText("Help")).toBeInTheDocument();
  });

  it("renders the quick actions toolbar", () => {
    const { container } = render(<QuickActionToolbar />);
    // Toolbar has icon buttons
    const buttons = container.querySelectorAll("button");
    // Menubar triggers + toolbar buttons
    expect(buttons.length).toBeGreaterThanOrEqual(5);
  });

  it("renders SVG icons for quick action buttons", () => {
    const { container } = render(<QuickActionToolbar />);
    const svgs = container.querySelectorAll("svg");
    expect(svgs.length).toBeGreaterThanOrEqual(5);
  });

  it("renders the toolbar container with border", () => {
    const { container } = render(<QuickActionToolbar />);
    const toolbar = container.querySelector(".border.rounded-lg");
    expect(toolbar).toBeInTheDocument();
  });

  it("renders the menubar element", () => {
    render(<QuickActionToolbar />);
    const menubar = screen.getByRole("menubar");
    expect(menubar).toBeInTheDocument();
  });
});
