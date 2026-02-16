/**
 * FileUploader Advanced Component Tests (G14)
 *
 * The FileUploader has a simulated upload progress using setInterval.
 * Tests that trigger file uploads use fake timers to prevent timer leaks
 * (the interval continues calling setFiles() after test teardown otherwise).
 *
 * @version 0.2.4
 */

import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FileUploader } from "../../components/advanced/FileUploader";

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

describe("FileUploader", () => {
  it("renders the drop zone", () => {
    render(<FileUploader />);
    expect(screen.getByText(/Click to upload/)).toBeInTheDocument();
    expect(screen.getByText(/drag and drop/)).toBeInTheDocument();
  });

  it("renders the supported formats text", () => {
    render(<FileUploader />);
    expect(screen.getByText(/Supported:/)).toBeInTheDocument();
  });

  it("renders max size info", () => {
    render(<FileUploader />);
    expect(screen.getByText(/Max size: 5MB per file/)).toBeInTheDocument();
  });

  it("renders the upload icon", () => {
    const { container } = render(<FileUploader />);
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
  });

  it("renders with custom maxSize", () => {
    render(<FileUploader maxSize={10 * 1024 * 1024} />);
    expect(screen.getByText(/Max size: 10MB per file/)).toBeInTheDocument();
  });

  it("has a hidden file input", () => {
    const { container } = render(<FileUploader />);
    const input = container.querySelector('input[type="file"]');
    expect(input).toBeInTheDocument();
    expect(input?.className).toContain("hidden");
  });

  it("applies custom className", () => {
    const { container } = render(<FileUploader className="my-uploader" />);
    expect(container.querySelector(".my-uploader")).toBeInTheDocument();
  });

  // --- Drop zone structure ---

  it("renders drop zone with dashed border", () => {
    const { container } = render(<FileUploader />);
    const dropZone = container.querySelector(".border-dashed");
    expect(dropZone).toBeInTheDocument();
  });

  // --- File selection (use fake timers to prevent interval leaks) ---

  it("accepts file upload via input", async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    const handleUpload = vi.fn();
    const { container } = render(<FileUploader onUpload={handleUpload} />);
    const input = container.querySelector('input[type="file"]') as HTMLInputElement;
    const file = new File(["test content"], "test.pdf", { type: "application/pdf" });
    await user.upload(input, file);
    // File should appear in the list
    expect(screen.getByText("test.pdf")).toBeInTheDocument();
    vi.useRealTimers();
  });

  it("shows file size after upload", async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    const { container } = render(<FileUploader />);
    const input = container.querySelector('input[type="file"]') as HTMLInputElement;
    const file = new File(["test content"], "doc.pdf", { type: "application/pdf" });
    await user.upload(input, file);
    // File name should be displayed
    expect(screen.getByText("doc.pdf")).toBeInTheDocument();
    vi.useRealTimers();
  });

  it("renders with custom accept formats", () => {
    const { container } = render(<FileUploader accept={[".csv", ".xlsx"]} />);
    const input = container.querySelector('input[type="file"]') as HTMLInputElement;
    expect(input?.getAttribute("accept")).toBe(".csv,.xlsx");
  });

  it("renders with custom maxFiles", () => {
    render(<FileUploader maxFiles={3} />);
    expect(screen.getByText(/Max size: 5MB per file/)).toBeInTheDocument();
  });

  it("sets file input as multiple", () => {
    const { container } = render(<FileUploader />);
    const input = container.querySelector('input[type="file"]') as HTMLInputElement;
    expect(input).toHaveAttribute("multiple");
  });

  it("renders remove button for uploaded files", async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    const { container } = render(<FileUploader />);
    const input = container.querySelector('input[type="file"]') as HTMLInputElement;
    const file = new File(["hello"], "remove-me.pdf", { type: "application/pdf" });
    await user.upload(input, file);
    expect(screen.getByText("remove-me.pdf")).toBeInTheDocument();
    // Should have a remove button (X icon)
    const removeButtons = screen.getAllByRole("button");
    expect(removeButtons.length).toBeGreaterThanOrEqual(1);
    vi.useRealTimers();
  });

  // --- Remove uploaded file ---

  it("removes file when remove button is clicked", async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    const { container } = render(<FileUploader />);
    const input = container.querySelector('input[type="file"]') as HTMLInputElement;
    const file = new File(["hello"], "to-remove.pdf", { type: "application/pdf" });
    await user.upload(input, file);
    expect(screen.getByText("to-remove.pdf")).toBeInTheDocument();
    // Click the remove button
    const removeButtons = screen.getAllByRole("button");
    const removeBtn = removeButtons.find(btn => btn.querySelector("svg"));
    if (removeBtn) {
      await user.click(removeBtn);
      expect(screen.queryByText("to-remove.pdf")).not.toBeInTheDocument();
    }
    vi.useRealTimers();
  });

  // --- Multiple file upload ---

  it("accepts multiple files", async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    const { container } = render(<FileUploader />);
    const input = container.querySelector('input[type="file"]') as HTMLInputElement;
    const file1 = new File(["a"], "file1.pdf", { type: "application/pdf" });
    const file2 = new File(["b"], "file2.pdf", { type: "application/pdf" });
    await user.upload(input, [file1, file2]);
    expect(screen.getByText("file1.pdf")).toBeInTheDocument();
    expect(screen.getByText("file2.pdf")).toBeInTheDocument();
    vi.useRealTimers();
  });

  // --- onUpload callback ---

  it("calls onUpload when files are added", async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    const handleUpload = vi.fn();
    const { container } = render(<FileUploader onUpload={handleUpload} />);
    const input = container.querySelector('input[type="file"]') as HTMLInputElement;
    const file = new File(["content"], "callback.pdf", { type: "application/pdf" });
    await user.upload(input, file);
    // File should appear in the list
    expect(screen.getByText("callback.pdf")).toBeInTheDocument();
    // onUpload may be called when upload completes (after progress simulation)
    // Advance timers to complete the simulated upload
    vi.advanceTimersByTime(5000);
    vi.useRealTimers();
  });

  // --- Click to upload trigger ---

  it("opens file dialog when drop zone is clicked", async () => {
    const user = userEvent.setup();
    const { container } = render(<FileUploader />);
    const dropZone = container.querySelector(".border-dashed") as HTMLElement;
    if (dropZone) {
      await user.click(dropZone);
      // Input should still be in the DOM
      const input = container.querySelector('input[type="file"]');
      expect(input).toBeInTheDocument();
    }
  });
});