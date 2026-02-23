/**
 * LoginScreen — Factoring Login (Tenant-aware)
 * Uses semantic design tokens so it adapts to the active tenant theme.
 */
import React, { useState } from "react";
import { ArrowRight, Lock, Mail, Eye, EyeOff } from "lucide-react";
import { Logo } from "../../components/Logo";
import { useTheme } from "../../components/providers/ThemeProvider";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";

interface LoginScreenProps {
  onLogin: () => void;
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const { tenant, tenants } = useTheme();
  const tenantInfo = tenants.find((t) => t.id === tenant);
  const tenantName = tenantInfo?.name ?? "CESIONBNK";
  const tenantSlug = tenantName.toLowerCase().replace(/\s+/g, "");

  const [email, setEmail] = useState(`test@${tenantSlug}.com`);
  const [password, setPassword] = useState("password123");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="relative min-h-screen w-full bg-background overflow-hidden">
      {/* Subtle decorative gradient using primary color */}
      <div
        className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-10 blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full opacity-8 blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--secondary) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 flex min-h-screen">
        {/* Left: Brand panel */}
        <div className="hidden lg:flex flex-1 flex-col justify-center items-start px-[8%]">
          <div className="mb-8">
            <Logo size="xl" variant="auto" />
          </div>
          <h1 className="text-5xl font-bold tracking-tight leading-tight mb-4 text-foreground">
            Factoring Electrónico
          </h1>
          <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
            Plataforma inteligente para la gestión de factoring, vinculaciones y eventos RADIAN.
          </p>
          <Separator className="my-8 max-w-md" />
          <div className="flex gap-8">
            {[
              { value: "500+", label: "Operaciones" },
              { value: "$2.5B", label: "Desembolsado" },
              { value: "99.9%", label: "Uptime" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Login Card */}
        <div className="flex flex-1 items-center justify-center px-6 lg:px-[8%]">
          <div className="w-full max-w-[440px]">
            <Card className="overflow-hidden border-border shadow-lg">
              <CardContent className="p-8 lg:p-10">
                {/* Mobile logo */}
                <div className="lg:hidden mb-8 flex justify-center">
                  <Logo size="lg" variant="auto" />
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-foreground tracking-tight">
                    Inicio de Sesión
                  </h2>
                  <p className="text-sm text-muted-foreground mt-2">
                    Completa los datos a continuación para ingresar
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-1.5">
                    <Label htmlFor="email">Correo Electrónico</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="tu@email.com"
                        required
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="password">Contraseña</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        required
                        className="pl-10 pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((p) => !p)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Forgot password */}
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="text-xs text-primary hover:text-primary/80 transition-colors"
                    >
                      ¿Olvidaste tu contraseña?
                    </button>
                  </div>

                  <Button type="submit" className="w-full gap-2" size="lg">
                    Entrar
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </form>

                <Separator className="my-6" />

                <p className="text-center text-xs text-muted-foreground">
                  ¿No tienes una cuenta?{" "}
                  <button className="text-primary hover:text-primary/80 transition-colors">
                    Contacta a soporte
                  </button>
                </p>
              </CardContent>
            </Card>

            {/* Security note */}
            <div className="mt-6 flex items-center justify-center gap-2 text-[10px] text-muted-foreground">
              <Lock className="h-3 w-3" />
              <span>Conexión cifrada de extremo a extremo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}