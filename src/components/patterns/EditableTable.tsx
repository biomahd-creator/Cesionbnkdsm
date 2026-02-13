import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Calendar } from "../ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { 
  X, 
  Edit2, 
  Calendar as CalendarIcon,
  Check,
  DollarSign,
  FileText,
  Building2
} from "lucide-react";
import { format } from "date-fns";
import { MasterDataGrid } from "../advanced/MasterDataGrid";

// Types for invoice data
interface Invoice {
  id: string;
  invoiceNumber: string;
  client: string;
  amount: number;
  dueDate: Date;
  status: "pending" | "approved" | "rejected" | "paid";
  priority: boolean;
}

// Initial mock data
const initialInvoices: Invoice[] = [
  {
    id: "1",
    invoiceNumber: "INV-2024-001",
    client: "Comercial Martinez S.A.",
    amount: 45000,
    dueDate: new Date(2024, 11, 25),
    status: "pending",
    priority: true,
  },
  {
    id: "2",
    invoiceNumber: "INV-2024-002",
    client: "Distribuidora Norte",
    amount: 32500,
    dueDate: new Date(2024, 11, 30),
    status: "approved",
    priority: false,
  },
  {
    id: "3",
    invoiceNumber: "INV-2024-003",
    client: "Textiles del Sur",
    amount: 58900,
    dueDate: new Date(2025, 0, 5),
    status: "pending",
    priority: true,
  },
  {
    id: "4",
    invoiceNumber: "INV-2024-004",
    client: "Importadora Global",
    amount: 23400,
    dueDate: new Date(2025, 0, 10),
    status: "paid",
    priority: false,
  },
];

const statusConfig = {
  pending: { label: "Pending", variant: "secondary" as const },
  approved: { label: "Approved", variant: "default" as const },
  rejected: { label: "Rejected", variant: "destructive" as const },
  paid: { label: "Paid", variant: "outline" as const },
};

