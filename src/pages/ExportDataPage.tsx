import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ExportData, ExportColumn, quickExportCSV } from "../components/advanced/ExportData";
import { Separator } from "../components/ui/separator";
import { AlertCircle, Info, Download } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
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

// Sample data: Facturas
const facturasData = [
  {
    id: "F-2024-001",
    cliente: "Corporación Global S.A.",
    monto: 450000,
    estado: "Pagada",
    fecha: "2024-01-15",
    region: "Centro",
    moneda: "CLP",
  },
  {
    id: "F-2024-002",
    cliente: "Innovatech Solutions",
    monto: 320000,
    estado: "Aprobada",
    fecha: "2024-01-18",
    region: "Sur",
    moneda: "CLP",
  },
  {
    id: "F-2024-003",
    cliente: "Distribuidora Nacional",
    monto: 420000,
    estado: "Pagada",
    fecha: "2024-01-20",
    region: "Norte",
    moneda: "CLP",
  },
  {
    id: "F-2024-004",
    cliente: "TechCorp Industries",
    monto: 560000,
    estado: "Pendiente",
    fecha: "2024-01-22",
    region: "Centro",
    moneda: "CLP",
  },
  {
    id: "F-2024-005",
    cliente: "Logística Express",
    monto: 190000,
    estado: "Aprobada",
    fecha: "2024-01-25",
    region: "Sur",
    moneda: "CLP",
  },
  {
    id: "F-2024-006",
    cliente: "MegaCorp Internacional",
    monto: 680000,
    estado: "Pagada",
    fecha: "2024-02-01",
    region: "Norte",
    moneda: "CLP",
  },
  {
    id: "F-2024-007",
    cliente: "Comercial del Pacífico",
    monto: 340000,
    estado: "Rechazada",
    fecha: "2024-02-05",
    region: "Sur",
    moneda: "CLP",
  },
  {
    id: "F-2024-008",
    cliente: "Industrias del Sur",
    monto: 420000,
    estado: "Pagada",
    fecha: "2024-02-08",
    region: "Sur",
    moneda: "CLP",
  },
];

// Custom columns with formatting
const facturasColumns: ExportColumn[] = [
  { key: "id", label: "ID Factura" },
  { key: "cliente", label: "Cliente" },
  {
    key: "monto",
    label: "Monto",
    format: (value) => `$${value.toLocaleString("es-ES")}`,
  },
  { key: "estado", label: "Estado" },
  {
    key: "fecha",
    label: "Fecha",
    format: (value) => new Date(value).toLocaleDateString("es-ES"),
  },
  { key: "region", label: "Región" },
  { key: "moneda", label: "Moneda" },
];

// Large dataset example (100 records)
const generateLargeDataset = (count: number = 100) => {
  const clientes = [
    "Corporación Global",
    "Innovatech Solutions",
    "Distribuidora Nacional",
    "TechCorp Industries",
    "Logística Express",
    "MegaCorp Internacional",
  ];
  const estados: Array<"Pagada" | "Aprobada" | "Pendiente" | "Rechazada"> = [
    "Pagada",
    "Aprobada",
    "Pendiente",
    "Rechazada",
  ];
  const regiones = ["Centro", "Norte", "Sur"];

  return Array.from({ length: count }, (_, i) => ({
    id: `F-2024-${String(i + 1).padStart(4, "0")}`,
    cliente: clientes[Math.floor(Math.random() * clientes.length)],
    monto: Math.floor(Math.random() * 500000) + 100000,
    estado: estados[Math.floor(Math.random() * estados.length)],
    fecha: new Date(2024, 0, Math.floor(Math.random() * 28) + 1)
      .toISOString()
      .split("T")[0],
    region: regiones[Math.floor(Math.random() * regiones.length)],
    moneda: "CLP",
  }));
};

const largeDataset = generateLargeDataset(100);

// Ventas dataset
const ventasData = [
  {
    producto: "Software CRM",
    categoria: "Tecnología",
    precio: 12000,
    stock: 45,
    proveedor: "TechSupply Inc.",
  },
  {
    producto: "Consultoría",
    categoria: "Servicios",
    precio: 35000,
    stock: 0,
    proveedor: "BusinessConsult",
  },
  {
    producto: "Hardware Servidor",
    categoria: "Tecnología",
    precio: 2100,
    stock: 12,
    proveedor: "TechSupply Inc.",
  },
  {
    producto: "Capacitación",
    categoria: "Servicios",
    precio: 3000,
    stock: 0,
    proveedor: "EduCorp",
  },
  {
    producto: "Licencias Office",
    categoria: "Software",
    precio: 450,
    stock: 120,
    proveedor: "SoftwarePlus",
  },
];

