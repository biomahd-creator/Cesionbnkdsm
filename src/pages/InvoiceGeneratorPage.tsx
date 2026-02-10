import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { InvoiceGenerator, InvoiceData } from "../components/advanced/InvoiceGenerator";
import { Separator } from "../components/ui/separator";
import { AlertCircle, Info } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";

export function InvoiceGeneratorPage() {
  // Example: Factoring service invoice
  const factoringData: Partial<InvoiceData> = {
    invoiceNumber: "FACT-2024-001",
    clientName: "Corporación Global S.A.",
    clientAddress: "Av. Apoquindo 3000, Oficina 1205, Las Condes, Santiago",
    clientTaxId: "76.987.654-3",
    clientPhone: "+56 2 2987 6543",
    clientEmail: "finanzas@corpglobal.cl",
    items: [
      {
        id: "1",
        description: "Servicio de Factoring - Adelanto de facturas del mes de Enero 2024",
        quantity: 1,
        unitPrice: 2500000,
        total: 2500000,
      },
      {
        id: "2",
        description: "Comisión por administración de cartera",
        quantity: 1,
        unitPrice: 350000,
        total: 350000,
      },
    ],
    notes: "Esta factura corresponde al servicio de factoring proporcionado durante el período indicado. El pago debe realizarse dentro de los plazos establecidos.",
  };

  // Example: Consulting service invoice
  const consultingData: Partial<InvoiceData> = {
    invoiceNumber: "CONS-2024-042",
    clientName: "Innovatech Solutions SpA",
    clientAddress: "Av. Providencia 1234, Oficina 801, Providencia, Santiago",
    clientTaxId: "77.123.456-8",
    clientPhone: "+56 2 2123 4567",
    clientEmail: "admin@innovatech.cl",
    items: [
      {
        id: "1",
        description: "Consultoría estratégica financiera - 40 horas",
        quantity: 40,
        unitPrice: 75000,
        total: 3000000,
      },
      {
        id: "2",
        description: "Análisis de flujo de caja y proyecciones",
        quantity: 1,
        unitPrice: 1200000,
        total: 1200000,
      },
      {
        id: "3",
        description: "Presentación ejecutiva y recomendaciones",
        quantity: 1,
        unitPrice: 500000,
        total: 500000,
      },
    ],
    discount: 200000,
    notes: "Descuento aplicado por cliente frecuente. Agradecemos su preferencia.",
    terms: "Pago neto a 15 días. Incluye soporte post-consultoría por 30 días.",
  };

  return (
    <div className="space-y-8 pb-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-2xl font-medium">Invoice Generator</h1>
          <Badge variant="default">💼 Business</Badge>
          <Badge variant="secondary">NEW</Badge>
        </div>
        <p className="text-muted-foreground">
          Generador profesional de facturas con formulario interactivo, vista previa en tiempo real, cálculos automáticos y exportación a PDF
        </p>
      </div>

      <Separator />

      {/* Description */}
      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          El <strong>Invoice Generator</strong> permite crear facturas profesionales con todos los datos necesarios:
          información de empresa y cliente, items con cálculos automáticos, impuestos, descuentos, notas y términos.
          Incluye vista previa en tiempo real y exportación directa a PDF para impresión o envío digital.
        </AlertDescription>
      </Alert>

      {/* Example 1: Factoring Service */}
      <Card>
        <CardHeader>
          <CardTitle>Ejemplo 1: Servicio de Factoring</CardTitle>
          <CardDescription>
            Factura típica de una empresa de factoring con adelanto y comisión
          </CardDescription>
        </CardHeader>
        <CardContent>
          <InvoiceGenerator
            initialData={factoringData}
            onGenerate={(data) => {
              console.log("Factura generada:", data);
            }}
          />
        </CardContent>
      </Card>

      {/* Example 2: Consulting Service */}
      <Card>
        <CardHeader>
          <CardTitle>Ejemplo 2: Consultoría con Descuento</CardTitle>
          <CardDescription>
            Factura de servicios profesionales con múltiples items y descuento aplicado
          </CardDescription>
        </CardHeader>
        <CardContent>
          <InvoiceGenerator
            initialData={consultingData}
            onGenerate={(data) => {
              console.log("Consultoría facturada:", data);
            }}
          />
        </CardContent>
      </Card>

      {/* Example 3: Empty Invoice */}
      <Card className="border-2 border-primary/20 bg-primary/5">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <CardTitle className="flex items-center gap-2">
                🎯 Generador Interactivo
                <Badge variant="default">TRY IT</Badge>
              </CardTitle>
              <CardDescription>
                Crea tu propia factura desde cero con el formulario completo
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Alert className="mb-6">
            <Info className="h-4 w-4" />
            <AlertTitle>Prueba el Generador</AlertTitle>
            <AlertDescription className="space-y-2 mt-2">
              <p>
                Completa el formulario para crear una factura personalizada:
              </p>
              <ul className="text-xs space-y-1 mt-2">
                <li>✅ Información de factura (número, fechas, moneda)</li>
                <li>✅ Datos del cliente (nombre, dirección, RUT)</li>
                <li>✅ Items dinámicos (agregar/eliminar con cálculos automáticos)</li>
                <li>✅ Impuestos y descuentos configurables</li>
                <li>✅ Notas y términos personalizados</li>
                <li>✅ Vista previa en tiempo real</li>
                <li>✅ Exportación a PDF con diseño profesional</li>
              </ul>
            </AlertDescription>
          </Alert>

          <InvoiceGenerator
            onGenerate={(data) => {
              console.log("Nueva factura:", data);
            }}
          />
        </CardContent>
      </Card>

      {/* Features */}
      <Card>
        <CardHeader>
          <CardTitle>Características Principales</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-medium">✅ Funcionalidades Core</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• <strong>Formulario completo:</strong> todos los campos necesarios para facturación</li>
                <li>• <strong>Cálculos automáticos:</strong> subtotal, IVA, descuentos y total en tiempo real</li>
                <li>• <strong>Items dinámicos:</strong> agregar/eliminar líneas de productos/servicios</li>
                <li>• <strong>Vista previa en vivo:</strong> renderizado profesional del documento</li>
                <li>• <strong>Exportación a PDF:</strong> generación lista para imprimir o enviar</li>
                <li>• <strong>Múltiples monedas:</strong> CLP, USD, EUR con formato localizado</li>
                <li>• <strong>IVA configurable:</strong> tasa de impuesto personalizable</li>
                <li>• <strong>Descuentos:</strong> aplicación opcional con recálculo automático</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium">🎨 UI/UX</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Layout de dos columnas (formulario + preview)</li>
                <li>• Cards organizadas por sección temática</li>
                <li>• Badges visuales para identificar items</li>
                <li>• Iconos lucide-react para acciones</li>
                <li>• Validación visual de campos</li>
                <li>• Responsive con sticky preview en desktop</li>
                <li>• Formato de moneda localizado (es-CL)</li>
                <li>• Compatible con modo claro/oscuro</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Invoice Anatomy */}
      <Card>
        <CardHeader>
          <CardTitle>Anatomía de una Factura Profesional</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg space-y-2">
                <h4 className="font-medium">📋 Header</h4>
                <p className="text-sm text-muted-foreground">
                  Logo y datos de la empresa emisora, información de contacto, número de factura y fechas
                </p>
              </div>

              <div className="p-4 border rounded-lg space-y-2">
                <h4 className="font-medium">👤 Cliente</h4>
                <p className="text-sm text-muted-foreground">
                  Nombre o razón social del cliente, dirección, RUT, teléfono y email para facturación
                </p>
              </div>

              <div className="p-4 border rounded-lg space-y-2">
                <h4 className="font-medium">📦 Items</h4>
                <p className="text-sm text-muted-foreground">
                  Líneas de productos o servicios con descripción, cantidad, precio unitario y total
                </p>
              </div>

              <div className="p-4 border rounded-lg space-y-2">
                <h4 className="font-medium">🧮 Cálculos</h4>
                <p className="text-sm text-muted-foreground">
                  Subtotal, impuestos (IVA), descuentos aplicados y total final a pagar
                </p>
              </div>

              <div className="p-4 border rounded-lg space-y-2">
                <h4 className="font-medium">📝 Notas</h4>
                <p className="text-sm text-muted-foreground">
                  Información adicional, comentarios especiales o instrucciones de pago
                </p>
              </div>

              <div className="p-4 border rounded-lg space-y-2">
                <h4 className="font-medium">⚖️ Términos</h4>
                <p className="text-sm text-muted-foreground">
                  Condiciones de pago, plazos, intereses moratorios y política de devoluciones
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Use Cases */}
      <Card>
        <CardHeader>
          <CardTitle>Casos de Uso en Factoring</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg space-y-2">
              <h4 className="font-medium">💰 Servicios de Factoring</h4>
              <p className="text-sm text-muted-foreground">
                Facturar adelantos de cartera, comisiones de administración y servicios de cobranza
              </p>
            </div>

            <div className="p-4 border rounded-lg space-y-2">
              <h4 className="font-medium">📊 Consultoría Financiera</h4>
              <p className="text-sm text-muted-foreground">
                Cobrar por horas de asesoría, análisis de riesgo, auditorías y reportes ejecutivos
              </p>
            </div>

            <div className="p-4 border rounded-lg space-y-2">
              <h4 className="font-medium">🎓 Capacitación</h4>
              <p className="text-sm text-muted-foreground">
                Facturar talleres, seminarios, certificaciones y programas de entrenamiento
              </p>
            </div>

            <div className="p-4 border rounded-lg space-y-2">
              <h4 className="font-medium">🛠️ Servicios Técnicos</h4>
              <p className="text-sm text-muted-foreground">
                Cobrar mantenimiento de software, soporte técnico, integraciones y desarrollos
              </p>
            </div>

            <div className="p-4 border rounded-lg space-y-2">
              <h4 className="font-medium">📦 Productos</h4>
              <p className="text-sm text-muted-foreground">
                Venta de licencias de software, planes SaaS, productos financieros y paquetes
              </p>
            </div>

            <div className="p-4 border rounded-lg space-y-2">
              <h4 className="font-medium">🔄 Servicios Recurrentes</h4>
              <p className="text-sm text-muted-foreground">
                Facturación mensual de suscripciones, membresías, retainers y contratos anuales
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Code Example */}
      <Card>
        <CardHeader>
          <CardTitle>Ejemplo de Uso</CardTitle>
          <CardDescription>Cómo implementar el Invoice Generator en tu aplicación</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-muted p-4 rounded-md overflow-x-auto">
            <pre className="text-sm">
              <code>{`import { InvoiceGenerator, InvoiceData } from "./components/advanced/InvoiceGenerator";

// Datos precargados (opcional)
const initialData: Partial<InvoiceData> = {
  invoiceNumber: "INV-2024-001",
  clientName: "Corporación Global S.A.",
  clientTaxId: "76.987.654-3",
  items: [
    {
      id: "1",
      description: "Servicio de factoring",
      quantity: 1,
      unitPrice: 2500000,
      total: 2500000,
    },
  ],
};

// Renderizar componente
<InvoiceGenerator
  initialData={initialData}
  showPreview={true}
  onGenerate={(invoiceData) => {
    // Guardar en BD, enviar email, etc.
    console.log("Factura generada:", invoiceData);
    saveInvoice(invoiceData);
  }}
/>`}</code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Technical Details */}
      <Card>
        <CardHeader>
          <CardTitle>Detalles Técnicos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg space-y-2">
                <h4 className="font-medium">⚡ Performance</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Cálculos en tiempo real sin delays</li>
                  <li>• Re-render optimizado de preview</li>
                  <li>• Items ilimitados sin problemas de performance</li>
                  <li>• Generación de PDF asíncrona (no bloquea UI)</li>
                </ul>
              </div>

              <div className="p-4 border rounded-lg space-y-2">
                <h4 className="font-medium">💾 Datos</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Estado completo en un solo objeto InvoiceData</li>
                  <li>• Fácil integración con backend (POST/PUT)</li>
                  <li>• Serializable a JSON para storage</li>
                  <li>• Callback onGenerate para tracking</li>
                </ul>
              </div>

              <div className="p-4 border rounded-lg space-y-2">
                <h4 className="font-medium">🎨 Personalización</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• initialData para precarga de campos</li>
                  <li>• showPreview para ocultar vista previa</li>
                  <li>• Estilos customizables con Tailwind</li>
                  <li>• Formato de moneda según locale</li>
                </ul>
              </div>

              <div className="p-4 border rounded-lg space-y-2">
                <h4 className="font-medium">📄 PDF Export</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Generación client-side con window.print()</li>
                  <li>• Template HTML profesional optimizado</li>
                  <li>• Compatible con todos los navegadores modernos</li>
                  <li>• Opción de "Guardar como PDF" nativa</li>
                </ul>
              </div>
            </div>

            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>💡 Extensión Futura</AlertTitle>
              <AlertDescription className="space-y-2 mt-2">
                <p>El componente puede extenderse fácilmente con:</p>
                <ul className="text-xs space-y-1 mt-2">
                  <li>✨ Integración con librerías PDF (jsPDF, pdfmake) para mayor control</li>
                  <li>✨ Templates de diseño múltiples (moderno, clásico, minimalista)</li>
                  <li>✨ Códigos QR para pagos o verificación</li>
                  <li>✨ Firma digital y certificación electrónica</li>
                  <li>✨ Envío automático por email desde el componente</li>
                  <li>✨ Conexión con APIs de facturación electrónica (SII Chile)</li>
                </ul>
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Integration Example */}
      <Card>
        <CardHeader>
          <CardTitle>Integración con Backend</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription className="text-xs">
                El componente genera un objeto <code>InvoiceData</code> completo que puede enviarse
                directamente a tu API para almacenamiento, procesamiento o envío.
              </AlertDescription>
            </Alert>

            <div className="bg-muted p-4 rounded-md overflow-x-auto">
              <pre className="text-sm">
                <code>{`// Frontend - Guardar factura
const handleSaveInvoice = async (invoiceData: InvoiceData) => {
  try {
    const response = await fetch("/api/invoices", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(invoiceData),
    });
    
    if (response.ok) {
      const saved = await response.json();
      console.log("Factura guardada:", saved.id);
      toast.success("Factura creada exitosamente");
    }
  } catch (error) {
    console.error("Error:", error);
    toast.error("Error al guardar factura");
  }
};

// Backend - Endpoint ejemplo (Node.js/Express)
app.post("/api/invoices", async (req, res) => {
  const invoiceData = req.body;
  
  // Validar datos
  if (!invoiceData.clientName || invoiceData.items.length === 0) {
    return res.status(400).json({ error: "Datos incompletos" });
  }
  
  // Guardar en BD
  const invoice = await db.invoices.create({
    data: invoiceData,
  });
  
  // Opcional: Enviar email al cliente
  await sendInvoiceEmail(invoice);
  
  res.json({ success: true, id: invoice.id });
});`}</code>
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
