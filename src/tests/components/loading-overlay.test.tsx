import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import {
  LoadingOverlay,
  InlineSpinner,
  ButtonLoading,
} from "../../components/ui/loading-overlay";
import { LoadingProvider, useLoading } from "../../components/providers/LoadingProvider";
import React from "react";

/**
 * Helper that renders LoadingOverlay inside a LoadingProvider
 * and provides a trigger button to activate loading.
 */
function LoadingOverlayHarness({
  variant,
  message,
}: {
  variant?: "spinner" | "dots" | "bar";
  message?: string;
}) {
  return (
    <LoadingProvider>
      <LoadingTrigger />
      <LoadingOverlay variant={variant} message={message} />
    </LoadingProvider>
  );
}

function LoadingTrigger() {
  const { showLoading, hideLoading } = useLoading();
  return (
    <>
      <button onClick={() => showLoading("Please wait...", "overlay")}>
        Show Loading
      </button>
      <button onClick={() => hideLoading()}>Hide Loading</button>
    </>
  );
}

describe("LoadingOverlay", () => {
  it("does not show overlay when not loading", () => {
    render(<LoadingOverlayHarness />);
    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
  });

  it("shows overlay with message when loading is triggered", async () => {
    render(<LoadingOverlayHarness />);
    const trigger = screen.getByText("Show Loading");
    trigger.click();
    expect(await screen.findByText("Please wait...")).toBeInTheDocument();
  });

  it("renders with dots variant", async () => {
    render(<LoadingOverlayHarness variant="dots" />);
    screen.getByText("Show Loading").click();
    // Dots variant renders 3 animated dots; the overlay message should appear
    expect(await screen.findByText("Please wait...")).toBeInTheDocument();
  });

  it("renders with bar variant", async () => {
    render(<LoadingOverlayHarness variant="bar" />);
    screen.getByText("Show Loading").click();
    expect(await screen.findByText("Please wait...")).toBeInTheDocument();
  });

  it("hides overlay when hideLoading is called", async () => {
    render(<LoadingOverlayHarness />);
    screen.getByText("Show Loading").click();
    expect(await screen.findByText("Please wait...")).toBeInTheDocument();

    screen.getByText("Hide Loading").click();
    // After hiding, the message should disappear (AnimatePresence may take a tick)
    await new Promise((r) => setTimeout(r, 50));
    expect(screen.queryByText("Please wait...")).not.toBeInTheDocument();
  });
});

describe("InlineSpinner", () => {
  it("renders with default size (md)", () => {
    const { container } = render(<InlineSpinner />);
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
  });

  it("renders with sm size", () => {
    const { container } = render(<InlineSpinner size="sm" />);
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
  });

  it("renders with lg size", () => {
    const { container } = render(<InlineSpinner size="lg" />);
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(<InlineSpinner className="my-spinner" />);
    const svg = container.querySelector("svg");
    expect(svg?.className.baseVal || svg?.getAttribute("class")).toContain("my-spinner");
  });
});

describe("ButtonLoading", () => {
  it("renders children when not loading", () => {
    render(<ButtonLoading isLoading={false}>Submit</ButtonLoading>);
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  it("shows loading text when loading", () => {
    render(
      <ButtonLoading isLoading={true} loadingText="Saving...">
        Submit
      </ButtonLoading>
    );
    expect(screen.getByText("Saving...")).toBeInTheDocument();
    expect(screen.queryByText("Submit")).not.toBeInTheDocument();
  });

  it("uses default loading text", () => {
    render(<ButtonLoading isLoading={true}>Submit</ButtonLoading>);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders spinner icon when loading", () => {
    const { container } = render(
      <ButtonLoading isLoading={true}>Submit</ButtonLoading>
    );
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
  });
});
