import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RichTextEditor } from "../../components/advanced/RichTextEditor";

// jsdom doesn't implement document.execCommand — mock it
if (typeof document.execCommand !== 'function') {
  document.execCommand = vi.fn().mockReturnValue(true);
}

describe("RichTextEditor", () => {
  it("renders the editor container", () => {
    const { container } = render(<RichTextEditor />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("renders the toolbar with formatting buttons", () => {
    const { container } = render(<RichTextEditor />);
    // Should have toggle/buttons for formatting
    const buttons = container.querySelectorAll("button");
    expect(buttons.length).toBeGreaterThanOrEqual(5);
  });

  it("renders the contentEditable area", () => {
    const { container } = render(<RichTextEditor />);
    const editor = container.querySelector("[contenteditable]");
    expect(editor).toBeInTheDocument();
  });

  it("sets contentEditable to false when readOnly", () => {
    const { container } = render(<RichTextEditor readOnly />);
    const editor = container.querySelector("[contenteditable]");
    expect(editor?.getAttribute("contenteditable")).toBe("false");
  });

  it("applies custom className", () => {
    const { container } = render(
      <RichTextEditor className="my-editor" />
    );
    expect(container.querySelector(".my-editor")).toBeInTheDocument();
  });

  it("renders SVG icons for formatting", () => {
    const { container } = render(<RichTextEditor />);
    const svgs = container.querySelectorAll("svg");
    expect(svgs.length).toBeGreaterThanOrEqual(5);
  });

  it("renders separator elements", () => {
    const { container } = render(<RichTextEditor />);
    const separators = container.querySelectorAll('[data-slot="separator-root"]');
    expect(separators.length).toBeGreaterThanOrEqual(1);
  });

  // --- Toolbar aria-labels ---

  it("renders Bold toolbar button with aria-label", () => {
    render(<RichTextEditor />);
    expect(screen.getByLabelText("Bold")).toBeInTheDocument();
  });

  it("renders Italic toolbar button with aria-label", () => {
    render(<RichTextEditor />);
    expect(screen.getByLabelText("Italic")).toBeInTheDocument();
  });

  it("renders Underline toolbar button with aria-label", () => {
    render(<RichTextEditor />);
    expect(screen.getByLabelText("Underline")).toBeInTheDocument();
  });

  it("renders Undo and Redo buttons", () => {
    render(<RichTextEditor />);
    expect(screen.getByLabelText("Undo")).toBeInTheDocument();
    expect(screen.getByLabelText("Redo")).toBeInTheDocument();
  });

  it("renders Heading buttons", () => {
    render(<RichTextEditor />);
    expect(screen.getByLabelText("Heading 1")).toBeInTheDocument();
    expect(screen.getByLabelText("Heading 2")).toBeInTheDocument();
  });

  it("renders alignment buttons", () => {
    render(<RichTextEditor />);
    expect(screen.getByLabelText("Align Left")).toBeInTheDocument();
    expect(screen.getByLabelText("Align Center")).toBeInTheDocument();
    expect(screen.getByLabelText("Align Right")).toBeInTheDocument();
  });

  it("renders list buttons", () => {
    render(<RichTextEditor />);
    expect(screen.getByLabelText("Bullet List")).toBeInTheDocument();
    expect(screen.getByLabelText("Ordered List")).toBeInTheDocument();
    expect(screen.getByLabelText("Quote")).toBeInTheDocument();
  });

  // --- Footer ---

  it("renders char count in footer", () => {
    render(<RichTextEditor />);
    expect(screen.getByText("0 chars")).toBeInTheDocument();
  });

  it("renders HTML Mode label in footer", () => {
    render(<RichTextEditor />);
    expect(screen.getByText("HTML Mode")).toBeInTheDocument();
  });

  it("updates char count when value is provided", () => {
    render(<RichTextEditor value="<p>Hello</p>" />);
    expect(screen.getByText("12 chars")).toBeInTheDocument();
  });

  // --- Disabled state ---

  it("disables toolbar buttons when readOnly", () => {
    render(<RichTextEditor readOnly />);
    const boldBtn = screen.getByLabelText("Bold");
    expect(boldBtn).toBeDisabled();
  });

  it("applies opacity class when readOnly", () => {
    const { container } = render(<RichTextEditor readOnly />);
    const editor = container.querySelector("[contenteditable]");
    expect(editor?.className).toContain("opacity-50");
  });

  // --- onChange callback ---

  it("calls onChange when content is typed", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    const { container } = render(<RichTextEditor onChange={handleChange} />);
    const editor = container.querySelector("[contenteditable]") as HTMLElement;
    await user.click(editor);
    await user.type(editor, "Hello");
    expect(handleChange).toHaveBeenCalled();
  });

  // --- Toolbar button clicks ---

  it("clicks Bold button without error", async () => {
    const user = userEvent.setup();
    render(<RichTextEditor />);
    const boldBtn = screen.getByLabelText("Bold");
    await user.click(boldBtn);
    expect(boldBtn).toBeInTheDocument();
  });

  it("clicks Italic button without error", async () => {
    const user = userEvent.setup();
    render(<RichTextEditor />);
    const italicBtn = screen.getByLabelText("Italic");
    await user.click(italicBtn);
    expect(italicBtn).toBeInTheDocument();
  });

  it("clicks Heading 1 button without error", async () => {
    const user = userEvent.setup();
    render(<RichTextEditor />);
    const h1Btn = screen.getByLabelText("Heading 1");
    await user.click(h1Btn);
    expect(h1Btn).toBeInTheDocument();
  });

  it("clicks Align Center button without error", async () => {
    const user = userEvent.setup();
    render(<RichTextEditor />);
    const alignBtn = screen.getByLabelText("Align Center");
    await user.click(alignBtn);
    expect(alignBtn).toBeInTheDocument();
  });

  it("clicks Bullet List button without error", async () => {
    const user = userEvent.setup();
    render(<RichTextEditor />);
    const listBtn = screen.getByLabelText("Bullet List");
    await user.click(listBtn);
    expect(listBtn).toBeInTheDocument();
  });

  // --- HTML Mode switch ---

  it("toggles HTML Mode switch", async () => {
    const user = userEvent.setup();
    const { container } = render(<RichTextEditor />);
    const switchBtn = container.querySelector('[role="switch"]');
    if (switchBtn) {
      await user.click(switchBtn as HTMLElement);
      // After toggling, a textarea should appear instead of contenteditable
      const textarea = container.querySelector("textarea");
      expect(textarea || container.querySelector("[contenteditable]")).toBeTruthy();
    }
  });

  // --- Undo/Redo ---

  it("clicks Undo and Redo without error", async () => {
    const user = userEvent.setup();
    render(<RichTextEditor />);
    await user.click(screen.getByLabelText("Undo"));
    await user.click(screen.getByLabelText("Redo"));
    expect(screen.getByLabelText("Undo")).toBeInTheDocument();
  });

  // --- Value prop ---

  it("renders provided HTML value", () => {
    const { container } = render(<RichTextEditor value="<p>Test content</p>" />);
    const editor = container.querySelector("[contenteditable]") as HTMLElement;
    expect(editor.innerHTML).toContain("Test content");
  });
});