export function EditableTable() {
  const [invoices, setInvoices] = React.useState<Invoice[]>(initialInvoices);
  const [editingCell, setEditingCell] = React.useState<{
    id: string;
    field: keyof Invoice;
  } | null>(null);
  const [editValue, setEditValue] = React.useState<string | number | Date | boolean>("");

  // Start editing a cell
  const startEditing = (id: string, field: keyof Invoice, currentValue: any) => {
    setEditingCell({ id, field });
    setEditValue(currentValue);
  };

  // Save the edited value
  const saveEdit = () => {
    if (!editingCell) return;

    setInvoices((prev) =>
      prev.map((invoice) =>
        invoice.id === editingCell.id
          ? { ...invoice, [editingCell.field]: editValue }
          : invoice
      )
    );
    setEditingCell(null);
    setEditValue("");
  };

  // Cancel editing
  const cancelEdit = () => {
    setEditingCell(null);
    setEditValue("");
  };

  // Check if a specific cell is being edited
  const isEditing = (id: string, field: keyof Invoice) =>
    editingCell?.id === id && editingCell?.field === field;

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="flex flex-col gap-8 p-8">
      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
          <FileText className="h-6 w-6 text-primary" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h1>Editable Table Cells</h1>
            <Badge variant="outline" className="border-primary/50 text-primary">📱 Responsive</Badge>
          </div>
          <p className="text-muted-foreground">
            Interactive table with inline editing of different data types: text, numbers,
            dates, statuses and checkboxes. Click on any cell to edit.
          </p>
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <Edit2 className="h-4 w-4 text-primary" />
              Inline Editing
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Click on any cell to activate edit mode. Save with the check button
              or cancel with X.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-primary" />
              Data Validation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Numeric fields only accept numbers. Selectors have predefined options
              to maintain consistency.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-primary" />
              Data Types
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Supports text, currency-formatted numbers, calendar dates, status badges
              and checkboxes.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Editable Table replaced with MasterDataGrid */}
      <MasterDataGrid
        title="Pending Factoring Invoices"
        description="Click on any cell to edit values. Changes are saved in real time."
        showExport={false}
        showRefresh={false}
        showViewOptions={false}
      >
          <div className="border-t">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Invoice No.</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-center">Priority</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow key={invoice.id}>
                    {/* Invoice Number - Text Input */}
                    <TableCell>
                      {isEditing(invoice.id, "invoiceNumber") ? (
                        <div className="flex items-center gap-2">
                          <Input
                            value={editValue as string}
                            onChange={(e) => setEditValue(e.target.value)}
                            className="h-8 w-32"
                            autoFocus
                            onKeyDown={(e) => {
                              if (e.key === "Enter") saveEdit();
                              if (e.key === "Escape") cancelEdit();
                            }}
                          />
                          <div className="flex gap-1">
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-8 w-8 p-0"
                              onClick={saveEdit}
                            >
                              <Check className="h-4 w-4 text-primary" />
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-8 w-8 p-0"
                              onClick={cancelEdit}
                            >
                              <X className="h-4 w-4 text-destructive" />
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div
                          className="flex items-center gap-2 cursor-pointer hover:bg-accent/50 rounded px-2 py-1 -mx-2 -my-1 transition-colors"
                          onClick={() =>
                            startEditing(invoice.id, "invoiceNumber", invoice.invoiceNumber)
                          }
                        >
                          <span>{invoice.invoiceNumber}</span>
                          <Edit2 className="h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      )}
                    </TableCell>

                    {/* Client - Text Input */}
                    <TableCell>
                      {isEditing(invoice.id, "client") ? (
                        <div className="flex items-center gap-2">
                          <Input
                            value={editValue as string}
                            onChange={(e) => setEditValue(e.target.value)}
                            className="h-8 w-48"
                            autoFocus
                            onKeyDown={(e) => {
                              if (e.key === "Enter") saveEdit();
                              if (e.key === "Escape") cancelEdit();
                            }}
                          />
                          <div className="flex gap-1">
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-8 w-8 p-0"
                              onClick={saveEdit}
                            >
                              <Check className="h-4 w-4 text-primary" />
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-8 w-8 p-0"
                              onClick={cancelEdit}
                            >
                              <X className="h-4 w-4 text-destructive" />
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div
                          className="cursor-pointer hover:bg-accent/50 rounded px-2 py-1 -mx-2 -my-1 transition-colors"
                          onClick={() => startEditing(invoice.id, "client", invoice.client)}
                        >
                          {invoice.client}
                        </div>
                      )}
                    </TableCell>

                    {/* Amount - Number Input */}
                    <TableCell className="text-right">
                      {isEditing(invoice.id, "amount") ? (
                        <div className="flex items-center gap-2 justify-end">
                          <Input
                            type="number"
                            value={editValue as number}
                            onChange={(e) => setEditValue(Number(e.target.value))}
                            className="h-8 w-32 text-right"
                            autoFocus
                            onKeyDown={(e) => {
                              if (e.key === "Enter") saveEdit();
                              if (e.key === "Escape") cancelEdit();
                            }}
                          />
                          <div className="flex gap-1">
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-8 w-8 p-0"
                              onClick={saveEdit}
                            >
                              <Check className="h-4 w-4 text-primary" />
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-8 w-8 p-0"
                              onClick={cancelEdit}
                            >
                              <X className="h-4 w-4 text-destructive" />
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div
                          className="cursor-pointer hover:bg-accent/50 rounded px-2 py-1 -mx-2 -my-1 transition-colors"
                          onClick={() => startEditing(invoice.id, "amount", invoice.amount)}
                        >
                          {formatCurrency(invoice.amount)}
                        </div>
                      )}
                    </TableCell>

                    {/* Due Date - Calendar Popover */}
                    <TableCell>
                      {isEditing(invoice.id, "dueDate") ? (
                        <div className="flex items-center gap-2">
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className="h-8 w-40 justify-start gap-2"
                              >
                                <CalendarIcon className="h-4 w-4" />
                                {editValue instanceof Date
                                  ? format(editValue, "MM/dd/yyyy")
                                  : "Select"}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={editValue as Date}
                                onSelect={(date) => {
                                  if (date) setEditValue(date);
                                }}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <div className="flex gap-1">
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-8 w-8 p-0"
                              onClick={saveEdit}
                            >
                              <Check className="h-4 w-4 text-primary" />
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-8 w-8 p-0"
                              onClick={cancelEdit}
                            >
                              <X className="h-4 w-4 text-destructive" />
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div
                          className="cursor-pointer hover:bg-accent/50 rounded px-2 py-1 -mx-2 -my-1 transition-colors"
                          onClick={() => startEditing(invoice.id, "dueDate", invoice.dueDate)}
                        >
                          {format(invoice.dueDate, "MM/dd/yyyy")}
                        </div>
                      )}
                    </TableCell>

                    {/* Status - Select */}
                    <TableCell>
                      {isEditing(invoice.id, "status") ? (
                        <div className="flex items-center gap-2">
                          <Select
                            value={editValue as string}
                            onValueChange={(value) => setEditValue(value)}
                          >
                            <SelectTrigger className="h-8 w-36">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="pending">Pending</SelectItem>
                              <SelectItem value="approved">Approved</SelectItem>
                              <SelectItem value="rejected">Rejected</SelectItem>
                              <SelectItem value="paid">Paid</SelectItem>
                            </SelectContent>
                          </Select>
                          <div className="flex gap-1">
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-8 w-8 p-0"
                              onClick={saveEdit}
                            >
                              <Check className="h-4 w-4 text-primary" />
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-8 w-8 p-0"
                              onClick={cancelEdit}
                            >
                              <X className="h-4 w-4 text-destructive" />
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div
                          className="cursor-pointer hover:bg-accent/50 rounded px-2 py-1 -mx-2 -my-1 transition-colors inline-block"
                          onClick={() => startEditing(invoice.id, "status", invoice.status)}
                        >
                          <Badge variant={statusConfig[invoice.status].variant}>
                            {statusConfig[invoice.status].label}
                          </Badge>
                        </div>
                      )}
                    </TableCell>

                    {/* Priority - Checkbox */}
                    <TableCell className="text-center">
                      <div className="flex items-center justify-center">
                        <Checkbox
                          checked={invoice.priority}
                          onCheckedChange={(checked) => {
                            setInvoices((prev) =>
                              prev.map((inv) =>
                                inv.id === invoice.id
                                  ? { ...inv, priority: checked as boolean }
                                  : inv
                              )
                            );
                          }}
                        />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
      </MasterDataGrid>

      {/* Technical Details */}
      <Card>
        <CardHeader>
          <CardTitle>Technical Details</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="mb-2">Components Used</h3>
            <ul className="space-y-1 text-muted-foreground">
              <li>• <strong>MasterDataGrid:</strong> Standard container</li>
              <li>• <strong>Input:</strong> Text and number editing</li>
              <li>• <strong>Select:</strong> Status selector</li>
              <li>• <strong>Calendar + Popover:</strong> Date picker</li>
              <li>• <strong>Checkbox:</strong> Priority field</li>
              <li>• <strong>Badge:</strong> Status display</li>
              <li>• <strong>Button:</strong> Save/cancel actions</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2">Features</h3>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Click to edit any cell</li>
              <li>• Save with Enter or Check button</li>
              <li>• Cancel with Escape or X button</li>
              <li>• Data type validation</li>
              <li>• Automatic currency formatting</li>
              <li>• Visual status badges</li>
              <li>• Hover feedback on editable cells</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Use Cases */}
      <Card>
        <CardHeader>
          <CardTitle>Use Cases in Factoring</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <h4 className="mb-2 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                Quick Correction
              </h4>
              <p className="text-muted-foreground">
                Edit amounts, dates or client names directly without modal forms,
                ideal for quick data corrections.
              </p>
            </div>
            <div>
              <h4 className="mb-2 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                Status Management
              </h4>
              <p className="text-muted-foreground">
                Change invoice statuses (pending, approved, paid) without leaving the main
                list view.
              </p>
            </div>
            <div>
              <h4 className="mb-2 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                Prioritization
              </h4>
              <p className="text-muted-foreground">
                Mark invoices as priority with a simple click, useful for workflow
                management.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}