export function ExportDataPage() {
  return (
    <div className="space-y-8 pb-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-2xl font-medium">Export to CSV/Excel</h1>
          <Badge variant="default">📊 Data</Badge>
          <Badge variant="secondary">NEW</Badge>
        </div>
        <p className="text-muted-foreground">
          Exportación configurable de datos a formatos CSV y Excel (XLSX) con
          selección de columnas, formato personalizado y vista previa
        </p>
      </div>

      <Separator />

      {/* Description */}
      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          El componente <strong>ExportData</strong> se integra perfectamente en el <strong>MasterDataGrid</strong> para proporcionar capacidades de exportación avanzadas en todas las tablas del sistema.
        </AlertDescription>
      </Alert>

      {/* Example 1: Basic Export */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Exportación Básica: Facturas</h3>
        <p className="text-sm text-muted-foreground">Implementación usando MasterDataGrid con botón de exportación integrado.</p>
        
        <MasterDataGrid
          title="Facturas"
          description="8 facturas con todas las columnas disponibles"
          showExport={false} // Desactivamos el default para usar el componente avanzado
          toolbarActions={
            <ExportData
              data={facturasData}
              defaultFilename="facturas-2024"
              availableColumns={facturasColumns}
              onExport={(format, config) => {
                console.log(
                  `Exportado ${facturasData.length} registros a ${format}`,
                  config
                );
              }}
            />
          }
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead className="text-right">Monto</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Fecha</TableHead>
                <TableHead>Región</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {facturasData.map((factura) => (
                <TableRow key={factura.id}>
                  <TableCell className="font-medium">{factura.id}</TableCell>
                  <TableCell>{factura.cliente}</TableCell>
                  <TableCell className="text-right">
                    ${factura.monto.toLocaleString("es-ES")}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        factura.estado === "Pagada"
                          ? "success-soft-outline"
                          : factura.estado === "Aprobada"
                          ? "info-soft-outline"
                          : factura.estado === "Pendiente"
                          ? "warning-soft-outline"
                          : "destructive-soft-outline"
                      }
                    >
                      {factura.estado}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {new Date(factura.fecha).toLocaleDateString("es-ES")}
                  </TableCell>
                  <TableCell>{factura.region}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </MasterDataGrid>
      </div>

      {/* Example 2: Custom Columns */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Con Formato Personalizado</h3>
        <p className="text-sm text-muted-foreground">Columnas con formato customizado para montos y fechas.</p>
        
        <MasterDataGrid
          title="Facturas (Formato)"
          description="Ejemplo con formato personalizado en columnas"
          showExport={false}
          toolbarActions={
            <ExportData
              data={facturasData}
              defaultFilename="facturas-formateadas"
              availableColumns={facturasColumns}
            />
          }
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Cliente</TableHead>
                <TableHead className="text-right">Monto</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Fecha</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {facturasData.slice(0, 5).map((factura) => (
                <TableRow key={factura.id}>
                  <TableCell className="font-medium">
                    {factura.cliente}
                  </TableCell>
                  <TableCell className="text-right">
                    ${factura.monto.toLocaleString("es-ES")}
                  </TableCell>
                  <TableCell>
                    <Badge variant={
                      factura.estado === "Pagada" ? "success-soft-outline" :
                      factura.estado === "Aprobada" ? "info-soft-outline" :
                      factura.estado === "Pendiente" ? "warning-soft-outline" :
                      "destructive-soft-outline"
                    }>{factura.estado}</Badge>
                  </TableCell>
                  <TableCell>
                    {new Date(factura.fecha).toLocaleDateString("es-ES")}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </MasterDataGrid>
      </div>

      {/* Example 3: Large Dataset */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Dataset Grande: 100 Facturas</h3>
        <p className="text-sm text-muted-foreground">Exportación optimizada para grandes volúmenes de datos.</p>
        
        <MasterDataGrid
          title="Dataset Grande"
          description="100 Registros con optimización de performance"
          showExport={false}
          toolbarActions={
            <ExportData
              data={largeDataset}
              defaultFilename="facturas-completo-2024"
              availableColumns={facturasColumns}
            />
          }
        >
          <div className="p-8 text-center text-muted-foreground bg-muted/10">
            <p>Tabla con {largeDataset.length} registros (virtualizada en producción)</p>
          </div>
        </MasterDataGrid>
      </div>

      {/* Example 4: Quick Export */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Exportación Rápida (Sin UI)</h3>
        <p className="text-sm text-muted-foreground">Función utilitaria para exportar sin diálogo.</p>
        
        <MasterDataGrid
          title="Ventas"
          description="Tabla de productos y stock"
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
                  <TableHead>Producto</TableHead>
                  <TableHead>Categoría</TableHead>
                  <TableHead className="text-right">Precio</TableHead>
                  <TableHead className="text-right">Stock</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {ventasData.map((item, idx) => (
                  <TableRow key={idx}>
                    <TableCell className="font-medium">
                      {item.producto}
                    </TableCell>
                    <TableCell>{item.categoria}</TableCell>
                    <TableCell className="text-right">
                      ${item.precio.toLocaleString("es-ES")}
                    </TableCell>
                    <TableCell className="text-right">{item.stock}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
        </MasterDataGrid>
      </div>

    </div>
  );
}