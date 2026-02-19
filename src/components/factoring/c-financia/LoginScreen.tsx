// Causa 18: Movido de /factoring/c-financia/ a /components/factoring/c-financia/
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui/card";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Button } from "../../ui/button";
import { ArrowRight } from "lucide-react";
import svgPaths from "../../../imports/svg-7nnkcr2v8m";

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
    <div className="bg-gradient-to-br from-primary via-success to-secondary relative size-full min-h-screen">
      
      {/* Logo CESIONBNK - Left Side */}
      <div className="absolute left-[16.67%] top-1/2 -translate-y-1/2 z-10">
        <div className="relative w-64 h-8 mb-4">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 256 30.7574">
            <g>
              <path d={svgPaths.p2b2bf200} fill="white" />
              <path d={svgPaths.p24669f00} fill="white" />
              <path d={svgPaths.p1f0ea300} fill="var(--color-cfinancia-accent-hover)" />
              <path d={svgPaths.p8e7b700} fill="white" />
              <path d={svgPaths.p3aba2500} fill="white" />
              <path d={svgPaths.p258fa100} fill="white" />
              <path d={svgPaths.p483ec00} fill="white" />
              <path d={svgPaths.p9857700} fill="white" />
              <path d={svgPaths.p21e2b700} fill="white" />
              <path d={svgPaths.p1ce3500} fill="white" />
              <path d={svgPaths.p1a848c00} fill="white" />
            </g>
          </svg>
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