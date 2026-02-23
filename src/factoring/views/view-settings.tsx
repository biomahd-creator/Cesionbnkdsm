/**
 * view-settings.tsx — Configuración de la Plataforma
 * Vista standalone dentro del AdminLayout de Factoring.
 * 4 secciones: Cuenta, Empresa, Notificaciones, Seguridad.
 */
import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Switch } from "../../components/ui/switch";
import { Separator } from "../../components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Avatar, AvatarFallback } from "../../components/ui/avatar";
import {
  User,
  Building2,
  Bell,
  Shield,
  LogOut,
  Smartphone,
  Monitor,
  Laptop,
  CheckCircle,
  AlertCircle,
  Camera,
} from "lucide-react";
import { useTheme } from "../../components/providers/ThemeProvider";

// ── Sub-secciones ──────────────────────────────────────────────────────────

function SectionCuenta() {
  const [saved, setSaved] = useState(false);
  const { tenant, tenants } = useTheme();
  const tenantInfo = tenants.find((t) => t.id === tenant);
  const tenantName = tenantInfo?.name ?? "CESIONBNK";
  const tenantSlug = tenantName.toLowerCase().replace(/\s+/g, "");

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <User className="size-4 text-muted-foreground" />
          <CardTitle>Cuenta</CardTitle>
        </div>
        <CardDescription>Datos personales y foto de perfil</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Avatar */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <Avatar className="size-16 border-2 border-primary">
              <AvatarFallback className="bg-primary/10 text-primary text-xl">SP</AvatarFallback>
            </Avatar>
            <button className="absolute -bottom-1 -right-1 size-6 rounded-full bg-primary flex items-center justify-center shadow-md">
              <Camera className="size-3 text-primary-foreground" />
            </button>
          </div>
          <div>
            <p className="text-sm font-medium">soporte.{tenantSlug}</p>
            <p className="text-xs text-muted-foreground">Administrador</p>
            <Button variant="ghost" size="sm" className="h-7 text-xs mt-1 px-2">Cambiar foto</Button>
          </div>
        </div>

        <Separator />

        {/* Form fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label className="text-xs">Nombre</Label>
            <Input defaultValue="Soporte" className="h-8 text-sm" />
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs">Apellido</Label>
            <Input defaultValue={tenantName} className="h-8 text-sm" />
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs">Correo electrónico</Label>
            <Input type="email" defaultValue={`soporte@${tenantSlug}.com.co`} className="h-8 text-sm" />
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs">Teléfono</Label>
            <Input type="tel" defaultValue="+57 310 000 0000" className="h-8 text-sm" />
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs">Cargo</Label>
            <Input defaultValue="Gerente Comercial" className="h-8 text-sm" />
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs">Idioma</Label>
            <Select defaultValue="es">
              <SelectTrigger className="h-8 text-sm">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="es">Español (Colombia)</SelectItem>
                <SelectItem value="en">English</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <Button variant="outline" size="sm" className="h-8 text-xs">Cancelar</Button>
          <Button size="sm" className="h-8 text-xs gap-2" onClick={handleSave}>
            {saved && <CheckCircle className="size-3" />}
            {saved ? "Guardado" : "Guardar cambios"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function SectionEmpresa() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Building2 className="size-4 text-muted-foreground" />
          <CardTitle>Empresa</CardTitle>
        </div>
        <CardDescription>Información de la sociedad y parámetros operativos</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label className="text-xs">Razón Social</Label>
            <Input defaultValue="Financio S.A.S." className="h-8 text-sm" />
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs">NIT</Label>
            <Input defaultValue="900.456.789-1" className="h-8 text-sm" />
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs">Correo Facturación</Label>
            <Input type="email" defaultValue="facturacion@financio.com.co" className="h-8 text-sm" />
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs">Ciudad Principal</Label>
            <Select defaultValue="bog">
              <SelectTrigger className="h-8 text-sm">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bog">Bogotá D.C.</SelectItem>
                <SelectItem value="med">Medellín</SelectItem>
                <SelectItem value="cal">Cali</SelectItem>
                <SelectItem value="bar">Barranquilla</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs">Monto máx. auto-aprobación</Label>
            <Input defaultValue="5.000.000" className="h-8 text-sm" />
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs">Plazo por defecto (días)</Label>
            <Input type="number" defaultValue="60" className="h-8 text-sm" />
          </div>
        </div>

        <Separator />

        <div className="space-y-3">
          <p className="text-xs font-medium">Parámetros de Riesgo</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { label: "Dilución máx. permitida", value: "5%" },
              { label: "Concentración máx. deudor", value: "40%" },
              { label: "Score mínimo de vinculación", value: "60" },
            ].map((p) => (
              <div key={p.label} className="rounded-lg border bg-muted/30 p-3">
                <p className="text-xs text-muted-foreground">{p.label}</p>
                <p className="text-sm font-medium mt-0.5">{p.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <Button variant="outline" size="sm" className="h-8 text-xs">Cancelar</Button>
          <Button size="sm" className="h-8 text-xs">Guardar cambios</Button>
        </div>
      </CardContent>
    </Card>
  );
}

function SectionNotificaciones() {
  const [notifs, setNotifs] = useState({
    alertasVencimiento: true,
    alertasConcentracion: true,
    reporteDiario: false,
    reporteSemanal: true,
    nuevosClientes: true,
    operacionesAprobadas: true,
    alertasMora: true,
    novedadesSistema: false,
  });

  const toggle = (key: keyof typeof notifs) =>
    setNotifs((prev) => ({ ...prev, [key]: !prev[key] }));

  const groups = [
    {
      title: "Alertas Operativas",
      items: [
        { key: "alertasVencimiento" as const, label: "Facturas próximas a vencer", description: "Notificación 3 días antes del vencimiento" },
        { key: "alertasMora" as const, label: "Facturas en mora", description: "Al superar el plazo pactado" },
        { key: "alertasConcentracion" as const, label: "Límites de concentración", description: "Cuando un deudor supera el 85% de su límite" },
        { key: "operacionesAprobadas" as const, label: "Operaciones aprobadas", description: "Confirmación de cada nueva operación" },
      ],
    },
    {
      title: "Reportes Periódicos",
      items: [
        { key: "reporteDiario" as const, label: "Resumen diario", description: "Resumen de actividad a las 8:00 a.m." },
        { key: "reporteSemanal" as const, label: "Informe semanal", description: "Cartera, recaudo y KPIs cada lunes" },
      ],
    },
    {
      title: "Plataforma",
      items: [
        { key: "nuevosClientes" as const, label: "Nuevas vinculaciones", description: "Cuando un cliente completa el proceso" },
        { key: "novedadesSistema" as const, label: "Novedades y actualizaciones", description: "Cambios en la plataforma y nuevas funciones" },
      ],
    },
  ];

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Bell className="size-4 text-muted-foreground" />
          <CardTitle>Notificaciones</CardTitle>
        </div>
        <CardDescription>Controla qué alertas y reportes recibes por correo</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {groups.map((group, gi) => (
          <div key={group.title}>
            {gi > 0 && <Separator className="mb-6" />}
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3">{group.title}</p>
            <div className="space-y-4">
              {group.items.map((item) => (
                <div key={item.key} className="flex items-center justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                  <Switch
                    checked={notifs[item.key]}
                    onCheckedChange={() => toggle(item.key)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function SectionSeguridad() {
  const sessions = [
    { device: "MacBook Pro", browser: "Chrome 121", location: "Bogotá, Colombia", lastSeen: "Ahora", icon: Laptop, active: true },
    { device: "iPhone 15", browser: "Safari Mobile", location: "Bogotá, Colombia", lastSeen: "Hace 2 horas", icon: Smartphone, active: false },
    { device: "Windows PC", browser: "Edge 121", location: "Medellín, Colombia", lastSeen: "Hace 2 días", icon: Monitor, active: false },
  ];

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Shield className="size-4 text-muted-foreground" />
          <CardTitle>Seguridad</CardTitle>
        </div>
        <CardDescription>Contraseña, autenticación y sesiones activas</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">

        {/* Password */}
        <div>
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3">Contraseña</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1.5">
              <Label className="text-xs">Contraseña actual</Label>
              <Input type="password" defaultValue="••••••••" className="h-8 text-sm" />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs">Nueva contraseña</Label>
              <Input type="password" placeholder="Mínimo 8 caracteres" className="h-8 text-sm" />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs">Confirmar contraseña</Label>
              <Input type="password" placeholder="Repetir contraseña" className="h-8 text-sm" />
            </div>
          </div>
          <div className="flex justify-end mt-3">
            <Button size="sm" variant="outline" className="h-8 text-xs">Cambiar contraseña</Button>
          </div>
        </div>

        <Separator />

        {/* 2FA */}
        <div>
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3">Autenticación en Dos Pasos</p>
          <div className="flex items-start justify-between gap-4 rounded-lg border bg-muted/30 p-4">
            <div className="flex items-start gap-3">
              <Smartphone className="size-5 text-muted-foreground shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium">Aplicación de autenticación</p>
                <p className="text-xs text-muted-foreground">Google Authenticator o Microsoft Authenticator</p>
                <Badge variant="outline" className="mt-1.5 text-[10px] border-yellow-400 text-yellow-600">No configurado</Badge>
              </div>
            </div>
            <Button size="sm" variant="outline" className="h-8 text-xs shrink-0">Activar 2FA</Button>
          </div>
        </div>

        <Separator />

        {/* Sessions */}
        <div>
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3">Sesiones Activas</p>
          <div className="space-y-3">
            {sessions.map((s) => (
              <div key={s.device} className="flex items-center gap-3 rounded-lg border p-3">
                <s.icon className="size-5 text-muted-foreground shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium">{s.device}</p>
                    {s.active && (
                      <Badge className="text-[10px] h-4 bg-emerald-600 text-white border-transparent">Activa</Badge>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">{s.browser} · {s.location} · {s.lastSeen}</p>
                </div>
                {!s.active && (
                  <Button variant="ghost" size="sm" className="h-7 text-xs text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 shrink-0">
                    <LogOut className="size-3 mr-1" /> Cerrar
                  </Button>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-end mt-3">
            <Button variant="outline" size="sm" className="h-8 text-xs text-red-500 border-red-200 hover:bg-red-50 dark:hover:bg-red-950/30">
              <LogOut className="size-3 mr-1.5" />
              Cerrar todas las sesiones
            </Button>
          </div>
        </div>

        <Separator />

        {/* Danger zone */}
        <div>
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3">Zona de Peligro</p>
          <div className="rounded-lg border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/20 p-4 flex items-start gap-3">
            <AlertCircle className="size-4 text-red-500 shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-medium text-red-700 dark:text-red-400">Eliminar cuenta</p>
              <p className="text-xs text-red-600 dark:text-red-500 mt-0.5">Esta acción es permanente e irreversible. Todos los datos serán borrados.</p>
            </div>
            <Button variant="destructive" size="sm" className="h-8 text-xs shrink-0">Eliminar</Button>
          </div>
        </div>

      </CardContent>
    </Card>
  );
}

// ── Tabs de navegación ─────────────────────────────────────────────────────

type SettingsTab = "cuenta" | "empresa" | "notificaciones" | "seguridad";

const TABS: { id: SettingsTab; label: string; icon: React.ElementType }[] = [
  { id: "cuenta", label: "Cuenta", icon: User },
  { id: "empresa", label: "Empresa", icon: Building2 },
  { id: "notificaciones", label: "Notificaciones", icon: Bell },
  { id: "seguridad", label: "Seguridad", icon: Shield },
];

// ── Vista principal ────────────────────────────────────────────────────────

export function ViewSettings() {
  const [activeTab, setActiveTab] = useState<SettingsTab>("cuenta");

  return (
    <div className="min-h-full">
      <main className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8 py-6 space-y-6">

        {/* Header */}
        <div>
          <h1>Configuración</h1>
          <p className="text-sm text-muted-foreground">
            Gestiona tu cuenta, empresa, notificaciones y seguridad
          </p>
        </div>

        {/* Tab nav */}
        <div className="flex items-center gap-1 border-b border-border">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 text-sm transition-colors border-b-2 -mb-px ${
                activeTab === tab.id
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <tab.icon className="size-4" />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab content */}
        {activeTab === "cuenta" && <SectionCuenta />}
        {activeTab === "empresa" && <SectionEmpresa />}
        {activeTab === "notificaciones" && <SectionNotificaciones />}
        {activeTab === "seguridad" && <SectionSeguridad />}

      </main>
    </div>
  );
}
