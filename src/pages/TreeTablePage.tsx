import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { TreeTable, TreeNode } from "../components/advanced/TreeTable";
import { Separator } from "../components/ui/separator";
import { AlertCircle, Info } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";

const sampleData: TreeNode[] = [
  {
    id: "client-1",
    name: "Corporación Global S.A.",
    type: "client",
    childCount: 8,
    children: [
      {
        id: "project-1-1",
        name: "Proyecto Expansión 2024",
        type: "project",
        amount: 450000,
        childCount: 3,
        children: [
          {
            id: "invoice-1-1-1",
            name: "Factura #F-2024-001",
            type: "invoice",
            amount: 150000,
            status: "paid",
            date: "15/12/2024",
          },
          {
            id: "invoice-1-1-2",
            name: "Factura #F-2024-002",
            type: "invoice",
            amount: 180000,
            status: "approved",
            date: "20/12/2024",
          },
          {
            id: "invoice-1-1-3",
            name: "Factura #F-2024-003",
            type: "invoice",
            amount: 120000,
            status: "pending",
            date: "22/12/2024",
          },
        ],
      },
      {
        id: "project-1-2",
        name: "Modernización IT",
        type: "project",
        amount: 280000,
        childCount: 2,
        children: [
          {
            id: "invoice-1-2-1",
            name: "Factura #F-2024-004",
            type: "invoice",
            amount: 130000,
            status: "paid",
            date: "10/12/2024",
          },
          {
            id: "invoice-1-2-2",
            name: "Factura #F-2024-005",
            type: "invoice",
            amount: 150000,
            status: "approved",
            date: "18/12/2024",
          },
        ],
      },
      {
        id: "project-1-3",
        name: "Operaciones Q4 2024",
        type: "project",
        amount: 195000,
        childCount: 3,
        children: [
          {
            id: "invoice-1-3-1",
            name: "Factura #F-2024-006",
            type: "invoice",
            amount: 65000,
            status: "rejected",
            date: "05/12/2024",
          },
          {
            id: "invoice-1-3-2",
            name: "Factura #F-2024-007",
            type: "invoice",
            amount: 70000,
            status: "pending",
            date: "12/12/2024",
          },
          {
            id: "invoice-1-3-3",
            name: "Factura #F-2024-008",
            type: "invoice",
            amount: 60000,
            status: "approved",
            date: "16/12/2024",
          },
        ],
      },
    ],
  },
  {
    id: "client-2",
    name: "Innovatech Solutions",
    type: "client",
    childCount: 4,
    children: [
      {
        id: "project-2-1",
        name: "Desarrollo Software CRM",
        type: "project",
        amount: 320000,
        childCount: 2,
        children: [
          {
            id: "invoice-2-1-1",
            name: "Factura #F-2024-009",
            type: "invoice",
            amount: 160000,
            status: "paid",
            date: "08/12/2024",
          },
          {
            id: "invoice-2-1-2",
            name: "Factura #F-2024-010",
            type: "invoice",
            amount: 160000,
            status: "pending",
            date: "21/12/2024",
          },
        ],
      },
      {
        id: "project-2-2",
        name: "Infraestructura Cloud",
        type: "project",
        amount: 175000,
        childCount: 2,
        children: [
          {
            id: "invoice-2-2-1",
            name: "Factura #F-2024-011",
            type: "invoice",
            amount: 85000,
            status: "approved",
            date: "14/12/2024",
          },
          {
            id: "invoice-2-2-2",
            name: "Factura #F-2024-012",
            type: "invoice",
            amount: 90000,
            status: "pending",
            date: "19/12/2024",
          },
        ],
      },
    ],
  },
  {
    id: "client-3",
    name: "Distribuidora Nacional Ltda.",
    type: "client",
    childCount: 3,
    children: [
      {
        id: "project-3-1",
        name: "Logística Regional",
        type: "project",
        amount: 420000,
        childCount: 3,
        children: [
          {
            id: "invoice-3-1-1",
            name: "Factura #F-2024-013",
            type: "invoice",
            amount: 140000,
            status: "paid",
            date: "02/12/2024",
          },
          {
            id: "invoice-3-1-2",
            name: "Factura #F-2024-014",
            type: "invoice",
            amount: 140000,
            status: "paid",
            date: "09/12/2024",
          },
          {
            id: "invoice-3-1-3",
            name: "Factura #F-2024-015",
            type: "invoice",
            amount: 140000,
            status: "approved",
            date: "17/12/2024",
          },
        ],
      },
    ],
  },
];

