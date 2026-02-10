import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";

const invoices = [
  {
    id: "INV-001",
    client: "Empresa ABC S.A.",
    amount: 2500000,
    date: "2024-01-15",
    status: "approved",
  },
  {
    id: "INV-002",
    client: "Comercial XYZ Ltda.",
    amount: 1800000,
    date: "2024-01-18",
    status: "pending",
  },
  {
    id: "INV-003",
    client: "Industrias DEF S.A.",
    amount: 3200000,
    date: "2024-01-20",
    status: "rejected",
  },
];

const statusConfig = {
  approved: { label: "Aprobada", variant: "default" as const },
  pending: { label: "Pendiente", variant: "secondary" as const },
  rejected: { label: "Rechazada", variant: "destructive" as const },
};

export function InvoiceTable() {
  return (
    <div className="border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>N° Factura</TableHead>
            <TableHead>Cliente</TableHead>
            <TableHead>Monto</TableHead>
            <TableHead>Fecha</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="font-medium">{invoice.id}</TableCell>
              <TableCell>{invoice.client}</TableCell>
              <TableCell>${invoice.amount.toLocaleString("es-CL")}</TableCell>
              <TableCell>{invoice.date}</TableCell>
              <TableCell>
                <Badge variant={statusConfig[invoice.status].variant}>
                  {statusConfig[invoice.status].label}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Ver detalles</DropdownMenuItem>
                    <DropdownMenuItem>Descargar PDF</DropdownMenuItem>
                    <DropdownMenuItem>Editar</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
