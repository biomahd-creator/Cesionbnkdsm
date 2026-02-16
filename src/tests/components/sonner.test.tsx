import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Toaster } from "../../components/ui/sonner";
import { ThemeProvider } from "../../components/providers/ThemeProvider";

describe("Toaster (Sonner)", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <ThemeProvider>
        <Toaster />
      </ThemeProvider>
    );
    expect(container).toBeInTheDocument();
  });

  it("renders the toaster container element", () => {
    const { container } = render(
      <ThemeProvider>
        <Toaster />
      </ThemeProvider>
    );
    // Sonner renders a section or div as its container in jsdom
    expect(container.firstChild).toBeTruthy();
  });
});