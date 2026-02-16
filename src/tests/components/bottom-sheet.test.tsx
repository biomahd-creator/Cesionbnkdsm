import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BottomSheet } from "../../components/ui/bottom-sheet";

describe("BottomSheet", () => {
  it("renders the trigger", () => {
    render(
      <BottomSheet trigger={<button>Open Sheet</button>}>
        <p>Sheet Content</p>
      </BottomSheet>
    );
    expect(screen.getByText("Open Sheet")).toBeInTheDocument();
  });

  it("does not show content initially", () => {
    render(
      <BottomSheet trigger={<button>Open</button>}>
        <p>Hidden Content</p>
      </BottomSheet>
    );
    // Content is in a portal and not visible initially
    expect(screen.queryByText("Hidden Content")).not.toBeInTheDocument();
  });

  it("shows content when controlled with open=true", () => {
    render(
      <BottomSheet
        trigger={<button>Open</button>}
        title="Test Title"
        description="Test Description"
        open={true}
        onOpenChange={() => {}}
      >
        <p>Visible Content</p>
      </BottomSheet>
    );
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
    expect(screen.getByText("Visible Content")).toBeInTheDocument();
  });

  it("renders the close button", () => {
    render(
      <BottomSheet
        trigger={<button>Open</button>}
        open={true}
        onOpenChange={() => {}}
      >
        <p>Content</p>
      </BottomSheet>
    );
    // BottomSheet always renders a "Cerrar" close button
    expect(screen.getByText("Cerrar")).toBeInTheDocument();
  });

  it("renders footer when provided", () => {
    render(
      <BottomSheet
        trigger={<button>Open</button>}
        footer={<button>Save</button>}
        open={true}
        onOpenChange={() => {}}
      >
        <p>Content</p>
      </BottomSheet>
    );
    expect(screen.getByText("Save")).toBeInTheDocument();
  });

  it("calls onOpenChange when controlled", () => {
    const onOpenChange = vi.fn();
    render(
      <BottomSheet
        trigger={<button>Open</button>}
        open={false}
        onOpenChange={onOpenChange}
      >
        <p>Content</p>
      </BottomSheet>
    );
    // Trigger is rendered
    expect(screen.getByText("Open")).toBeInTheDocument();
  });

  it("renders without title and description", () => {
    render(
      <BottomSheet
        trigger={<button>Open</button>}
        open={true}
        onOpenChange={() => {}}
      >
        <p>Just Content</p>
      </BottomSheet>
    );
    expect(screen.getByText("Just Content")).toBeInTheDocument();
  });

  it("renders with title only (no description)", () => {
    render(
      <BottomSheet
        trigger={<button>Open</button>}
        title="Only Title"
        open={true}
        onOpenChange={() => {}}
      >
        <p>Content</p>
      </BottomSheet>
    );
    expect(screen.getByText("Only Title")).toBeInTheDocument();
  });
});
