/**
 * ModulosScreen — Factoring Module Selection (Tenant-aware)
 * Uses semantic design tokens so it adapts to the active tenant theme.
 */
import React from "react";
import { TrendingUp, FileText, Users, ArrowRight } from "lucide-react";
import { cn } from "../../lib/utils";
import { CFinanciaNavbar } from "./c-financia-navbar";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Separator } from "../../components/ui/separator";
import { Logo } from "../../components/Logo";

/* ── Module Cards data ── */
const modules = [
  {
    id: "factoring",
    name: "Factoring",
    description: "Liquidez inmediata para tus facturas en menos de 24 horas.",
    icon: TrendingUp,
    badge: "Principal",
  },
  {
    id: "radian",
    name: "Eventos RADIAN",
    description: "Gestiona y notifica todos tus eventos electrónicos a la DIAN.",
    icon: FileText,
    badge: "DIAN",
  },
  {
    id: "vinculaciones",
    name: "Vinculaciones",
    description: "Administra las solicitudes de vinculación y el onboarding de clientes.",
    icon: Users,
    badge: "KYC",
  },
];

interface ModulosScreenProps {
  onSelectModule: (moduleName: string) => void;
  onLogout?: () => void;
}

export function ModulosScreen({ onSelectModule, onLogout }: ModulosScreenProps) {
  return (
    <div
      className="min-h-screen w-full overflow-hidden relative"
      style={{ backgroundImage: "linear-gradient(120deg, var(--gradient-from) 0%, var(--gradient-to) 100%)" }}
    >
      {/* Subtle decorative gradient */}
      <div
        className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] rounded-full opacity-15 blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--secondary) 0%, transparent 70%)" }}
      />

      <CFinanciaNavbar variant="full" onLogout={onLogout} />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 min-h-screen items-center pt-[80px]">
        {/* Left: Module Cards */}
        <div className="flex flex-col gap-10 justify-center h-full py-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-foreground">
              Módulos de Operación
            </h1>
            <p className="text-lg text-muted-foreground mt-3 max-w-md">
              Accede a las funcionalidades principales de la plataforma.
            </p>
          </div>

          <div className="flex flex-col gap-4 w-full max-w-[520px]">
            {modules.map((mod) => {
              const Icon = mod.icon;
              return (
                <Card
                  key={mod.id}
                  className="group cursor-pointer border-border transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 hover:scale-[1.02]"
                  onClick={() => onSelectModule(mod.id)}
                >
                  <CardContent className="p-6 flex items-center gap-5">
                    {/* Icon */}
                    <div className="shrink-0 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/20">
                      <Icon className="h-6 w-6" />
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-lg text-foreground">{mod.name}</h3>
                        <Badge variant="secondary">{mod.badge}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{mod.description}</p>
                    </div>

                    {/* Arrow */}
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Right: Hero Graphic */}
        <div className="hidden lg:flex flex-col items-center justify-center h-full relative">
          <div>
            {/* Tenant Logo — large hero display */}
            <div className="relative w-[420px] h-[420px] flex items-center justify-center">
              {/* Glow behind */}
              <div
                className="absolute inset-0 rounded-full opacity-15 blur-[60px]"
                style={{ background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)" }}
              />
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border border-primary/15" />
              <div className="absolute inset-6 rounded-full border border-primary/10" />
              {/* Logo centered */}
              <div className="relative z-10">
                <Logo size="xl" variant="auto" className="w-[280px]" />
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-12 flex gap-8">
            {[
              { value: "24h", label: "Desembolso" },
              { value: "100%", label: "Digital" },
              { value: "SSL", label: "Seguridad" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-xl font-bold text-primary">{stat.value}</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}