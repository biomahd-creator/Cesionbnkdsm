import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { MoreHorizontal } from "lucide-react";
import { MasterDataGrid } from "../advanced/MasterDataGrid";

const mockInvoices = [
  {
    id: "INV-001",
    client: "Empresa ABC S.A.",
    amount: 2500000,
    date: "2024-01-15",
    dueDate: "2024-02-15",
    status: "approved",
  },
  {
    id: "INV-002",
    client: "Comercial XYZ Ltda.",
    amount: 1800000,
    date: "2024-01-18",
    dueDate: "2024-02-18",
    status: "pending",
  },
  {
    id: "INV-003",
    client: "Industrias DEF S.A.",
    amount: 3200000,
    date: "2024-01-20",
    dueDate: "2024-02-20",
    status: "review",
  },
  {
    id: "INV-004",
    client: "Servicios GHI Ltda.",
    amount: 950000,
    date: "2024-01-22",
    dueDate: "2024-02-22",
    status: "rejected",
  },
  {
    id: "INV-005",
    client: "Distribuidora JKL S.A.",
    amount: 4100000,
    date: "2024-01-25",
    dueDate: "2024-02-25",
    status: "paid",
  },
];

const statusConfig: Record<string, { label: string; variant: "default" | "secondary" | "outline" | "destructive" }> = {
  approved: { label: "Aprobada", variant: "default" },
  pending: { label: "Pendiente", variant: "secondary" },
  review: { label: "En Revisión", variant: "outline" },
  rejected: { label: "Rechazada", variant: "destructive" },
  paid: { label: "Pagada", variant: "default" },
};

export function DataTableAdvanced() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredInvoices = mockInvoices.filter((invoice) => {
    const matchesSearch =
      invoice.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      invoice.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || invoice.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const totalPages = Math.ceil(filteredInvoices.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedInvoices = filteredInvoices.slice(startIndex, startIndex + itemsPerPage);

  return (
    <MasterDataGrid
      title="Facturas Recientes"
      description="Gestión de facturas y estados de pago"
      searchQuery={searchQuery}
      onSearchChange={setSearchQuery}
      searchPlaceholder="Buscar por cliente o número..."
      
      filterOptions={[
        {
          label: "Estado",
          value: statusFilter,
          options: [
            { label: "Todos los estados", value: "all" },
            { label: "Pendiente", value: "pending" },
            { label: "En Revisión", value: "review" },
            { label: "Aprobada", value: "approved" },
            { label: "Rechazada", value: "rejected" },
            { label: "Pagada", value: "paid" },
          ]
        }
      ]}
      onFilterChange={(_, val) => setStatusFilter(val)}
      onResetFilters={() => setStatusFilter("all")}
      
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={setCurrentPage}
      totalItems={filteredInvoices.length}
      itemsPerPage={itemsPerPage}
      startIndex={startIndex}
    >
        <div className="border-t">
            <Table>
            <TableHeader>
                <TableRow>
                <TableHead>N° Factura</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead>Monto</TableHead>
                <TableHead>Fecha Emisión</TableHead>
                <TableHead>Vencimiento</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {paginatedInvoices.map((invoice) => (
                <TableRow key={invoice.id}>
                    <TableCell className="font-medium">{invoice.id}</TableCell>
                    <TableCell>{invoice.client}</TableCell>
                    <TableCell>
                    ${invoice.amount.toLocaleString("es-CL")}
                    </TableCell>
                    <TableCell>{invoice.date}</TableCell>
                    <TableCell>{invoice.dueDate}</TableCell>
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
                        <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Ver detalles</DropdownMenuItem>
                        <DropdownMenuItem>Descargar PDF</DropdownMenuItem>
                        <DropdownMenuItem>Aprobar</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                            Rechazar
                        </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    </TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </div>
    </MasterDataGrid>
  );
}
