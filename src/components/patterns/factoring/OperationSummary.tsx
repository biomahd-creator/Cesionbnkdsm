import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";
import { Separator } from "../../ui/separator";
import { Alert, AlertDescription } from "../../ui/alert";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import {
  ArrowLeft,
  RefreshCw,
  CheckCircle2,
  XCircle,
  Clock,
  AlertCircle,
  FileText,
  Building2,
  User,
  Calendar,
  DollarSign,
} from "lucide-react";

interface OperationSummaryProps {
  onBack: () => void;
  operationData?: {
    operationId: string;
    clientName: string;
    clientRut: string;
    invoiceCount: number;
    totalAmount: number;
    netAdvance: number;
    rate: number;
  };
}

// Mock data para los documentos
const mockDocuments = [
  {
    id: "DOC-001",
    folio: "F-2024-1001",
    amount: 1200000,
    status: "success" as const,
    message: "Procesado correctamente",
    date: "2024-01-15",
  },
  {
    id: "DOC-002",
    folio: "F-2024-1002",
    amount: 850000,
    status: "success" as const,
    message: "Procesado correctamente",
    date: "2024-01-18",
  },
  {
    id: "DOC-003",
    folio: "F-2024-1003",
    amount: 2100000,
    status: "success" as const,
    message: "Procesado correctamente",
    date: "2024-01-20",
  },
  {
    id: "DOC-004",
    folio: "F-2024-1004",
    amount: 450000,
    status: "error" as const,
    message: "Error en validación de firma digital",
    date: "2024-01-22",
  },
  {
    id: "DOC-005",
    folio: "F-2024-1005",
    amount: 1500000,
    status: "success" as const,
    message: "Procesado correctamente",
    date: "2024-01-25",
  },
  {
    id: "DOC-006",
    folio: "F-2024-2001",
    amount: 980000,
    status: "pending" as const,
    message: "Pendiente de validación SII",
    date: "2024-01-10",
  },
  {
    id: "DOC-007",
    folio: "F-2024-2002",
    amount: 1250000,
    status: "success" as const,
    message: "Procesado correctamente",
    date: "2024-01-12",
  },
];

