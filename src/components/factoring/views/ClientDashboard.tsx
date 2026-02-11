import { Badge } from "../../ui/badge";
import { StatusBadge, getStatusIconBg } from "../StatusBadge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../ui/card";
import { Button } from "../../ui/button";
import { Progress } from "../../ui/progress";
import { 
  PlusCircle, 
  FileText, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Wallet,
  ArrowRight
} from "lucide-react";

// Causa 16: Movido de /factoring/views/ a /components/factoring/views/

interface ClientDashboardProps {
  onNewRequest?: () => void;
}

export function ClientDashboard({ onNewRequest }: ClientDashboardProps) {
  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-background border border-primary/20 text-foreground rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-2xl md:text-3xl font-semibold mb-2">¡Hola, Tech Solutions SAS! 👋</h1>
          <p className="text-muted-foreground max-w-xl">
            Tienes <span className="text-primary font-semibold">$125.000.000</span> disponibles en tu cupo rotativo para anticipar facturas hoy mismo.
          </p>
        </div>
        <div className="relative z-10">
          <Button 
            onClick={onNewRequest}
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-md px-6 py-6 h-auto shadow-lg shadow-primary/20"
          >
            <PlusCircle className="mr-2 h-5 w-5" />
            Nueva Solicitud
          </Button>
        </div>
        
        {/* Decorative background elements */}
        <div className="absolute right-0 top-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute left-0 bottom-0 w-48 h-48 bg-primary/5 rounded-full blur-2xl translate-y-1/4 -translate-x-1/4" />
      </div>

      {/* Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Solicitudes en Proceso</CardTitle>
            <Clock className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold text-foreground">2</div>
            <p className="text-xs text-muted-foreground mt-1">1 en revisión • 1 en desembolso</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Facturas Cedidas</CardTitle>
            <FileText className="h-4 w-4 text-info" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold text-foreground">15</div>
            <p className="text-xs text-muted-foreground mt-1">Total: $450.2M este mes</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Cupo Disponible</CardTitle>
            <Wallet className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold text-foreground">45%</div>
            <Progress value={45} className="h-2 mt-2" />
          </CardContent>
        </Card>
      </div>

      {/* Active Requests */}
      <Card>
        <CardHeader>
          <CardTitle>Mis Operaciones Recientes</CardTitle>
          <CardDescription>Estado de tus últimas solicitudes de factoring</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-1">
            {[
              { id: "OP-2024-001", client: "Cencosud S.A.", amount: "$45.200.000", date: "Hace 2 horas", status: "review", statusLabel: "En Revisión de Riesgos" },
              { id: "OP-2024-002", client: "Almacenes Éxito", amount: "$128.500.000", date: "Ayer", status: "approved", statusLabel: "Aprobado - Desembolso Pendiente" },
              { id: "OP-2023-089", client: "Jumbo Colombia", amount: "$32.400.000", date: "12 Dic 2024", status: "paid", statusLabel: "Desembolsado" },
            ].map((op, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 hover:bg-accent/50 rounded-lg transition-colors border border-transparent hover:border-border">
                <div className="flex items-start gap-4 mb-3 sm:mb-0">
                  <div className={`p-2 rounded-full mt-1 ${getStatusIconBg(op.status)}`}>
                    {op.status === 'paid' ? <CheckCircle2 className="h-5 w-5" /> :
                     op.status === 'approved' ? <Wallet className="h-5 w-5" /> :
                     <Clock className="h-5 w-5" />}
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{op.client}</h4>
                    <p className="text-sm text-muted-foreground">Operación #{op.id} • {op.date}</p>
                    <StatusBadge status={op.status} className="mt-2" />
                  </div>
                </div>
                <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pl-14 sm:pl-0">
                    <div className="text-right">
                        <p className="text-sm text-muted-foreground">Valor Neto</p>
                        <p className="text-lg text-foreground">{op.amount}</p>
                    </div>
                    <Button variant="ghost" size="icon">
                        <ArrowRight className="h-5 w-5 text-muted-foreground" />
                    </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-border text-center">
            <Button variant="link" className="text-secondary">Ver historial completo</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}