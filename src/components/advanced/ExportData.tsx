import { useState } from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Download, FileSpreadsheet, FileText, Eye, Settings2 } from "lucide-react";
import { Alert, AlertDescription } from "../ui/alert";

export interface ExportColumn {
  key: string;
  label: string;
  format?: (value: any) => string;
}

export interface ExportConfig {
  filename?: string;
  columns?: ExportColumn[];
  includeHeaders?: boolean;
  dateFormat?: string;
  numberFormat?: "es-ES" | "en-US";
  sheetName?: string;
}

interface ExportDataProps {
  data: any[];
  defaultFilename?: string;
  availableColumns?: ExportColumn[];
  onExport?: (format: "csv" | "excel", config: ExportConfig) => void;
}

export function ExportData({
  data,
  defaultFilename = "export",
  availableColumns,
  onExport,
}: ExportDataProps) {
  const [showConfig, setShowConfig] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [format, setFormat] = useState<"csv" | "excel">("csv");
  const [filename, setFilename] = useState(defaultFilename);
  const [includeHeaders, setIncludeHeaders] = useState(true);
  const [selectedColumns, setSelectedColumns] = useState<string[]>(
    availableColumns?.map((col) => col.key) || Object.keys(data[0] || {})
  );

  const columns: ExportColumn[] =
    availableColumns ||
    Object.keys(data[0] || {}).map((key) => ({
      key,
      label: key,
    }));

  const toggleColumn = (key: string) => {
    setSelectedColumns((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const selectAllColumns = () => {
    setSelectedColumns(columns.map((col) => col.key));
  };

  const deselectAllColumns = () => {
    setSelectedColumns([]);
  };

  const getFilteredData = () => {
    return data.map((row) => {
      const filtered: any = {};
      selectedColumns.forEach((key) => {
        const column = columns.find((col) => col.key === key);
        const value = row[key];
        filtered[key] = column?.format ? column.format(value) : value;
      });
      return filtered;
    });
  };

  const exportToCSV = () => {
    const filteredData = getFilteredData();
    const selectedColumnObjs = columns.filter((col) =>
      selectedColumns.includes(col.key)
    );

    let csv = "";

    // Add headers
    if (includeHeaders) {
      csv += selectedColumnObjs.map((col) => `"${col.label}"`).join(",") + "\n";
    }

    // Add rows
    filteredData.forEach((row) => {
      csv +=
        selectedColumnObjs
          .map((col) => {
            const value = row[col.key];
            // Escape quotes and wrap in quotes if contains comma, quote, or newline
            const stringValue = String(value ?? "");
            if (
              stringValue.includes(",") ||
              stringValue.includes('"') ||
              stringValue.includes("\n")
            ) {
              return `"${stringValue.replace(/"/g, '""')}"`;
            }
            return stringValue;
          })
          .join(",") + "\n";
    });

    // Create download link
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `${filename}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    onExport?.("csv", {
      filename,
      columns: selectedColumnObjs,
      includeHeaders,
    });
  };

  const exportToExcel = async () => {
    // Dynamic import to avoid bundle size issues
    const XLSX = await import("xlsx");

    const filteredData = getFilteredData();
    const selectedColumnObjs = columns.filter((col) =>
      selectedColumns.includes(col.key)
    );

    // Prepare data for Excel
    const excelData = filteredData.map((row) => {
      const excelRow: any = {};
      selectedColumnObjs.forEach((col) => {
        excelRow[col.label] = row[col.key];
      });
      return excelRow;
    });

    // Create workbook and worksheet
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(excelData, {
      header: selectedColumnObjs.map((col) => col.label),
    });

    // Set column widths
    ws["!cols"] = selectedColumnObjs.map(() => ({ wch: 20 }));

    // Add worksheet to workbook
    XLSX.utils.book_append_sheet(wb, ws, "Data");

    // Generate Excel file and download
    XLSX.writeFile(wb, `${filename}.xlsx`);

    onExport?.("excel", {
      filename,
      columns: selectedColumnObjs,
      includeHeaders,
      sheetName: "Data",
    });
  };

  const handleExport = () => {
    if (format === "csv") {
      exportToCSV();
    } else {
      exportToExcel();
    }
    setShowConfig(false);
  };

  const previewData = getFilteredData().slice(0, 5);
  const selectedColumnObjs = columns.filter((col) =>
    selectedColumns.includes(col.key)
  );

  return (
    <div>
      {/* Export Buttons */}
      <div className="flex flex-wrap gap-2">
        <Button
          onClick={() => {
            setFormat("csv");
            setShowConfig(true);
          }}
          variant="outline"
          className="gap-2"
        >
          <FileText className="h-4 w-4" />
          Export CSV
        </Button>

        <Button
          onClick={() => {
            setFormat("excel");
            setShowConfig(true);
          }}
          variant="outline"
          className="gap-2"
        >
          <FileSpreadsheet className="h-4 w-4" />
          Export Excel
        </Button>

        <Button
          onClick={() => setShowPreview(true)}
          variant="ghost"
          className="gap-2"
        >
          <Eye className="h-4 w-4" />
          Preview
        </Button>
      </div>

      {/* Configuration Dialog */}
      <Dialog open={showConfig} onOpenChange={setShowConfig}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Settings2 className="h-5 w-5" />
              Configure Export
              <Badge variant={format === "csv" ? "secondary" : "default"}>
                {format === "csv" ? "CSV" : "Excel"}
              </Badge>
            </DialogTitle>
            <DialogDescription>
              Customize export options before downloading the file
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6">
            {/* Filename */}
            <div className="space-y-2">
              <Label htmlFor="filename">Filename</Label>
              <Input
                id="filename"
                value={filename}
                onChange={(e) => setFilename(e.target.value)}
                placeholder="export"
              />
              <p className="text-xs text-muted-foreground">
                The .{format === "csv" ? "csv" : "xlsx"} extension will be added{" "}
                automatically
              </p>
            </div>

            {/* Column Selection */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label>Columns to export</Label>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={selectAllColumns}
                    className="h-7 text-xs"
                  >
                    All
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={deselectAllColumns}
                    className="h-7 text-xs"
                  >
                    None
                  </Button>
                </div>
              </div>

              <div className="border rounded-lg p-4 space-y-3 max-h-[200px] overflow-y-auto">
                {columns.map((col) => (
                  <div key={col.key} className="flex items-center space-x-2">
                    <Checkbox
                      id={col.key}
                      checked={selectedColumns.includes(col.key)}
                      onCheckedChange={() => toggleColumn(col.key)}
                    />
                    <Label
                      htmlFor={col.key}
                      className="cursor-pointer font-normal"
                    >
                      {col.label}
                    </Label>
                  </div>
                ))}
              </div>

              <p className="text-xs text-muted-foreground">
                {selectedColumns.length} of {columns.length} columns
                selected
              </p>
            </div>

            {/* Options */}
            <div className="space-y-3">
              <Label>Options</Label>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="headers"
                  checked={includeHeaders}
                  onCheckedChange={(checked) =>
                    setIncludeHeaders(checked as boolean)
                  }
                />
                <Label htmlFor="headers" className="cursor-pointer font-normal">
                  Include headers
                </Label>
              </div>
            </div>

            {/* Info */}
            <Alert>
              <AlertDescription className="text-xs">
                <strong>
                  {data.length.toLocaleString("en-US")} records
                </strong>{" "}
                will be exported with{" "}
                <strong>{selectedColumns.length} columns</strong>.
                {format === "excel" && (
                  <span className="block mt-1">
                    📊 The Excel file will include automatic formatting and
                    optimized column widths.
                  </span>
                )}
              </AlertDescription>
            </Alert>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setShowConfig(false)}>
              Cancel
            </Button>
            <Button onClick={handleExport} disabled={selectedColumns.length === 0}>
              <Download className="mr-2 h-4 w-4" />
              Download {format === "csv" ? "CSV" : "Excel"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Preview Dialog */}
      <Dialog open={showPreview} onOpenChange={setShowPreview}>
        <DialogContent className="max-w-6xl max-h-[90vh]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5" />
              Data Preview
            </DialogTitle>
            <DialogDescription>
              Showing first 5 rows of {data.length} total records
            </DialogDescription>
          </DialogHeader>

          <div className="rounded-md border overflow-auto max-h-[60vh]">
            <Table>
              <TableHeader>
                <TableRow>
                  {selectedColumnObjs.map((col) => (
                    <TableHead key={col.key}>{col.label}</TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {previewData.length > 0 ? (
                  previewData.map((row, idx) => (
                    <TableRow key={idx}>
                      {selectedColumnObjs.map((col) => (
                        <TableCell key={col.key}>
                          {String(row[col.key] ?? "—")}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={selectedColumnObjs.length}
                      className="text-center h-24"
                    >
                      No data available
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

          <Alert>
            <AlertDescription className="text-xs">
              💡 This is only a preview. Actual data will be exported
              based on the selected configuration.
            </AlertDescription>
          </Alert>

          <DialogFooter>
            <Button onClick={() => setShowPreview(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// Utility function for quick export (no configuration)
export function quickExportCSV(
  data: any[],
  filename: string = "export",
  columns?: ExportColumn[]
) {
  const cols = columns || Object.keys(data[0] || {}).map((key) => ({ key, label: key }));
  
  let csv = cols.map((col) => `"${col.label}"`).join(",") + "\n";
  
  data.forEach((row) => {
    csv +=
      cols
        .map((col) => {
          const value = col.format ? col.format(row[col.key]) : row[col.key];
          const stringValue = String(value ?? "");
          if (
            stringValue.includes(",") ||
            stringValue.includes('"') ||
            stringValue.includes("\n")
          ) {
            return `"${stringValue.replace(/"/g, '""')}"`;
          }
          return stringValue;
        })
        .join(",") + "\n";
  });

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  link.setAttribute("href", url);
  link.setAttribute("download", `${filename}.csv`);
  link.style.visibility = "hidden";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}