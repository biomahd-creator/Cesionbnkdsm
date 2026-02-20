// Causa 18: Movido de /factoring/c-financia/ a /components/factoring/c-financia/
// v1.1.0 — Logo now uses shared tenant-aware <Logo> component
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui/card";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Button } from "../../ui/button";
import { ArrowRight } from "lucide-react";
import { Logo } from "../../Logo";

interface LoginScreenProps {
  onLogin: () => void;
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const [email, setEmail] = useState("test@cfinancia.com");
  const [password, setPassword] = useState("password123");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="bg-gradient-to-br from-primary via-primary/60 to-secondary relative size-full min-h-screen">

      {/* Tenant Logo — Left Side (on gradient/dark bg → dark variant) */}
      <div className="absolute left-[16.67%] top-1/2 -translate-y-1/2 z-10">
        <div className="mb-4">
          <Logo size="xl" variant="dark" />
        </div>
        <p className="text-xl text-white font-normal tracking-tight">
          Factoring Electrónico
        </p>
      </div>

      {/* Login Card - Right Side */}
      <div className="absolute left-[75%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[490px] z-10">
        <Card className="shadow-2xl">
          <CardHeader className="space-y-1">
            <CardTitle className="text-3xl">Inicio de Sesión</CardTitle>
            <CardDescription>
              Completa los datos a continuación para ingresar
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email">Correo Electrónico</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  required
                />
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label htmlFor="password">Contraseña</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full"
                variant="secondary"
                size="default"
              >
                Entrar
                <ArrowRight className="w-4 h-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}