import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MasterDataGrid } from "../../components/advanced/MasterDataGrid";

describe("MasterDataGrid", () => {
  it("renders with title", () => {
    render(
      <MasterDataGrid title="Test Grid">
        <div>Grid content</div>
      </MasterDataGrid>
    );
    expect(screen.getByText("Test Grid")).toBeInTheDocument();
  });

  it("renders with description", () => {
    render(
      <MasterDataGrid title="Grid" description="A description">
        <div>Content</div>
      </MasterDataGrid>
    );
    expect(screen.getByText("A description")).toBeInTheDocument();
  });

  it("renders children", () => {
    render(
      <MasterDataGrid>
        <div>Child content</div>
      </MasterDataGrid>
    );
    expect(screen.getByText("Child content")).toBeInTheDocument();
  });

  it("renders the search input", () => {
    render(
      <MasterDataGrid
        searchQuery=""
        onSearchChange={() => {}}
        searchPlaceholder="Search items..."
      >
        <div>Content</div>
      </MasterDataGrid>
    );
    expect(
      screen.getByPlaceholderText("Search items...")
    ).toBeInTheDocument();
  });

  it("renders pagination when provided", () => {
    render(
      <MasterDataGrid
        currentPage={1}
        totalPages={5}
        totalItems={50}
        itemsPerPage={10}
        startIndex={0}
      >
        <div>Content</div>
      </MasterDataGrid>
    );
    // Should show some pagination text
    const pageIndicator = screen.getByText(/1/);
    expect(pageIndicator).toBeInTheDocument();
  });

  it("renders the New button when onNewAction is provided", () => {
    render(
      <MasterDataGrid onNewAction={() => {}}>
        <div>Content</div>
      </MasterDataGrid>
    );
    expect(screen.getByText("New")).toBeInTheDocument();
  });

  it("renders with custom newActionLabel", () => {
    render(
      <MasterDataGrid
        onNewAction={() => {}}
        newActionLabel="Add Invoice"
      >
        <div>Content</div>
      </MasterDataGrid>
    );
    expect(screen.getByText("Add Invoice")).toBeInTheDocument();
  });

  it("renders toolbar icons", () => {
    const { container } = render(
      <MasterDataGrid>
        <div>Content</div>
      </MasterDataGrid>
    );
    const svgs = container.querySelectorAll("svg");
    expect(svgs.length).toBeGreaterThanOrEqual(1);
  });

  it("renders export button when showExport is true", () => {
    render(
      <MasterDataGrid showExport onExport={() => {}}>
        <div>Content</div>
      </MasterDataGrid>
    );
    // Export button is an icon button; it should have an SVG (Download icon)
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBeGreaterThanOrEqual(1);
  });

  it("calls onExport when export button is clicked", async () => {
    const user = userEvent.setup();
    const handleExport = vi.fn();
    render(
      <MasterDataGrid showExport onExport={handleExport}>
        <div>Content</div>
      </MasterDataGrid>
    );
    // The export button has text "Export"
    await user.click(screen.getByText("Export"));
    expect(handleExport).toHaveBeenCalledOnce();
  });

  it("renders refresh button when showRefresh is true", () => {
    render(
      <MasterDataGrid showRefresh onRefresh={() => {}}>
        <div>Content</div>
      </MasterDataGrid>
    );
    expect(screen.getByTitle("Refresh")).toBeInTheDocument();
  });

  it("calls onRefresh when refresh button is clicked", async () => {
    const user = userEvent.setup();
    const handleRefresh = vi.fn();
    render(
      <MasterDataGrid showRefresh onRefresh={handleRefresh}>
        <div>Content</div>
      </MasterDataGrid>
    );
    await user.click(screen.getByTitle("Refresh"));
    expect(handleRefresh).toHaveBeenCalledOnce();
  });

  it("calls onNewAction when New button is clicked", async () => {
    const user = userEvent.setup();
    const handleNew = vi.fn();
    render(
      <MasterDataGrid onNewAction={handleNew}>
        <div>Content</div>
      </MasterDataGrid>
    );
    await user.click(screen.getByText("New"));
    expect(handleNew).toHaveBeenCalledOnce();
  });

  it("renders filter select when filterOptions are provided", () => {
    render(
      <MasterDataGrid
        filterOptions={[
          {
            label: "Status",
            value: "all",
            options: [
              { label: "All", value: "all" },
              { label: "Active", value: "active" },
            ],
          },
        ]}
        onFilterChange={() => {}}
      >
        <div>Content</div>
      </MasterDataGrid>
    );
    // The filter select trigger should be rendered
    expect(screen.getByText("All")).toBeInTheDocument();
  });

  it("renders pagination controls", () => {
    render(
      <MasterDataGrid
        currentPage={2}
        totalPages={5}
        totalItems={50}
        itemsPerPage={10}
        startIndex={10}
        onPageChange={() => {}}
      >
        <div>Content</div>
      </MasterDataGrid>
    );
    // Should show "Page 2 of 5"
    expect(screen.getByText(/Page 2 of 5/)).toBeInTheDocument();
  });

  it("renders reset filters button when onResetFilters is provided", () => {
    render(
      <MasterDataGrid onResetFilters={() => {}}>
        <div>Content</div>
      </MasterDataGrid>
    );
    expect(screen.getByText("Reset")).toBeInTheDocument();
  });

  it("calls onResetFilters when Reset is clicked", async () => {
    const user = userEvent.setup();
    const handleReset = vi.fn();
    render(
      <MasterDataGrid onResetFilters={handleReset}>
        <div>Content</div>
      </MasterDataGrid>
    );
    await user.click(screen.getByText("Reset"));
    expect(handleReset).toHaveBeenCalledOnce();
  });

  it("renders headerActions when provided", () => {
    render(
      <MasterDataGrid headerActions={<button>Custom Action</button>}>
        <div>Content</div>
      </MasterDataGrid>
    );
    expect(screen.getByText("Custom Action")).toBeInTheDocument();
  });

  it("renders items range in pagination footer", () => {
    render(
      <MasterDataGrid
        currentPage={1}
        totalPages={3}
        totalItems={25}
        itemsPerPage={10}
        startIndex={0}
        onPageChange={() => {}}
      >
        <div>Content</div>
      </MasterDataGrid>
    );
    // Should show "Showing 1 to 10 of 25"
    expect(screen.getByText(/Showing 1/)).toBeInTheDocument();
  });
});