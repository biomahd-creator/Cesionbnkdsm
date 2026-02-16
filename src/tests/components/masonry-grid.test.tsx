import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";

// react-responsive-masonry has CJS export issues in jsdom — mock it
vi.mock("react-responsive-masonry", () => {
  return {
    __esModule: true,
    default: ({ children, gutter }: any) => (
      <div data-testid="masonry" data-gutter={gutter}>{children}</div>
    ),
    ResponsiveMasonry: ({ children }: any) => (
      <div data-testid="responsive-masonry">{children}</div>
    ),
  };
});

import { MasonryGrid } from "../../components/advanced/MasonryGrid";

describe("MasonryGrid", () => {
  it("renders children", () => {
    render(
      <MasonryGrid>
        <div>Card 1</div>
        <div>Card 2</div>
        <div>Card 3</div>
      </MasonryGrid>
    );
    expect(screen.getByText("Card 1")).toBeInTheDocument();
    expect(screen.getByText("Card 2")).toBeInTheDocument();
    expect(screen.getByText("Card 3")).toBeInTheDocument();
  });

  it("renders the wrapper div", () => {
    const { container } = render(
      <MasonryGrid>
        <div>Item</div>
      </MasonryGrid>
    );
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toBeInTheDocument();
    expect(wrapper.tagName).toBe("DIV");
  });

  it("accepts custom columnsCountBreakPoints", () => {
    render(
      <MasonryGrid columnsCountBreakPoints={{ 300: 1, 600: 2 }}>
        <div>A</div>
        <div>B</div>
      </MasonryGrid>
    );
    expect(screen.getByText("A")).toBeInTheDocument();
    expect(screen.getByText("B")).toBeInTheDocument();
  });

  it("accepts custom gutter", () => {
    render(
      <MasonryGrid gutter="2rem">
        <div>Gutter Test</div>
      </MasonryGrid>
    );
    expect(screen.getByText("Gutter Test")).toBeInTheDocument();
  });

  it("renders with default props", () => {
    const { container } = render(
      <MasonryGrid>
        <div>Default</div>
      </MasonryGrid>
    );
    expect(container.querySelector(".w-full")).toBeInTheDocument();
  });
});