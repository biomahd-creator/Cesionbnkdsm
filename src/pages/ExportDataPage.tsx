import { ComponentShowcase } from "../components/ui/component-showcase";
import { Badge } from "../components/ui/badge";
import { ExportData, ExportColumn, quickExportCSV } from "../components/advanced/ExportData";
import { Button } from "../components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { MasterDataGrid } from "../components/advanced/MasterDataGrid";
import { Download } from "lucide-react";

// Sample data: Invoices
const facturasData = [
  { id: "F-2024-001", cliente: "Global Corp S.A.", monto: 450000, estado: "Paid", fecha: "2024-01-15", region: "Central", moneda: "CLP" },
  { id: "F-2024-002", cliente: "Innovatech Solutions", monto: 320000, estado: "Approved", fecha: "2024-01-18", region: "South", moneda: "CLP" },
  { id: "F-2024-003", cliente: "National Distributors", monto: 420000, estado: "Paid", fecha: "2024-01-20", region: "North", moneda: "CLP" },
  { id: "F-2024-004", cliente: "TechCorp Industries", monto: 560000, estado: "Pending", fecha: "2024-01-22", region: "Central", moneda: "CLP" },
  { id: "F-2024-005", cliente: "Express Logistics", monto: 190000, estado: "Approved", fecha: "2024-01-25", region: "South", moneda: "CLP" },
  { id: "F-2024-006", cliente: "MegaCorp International", monto: 680000, estado: "Paid", fecha: "2024-02-01", region: "North", moneda: "CLP" },
  { id: "F-2024-007", cliente: "Pacific Trading Co.", monto: 340000, estado: "Rejected", fecha: "2024-02-05", region: "South", moneda: "CLP" },
  { id: "F-2024-008", cliente: "Southern Industries", monto: 420000, estado: "Paid", fecha: "2024-02-08", region: "South", moneda: "CLP" },
];

const facturasColumns: ExportColumn[] = [
  { key: "id", label: "Invoice ID" },
  { key: "cliente", label: "Client" },
  { key: "monto", label: "Amount", format: (value) => `$${value.toLocaleString("en-US")}` },
  { key: "estado", label: "Status" },
  { key: "fecha", label: "Date", format: (value) => new Date(value).toLocaleDateString("en-US") },
  { key: "region", label: "Region" },
  { key: "moneda", label: "Currency" },
];

// Sales dataset
const ventasData = [
  { producto: "CRM Software", categoria: "Technology", precio: 12000, stock: 45, proveedor: "TechSupply Inc." },
  { producto: "Consulting", categoria: "Services", precio: 35000, stock: 0, proveedor: "BusinessConsult" },
  { producto: "Server Hardware", categoria: "Technology", precio: 2100, stock: 12, proveedor: "TechSupply Inc." },
  { producto: "Training", categoria: "Services", precio: 3000, stock: 0, proveedor: "EduCorp" },
  { producto: "Office Licenses", categoria: "Software", precio: 450, stock: 120, proveedor: "SoftwarePlus" },
];

export function ExportDataPage() {
  return (
    <ComponentShowcase
      title="Export to CSV/Excel"
      description="Configurable data export to CSV and Excel (XLSX) formats. Supports column selection, custom formatting, preview before export, and integrates seamlessly with MasterDataGrid for advanced table export capabilities."
      category="Advanced"
      preview={
        <MasterDataGrid
          title="Invoices"
          description="8 invoices with all available columns"
          showExport={false}
          toolbarActions={
            <ExportData
              data={facturasData}
              defaultFilename="facturas-2024"
              availableColumns={facturasColumns}
              onExport={(format, config) => {
                console.log(`Exported ${facturasData.length} records to ${format}`, config);
              }}
            />
          }
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Client</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Region</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {facturasData.map((factura) => (
                <TableRow key={factura.id}>
                  <TableCell className="font-medium">{factura.id}</TableCell>
                  <TableCell>{factura.cliente}</TableCell>
                  <TableCell className="text-right">${factura.monto.toLocaleString("en-US")}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        factura.estado === "Paid" ? "success-soft-outline" :
                        factura.estado === "Approved" ? "info-soft-outline" :
                        factura.estado === "Pending" ? "warning-soft-outline" :
                        "destructive-soft-outline"
                      }
                    >
                      {factura.estado}
                    </Badge>
                  </TableCell>
                  <TableCell>{new Date(factura.fecha).toLocaleDateString("en-US")}</TableCell>
                  <TableCell>{factura.region}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </MasterDataGrid>
      }
      code={`import { ExportData, ExportColumn } from "@/components/advanced/ExportData";
import { MasterDataGrid } from "@/components/advanced/MasterDataGrid";

const columns: ExportColumn[] = [
  { key: "id", label: "ID" },
  { key: "cliente", label: "Cliente" },
  { key: "monto", label: "Monto", format: (v) => \`$\${v.toLocaleString()}\` },
];

<MasterDataGrid
  title="Facturas"
  showExport={false}
  toolbarActions={
    <ExportData
      data={data}
      defaultFilename="facturas-2024"
      availableColumns={columns}
      onExport={(format, config) => console.log(format, config)}
    />
  }
>
  <Table>...</Table>
</MasterDataGrid>`}
      props={[
        {
          name: "data",
          type: "Record<string, any>[]",
          description: "Array of data objects to export.",
          required: true,
        },
        {
          name: "defaultFilename",
          type: "string",
          default: '"export"',
          description: "Default filename for the exported file (without extension).",
        },
        {
          name: "availableColumns",
          type: "ExportColumn[]",
          description: "Column definitions with key, label, and optional format function.",
          required: true,
        },
        {
          name: "onExport",
          type: "(format: string, config: object) => void",
          description: "Callback after export completes.",
        },
      ]}
      examples={[
        {
          title: "Quick Export (No UI Dialog)",
          description: "Use quickExportCSV() for instant CSV download without a dialog.",
          preview: (
            <MasterDataGrid
              title="Sales"
              description="Quick export without dialog"
              showExport={false}
              toolbarActions={
                <Button
                  onClick={() => quickExportCSV(ventasData, "productos-stock")}
                  variant="default"
                  size="sm"
                  className="gap-2"
                >
                  <Download className="h-4 w-4" />
                  Quick Export CSV
                </Button>
              }
            >
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead className="text-right">Price</TableHead>
                    <TableHead className="text-right">Stock</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {ventasData.map((item, idx) => (
                    <TableRow key={idx}>
                      <TableCell className="font-medium">{item.producto}</TableCell>
                      <TableCell>{item.categoria}</TableCell>
                      <TableCell className="text-right">${item.precio.toLocaleString("en-US")}</TableCell>
                      <TableCell className="text-right">{item.stock}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </MasterDataGrid>
          ),
          code: `import { quickExportCSV } from "@/components/advanced/ExportData";

<Button onClick={() => quickExportCSV(data, "filename")}>
  Quick Export CSV
</Button>`,
        },
      ]}
    />
  );
}