export function OperationSummary({ onBack, operationData }: OperationSummaryProps) {
  // Valores por defecto si no se proporciona data
  const data = operationData || {
    operationId: "OP-2025-156",
    clientName: "Distribuidora XYZ S.A.",
    clientRut: "76.123.456-7",
    invoiceCount: 7,
    totalAmount: 8330000,
    netAdvance: 8122550,
    rate: 2.5,
  };

  // Calcular estadísticas de documentos
  const successCount = mockDocuments.filter(d => d.status === "success").length;
  const errorCount = mockDocuments.filter(d => d.status === "error").length;
  const pendingCount = mockDocuments.filter(d => d.status === "pending").length;
  const totalDocs = mockDocuments.length;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getStatusIcon = (status: "success" | "error" | "pending") => {
    switch (status) {
      case "success":
        return <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />;
      case "error":
        return <XCircle className="h-4 w-4 text-red-600 dark:text-red-400" />;
      case "pending":
        return <Clock className="h-4 w-4 text-orange-600 dark:text-orange-400" />;
    }
  };

  const getStatusBadge = (status: "success" | "error" | "pending") => {
    const config = {
      success: { label: "Exitoso", variant: "success-soft-outline" as const, className: "" },
      error: { label: "Error", variant: "destructive-soft-outline" as const, className: "" },
      pending: { label: "Pendiente", variant: "warning-soft-outline" as const, className: "" },
    };

    const { label, variant, className } = config[status];
    return (
      <Badge variant={variant} className={className}>
        {label}
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header con botón volver */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" onClick={onBack}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Resumen de Operación</h2>
            <p className="text-sm text-muted-foreground">
              Operación #{data.operationId}
            </p>
          </div>
        </div>
        <Badge variant="success-soft-outline">
          <CheckCircle2 className="h-3 w-3 mr-1" />
          Enviada
        </Badge>
      </div>

      {/* Alerta de estado */}
      <Alert className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900">
        <AlertCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
        <AlertDescription className="text-blue-700 dark:text-blue-400">
          La operación ha sido procesada. {successCount} de {totalDocs} documentos fueron procesados exitosamente.
          {errorCount > 0 && ` ${errorCount} documento(s) presentaron errores.`}
          {pendingCount > 0 && ` ${pendingCount} documento(s) están pendientes.`}
        </AlertDescription>
      </Alert>

      {/* Grid con información */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Información del Endosatario */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <Building2 className="h-4 w-4 text-primary" />
              Información del Endosatario
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Razón Social:</span>
                <span className="font-medium">{data.clientName}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">RUT:</span>
                <span className="font-medium">{data.clientRut}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">N° Operación:</span>
                <span className="font-medium">{data.operationId}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Información de Negociación */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-primary" />
              Información de Negociación
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Valor Nominal:</span>
                <span className="font-medium">{formatCurrency(data.totalAmount)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Tasa:</span>
                <span className="font-medium">{data.rate}%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Descuento:</span>
                <span className="font-medium text-red-600 dark:text-red-400">
                  -{formatCurrency(data.totalAmount - data.netAdvance)}
                </span>
              </div>
              <Separator />
              <div className="flex justify-between text-sm">
                <span className="font-medium">Valor Adelanto:</span>
                <span className="font-semibold text-green-600 dark:text-green-400">
                  {formatCurrency(data.netAdvance)}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabla de Valor Desembolso */}
      <Card>
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg">Valor Desembolso</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                Detalle de documentos procesados en esta operación
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <RefreshCw className="h-3 w-3" />
                Re-intentar Todas
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Estadísticas rápidas */}
          <div className="grid grid-cols-3 gap-4 mb-4 p-4 bg-muted/30 rounded-lg">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
              <div>
                <p className="text-xs text-muted-foreground">Exitosos</p>
                <p className="text-lg font-semibold">{successCount}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <XCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
              <div>
                <p className="text-xs text-muted-foreground">Con Errores</p>
                <p className="text-lg font-semibold">{errorCount}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-orange-600 dark:text-orange-400" />
              <div>
                <p className="text-xs text-muted-foreground">Pendientes</p>
                <p className="text-lg font-semibold">{pendingCount}</p>
              </div>
            </div>
          </div>

          {/* Tabla de documentos */}
          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Estado</TableHead>
                  <TableHead>Folio</TableHead>
                  <TableHead>Fecha</TableHead>
                  <TableHead className="text-right">Monto</TableHead>
                  <TableHead>Mensaje</TableHead>
                  <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockDocuments.map((doc) => (
                  <TableRow key={doc.id}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {getStatusIcon(doc.status)}
                        {getStatusBadge(doc.status)}
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">{doc.folio}</TableCell>
                    <TableCell className="text-muted-foreground text-sm">
                      {doc.date}
                    </TableCell>
                    <TableCell className="text-right font-medium">
                      {formatCurrency(doc.amount)}
                    </TableCell>
                    <TableCell className="text-sm">
                      <span className={doc.status === "error" ? "text-red-600 dark:text-red-400" : "text-muted-foreground"}>
                        {doc.message}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      {doc.status === "error" && (
                        <Button variant="ghost" size="sm" className="gap-1">
                          <RefreshCw className="h-3 w-3" />
                          Reintentar
                        </Button>
                      )}
                      {doc.status === "success" && (
                        <Button variant="ghost" size="sm" className="gap-1">
                          <FileText className="h-3 w-3" />
                          Ver
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Botón de volver al final */}
      <div className="flex justify-end">
        <Button onClick={onBack} variant="outline" className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Volver a la Lista
        </Button>
      </div>
    </div>
  );
}
