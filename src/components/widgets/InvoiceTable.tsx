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
  approved: { label: "Approved", variant: "default" as const },
  pending: { label: "Pending", variant: "secondary" as const },
  rejected: { label: "Rejected", variant: "destructive" as const },
};

export function InvoiceTable() {
  return (
    <div className="border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice #</TableHead>
            <TableHead>Client</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="font-medium">{invoice.id}</TableCell>
              <TableCell>{invoice.client}</TableCell>
              <TableCell>${invoice.amount.toLocaleString("en-US")}</TableCell>
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
                    <DropdownMenuItem>View details</DropdownMenuItem>
                    <DropdownMenuItem>Download PDF</DropdownMenuItem>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
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