const compactData: TreeNode[] = [
  {
    id: "client-compact-1",
    name: "PYME Ejemplo S.A.",
    type: "client",
    childCount: 2,
    children: [
      {
        id: "invoice-compact-1",
        name: "Factura #F-2024-100",
        type: "invoice",
        amount: 45000,
        status: "pending",
        date: "23/12/2024",
      },
      {
        id: "invoice-compact-2",
        name: "Factura #F-2024-101",
        type: "invoice",
        amount: 38000,
        status: "approved",
        date: "24/12/2024",
      },
    ],
  },
];

// Generar cliente con 150 facturas para demostrar lazy loading
const generateLargeDataset = (): TreeNode[] => {
  const statuses: Array<"pending" | "approved" | "paid" | "rejected"> = ["pending", "approved", "paid", "rejected"];
  const invoices: TreeNode[] = [];
  
  for (let i = 1; i <= 150; i++) {
    invoices.push({
      id: `invoice-large-${i}`,
      name: `Factura #F-2024-${String(i).padStart(4, '0')}`,
      type: "invoice",
      amount: Math.floor(Math.random() * 200000) + 50000,
      status: statuses[Math.floor(Math.random() * statuses.length)],
      date: `${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}/12/2024`,
    });
  }

  return [
    {
      id: "client-large",
      name: "MegaCorp Internacional S.A.",
      type: "client",
      childCount: 150,
      children: [
        {
          id: "project-large",
          name: "Operaciones Anuales 2024",
          type: "project",
          amount: 15000000,
          childCount: 150,
          children: invoices,
        },
      ],
    },
  ];
};

const largeDataset = generateLargeDataset();

