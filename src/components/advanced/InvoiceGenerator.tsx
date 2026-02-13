import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Plus, Trash2, Download, Eye, FileText } from "lucide-react";
import { Alert, AlertDescription } from "../ui/alert";

export interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

export interface InvoiceData {
  invoiceNumber: string;
  invoiceDate: string;
  dueDate: string;
  
  // Company info
  companyName: string;
  companyAddress: string;
  companyTaxId: string;
  companyPhone: string;
  companyEmail: string;
  
  // Client info
  clientName: string;
  clientAddress: string;
  clientTaxId: string;
  clientPhone: string;
  clientEmail: string;
  
  // Items
  items: InvoiceItem[];
  
  // Calculations
  subtotal: number;
  taxRate: number;
  taxAmount: number;
  discount: number;
  total: number;
  
  // Additional
  currency: string;
  notes: string;
  terms: string;
}

interface InvoiceGeneratorProps {
  initialData?: Partial<InvoiceData>;
  onGenerate?: (data: InvoiceData) => void;
  showPreview?: boolean;
}

export function InvoiceGenerator({
  initialData,
  onGenerate,
  showPreview = true,
}: InvoiceGeneratorProps) {
  const [invoice, setInvoice] = useState<InvoiceData>({
    invoiceNumber: initialData?.invoiceNumber || `INV-${Date.now().toString().slice(-6)}`,
    invoiceDate: initialData?.invoiceDate || new Date().toISOString().split("T")[0],
    dueDate: initialData?.dueDate || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
    
    companyName: initialData?.companyName || "Financio SpA",
    companyAddress: initialData?.companyAddress || "Av. Providencia 1234, Oficina 501, Providencia, Santiago",
    companyTaxId: initialData?.companyTaxId || "76.123.456-7",
    companyPhone: initialData?.companyPhone || "+56 2 2345 6789",
    companyEmail: initialData?.companyEmail || "contacto@financio.cl",
    
    clientName: initialData?.clientName || "",
    clientAddress: initialData?.clientAddress || "",
    clientTaxId: initialData?.clientTaxId || "",
    clientPhone: initialData?.clientPhone || "",
    clientEmail: initialData?.clientEmail || "",
    
    items: initialData?.items || [
      { id: "1", description: "", quantity: 1, unitPrice: 0, total: 0 },
    ],
    
    subtotal: 0,
    taxRate: initialData?.taxRate || 19,
    taxAmount: 0,
    discount: initialData?.discount || 0,
    total: 0,
    
    currency: initialData?.currency || "CLP",
    notes: initialData?.notes || "",
    terms: initialData?.terms || "Net payment within 30 days. Late interest of 1.5% monthly on overdue balance.",
  });

  const updateInvoice = (field: keyof InvoiceData, value: any) => {
    setInvoice((prev) => ({ ...prev, [field]: value }));
  };

  const addItem = () => {
    const newItem: InvoiceItem = {
      id: Date.now().toString(),
      description: "",
      quantity: 1,
      unitPrice: 0,
      total: 0,
    };
    setInvoice((prev) => ({
      ...prev,
      items: [...prev.items, newItem],
    }));
  };

  const removeItem = (id: string) => {
    if (invoice.items.length <= 1) return;
    setInvoice((prev) => ({
      ...prev,
      items: prev.items.filter((item) => item.id !== id),
    }));
  };

  const updateItem = (id: string, field: keyof InvoiceItem, value: any) => {
    setInvoice((prev) => {
      const updatedItems = prev.items.map((item) => {
        if (item.id !== id) return item;
        
        const updated = { ...item, [field]: value };
        
        // Recalculate total for this item
        if (field === "quantity" || field === "unitPrice") {
          updated.total = updated.quantity * updated.unitPrice;
        }
        
        return updated;
      });

      // Recalculate invoice totals
      const subtotal = updatedItems.reduce((sum, item) => sum + item.total, 0);
      const taxAmount = (subtotal * prev.taxRate) / 100;
      const total = subtotal + taxAmount - prev.discount;

      return {
        ...prev,
        items: updatedItems,
        subtotal,
        taxAmount,
        total,
      };
    });
  };

  const handleDiscountChange = (value: number) => {
    setInvoice((prev) => {
      const total = prev.subtotal + prev.taxAmount - value;
      return { ...prev, discount: value, total };
    });
  };

  const handleTaxRateChange = (value: number) => {
    setInvoice((prev) => {
      const taxAmount = (prev.subtotal * value) / 100;
      const total = prev.subtotal + taxAmount - prev.discount;
      return { ...prev, taxRate: value, taxAmount, total };
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: invoice.currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleGenerate = () => {
    onGenerate?.(invoice);
  };

  const exportToPDF = () => {
    // Create a simple print-friendly version
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;

    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Invoice ${invoice.invoiceNumber}</title>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { 
              font-family: 'Satoshi', -apple-system, BlinkMacSystemFont, sans-serif;
              padding: 40px;
              color: #1C2D3A;
            }
            .header { display: flex; justify-content: space-between; margin-bottom: 40px; }
            .company h1 { font-size: 24px; color: #1C2D3A; margin-bottom: 8px; }
            .company p { font-size: 12px; color: #64748b; margin: 2px 0; }
            .invoice-info { text-align: right; }
            .invoice-info h2 { font-size: 32px; color: #1C2D3A; margin-bottom: 8px; }
            .invoice-info p { font-size: 12px; color: #64748b; margin: 2px 0; }
            .parties { display: flex; justify-content: space-between; margin-bottom: 40px; }
            .party { flex: 1; }
            .party h3 { font-size: 12px; color: #64748b; margin-bottom: 8px; text-transform: uppercase; }
            .party p { font-size: 14px; margin: 4px 0; }
            table { width: 100%; border-collapse: collapse; margin-bottom: 40px; }
            th { background: #f1f5f9; padding: 12px; text-align: left; font-size: 12px; color: #64748b; text-transform: uppercase; }
            td { padding: 12px; border-bottom: 1px solid #e2e8f0; font-size: 14px; }
            .text-right { text-align: right; }
            .totals { margin-left: auto; width: 300px; }
            .totals-row { display: flex; justify-content: space-between; padding: 8px 0; font-size: 14px; }
            .totals-row.total { border-top: 2px solid #1C2D3A; padding-top: 12px; margin-top: 12px; font-size: 18px; font-weight: bold; }
            .footer { margin-top: 60px; padding-top: 20px; border-top: 1px solid #e2e8f0; }
            .footer h4 { font-size: 12px; margin-bottom: 8px; color: #64748b; }
            .footer p { font-size: 12px; color: #64748b; line-height: 1.6; }
            @media print { body { padding: 20px; } }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="company">
              <h1>${invoice.companyName}</h1>
              <p>${invoice.companyAddress}</p>
              <p>RUT: ${invoice.companyTaxId}</p>
              <p>Tel: ${invoice.companyPhone}</p>
              <p>${invoice.companyEmail}</p>
            </div>
            <div class="invoice-info">
              <h2>INVOICE</h2>
              <p><strong>N°:</strong> ${invoice.invoiceNumber}</p>
              <p><strong>Date:</strong> ${new Date(invoice.invoiceDate).toLocaleDateString("en-US")}</p>
              <p><strong>Due:</strong> ${new Date(invoice.dueDate).toLocaleDateString("en-US")}</p>
            </div>
          </div>

          <div class="parties">
            <div class="party">
              <h3>Bill To</h3>
              <p><strong>${invoice.clientName}</strong></p>
              <p>${invoice.clientAddress || "—"}</p>
              <p>RUT: ${invoice.clientTaxId || "—"}</p>
              <p>Tel: ${invoice.clientPhone || "—"}</p>
              <p>${invoice.clientEmail || "—"}</p>
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th>Description</th>
                <th class="text-right">Quantity</th>
                <th class="text-right">Unit Price</th>
                <th class="text-right">Total</th>
              </tr>
            </thead>
            <tbody>
              ${invoice.items.map(item => `
                <tr>
                  <td>${item.description}</td>
                  <td class="text-right">${item.quantity}</td>
                  <td class="text-right">${formatCurrency(item.unitPrice)}</td>
                  <td class="text-right">${formatCurrency(item.total)}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>

          <div class="totals">
            <div class="totals-row">
              <span>Subtotal:</span>
              <span>${formatCurrency(invoice.subtotal)}</span>
            </div>
            <div class="totals-row">
              <span>IVA (${invoice.taxRate}%):</span>
              <span>${formatCurrency(invoice.taxAmount)}</span>
            </div>
            ${invoice.discount > 0 ? `
              <div class="totals-row">
                <span>Discount:</span>
                <span>-${formatCurrency(invoice.discount)}</span>
              </div>
            ` : ""}
            <div class="totals-row total">
              <span>Total:</span>
              <span>${formatCurrency(invoice.total)}</span>
            </div>
          </div>

          ${invoice.notes ? `
            <div class="footer">
              <h4>Notes</h4>
              <p>${invoice.notes}</p>
            </div>
          ` : ""}

          <div class="footer">
            <h4>Terms & Conditions</h4>
            <p>${invoice.terms}</p>
          </div>
        </body>
      </html>
    `;

    printWindow.document.write(html);
    printWindow.document.close();
    printWindow.focus();
    
    // Wait for content to load before printing
    setTimeout(() => {
      printWindow.print();
    }, 250);
  };

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {/* Form Section */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Invoice Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="invoiceNumber">Invoice No.</Label>
                <Input
                  id="invoiceNumber"
                  value={invoice.invoiceNumber}
                  onChange={(e) => updateInvoice("invoiceNumber", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="currency">Currency</Label>
                <Select
                  value={invoice.currency}
                  onValueChange={(value) => updateInvoice("currency", value)}
                >
                  <SelectTrigger id="currency">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="CLP">CLP (Chilean Peso)</SelectItem>
                    <SelectItem value="USD">USD (Dollar)</SelectItem>
                    <SelectItem value="EUR">EUR (Euro)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="invoiceDate">Issue Date</Label>
                <Input
                  id="invoiceDate"
                  type="date"
                  value={invoice.invoiceDate}
                  onChange={(e) => updateInvoice("invoiceDate", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dueDate">Due Date</Label>
                <Input
                  id="dueDate"
                  type="date"
                  value={invoice.dueDate}
                  onChange={(e) => updateInvoice("dueDate", e.target.value)}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Client Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="clientName">Name / Company</Label>
              <Input
                id="clientName"
                value={invoice.clientName}
                onChange={(e) => updateInvoice("clientName", e.target.value)}
                placeholder="Global Corporation Inc."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="clientAddress">Address</Label>
              <Input
                id="clientAddress"
                value={invoice.clientAddress}
                onChange={(e) => updateInvoice("clientAddress", e.target.value)}
                placeholder="Av. Apoquindo 3000, Las Condes"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="clientTaxId">Tax ID</Label>
                <Input
                  id="clientTaxId"
                  value={invoice.clientTaxId}
                  onChange={(e) => updateInvoice("clientTaxId", e.target.value)}
                  placeholder="76.123.456-7"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="clientPhone">Phone</Label>
                <Input
                  id="clientPhone"
                  value={invoice.clientPhone}
                  onChange={(e) => updateInvoice("clientPhone", e.target.value)}
                  placeholder="+56 2 2345 6789"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="clientEmail">Email</Label>
              <Input
                id="clientEmail"
                type="email"
                value={invoice.clientEmail}
                onChange={(e) => updateInvoice("clientEmail", e.target.value)}
                placeholder="contacto@empresa.cl"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Invoice Items</CardTitle>
              <Button onClick={addItem} size="sm" variant="outline">
                <Plus className="h-4 w-4 mr-2" />
                Add Item
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {invoice.items.map((item, index) => (
              <div key={item.id} className="space-y-3 p-4 border rounded-lg">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Item {index + 1}</Badge>
                  {invoice.items.length > 1 && (
                    <Button
                      onClick={() => removeItem(item.id)}
                      size="sm"
                      variant="ghost"
                      className="h-8 w-8 p-0"
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  )}
                </div>

                <div className="space-y-2">
                  <Label>Description</Label>
                  <Textarea
                    value={item.description}
                    onChange={(e) =>
                      updateItem(item.id, "description", e.target.value)
                    }
                    placeholder="E.g.: Factoring service for invoice advance payment for January 2024"
                    rows={2}
                  />
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="space-y-2">
                    <Label>Quantity</Label>
                    <Input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        updateItem(item.id, "quantity", Number(e.target.value))
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Unit Price</Label>
                    <Input
                      type="number"
                      min="0"
                      value={item.unitPrice}
                      onChange={(e) =>
                        updateItem(item.id, "unitPrice", Number(e.target.value))
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Total</Label>
                    <Input
                      value={formatCurrency(item.total)}
                      disabled
                      className="bg-muted"
                    />
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Calculations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="taxRate">Tax (%)</Label>
                <Input
                  id="taxRate"
                  type="number"
                  min="0"
                  max="100"
                  value={invoice.taxRate}
                  onChange={(e) => handleTaxRateChange(Number(e.target.value))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="discount">Discount</Label>
                <Input
                  id="discount"
                  type="number"
                  min="0"
                  value={invoice.discount}
                  onChange={(e) => handleDiscountChange(Number(e.target.value))}
                />
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal:</span>
                <span>{formatCurrency(invoice.subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">
                  IVA ({invoice.taxRate}%):
                </span>
                <span>{formatCurrency(invoice.taxAmount)}</span>
              </div>
              {invoice.discount > 0 && (
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Discount:</span>
                  <span className="text-destructive">
                    -{formatCurrency(invoice.discount)}
                  </span>
                </div>
              )}
              <Separator />
              <div className="flex justify-between font-semibold">
                <span>Total:</span>
                <span className="text-primary">{formatCurrency(invoice.total)}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notes & Terms</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="notes">Notes (optional)</Label>
              <Textarea
                id="notes"
                value={invoice.notes}
                onChange={(e) => updateInvoice("notes", e.target.value)}
                placeholder="Additional information or comments"
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="terms">Terms & Conditions</Label>
              <Textarea
                id="terms"
                value={invoice.terms}
                onChange={(e) => updateInvoice("terms", e.target.value)}
                rows={3}
              />
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-3">
          <Button onClick={exportToPDF} className="flex-1 gap-2">
            <Download className="h-4 w-4" />
            Export PDF
          </Button>
          <Button onClick={handleGenerate} variant="outline" className="flex-1 gap-2">
            <Eye className="h-4 w-4" />
            Preview
          </Button>
        </div>
      </div>

      {/* Preview Section */}
      {showPreview && (
        <div className="lg:sticky lg:top-6 h-fit">
          <Card className="overflow-hidden">
            <CardHeader className="bg-muted/50">
              <CardTitle>Preview</CardTitle>
            </CardHeader>
            <CardContent className="p-6 bg-card">
              {/* Invoice Preview */}
              <div className="space-y-6 text-foreground">
                {/* Header */}
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-semibold text-foreground">{invoice.companyName}</h2>
                    <p className="text-xs text-muted-foreground mt-1">
                      {invoice.companyAddress}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      RUT: {invoice.companyTaxId}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {invoice.companyPhone} | {invoice.companyEmail}
                    </p>
                  </div>
                  <div className="text-right">
                    <h3 className="text-3xl font-semibold text-foreground">INVOICE</h3>
                    <p className="text-xs text-muted-foreground mt-2">
                      <strong>N°:</strong> {invoice.invoiceNumber}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      <strong>Date:</strong> {new Date(invoice.invoiceDate).toLocaleDateString("en-US")}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      <strong>Due:</strong> {new Date(invoice.dueDate).toLocaleDateString("en-US")}
                    </p>
                  </div>
                </div>

                <Separator />

                {/* Client Info */}
                <div>
                  <p className="text-xs text-muted-foreground mb-2">BILL TO</p>
                  <p className="font-semibold text-foreground">{invoice.clientName || "—"}</p>
                  <p className="text-xs text-muted-foreground">{invoice.clientAddress || "—"}</p>
                  <p className="text-xs text-muted-foreground">Tax ID: {invoice.clientTaxId || "—"}</p>
                  <p className="text-xs text-muted-foreground">
                    {invoice.clientPhone || "—"} | {invoice.clientEmail || "—"}
                  </p>
                </div>

                <Separator />

                {/* Items Table */}
                <div>
                  <div className="grid grid-cols-12 gap-2 text-xs text-muted-foreground mb-2 pb-2 border-b">
                    <div className="col-span-6">Description</div>
                    <div className="col-span-2 text-right">Qty.</div>
                    <div className="col-span-2 text-right">Unit Price</div>
                    <div className="col-span-2 text-right">Total</div>
                  </div>
                  {invoice.items.map((item) => (
                    <div key={item.id} className="grid grid-cols-12 gap-2 text-xs py-2 border-b">
                      <div className="col-span-6 text-foreground">{item.description || "—"}</div>
                      <div className="col-span-2 text-right text-foreground">{item.quantity}</div>
                      <div className="col-span-2 text-right text-foreground">{formatCurrency(item.unitPrice)}</div>
                      <div className="col-span-2 text-right font-semibold text-foreground">
                        {formatCurrency(item.total)}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div className="flex justify-end">
                  <div className="w-64 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal:</span>
                      <span className="text-foreground">{formatCurrency(invoice.subtotal)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">IVA ({invoice.taxRate}%):</span>
                      <span className="text-foreground">{formatCurrency(invoice.taxAmount)}</span>
                    </div>
                    {invoice.discount > 0 && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Discount:</span>
                        <span className="text-destructive">-{formatCurrency(invoice.discount)}</span>
                      </div>
                    )}
                    <Separator />
                    <div className="flex justify-between font-semibold">
                      <span className="text-foreground">Total:</span>
                      <span className="text-primary">{formatCurrency(invoice.total)}</span>
                    </div>
                  </div>
                </div>

                {/* Notes & Terms */}
                {invoice.notes && (
                  <>
                    <Separator />
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">NOTES</p>
                      <p className="text-xs text-foreground">{invoice.notes}</p>
                    </div>
                  </>
                )}

                <Separator />

                <div>
                  <p className="text-xs text-muted-foreground mb-1">TERMS & CONDITIONS</p>
                  <p className="text-xs text-foreground">{invoice.terms}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Alert className="mt-4">
            <AlertDescription className="text-xs">
              💡 The preview shows how your invoice will look. Use "Export PDF" to generate the final document.
            </AlertDescription>
          </Alert>
        </div>
      )}
    </div>
  );
}