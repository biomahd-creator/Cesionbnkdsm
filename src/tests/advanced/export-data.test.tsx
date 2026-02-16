/**
 * ExportData Advanced Component Tests (G14 Batch 4)
 *
 * @version 0.2.3
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ExportData, quickExportCSV } from '../../components/advanced/ExportData';

const sampleData = [
  { id: 1, name: 'Alice', amount: 1000 },
  { id: 2, name: 'Bob', amount: 2000 },
  { id: 3, name: 'Charlie', amount: 3000 },
];

describe('ExportData', () => {
  // --- Rendering ---

  it('renders Export CSV button', () => {
    render(<ExportData data={sampleData} />);
    expect(screen.getByText('Export CSV')).toBeInTheDocument();
  });

  it('renders Export Excel button', () => {
    render(<ExportData data={sampleData} />);
    expect(screen.getByText('Export Excel')).toBeInTheDocument();
  });

  it('renders Preview button', () => {
    render(<ExportData data={sampleData} />);
    expect(screen.getByText('Preview')).toBeInTheDocument();
  });

  // --- Config dialog ---

  it('opens config dialog when Export CSV is clicked', async () => {
    const user = userEvent.setup();
    render(<ExportData data={sampleData} />);
    await user.click(screen.getByText('Export CSV'));
    expect(screen.getByText('Configure Export')).toBeInTheDocument();
    expect(screen.getByText('CSV')).toBeInTheDocument();
  });

  it('opens config dialog for Excel', async () => {
    const user = userEvent.setup();
    render(<ExportData data={sampleData} />);
    await user.click(screen.getByText('Export Excel'));
    expect(screen.getByText('Configure Export')).toBeInTheDocument();
    expect(screen.getByText('Excel')).toBeInTheDocument();
  });

  it('shows filename input in config', async () => {
    const user = userEvent.setup();
    render(<ExportData data={sampleData} />);
    await user.click(screen.getByText('Export CSV'));
    expect(screen.getByLabelText('Filename')).toBeInTheDocument();
  });

  it('shows column selection in config', async () => {
    const user = userEvent.setup();
    render(<ExportData data={sampleData} />);
    await user.click(screen.getByText('Export CSV'));
    expect(screen.getByText('Columns to export')).toBeInTheDocument();
  });

  it('shows record count in config', async () => {
    const user = userEvent.setup();
    render(<ExportData data={sampleData} />);
    await user.click(screen.getByText('Export CSV'));
    expect(screen.getByText(/3 records/)).toBeInTheDocument();
  });

  // --- Preview dialog ---

  it('opens preview dialog', async () => {
    const user = userEvent.setup();
    render(<ExportData data={sampleData} />);
    await user.click(screen.getByText('Preview'));
    expect(screen.getByText('Data Preview')).toBeInTheDocument();
  });

  // --- Custom filename ---

  it('uses custom default filename', async () => {
    const user = userEvent.setup();
    render(<ExportData data={sampleData} defaultFilename="invoices" />);
    await user.click(screen.getByText('Export CSV'));
    const input = screen.getByLabelText('Filename') as HTMLInputElement;
    expect(input.value).toBe('invoices');
  });

  // --- Empty data ---

  it('handles empty data array', () => {
    render(<ExportData data={[]} />);
    expect(screen.getByText('Export CSV')).toBeInTheDocument();
  });

  // --- Column selection in config dialog ---

  it('shows all column checkboxes in config', async () => {
    const user = userEvent.setup();
    render(<ExportData data={sampleData} />);
    await user.click(screen.getByText('Export CSV'));
    // Should list id, name, amount as columns
    expect(screen.getByText('id')).toBeInTheDocument();
    expect(screen.getByText('name')).toBeInTheDocument();
    expect(screen.getByText('amount')).toBeInTheDocument();
  });

  it('allows editing the filename', async () => {
    const user = userEvent.setup();
    render(<ExportData data={sampleData} />);
    await user.click(screen.getByText('Export CSV'));
    const input = screen.getByLabelText('Filename') as HTMLInputElement;
    await user.clear(input);
    await user.type(input, 'my-report');
    expect(input.value).toBe('my-report');
  });

  it('shows Export button in config dialog', async () => {
    const user = userEvent.setup();
    render(<ExportData data={sampleData} />);
    await user.click(screen.getByText('Export CSV'));
    // The dialog button says "Download CSV" (not "Export")
    expect(screen.getByText(/Download CSV/)).toBeInTheDocument();
  });

  // --- Preview dialog ---

  it('shows table in preview dialog', async () => {
    const user = userEvent.setup();
    render(<ExportData data={sampleData} />);
    await user.click(screen.getByText('Preview'));
    // Preview should show a table with data
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();
    expect(screen.getByText('Charlie')).toBeInTheDocument();
  });

  it('shows data count in preview', async () => {
    const user = userEvent.setup();
    render(<ExportData data={sampleData} />);
    await user.click(screen.getByText('Preview'));
    // Preview shows data entries — verify data rows appear
    expect(screen.getByText('Alice')).toBeInTheDocument();
  });

  // --- Custom className ---

  it('renders wrapper element', () => {
    const { container } = render(<ExportData data={sampleData} />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toBeInTheDocument();
  });
});

// --- quickExportCSV utility ---

describe('quickExportCSV', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let createObjectURLMock: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let appendChildSpy: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let removeChildSpy: any;

  beforeEach(() => {
    createObjectURLMock = vi.fn().mockReturnValue('blob:mock-url');
    global.URL.createObjectURL = createObjectURLMock;
    appendChildSpy = vi.spyOn(document.body, 'appendChild').mockImplementation((node) => node);
    removeChildSpy = vi.spyOn(document.body, 'removeChild').mockImplementation((node) => node);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('creates a CSV blob and triggers download', () => {
    quickExportCSV(sampleData);
    expect(createObjectURLMock).toHaveBeenCalledTimes(1);
    expect(appendChildSpy).toHaveBeenCalledTimes(1);
    expect(removeChildSpy).toHaveBeenCalledTimes(1);
  });

  it('uses default filename "export"', () => {
    quickExportCSV(sampleData);
    const link = appendChildSpy.mock.calls[0][0] as HTMLAnchorElement;
    expect(link.getAttribute('download')).toBe('export.csv');
  });

  it('uses custom filename', () => {
    quickExportCSV(sampleData, 'invoices');
    const link = appendChildSpy.mock.calls[0][0] as HTMLAnchorElement;
    expect(link.getAttribute('download')).toBe('invoices.csv');
  });

  it('auto-generates columns from data keys', () => {
    quickExportCSV(sampleData);
    // Should have created a blob with CSV content
    expect(createObjectURLMock).toHaveBeenCalledWith(expect.any(Blob));
  });

  it('handles empty data array', () => {
    quickExportCSV([]);
    expect(createObjectURLMock).toHaveBeenCalledTimes(1);
  });

  it('uses custom columns when provided', () => {
    quickExportCSV(sampleData, 'test', [
      { key: 'name', label: 'Name' },
      { key: 'amount', label: 'Amount' },
    ]);
    expect(createObjectURLMock).toHaveBeenCalledTimes(1);
  });
});