export function TreeTablePage() {
  return (
    <div className="space-y-8 pb-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-2xl font-medium">Tree Table</h1>
          <Badge variant="default">📱 Responsive</Badge>
          <Badge variant="secondary">NEW</Badge>
        </div>
        <p className="text-muted-foreground">
          Tabla jerárquica con niveles expandibles para visualizar estructuras cliente → proyecto → facturas
        </p>
      </div>

      <Separator />

      {/* Description */}
      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          El <strong>Tree Table</strong> permite visualizar datos jerárquicos con múltiples niveles de profundidad.
          Ideal para estructuras de clientes/proyectos, categorías, organigramas y navegación de datos relacionales.
        </AlertDescription>
      </Alert>

      {/* Example 1: Complete Hierarchy */}
      <Card>
        <CardHeader>
          <CardTitle>Ejemplo Completo: Cliente → Proyecto → Factura</CardTitle>
          <CardDescription>
            Jerarquía de 3 niveles con 3 clientes, múltiples proyectos y 15 facturas
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <TreeTable data={sampleData} />
        </CardContent>
      </Card>

      {/* Example 2: With Checkboxes */}
      <Card>
        <CardHeader>
          <CardTitle>Con Selección Múltiple</CardTitle>
          <CardDescription>
            Tree Table con checkboxes para seleccionar múltiples elementos
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <TreeTable data={compactData} showCheckboxes />
        </CardContent>
      </Card>

      {/* Example 3: With Row Click Handler */}
      <Card>
        <CardHeader>
          <CardTitle>Con Event Handler</CardTitle>
          <CardDescription>
            Click en las filas para ejecutar acciones personalizadas
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <TreeTable
            data={compactData}
            onRowClick={(node) => {
              console.log("Nodo clickeado:", node);
              alert(`Clickeaste: ${node.name} (${node.type})`);
            }}
          />
        </CardContent>
      </Card>

      {/* Example 4: Large Dataset with Lazy Loading */}
      <Card className="border-2 border-primary/20 bg-primary/5">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <CardTitle className="flex items-center gap-2">
                🚀 Lazy Loading: 150 Facturas
                <Badge variant="default">NUEVO</Badge>
              </CardTitle>
              <CardDescription>
                Proyecto con 150 facturas - carga incremental de 10 en 10 para optimizar rendimiento
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Optimización para Grandes Volúmenes</AlertTitle>
            <AlertDescription className="space-y-2 mt-2">
              <p>
                Cuando un nodo tiene <strong>más de 10 hijos</strong>, el Tree Table muestra inicialmente solo los primeros 10 elementos.
              </p>
              <p className="text-xs mt-2">
                ✅ Botón "Cargar más" para obtener siguientes 10 items<br />
                ✅ Indicador de progreso "Mostrando X de Y"<br />
                ✅ Botón "Ver todas" para expandir completamente<br />
                ✅ Simulación de carga asíncrona con spinner
              </p>
            </AlertDescription>
          </Alert>
          
          <TreeTable 
            data={largeDataset}
            itemsPerPage={10}
            enableLazyLoad={true}
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
                <li>• Expansión/colapso de nodos con iconos ChevronRight/Down</li>
                <li>• Indentación visual según nivel jerárquico</li>
                <li>• Badges de conteo de hijos en cada nodo</li>
                <li>• Iconos diferenciados por tipo (Cliente/Proyecto/Factura)</li>
                <li>• Estados visuales con badges de colores</li>
                <li>• Dropdown menu de acciones por fila</li>
                <li>• Selección múltiple con checkboxes (opcional)</li>
                <li>• Event handlers personalizables (onClick)</li>
                <li><strong>• Lazy Loading para grandes volúmenes (100+ items)</strong></li>
                <li><strong>• Paginación por nodo con "Cargar más"</strong></li>
                <li><strong>• Indicador de progreso "Mostrando X de Y"</strong></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium">🎨 UI/UX</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Responsive con scroll horizontal en mobile</li>
                <li>• Indicador visual de scroll en dispositivos móviles</li>
                <li>• Hover states con transiciones suaves</li>
                <li>• Compatible con modo claro/oscuro</li>
                <li>• Tipografía Satoshi y tokens de color #84cc16 (Primary Verde Lima) / #1C2D3A (Secondary Azul Oscuro)</li>
                <li>• Espaciado consistente (Tailwind spacing)</li>
                <li>• Truncado de texto largo con ellipsis</li>
                <li>• Accesibilidad WCAG AA (aria-labels, keyboard navigation)</li>
              </ul>
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
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg space-y-2">
              <h4 className="font-medium">📊 Gestión de Carteras</h4>
              <p className="text-sm text-muted-foreground">
                Visualizar clientes con sus proyectos activos y facturas asociadas en estructura jerárquica
              </p>
            </div>

            <div className="p-4 border rounded-lg space-y-2">
              <h4 className="font-medium">🏢 Estructura Corporativa</h4>
              <p className="text-sm text-muted-foreground">
                Mostrar holding empresarial con subsidiarias, departamentos y operaciones
              </p>
            </div>

            <div className="p-4 border rounded-lg space-y-2">
              <h4 className="font-medium">📁 Categorización</h4>
              <p className="text-sm text-muted-foreground">
                Organizar documentos por categorías, subcategorías y archivos individuales
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Code Example */}
      <Card>
        <CardHeader>
          <CardTitle>Ejemplo de Uso</CardTitle>
          <CardDescription>Cómo implementar el Tree Table en tu aplicación</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-muted p-4 rounded-md overflow-x-auto">
            <pre className="text-sm">
              <code>{`import { TreeTable, TreeNode } from "./components/advanced/TreeTable";

const data: TreeNode[] = [
  {
    id: "client-1",
    name: "Corporación Global S.A.",
    type: "client",
    childCount: 2,
    children: [
      {
        id: "project-1",
        name: "Proyecto Expansión",
        type: "project",
        amount: 450000,
        children: [
          {
            id: "invoice-1",
            name: "Factura #F-001",
            type: "invoice",
            amount: 150000,
            status: "paid",
            date: "15/12/2024",
          },
        ],
      },
    ],
  },
];

<TreeTable 
  data={data} 
  showCheckboxes={true}
  onRowClick={(node) => console.log(node)}
/>`}</code>
            </pre>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
