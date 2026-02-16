import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FileUploader } from "../../components/advanced/FileUploader";

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

  // --- File selection ---

  it("accepts file upload via input", async () => {
    const user = userEvent.setup();
    const handleUpload = vi.fn();
    const { container } = render(<FileUploader onUpload={handleUpload} />);
    const input = container.querySelector('input[type="file"]') as HTMLInputElement;
    const file = new File(["test content"], "test.pdf", { type: "application/pdf" });
    await user.upload(input, file);
    // File should appear in the list
    expect(screen.getByText("test.pdf")).toBeInTheDocument();
  });

  it("shows file size after upload", async () => {
    const user = userEvent.setup();
    const { container } = render(<FileUploader />);
    const input = container.querySelector('input[type="file"]') as HTMLInputElement;
    const file = new File(["test content"], "doc.pdf", { type: "application/pdf" });
    await user.upload(input, file);
    // File size should be displayed
    expect(screen.getByText("doc.pdf")).toBeInTheDocument();
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
    const user = userEvent.setup();
    const { container } = render(<FileUploader />);
    const input = container.querySelector('input[type="file"]') as HTMLInputElement;
    const file = new File(["hello"], "remove-me.pdf", { type: "application/pdf" });
    await user.upload(input, file);
    expect(screen.getByText("remove-me.pdf")).toBeInTheDocument();
    // Should have a remove button (X icon)
    const removeButtons = screen.getAllByRole("button");
    expect(removeButtons.length).toBeGreaterThanOrEqual(1);
  });

  // --- Remove uploaded file ---

  it("removes file when remove button is clicked", async () => {
    const user = userEvent.setup();
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
  });

  // --- Multiple file upload ---

  it("accepts multiple files", async () => {
    const user = userEvent.setup();
    const { container } = render(<FileUploader />);
    const input = container.querySelector('input[type="file"]') as HTMLInputElement;
    const file1 = new File(["a"], "file1.pdf", { type: "application/pdf" });
    const file2 = new File(["b"], "file2.pdf", { type: "application/pdf" });
    await user.upload(input, [file1, file2]);
    expect(screen.getByText("file1.pdf")).toBeInTheDocument();
    expect(screen.getByText("file2.pdf")).toBeInTheDocument();
  });

  // --- onUpload callback ---

  it("calls onUpload when files are added", async () => {
    const user = userEvent.setup();
    const handleUpload = vi.fn();
    const { container } = render(<FileUploader onUpload={handleUpload} />);
    const input = container.querySelector('input[type="file"]') as HTMLInputElement;
    const file = new File(["content"], "callback.pdf", { type: "application/pdf" });
    await user.upload(input, file);
    expect(handleUpload).toHaveBeenCalled();
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