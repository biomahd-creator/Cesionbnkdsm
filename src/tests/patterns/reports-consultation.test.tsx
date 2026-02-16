import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ReportsConsultation } from "../../components/patterns/ReportsConsultation";

describe("ReportsConsultation", () => {
  it("renders the page title", () => {
    render(<ReportsConsultation />);
    expect(screen.getByText("Re-endorsed Operations")).toBeInTheDocument();
  });

  it("renders the page description", () => {
    render(<ReportsConsultation />);
    expect(
      screen.getByText("Endorsement Reports to Funders")
    ).toBeInTheDocument();
  });

  it("renders the File card title", () => {
    render(<ReportsConsultation />);
    const fileElements = screen.getAllByText("File");
    expect(fileElements.length).toBeGreaterThanOrEqual(1);
  });

  it("renders the search input", () => {
    render(<ReportsConsultation />);
    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
  });

  it("renders the Generate Report button", () => {
    render(<ReportsConsultation />);
    expect(screen.getByText("Generate Report")).toBeInTheDocument();
  });

  it("renders table headers", () => {
    render(<ReportsConsultation />);
    expect(screen.getByText("#")).toBeInTheDocument();
    expect(screen.getByText("Date")).toBeInTheDocument();
    expect(screen.getByText("File Size")).toBeInTheDocument();
    expect(screen.getByText("Options")).toBeInTheDocument();
  });

  it("renders report rows", () => {
    render(<ReportsConsultation />);
    expect(screen.getByText("Reporte_002.xlsx")).toBeInTheDocument();
    expect(screen.getByText("Reporte_010.xlsx")).toBeInTheDocument();
  });

  it("renders records count", () => {
    render(<ReportsConsultation />);
    expect(screen.getByText(/15 records/)).toBeInTheDocument();
  });

  it("does not render back button without onBack prop", () => {
    render(<ReportsConsultation />);
    expect(screen.queryByText("Back")).not.toBeInTheDocument();
  });

  it("renders back button when onBack is provided", () => {
    const onBack = vi.fn();
    render(<ReportsConsultation onBack={onBack} />);
    expect(screen.getByText("Back")).toBeInTheDocument();
  });

  it("calls onBack when back button is clicked", async () => {
    const user = userEvent.setup();
    const onBack = vi.fn();
    render(<ReportsConsultation onBack={onBack} />);
    await user.click(screen.getByText("Back"));
    expect(onBack).toHaveBeenCalledTimes(1);
  });

  it("filters reports by search query", async () => {
    const user = userEvent.setup();
    render(<ReportsConsultation />);
    const searchInput = screen.getByPlaceholderText("Search...");
    await user.type(searchInput, "Reporte_002");
    expect(screen.getByText("Reporte_002.xlsx")).toBeInTheDocument();
    // Other reports should not be visible (filtered out)
    expect(screen.queryByText("Reporte_010.xlsx")).not.toBeInTheDocument();
  });

  it("clears search and shows all reports", async () => {
    const user = userEvent.setup();
    render(<ReportsConsultation />);
    const searchInput = screen.getByPlaceholderText("Search...");
    await user.type(searchInput, "Reporte_002");
    expect(screen.queryByText("Reporte_010.xlsx")).not.toBeInTheDocument();
    await user.clear(searchInput);
    expect(screen.getByText("Reporte_010.xlsx")).toBeInTheDocument();
  });

  it("renders file size values", () => {
    render(<ReportsConsultation />);
    const sizes = screen.getAllByText(/Kb/);
    expect(sizes.length).toBeGreaterThanOrEqual(1);
  });

  it("renders download buttons in Options column", () => {
    render(<ReportsConsultation />);
    const downloadButtons = screen.getAllByRole("button");
    // At least one download button per row
    expect(downloadButtons.length).toBeGreaterThanOrEqual(3);
  });

  it("renders table element", () => {
    const { container } = render(<ReportsConsultation />);
    const table = container.querySelector("table");
    expect(table).toBeInTheDocument();
  });

  it("renders SVG icons", () => {
    const { container } = render(<ReportsConsultation />);
    const svgs = container.querySelectorAll("svg");
    expect(svgs.length).toBeGreaterThanOrEqual(3);
  });
});