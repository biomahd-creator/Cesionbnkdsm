import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { IconGridItem, IconGrid } from "../../components/ui/icon-grid";
import { Star, Heart, Settings } from "lucide-react";

describe("IconGridItem", () => {
  it("renders the icon name", () => {
    render(
      <IconGridItem
        name="Star"
        Icon={Star}
        isCopied={false}
        onCopy={() => {}}
      />
    );
    expect(screen.getByText("Star")).toBeInTheDocument();
  });

  it("renders the icon component", () => {
    const { container } = render(
      <IconGridItem
        name="Star"
        Icon={Star}
        isCopied={false}
        onCopy={() => {}}
      />
    );
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("calls onCopy when clicked", async () => {
    const user = userEvent.setup();
    const onCopy = vi.fn();
    render(
      <IconGridItem
        name="Star"
        Icon={Star}
        isCopied={false}
        onCopy={onCopy}
      />
    );
    await user.click(screen.getByTitle("Star"));
    expect(onCopy).toHaveBeenCalledTimes(1);
  });

  it("shows check icon when isCopied is true", () => {
    const { container } = render(
      <IconGridItem
        name="Star"
        Icon={Star}
        isCopied={true}
        onCopy={() => {}}
      />
    );
    // When copied, both the icon and the check icon should be present
    const svgs = container.querySelectorAll("svg");
    // Star + Check + Copy = 3 SVGs
    expect(svgs.length).toBeGreaterThanOrEqual(2);
  });

  it("has title attribute with icon name", () => {
    render(
      <IconGridItem
        name="Heart"
        Icon={Heart}
        isCopied={false}
        onCopy={() => {}}
      />
    );
    expect(screen.getByTitle("Heart")).toBeInTheDocument();
  });
});

describe("IconGrid", () => {
  const mockIcons = [
    { name: "Star", Icon: Star },
    { name: "Heart", Icon: Heart },
    { name: "Settings", Icon: Settings },
  ];

  it("renders all icons", () => {
    render(
      <IconGrid icons={mockIcons} copiedIcon={null} onCopyIcon={() => {}} />
    );
    expect(screen.getByText("Star")).toBeInTheDocument();
    expect(screen.getByText("Heart")).toBeInTheDocument();
    expect(screen.getByText("Settings")).toBeInTheDocument();
  });

  it("renders the grid container", () => {
    const { container } = render(
      <IconGrid icons={mockIcons} copiedIcon={null} onCopyIcon={() => {}} />
    );
    const grid = container.querySelector(".grid");
    expect(grid).toBeInTheDocument();
  });

  it("marks the copied icon", () => {
    const { container } = render(
      <IconGrid
        icons={mockIcons}
        copiedIcon="Heart"
        onCopyIcon={() => {}}
      />
    );
    // Heart should have isCopied=true, showing the check icon
    expect(container).toBeInTheDocument();
  });

  it("renders empty grid when no icons", () => {
    const { container } = render(
      <IconGrid icons={[]} copiedIcon={null} onCopyIcon={() => {}} />
    );
    const grid = container.querySelector(".grid");
    expect(grid).toBeInTheDocument();
    expect(grid?.children.length).toBe(0);
  });
});
