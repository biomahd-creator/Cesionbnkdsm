import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { KPIShowcaseExtended } from "../../components/patterns/KPIShowcaseExtended";

describe("KPIShowcaseExtended", () => {
  it("renders the page title", () => {
    render(<KPIShowcaseExtended />);
    expect(screen.getByText("Additional KPI Styles")).toBeInTheDocument();
  });

  it("renders the page description", () => {
    render(<KPIShowcaseExtended />);
    expect(
      screen.getByText(/KPI variants: side-by-side comparison/)
    ).toBeInTheDocument();
  });

  it("renders the Side-by-Side Comparison section", () => {
    render(<KPIShowcaseExtended />);
    expect(screen.getByText("1. Side-by-Side Comparison")).toBeInTheDocument();
  });

  it("renders Revenue Comparison card", () => {
    render(<KPIShowcaseExtended />);
    expect(screen.getByText("Revenue Comparison")).toBeInTheDocument();
  });

  it("renders Current and Previous labels", () => {
    render(<KPIShowcaseExtended />);
    const currentLabels = screen.getAllByText("Current");
    expect(currentLabels.length).toBeGreaterThanOrEqual(1);
    const previousLabels = screen.getAllByText("Previous");
    expect(previousLabels.length).toBeGreaterThanOrEqual(1);
  });

  it("renders multiple KPI cards", () => {
    const { container } = render(<KPIShowcaseExtended />);
    const cards = container.querySelectorAll('[data-slot="card"]');
    expect(cards.length).toBeGreaterThanOrEqual(4);
  });

  it("renders SVG icons", () => {
    const { container } = render(<KPIShowcaseExtended />);
    const svgs = container.querySelectorAll("svg");
    expect(svgs.length).toBeGreaterThanOrEqual(5);
  });

  it("renders section headings", () => {
    render(<KPIShowcaseExtended />);
    // There should be numbered section headings
    const headings = screen.getAllByText(/^\d+\./);
    expect(headings.length).toBeGreaterThanOrEqual(2);
  });
});
