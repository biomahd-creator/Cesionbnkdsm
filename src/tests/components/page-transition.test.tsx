import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import {
  PageTransition,
  AnimatedPresenceWrapper,
  FadeInView,
  StaggerContainer,
  StaggerItem,
} from "../../components/ui/page-transition";

describe("PageTransition", () => {
  it("renders children", () => {
    render(<PageTransition>Hello Page</PageTransition>);
    expect(screen.getByText("Hello Page")).toBeInTheDocument();
  });

  it("applies default variant (page)", () => {
    const { container } = render(
      <PageTransition>Content</PageTransition>
    );
    expect(container.firstChild).toBeTruthy();
  });

  it("applies custom className", () => {
    const { container } = render(
      <PageTransition className="my-class">Content</PageTransition>
    );
    expect(container.querySelector(".my-class")).toBeInTheDocument();
  });

  it("applies custom id", () => {
    const { container } = render(
      <PageTransition id="page-1">Content</PageTransition>
    );
    expect(container.querySelector("#page-1")).toBeInTheDocument();
  });

  it("renders with fade variant", () => {
    render(<PageTransition variant="fade">Fade</PageTransition>);
    expect(screen.getByText("Fade")).toBeInTheDocument();
  });

  it("renders with scale variant", () => {
    render(<PageTransition variant="scale">Scale</PageTransition>);
    expect(screen.getByText("Scale")).toBeInTheDocument();
  });
});

describe("AnimatedPresenceWrapper", () => {
  it("renders children", () => {
    render(
      <AnimatedPresenceWrapper>
        <div>Animated</div>
      </AnimatedPresenceWrapper>
    );
    expect(screen.getByText("Animated")).toBeInTheDocument();
  });

  it("accepts mode prop", () => {
    render(
      <AnimatedPresenceWrapper mode="sync">
        <div>Sync</div>
      </AnimatedPresenceWrapper>
    );
    expect(screen.getByText("Sync")).toBeInTheDocument();
  });
});

describe("FadeInView", () => {
  it("renders children", () => {
    render(<FadeInView>Fading In</FadeInView>);
    expect(screen.getByText("Fading In")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <FadeInView className="fade-class">Content</FadeInView>
    );
    expect(container.querySelector(".fade-class")).toBeInTheDocument();
  });

  it("accepts delay prop", () => {
    render(<FadeInView delay={0.5}>Delayed</FadeInView>);
    expect(screen.getByText("Delayed")).toBeInTheDocument();
  });
});

describe("StaggerContainer", () => {
  it("renders children", () => {
    render(
      <StaggerContainer>
        <div>Item 1</div>
        <div>Item 2</div>
      </StaggerContainer>
    );
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <StaggerContainer className="stagger-class">
        <div>Child</div>
      </StaggerContainer>
    );
    expect(container.querySelector(".stagger-class")).toBeInTheDocument();
  });
});

describe("StaggerItem", () => {
  it("renders children", () => {
    render(<StaggerItem>Stagger Child</StaggerItem>);
    expect(screen.getByText("Stagger Child")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <StaggerItem className="item-class">Content</StaggerItem>
    );
    expect(container.querySelector(".item-class")).toBeInTheDocument();
  });
});
