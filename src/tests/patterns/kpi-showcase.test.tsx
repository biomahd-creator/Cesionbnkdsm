import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { KPIShowcase } from "../../components/patterns/KPIShowcase";

describe("KPIShowcase", () => {
  it("renders the page title", () => {
    render(<KPIShowcase />);
    expect(screen.getByText("KPI Dashboard")).toBeInTheDocument();
  });

  it("renders the page description", () => {
    render(<KPIShowcase />);
    expect(
      screen.getByText(
        "Key performance indicators with interactive visualizations"
      )
    ).toBeInTheDocument();
  });

  it("renders Total Revenue KPI", () => {
    render(<KPIShowcase />);
    expect(screen.getByText("Total Revenue")).toBeInTheDocument();
    expect(screen.getByText("$845,000")).toBeInTheDocument();
  });

  it("renders trend badges", () => {
    render(<KPIShowcase />);
    // Trends like "+12.5%" for revenue
    expect(screen.getByText("+12.5%")).toBeInTheDocument();
  });

  it("renders multiple KPI cards", () => {
    const { container } = render(<KPIShowcase />);
    const cards = container.querySelectorAll('[data-slot="card"]');
    expect(cards.length).toBeGreaterThanOrEqual(4);
  });

  it("renders icons for KPI cards", () => {
    const { container } = render(<KPIShowcase />);
    const svgs = container.querySelectorAll("svg");
    expect(svgs.length).toBeGreaterThanOrEqual(4);
  });

  it("renders change labels", () => {
    render(<KPIShowcase />);
    const vsLabels = screen.getAllByText(/vs last/);
    expect(vsLabels.length).toBeGreaterThanOrEqual(1);
  });
});
