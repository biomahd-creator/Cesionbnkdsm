import { useState } from "react";
import { ComponentShowcase } from "../components/ui/component-showcase";
import {
  PageLayout,
  SplitLayout,
  StackLayout,
  SectionLayout,
} from "../components/ui/page-layout";
import { GridShowcase } from "../components/ui/grid-showcase";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Separator } from "../components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  DollarSign,
  Users,
  TrendingUp,
  FileText,
  Settings,
  Filter,
  BarChart3,
  ArrowUpRight,
  Activity,
} from "lucide-react";

/* ── Helpers for demos ── */

function DemoBox({
  label,
  className,
  h = "h-24",
}: {
  label: string;
  className?: string;
  h?: string;
}) {
  return (
    <div
      className={`${h} rounded-lg border-2 border-dashed border-primary/30 bg-primary/5 flex items-center justify-center text-sm text-muted-foreground ${className ?? ""}`}
    >
      {label}
    </div>
  );
}

function MiniKpiCard({
  title,
  value,
  change,
  icon: Icon,
}: {
  title: string;
  value: string;
  change: string;
  icon: React.ElementType;
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-semibold">{value}</div>
        <p className="text-xs text-muted-foreground mt-1">
          <span className="text-primary">{change}</span> vs mes anterior
        </p>
      </CardContent>
    </Card>
  );
}

function MiniFilterPanel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm flex items-center gap-2">
          <Filter className="h-4 w-4" /> Filtros
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="text-xs text-muted-foreground">Estado</label>
          <Select defaultValue="all">
            <SelectTrigger className="mt-1 h-8">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="pendiente">Pendiente</SelectItem>
              <SelectItem value="aprobada">Aprobada</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="text-xs text-muted-foreground">Fecha desde</label>
          <Input type="date" className="mt-1 h-8" />
        </div>
        <div>
          <label className="text-xs text-muted-foreground">Fecha hasta</label>
          <Input type="date" className="mt-1 h-8" />
        </div>
        <Separator />
        <Button variant="outline" size="sm" className="w-full">
          Aplicar filtros
        </Button>
      </CardContent>
    </Card>
  );
}

function MiniTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm">Operaciones Recientes</CardTitle>
        <CardDescription>Ultimas 5 operaciones de factoring</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {[
            { id: "OP-4635", client: "Grupo Aval", amount: "$125M", status: "Aprobada" },
            { id: "OP-4636", client: "Ecopetrol", amount: "$89M", status: "Pendiente" },
            { id: "OP-4637", client: "Bancolombia", amount: "$210M", status: "Desembolsada" },
            { id: "OP-4638", client: "ISA Group", amount: "$67M", status: "Pendiente" },
            { id: "OP-4639", client: "Nutresa", amount: "$145M", status: "Aprobada" },
          ].map((row) => (
            <div
              key={row.id}
              className="flex items-center justify-between py-2 border-b border-border last:border-0"
            >
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground tabular-nums">{row.id}</span>
                <span className="text-sm">{row.client}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm tabular-nums font-medium">{row.amount}</span>
                <Badge
                  variant={
                    row.status === "Aprobada"
                      ? "success-soft-outline"
                      : row.status === "Pendiente"
                        ? "warning-soft-outline"
                        : "info-soft-outline"
                  }
                  className="text-[11px]"
                >
                  {row.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function MiniSettingsForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Settings className="h-5 w-5" />
          Configuracion de Operacion
        </CardTitle>
        <CardDescription>
          Parametros generales para nuevas operaciones de factoring
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">Tasa base (%)</label>
            <Input defaultValue="12.5" className="mt-1" />
          </div>
          <div>
            <label className="text-sm font-medium">Spread (%)</label>
            <Input defaultValue="2.3" className="mt-1" />
          </div>
        </div>
        <div>
          <label className="text-sm font-medium">Plazo maximo (dias)</label>
          <Input defaultValue="180" className="mt-1" />
        </div>
        <div>
          <label className="text-sm font-medium">Monto maximo ($M)</label>
          <Input defaultValue="500" className="mt-1" />
        </div>
        <Separator />
        <div className="flex gap-2 justify-end">
          <Button variant="outline">Cancelar</Button>
          <Button>Guardar cambios</Button>
        </div>
      </CardContent>
    </Card>
  );
}

/* ═══════════════════════════════════════════ */

const code = `import {
  PageLayout,
  SplitLayout,
  StackLayout,
  SectionLayout,
} from "@/components/ui/page-layout";
import { GridShowcase } from "@/components/ui/grid-showcase";

// Dashboard: constrained + KPIs + split (table + sidebar)
<PageLayout variant="constrained">
  <StackLayout gap="relaxed">
    <SectionLayout title="Resumen" description="KPIs del periodo">
      <GridShowcase columns={4} gap="sm">
        <KpiCard />
        <KpiCard />
        <KpiCard />
        <KpiCard />
      </GridShowcase>
    </SectionLayout>

    <SplitLayout ratio="sidebar-right" stickyPanel="right">
      <TableComponent />
      <FilterPanel />
    </SplitLayout>
  </StackLayout>
</PageLayout>

// Settings: narrow + stacked sections with dividers
<PageLayout variant="narrow">
  <StackLayout gap="relaxed" dividers>
    <SectionLayout title="General">...</SectionLayout>
    <SectionLayout title="Notificaciones">...</SectionLayout>
    <SectionLayout title="Seguridad">...</SectionLayout>
  </StackLayout>
</PageLayout>`;

export function LayoutShowcasePage() {
  const [activeVariant, setActiveVariant] = useState<string>("constrained");

  return (
    <ComponentShowcase
      title="Page Layout"
      description="Sistema de Layout Primitives que restringe el ancho del contenido, organiza paneles y secciones. Resuelve el problema de contenido que ocupa toda la pantalla sin control. Composable con GridShowcase."
      category="Layout"
      preview={
        <div className="w-full space-y-4">
          {/* Interactive demo: width variants */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm text-muted-foreground">Variant:</span>
            {(["full", "constrained", "narrow", "prose"] as const).map((v) => (
              <Button
                key={v}
                variant={activeVariant === v ? "default" : "outline"}
                size="sm"
                className="h-7 text-xs"
                onClick={() => setActiveVariant(v)}
              >
                {v}
              </Button>
            ))}
          </div>

          <div className="border rounded-lg bg-muted/10 p-4 overflow-hidden">
            <PageLayout variant={activeVariant as any}>
              <div className="rounded-lg border-2 border-dashed border-primary/40 bg-primary/5 p-4 text-center">
                <p className="text-sm text-muted-foreground">
                  Contenido con <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">variant=&quot;{activeVariant}&quot;</code>
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {activeVariant === "full" && "Sin restriccion — ocupa 100% del ancho"}
                  {activeVariant === "constrained" && "max-w-7xl (1280px) — ideal para dashboards"}
                  {activeVariant === "narrow" && "max-w-3xl (768px) — ideal para formularios"}
                  {activeVariant === "prose" && "max-w-prose (65ch) — ideal para texto"}
                </p>
              </div>
            </PageLayout>
          </div>
        </div>
      }
      code={code}
      props={[
        { name: "variant", type: '"full" | "constrained" | "narrow" | "prose"', default: '"constrained"', description: "Restriccion de ancho maximo del contenido" },
        { name: "padding", type: '"none" | "sm" | "md" | "lg"', default: '"none"', description: "Padding horizontal" },
        { name: "centered", type: "boolean", default: "true", description: "Centrar el contenido horizontalmente" },
        { name: "ratio", type: '"equal" | "sidebar-left" | "sidebar-right" | "aside-left" | "aside-right"', description: "Ratio de SplitLayout entre paneles" },
        { name: "gap", type: '"sm" | "md" | "lg" (Split) / "compact" | "default" | "relaxed" | "spacious" (Stack)', description: "Espaciado entre elementos" },
        { name: "stickyPanel", type: '"left" | "right" | "none"', default: '"none"', description: "Panel que se mantiene fijo en scroll (SplitLayout)" },
        { name: "dividers", type: "boolean", default: "false", description: "Agregar separadores entre secciones (StackLayout)" },
        { name: "title", type: "string", description: "Titulo de la seccion (SectionLayout)" },
        { name: "description", type: "string", description: "Descripcion de la seccion (SectionLayout)" },
        { name: "action", type: "ReactNode", description: "Slot de accion a la derecha del titulo (SectionLayout)" },
      ]}
      examples={[
        {
          title: "Dashboard Pattern — constrained + KPIs + Split",
          description:
            "Patron mas comun en CESIONBNK: KPIs en grid arriba, tabla principal + panel de filtros abajo. Contenido restringido a max-w-7xl.",
          preview: (
            <div className="w-full">
              <PageLayout variant="constrained">
                <StackLayout gap="relaxed">
                  <SectionLayout
                    title="Dashboard de Factoring"
                    description="Resumen del periodo actual"
                    action={
                      <Button variant="outline" size="sm" className="gap-1">
                        <BarChart3 className="h-3.5 w-3.5" />
                        Exportar
                      </Button>
                    }
                  >
                    <GridShowcase columns={4} gap="sm">
                      <MiniKpiCard title="Operaciones" value="142" change="+12%" icon={FileText} />
                      <MiniKpiCard title="Desembolsos" value="$8.2B" change="+8.5%" icon={DollarSign} />
                      <MiniKpiCard title="Clientes" value="38" change="+3" icon={Users} />
                      <MiniKpiCard title="Tasa Promedio" value="14.2%" change="-0.3%" icon={TrendingUp} />
                    </GridShowcase>
                  </SectionLayout>

                  <SplitLayout ratio="sidebar-right" stickyPanel="right" gap="md">
                    <MiniTable />
                    <MiniFilterPanel />
                  </SplitLayout>
                </StackLayout>
              </PageLayout>
            </div>
          ),
          code: `<PageLayout variant="constrained">
  <StackLayout gap="relaxed">
    <SectionLayout title="Dashboard" description="Resumen" action={<Button>Exportar</Button>}>
      <GridShowcase columns={4} gap="sm">
        <KpiCard /><KpiCard /><KpiCard /><KpiCard />
      </GridShowcase>
    </SectionLayout>

    <SplitLayout ratio="sidebar-right" stickyPanel="right">
      <OperationsTable />
      <FilterPanel />
    </SplitLayout>
  </StackLayout>
</PageLayout>`,
        },
        {
          title: "Settings Pattern — narrow + stacked sections + dividers",
          description:
            "Para configuraciones y formularios. Ancho restringido a max-w-3xl con secciones divididas. El contenido nunca se estira en pantallas anchas.",
          preview: (
            <div className="w-full bg-muted/10 rounded-lg p-6">
              <PageLayout variant="narrow">
                <StackLayout gap="relaxed" dividers>
                  <SectionLayout title="Parametros de Operacion" description="Configuracion basica para nuevas operaciones">
                    <MiniSettingsForm />
                  </SectionLayout>

                  <SectionLayout
                    title="Notificaciones"
                    description="Como recibir alertas del sistema"
                    action={<Badge variant="info-soft-outline">3 activas</Badge>}
                  >
                    <Card>
                      <CardContent className="pt-6 space-y-3">
                        {["Email al crear operacion", "Push al aprobar", "SMS al desembolsar"].map(
                          (item) => (
                            <div key={item} className="flex items-center justify-between py-2">
                              <span className="text-sm">{item}</span>
                              <Badge variant="success-soft-outline" className="text-[11px]">
                                Activa
                              </Badge>
                            </div>
                          )
                        )}
                      </CardContent>
                    </Card>
                  </SectionLayout>

                  <SectionLayout title="Zona de Peligro" description="Acciones irreversibles">
                    <Card className="border-destructive/30">
                      <CardContent className="pt-6 flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium">Eliminar configuracion</p>
                          <p className="text-xs text-muted-foreground">
                            Esta accion no se puede deshacer
                          </p>
                        </div>
                        <Button variant="destructive" size="sm">
                          Eliminar
                        </Button>
                      </CardContent>
                    </Card>
                  </SectionLayout>
                </StackLayout>
              </PageLayout>
            </div>
          ),
          code: `<PageLayout variant="narrow">
  <StackLayout gap="relaxed" dividers>
    <SectionLayout title="Parametros" description="Config basica">
      <SettingsForm />
    </SectionLayout>
    <SectionLayout title="Notificaciones" action={<Badge>3 activas</Badge>}>
      <NotificationList />
    </SectionLayout>
    <SectionLayout title="Zona de Peligro">
      <DangerZone />
    </SectionLayout>
  </StackLayout>
</PageLayout>`,
        },
        {
          title: "SplitLayout — Todas las ratios",
          description:
            "5 ratios disponibles para organizar dos paneles. Todos colapsan a 1 columna en mobile.",
          preview: (
            <div className="w-full space-y-6">
              {(
                [
                  ["equal", "50% / 50%"],
                  ["sidebar-left", "33% / 67%"],
                  ["sidebar-right", "67% / 33%"],
                  ["aside-left", "~25% / ~75%"],
                  ["aside-right", "~75% / ~25%"],
                ] as const
              ).map(([ratio, desc]) => (
                <div key={ratio} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <code className="text-xs font-mono bg-muted px-1.5 py-0.5 rounded">
                      {ratio}
                    </code>
                    <span className="text-xs text-muted-foreground">{desc}</span>
                  </div>
                  <SplitLayout ratio={ratio as any} gap="sm">
                    <DemoBox label="Panel A" h="h-16" />
                    <DemoBox label="Panel B" h="h-16" />
                  </SplitLayout>
                </div>
              ))}
            </div>
          ),
          code: `<SplitLayout ratio="equal">
  <PanelA />
  <PanelB />
</SplitLayout>

<SplitLayout ratio="sidebar-right" stickyPanel="right">
  <MainContent />
  <Sidebar />
</SplitLayout>

<SplitLayout ratio="aside-left">
  <NavigationMenu />
  <Content />
</SplitLayout>`,
        },
        {
          title: "StackLayout — Gap y Dividers",
          description:
            "4 niveles de spacing y opcion de separadores. Ideal para paginas de contenido secuencial.",
          preview: (
            <div className="w-full">
              <Tabs defaultValue="gaps">
                <TabsList className="grid w-full grid-cols-2 max-w-lg">
                  <TabsTrigger value="gaps">Gaps</TabsTrigger>
                  <TabsTrigger value="dividers">Con Dividers</TabsTrigger>
                </TabsList>

                <TabsContent value="gaps" className="mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {(["compact", "default", "relaxed", "spacious"] as const).map((gap) => (
                      <div key={gap} className="space-y-2">
                        <code className="text-xs font-mono bg-muted px-1.5 py-0.5 rounded">{gap}</code>
                        <div className="border rounded-lg p-3">
                          <StackLayout gap={gap}>
                            <DemoBox label="Section 1" h="h-10" />
                            <DemoBox label="Section 2" h="h-10" />
                            <DemoBox label="Section 3" h="h-10" />
                          </StackLayout>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="dividers" className="mt-4">
                  <PageLayout variant="narrow">
                    <StackLayout gap="relaxed" dividers>
                      <SectionLayout title="Seccion A" description="Primera seccion con separador inferior">
                        <DemoBox label="Contenido A" h="h-16" />
                      </SectionLayout>
                      <SectionLayout title="Seccion B" description="Segunda seccion separada visualmente">
                        <DemoBox label="Contenido B" h="h-16" />
                      </SectionLayout>
                      <SectionLayout title="Seccion C" description="Tercera seccion con divider">
                        <DemoBox label="Contenido C" h="h-16" />
                      </SectionLayout>
                    </StackLayout>
                  </PageLayout>
                </TabsContent>
              </Tabs>
            </div>
          ),
          code: `// Sin dividers
<StackLayout gap="relaxed">
  <Section />
  <Section />
</StackLayout>

// Con dividers
<StackLayout gap="relaxed" dividers>
  <SectionLayout title="A">...</SectionLayout>
  <SectionLayout title="B">...</SectionLayout>
</StackLayout>`,
        },
        {
          title: "Composicion Real — Detalle de Operacion",
          description:
            "Ejemplo real: pagina de detalle de operacion usando PageLayout + SplitLayout + StackLayout + SectionLayout + GridShowcase juntos.",
          preview: (
            <div className="w-full bg-muted/10 rounded-lg p-4">
              <PageLayout variant="constrained">
                <StackLayout gap="relaxed">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-3">
                        <h2 className="text-2xl font-semibold">OP-4635</h2>
                        <Badge variant="success-soft-outline">Aprobada</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        Grupo Aval S.A. — NIT 860.002.964-4
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Historial</Button>
                      <Button size="sm">Desembolsar</Button>
                    </div>
                  </div>

                  {/* KPIs */}
                  <GridShowcase columns={4} gap="sm">
                    <MiniKpiCard title="Facturas" value="12" change="+3" icon={FileText} />
                    <MiniKpiCard title="Valor Total" value="$125M" change="+15%" icon={DollarSign} />
                    <MiniKpiCard title="Desembolso" value="$118M" change="95%" icon={ArrowUpRight} />
                    <MiniKpiCard title="Dias Promedio" value="45" change="-5d" icon={Activity} />
                  </GridShowcase>

                  {/* Split: main + aside */}
                  <SplitLayout ratio="sidebar-right" gap="md">
                    <StackLayout gap="default">
                      <SectionLayout title="Facturas" action={<Badge variant="info-soft-outline">12 facturas</Badge>}>
                        <MiniTable />
                      </SectionLayout>
                    </StackLayout>

                    <StackLayout gap="default">
                      <SectionLayout title="Resumen">
                        <Card>
                          <CardContent className="pt-6 space-y-3">
                            {[
                              ["Cliente", "Grupo Aval S.A."],
                              ["Pagadores", "3 pagadores"],
                              ["Fecha", "09/02/2026"],
                              ["Tasa", "14.2%"],
                              ["Comision", "$1.2M"],
                            ].map(([label, value]) => (
                              <div key={label} className="flex justify-between text-sm">
                                <span className="text-muted-foreground">{label}</span>
                                <span className="font-medium">{value}</span>
                              </div>
                            ))}
                          </CardContent>
                        </Card>
                      </SectionLayout>

                      <SectionLayout title="Timeline">
                        <Card>
                          <CardContent className="pt-6 space-y-2">
                            {[
                              { step: "Creada", time: "09:15", done: true },
                              { step: "Validada", time: "10:30", done: true },
                              { step: "Aprobada", time: "14:22", done: true },
                              { step: "Desembolso", time: "—", done: false },
                            ].map((s) => (
                              <div key={s.step} className="flex items-center gap-3">
                                <div
                                  className={`h-2 w-2 rounded-full ${s.done ? "bg-primary" : "bg-muted-foreground/30"}`}
                                />
                                <span className={`text-sm ${s.done ? "" : "text-muted-foreground"}`}>
                                  {s.step}
                                </span>
                                <span className="text-xs text-muted-foreground ml-auto tabular-nums">
                                  {s.time}
                                </span>
                              </div>
                            ))}
                          </CardContent>
                        </Card>
                      </SectionLayout>
                    </StackLayout>
                  </SplitLayout>
                </StackLayout>
              </PageLayout>
            </div>
          ),
          code: `<PageLayout variant="constrained">
  <StackLayout gap="relaxed">
    <OperationHeader />

    <GridShowcase columns={4} gap="sm">
      <KpiCard /><KpiCard /><KpiCard /><KpiCard />
    </GridShowcase>

    <SplitLayout ratio="sidebar-right">
      <SectionLayout title="Facturas">
        <InvoiceTable />
      </SectionLayout>

      <StackLayout gap="default">
        <SectionLayout title="Resumen">
          <SummaryCard />
        </SectionLayout>
        <SectionLayout title="Timeline">
          <TimelineCard />
        </SectionLayout>
      </StackLayout>
    </SplitLayout>
  </StackLayout>
</PageLayout>`,
        },
      ]}
    />
  );
}
