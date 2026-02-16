import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { StatsDashboard } from "../../components/patterns/StatsDashboard";

describe("StatsDashboard", () => {
  it("renders all 4 stat cards", () => {
    render(<StatsDashboard />);
    expect(screen.getByText("Active Portfolio")).toBeInTheDocument();
    expect(screen.getByText("Invoices Processed")).toBeInTheDocument();
    expect(screen.getByText("Approval Rate")).toBeInTheDocument();
    expect(screen.getByText("Average Time")).toBeInTheDocument();
  });

  it("renders stat values", () => {
    render(<StatsDashboard />);
    expect(screen.getByText("$45,231,890")).toBeInTheDocument();
    expect(screen.getByText("1,234")).toBeInTheDocument();
    expect(screen.getByText("94.2%")).toBeInTheDocument();
    expect(screen.getByText("2.4 days")).toBeInTheDocument();
  });

  it("renders change percentages", () => {
    render(<StatsDashboard />);
    expect(screen.getByText("+20.1%")).toBeInTheDocument();
    expect(screen.getByText("+12.5%")).toBeInTheDocument();
    expect(screen.getByText("+2.3%")).toBeInTheDocument();
    expect(screen.getByText("-15.8%")).toBeInTheDocument();
  });

  it("renders subtitles", () => {
    render(<StatsDashboard />);
    expect(screen.getByText("vs last month")).toBeInTheDocument();
    expect(screen.getByText("this month")).toBeInTheDocument();
    expect(screen.getByText("monthly average")).toBeInTheDocument();
    expect(screen.getByText("processing time")).toBeInTheDocument();
  });

  it("renders progress badges", () => {
    render(<StatsDashboard />);
    expect(screen.getByText("75%")).toBeInTheDocument();
    expect(screen.getByText("82%")).toBeInTheDocument();
    expect(screen.getByText("94%")).toBeInTheDocument();
    expect(screen.getByText("68%")).toBeInTheDocument();
  });

  it("renders trend icons (SVGs)", () => {
    const { container } = render(<StatsDashboard />);
    // Each stat has an icon + a trend icon = at least 8 SVGs
    const svgs = container.querySelectorAll("svg");
    expect(svgs.length).toBeGreaterThanOrEqual(8);
  });

  it("renders separators", () => {
    const { container } = render(<StatsDashboard />);
    const separators = container.querySelectorAll('[data-slot="separator-root"]');
    expect(separators.length).toBe(4);
  });

  it("renders progress bars", () => {
    const { container } = render(<StatsDashboard />);
    // Progress component renders role="progressbar"
    const progressBars = container.querySelectorAll('[role="progressbar"]');
    expect(progressBars.length).toBe(4);
  });
});
