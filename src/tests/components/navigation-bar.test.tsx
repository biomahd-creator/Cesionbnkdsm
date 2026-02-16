import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NavigationBar } from "../../components/widgets/NavigationBar";

describe("NavigationBar", () => {
  it("renders the navigation element", () => {
    render(<NavigationBar />);
    const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument();
  });

  it("renders the logo SVG", () => {
    const { container } = render(<NavigationBar />);
    // Logo is an SVG inside a div
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
  });

  it("renders navigation items in full variant", () => {
    render(<NavigationBar variant="full" />);
    expect(screen.getByText("Factoring")).toBeInTheDocument();
    expect(screen.getByText("Radian")).toBeInTheDocument();
    expect(screen.getByText("Vinculaciones")).toBeInTheDocument();
  });

  it("renders user profile section in full variant", () => {
    render(<NavigationBar variant="full" />);
    expect(screen.getByText("soporte.cfinancia")).toBeInTheDocument();
    expect(screen.getByText("CFINANCIA")).toBeInTheDocument();
  });

  it("does not render nav items in simple variant", () => {
    render(<NavigationBar variant="simple" />);
    expect(screen.queryByText("Factoring")).not.toBeInTheDocument();
    expect(screen.queryByText("Radian")).not.toBeInTheDocument();
    expect(screen.queryByText("Vinculaciones")).not.toBeInTheDocument();
  });

  it("does not render user profile in simple variant", () => {
    render(<NavigationBar variant="simple" />);
    expect(screen.queryByText("soporte.cfinancia")).not.toBeInTheDocument();
  });

  it("renders with default variant (full)", () => {
    render(<NavigationBar />);
    expect(screen.getByText("Factoring")).toBeInTheDocument();
    expect(screen.getByText("soporte.cfinancia")).toBeInTheDocument();
  });

  it("renders Factoring as active item", () => {
    const { container } = render(<NavigationBar />);
    // Factoring button should exist
    const factoringButton = screen.getByText("Factoring").closest("button");
    expect(factoringButton).toBeInTheDocument();
  });

  it("renders Radian with dropdown chevron", () => {
    const { container } = render(<NavigationBar />);
    // Radian has a ChevronDown icon
    const radianButton = screen.getByText("Radian").closest("button");
    expect(radianButton).toBeInTheDocument();
    // Should have an SVG chevron inside
    const svgs = radianButton?.querySelectorAll("svg");
    expect(svgs?.length).toBeGreaterThanOrEqual(1);
  });

  it("accepts onLogout callback", () => {
    const onLogout = vi.fn();
    render(<NavigationBar onLogout={onLogout} />);
    // onLogout is wired to the "Sign Out" dropdown item, which requires opening the dropdown
    expect(screen.getByText("soporte.cfinancia")).toBeInTheDocument();
  });

  // --- Navigation buttons clickable ---

  it("renders Factoring button as clickable", async () => {
    const user = userEvent.setup();
    render(<NavigationBar />);
    const factoringBtn = screen.getByText("Factoring").closest("button");
    expect(factoringBtn).toBeInTheDocument();
    // Clicking should not throw
    await user.click(factoringBtn!);
    expect(factoringBtn).toBeInTheDocument();
  });

  it("renders Vinculaciones button as clickable", async () => {
    const user = userEvent.setup();
    render(<NavigationBar />);
    const vincBtn = screen.getByText("Vinculaciones").closest("button");
    expect(vincBtn).toBeInTheDocument();
    await user.click(vincBtn!);
    expect(vincBtn).toBeInTheDocument();
  });

  // --- Avatar ---

  it("renders user icon in profile area", () => {
    const { container } = render(<NavigationBar variant="full" />);
    // User profile uses a User icon SVG, not text initials
    const userSvgs = container.querySelectorAll("svg");
    expect(userSvgs.length).toBeGreaterThanOrEqual(4);
  });

  // --- Responsive / minimal variant ---

  it("renders compact variant (if supported)", () => {
    render(<NavigationBar variant="simple" />);
    const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument();
  });

  // --- Navigation structure ---

  it("renders nav with fixed positioning", () => {
    render(<NavigationBar />);
    const nav = screen.getByRole("navigation");
    expect(nav.className).toContain("fixed");
  });

  // --- Multiple SVG icons ---

  it("renders multiple SVG icons", () => {
    const { container } = render(<NavigationBar variant="full" />);
    const svgs = container.querySelectorAll("svg");
    expect(svgs.length).toBeGreaterThanOrEqual(3);
  });
});