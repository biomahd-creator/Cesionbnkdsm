import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuViewport,
} from "../../components/ui/navigation-menu";

describe("NavigationMenu", () => {
  it("renders with data-slot attribute", () => {
    const { container } = render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink>Home</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
    expect(
      container.querySelector('[data-slot="navigation-menu"]')
    ).toBeInTheDocument();
  });

  it("renders NavigationMenuList with data-slot", () => {
    const { container } = render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink>Link</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
    expect(
      container.querySelector('[data-slot="navigation-menu-list"]')
    ).toBeInTheDocument();
  });

  it("renders NavigationMenuItem with data-slot", () => {
    const { container } = render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink>Item</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
    expect(
      container.querySelector('[data-slot="navigation-menu-item"]')
    ).toBeInTheDocument();
  });

  it("renders NavigationMenuLink with content", () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink>About</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
    expect(screen.getByText("About")).toBeInTheDocument();
  });

  it("renders NavigationMenuTrigger with chevron icon", () => {
    const { container } = render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
    expect(screen.getByText("Products")).toBeInTheDocument();
    // ChevronDownIcon should be rendered
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
  });

  it("renders NavigationMenuViewport", () => {
    const { container } = render(
      <NavigationMenu viewport={true}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink>Link</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
    // Radix may not render the viewport element in jsdom;
    // verify the data-viewport attribute is set on the root
    const root = container.querySelector('[data-slot="navigation-menu"]');
    expect(root?.getAttribute("data-viewport")).toBe("true");
  });

  it("does not render viewport when viewport=false", () => {
    const { container } = render(
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink>Link</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
    expect(
      container.querySelector('[data-slot="navigation-menu-viewport"]')
    ).not.toBeInTheDocument();
  });

  it("applies custom className to NavigationMenu", () => {
    const { container } = render(
      <NavigationMenu className="my-nav">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink>Link</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
    const nav = container.querySelector('[data-slot="navigation-menu"]');
    expect(nav?.className).toContain("my-nav");
  });

  it("renders multiple menu items", () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink>Home</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink>About</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink>Contact</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });
});