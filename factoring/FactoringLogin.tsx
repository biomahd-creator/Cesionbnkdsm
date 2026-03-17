import { useState } from "react";
import { useTheme } from "../components/providers/ThemeProvider";
import { Logo } from "../components/Logo";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Eye, EyeOff, LogIn, Building2 } from "lucide-react";
import type { UserRole } from "./factoring-view-renderer";

interface FactoringLoginProps {
  onLogin: (role: UserRole) => void;
}

export function FactoringLogin({ onLogin }: FactoringLoginProps) {
  const { tenant, tenants } = useTheme();
  const tenantInfo = tenants.find((t) => t.id === tenant);
  const tenantName = tenantInfo?.name ?? "CESIONBNK";

  const [email, setEmail] = useState("soporte@cesionbnk.com");
  const [password, setPassword] = useState("••••••••");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Completa todos los campos.");
      return;
    }

    setLoading(true);
    // Simulate auth delay
    setTimeout(() => {
      setLoading(false);
      // admin if email contains "admin" or "soporte", client otherwise
      const role: UserRole = email.includes("admin") || email.includes("soporte") ? "admin" : "client";
      onLogin(role);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left panel — branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary flex-col justify-between p-12 text-primary-foreground">
        <div className="flex items-center gap-3">
          <Logo size="md" variant="light" />
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold leading-tight">
            Plataforma de<br />Factoring Digital
          </h1>
          <p className="text-primary-foreground/70 text-lg max-w-sm">
            Gestiona tus operaciones de cesión de facturas de forma ágil, segura y transparente.
          </p>
        </div>

        <div className="flex items-center gap-2 text-primary-foreground/50 text-sm">
          <Building2 className="h-4 w-4" />
          <span>{tenantName} · Plataforma Factoring v0.3</span>
        </div>
      </div>

      {/* Right panel — form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-sm space-y-8">
          {/* Mobile logo */}
          <div className="flex lg:hidden justify-center">
            <Logo size="lg" variant="auto" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-foreground">Iniciar Sesión</h2>
            <p className="text-muted-foreground text-sm">
              Accede a tu cuenta de {tenantName}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="usuario@empresa.com"
                autoComplete="email"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Contraseña</Label>
                <button
                  type="button"
                  className="text-xs text-primary hover:underline"
                  tabIndex={-1}
                >
                  ¿Olvidaste tu contraseña?
                </button>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  autoComplete="current-password"
                  className="pr-10"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  onClick={() => setShowPassword((v) => !v)}
                  tabIndex={-1}
                  aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {error && (
              <p className="text-sm text-destructive">{error}</p>
            )}

            <Button type="submit" className="w-full gap-2" disabled={loading}>
              {loading ? (
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
              ) : (
                <LogIn className="h-4 w-4" />
              )}
              {loading ? "Ingresando..." : "Ingresar"}
            </Button>
          </form>

          <p className="text-center text-xs text-muted-foreground">
            Demo: usa cualquier email con "soporte" o "admin" para rol Administrador,<br />
            cualquier otro email para rol Cliente.
          </p>
        </div>
      </div>
    </div>
  );
}
