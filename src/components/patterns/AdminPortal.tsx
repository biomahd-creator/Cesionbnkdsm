import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Separator } from "../ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Alert, AlertDescription } from "../ui/alert";
import { Progress } from "../ui/progress";
import {
  Shield,
  FileText,
  CheckCircle2,
  XCircle,
  Clock,
  AlertCircle,
  TrendingUp,
  Users,
  DollarSign,
  Search,
  Filter,
  Download,
  Eye,
  ThumbsUp,
  ThumbsDown,
  Building2,
  Calendar,
  Target,
  Activity,
  AlertTriangle
} from "lucide-react";
import { ReportsConsultation } from "./ReportsConsultation";

/**
 * ADMIN PORTAL — C-FINANCIA
 * 
 * Internal manager view with features for:
 * - Reviewing pending requests
 * - Approving/rejecting operations
 * - Risk monitoring
 * - Operations dashboard
 * - Credit line management
 * - Portfolio analysis
 */

interface Solicitud {
  id: string;
  fecha: string;
  empresa: string;
  nit: string;
  factura: string;
  monto: number;
  plazo: number;
  cliente: string;
  scoreRiesgo: number;
  estado: 'pendiente' | 'aprobada' | 'rechazada' | 'revision';
  prioridad: 'alta' | 'media' | 'baja';
}

export function AdminPortal() {
  const [filtroEstado, setFiltroEstado] = useState<string>("todos");
  const [busqueda, setBusqueda] = useState("");
  const [showReports, setShowReports] = useState(false);

  // If showing reports, render only that view
  if (showReports) {
    return <ReportsConsultation onBack={() => setShowReports(false)} />;
  }

  // Mock data — In production these would come from an API
  const solicitudes: Solicitud[] = [
    {
      id: 'SOL-2024-001',
      fecha: '2024-05-19 09:30',
      empresa: 'Comercial ABC S.A.S.',
      nit: '900.123.456-7',
      factura: 'FE-2024-015',
      monto: 45000000,
      plazo: 60,
      cliente: 'Distribuidora XYZ Ltda.',
      scoreRiesgo: 85,
      estado: 'pendiente',
      prioridad: 'alta'
    },
    {
      id: 'SOL-2024-002',
      fecha: '2024-05-19 10:15',
      empresa: 'Industrias DEF Ltda.',
      nit: '900.234.567-8',
      factura: 'FE-2024-016',
      monto: 32000000,
      plazo: 90,
      cliente: 'Almacenes Colombia S.A.',
      scoreRiesgo: 72,
      estado: 'revision',
      prioridad: 'media'
    },
    {
      id: 'SOL-2024-003',
      fecha: '2024-05-19 11:00',
      empresa: 'Servicios GHI S.A.',
      nit: '900.345.678-9',
      factura: 'FE-2024-017',
      monto: 28000000,
      plazo: 45,
      cliente: 'Empresa Nacional',
      scoreRiesgo: 91,
      estado: 'pendiente',
      prioridad: 'baja'
    },
    {
      id: 'SOL-2024-004',
      fecha: '2024-05-18 14:20',
      empresa: 'Constructora JKL S.A.S.',
      nit: '900.456.789-0',
      factura: 'FE-2024-018',
      monto: 85000000,
      plazo: 120,
      cliente: 'Gobierno Distrital',
      scoreRiesgo: 58,
      estado: 'revision',
      prioridad: 'alta'
    },
    {
      id: 'SOL-2024-005',
      fecha: '2024-05-18 16:45',
      empresa: 'Technology MNO Ltd.',
      nit: '900.567.890-1',
      factura: 'FE-2024-019',
      monto: 18000000,
      plazo: 30,
      cliente: 'Startup Tech',
      scoreRiesgo: 65,
      estado: 'pendiente',
      prioridad: 'media'
    }
  ];

  // Dashboard metrics
  const totalSolicitudes = solicitudes.length;
  const pendientes = solicitudes.filter(s => s.estado === 'pendiente').length;
  const enRevision = solicitudes.filter(s => s.estado === 'revision').length;
  const montoTotalPendiente = solicitudes
    .filter(s => s.estado === 'pendiente' || s.estado === 'revision')
    .reduce((acc, s) => acc + s.monto, 0);

  const formatCOP = (value: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const handleAprobar = (solicitudId: string) => {
    alert(`Request ${solicitudId} APPROVED\n\nActions taken:\n- Credit line assigned\n- Client notification sent\n- Disbursement scheduled for tomorrow`);
  };

  const handleRechazar = (solicitudId: string) => {
    const motivo = prompt("Rejection reason:");
    if (motivo) {
      alert(`Request ${solicitudId} REJECTED\n\nReason: ${motivo}\n\nActions taken:\n- Client notification sent\n- Documents archived`);
    }
  };

  const handleRevisar = (solicitudId: string) => {
    alert(`Reviewing request ${solicitudId}\n\nOpening full case file...`);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600 dark:text-green-400';
    if (score >= 60) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-destructive';
  };

  const getScoreBadge = (score: number) => {
    if (score >= 80) return <Badge className="bg-green-500">Low Risk</Badge>;
    if (score >= 60) return <Badge className="bg-yellow-500">Medium Risk</Badge>;
    return <Badge variant="destructive">High Risk</Badge>;
  };

  const getPrioridadBadge = (prioridad: string) => {
    switch (prioridad) {
      case 'alta':
        return <Badge variant="destructive">High Priority</Badge>;
      case 'media':
        return <Badge className="bg-yellow-500">Medium</Badge>;
      default:
        return <Badge variant="outline">Low</Badge>;
    }
  };

  // Request filtering
  const solicitudesFiltradas = solicitudes.filter(s => {
    const matchEstado = filtroEstado === 'todos' || s.estado === filtroEstado;
    const matchBusqueda = s.empresa.toLowerCase().includes(busqueda.toLowerCase()) ||
                          s.factura.toLowerCase().includes(busqueda.toLowerCase()) ||
                          s.nit.includes(busqueda);
    return matchEstado && matchBusqueda;
  });

  return (
    <div className="space-y-6">
      {/* Admin header */}
      <Card className="elevation-2 border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                Admin Portal — C-Financia
              </CardTitle>
              <CardDescription className="mt-2">
                Factoring request management and approval
              </CardDescription>
            </div>
            <Badge variant="outline" className="text-sm">
              Internal Manager
            </Badge>
          </div>
        </CardHeader>
      </Card>

      {/* Admin KPIs */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="elevation-2">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center justify-between">
              Pending Requests
              <Clock className="h-4 w-4 text-orange-500" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-orange-600 dark:text-orange-400">
                {pendientes}
              </p>
              <p className="text-xs text-muted-foreground">
                Require immediate action
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="elevation-2">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center justify-between">
              Under Review
              <AlertCircle className="h-4 w-4 text-yellow-500" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
                {enRevision}
              </p>
              <p className="text-xs text-muted-foreground">
                Risk analysis in progress
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="elevation-2">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center justify-between">
              Pending Amount
              <DollarSign className="h-4 w-4 text-blue-500" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {formatCOP(montoTotalPendiente)}
              </p>
              <p className="text-xs text-muted-foreground">
                Across {pendientes + enRevision} requests
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="elevation-2">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center justify-between">
              Total Requests Today
              <FileText className="h-4 w-4 text-primary" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-3xl font-bold">
                {totalSolicitudes}
              </p>
              <div className="flex items-center gap-1 text-sm">
                <TrendingUp className="h-4 w-4 text-green-500" />
                <span className="text-green-600 dark:text-green-400 font-medium">+8%</span>
                <span className="text-muted-foreground text-xs">vs yesterday</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters & search */}
      <Card className="elevation-2">
        <CardHeader>
          <CardTitle className="text-lg">Request Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by company, Tax ID or invoice number..."
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <Select value={filtroEstado} onValueChange={setFiltroEstado}>
              <SelectTrigger className="w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">All Statuses</SelectItem>
                <SelectItem value="pendiente">Pending</SelectItem>
                <SelectItem value="revision">Under Review</SelectItem>
                <SelectItem value="aprobada">Approved</SelectItem>
                <SelectItem value="rechazada">Rejected</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Requests table */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">
            Requests ({solicitudesFiltradas.length})
          </h3>
          {solicitudesFiltradas.length === 0 && (
            <p className="text-sm text-muted-foreground">
              No requests match the applied filters
            </p>
          )}
        </div>

        {solicitudesFiltradas.map((solicitud) => (
          <Card key={solicitud.id} className="elevation-2 hover:elevation-3 transition-all">
            <CardContent className="pt-6">
              <div className="space-y-4">
                {/* Request header */}
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <h4 className="font-semibold text-lg">{solicitud.empresa}</h4>
                      {getPrioridadBadge(solicitud.prioridad)}
                      {getScoreBadge(solicitud.scoreRiesgo)}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Building2 className="h-3 w-3" />
                        NIT: {solicitud.nit}
                      </span>
                      <span className="flex items-center gap-1">
                        <FileText className="h-3 w-3" />
                        {solicitud.factura}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {solicitud.fecha}
                      </span>
                      <span className="flex items-center gap-1">
                        <Target className="h-3 w-3" />
                        ID: {solicitud.id}
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">
                      {formatCOP(solicitud.monto)}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {solicitud.plazo} days
                    </p>
                  </div>
                </div>

                <Separator />

                {/* Operation details */}
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground">Debtor Client</p>
                    <p className="font-medium">{solicitud.cliente}</p>
                  </div>

                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground">Risk Score</p>
                    <div className="flex items-center gap-2">
                      <Progress value={solicitud.scoreRiesgo} className="h-2 flex-1" />
                      <span className={`font-bold ${getScoreColor(solicitud.scoreRiesgo)}`}>
                        {solicitud.scoreRiesgo}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground">Advance (90%)</p>
                    <p className="font-semibold text-green-600 dark:text-green-400">
                      {formatCOP(solicitud.monto * 0.9)}
                    </p>
                  </div>
                </div>

                {/* Risk alerts */}
                {solicitud.scoreRiesgo < 70 && (
                  <Alert className="border-yellow-500/50 bg-yellow-500/10">
                    <AlertTriangle className="h-4 w-4 text-yellow-500" />
                    <AlertDescription className="text-sm">
                      <strong>Attention:</strong> Risk score is below the standard threshold. 
                      A detailed manual review is recommended.
                    </AlertDescription>
                  </Alert>
                )}

                {solicitud.monto > 50000000 && (
                  <Alert className="border-blue-500/50 bg-blue-500/10">
                    <AlertCircle className="h-4 w-4 text-blue-500" />
                    <AlertDescription className="text-sm">
                      <strong>High amount:</strong> This operation requires senior-level approval.
                    </AlertDescription>
                  </Alert>
                )}

                {/* Actions */}
                <div className="flex justify-end gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleRevisar(solicitud.id)}
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    View Details
                  </Button>

                  {(solicitud.estado === 'pendiente' || solicitud.estado === 'revision') && (
                    <>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-destructive hover:text-destructive"
                        onClick={() => handleRechazar(solicitud.id)}
                      >
                        <ThumbsDown className="h-4 w-4 mr-2" />
                        Reject
                      </Button>

                      <Button
                        size="sm"
                        className="bg-green-600 hover:bg-green-700"
                        onClick={() => handleAprobar(solicitud.id)}
                      >
                        <ThumbsUp className="h-4 w-4 mr-2" />
                        Approve
                      </Button>
                    </>
                  )}

                  {solicitud.estado === 'aprobada' && (
                    <Badge className="bg-green-500 px-4 py-2">
                      <CheckCircle2 className="h-4 w-4 mr-1" />
                      Approved
                    </Badge>
                  )}

                  {solicitud.estado === 'rechazada' && (
                    <Badge variant="destructive" className="px-4 py-2">
                      <XCircle className="h-4 w-4 mr-1" />
                      Rejected
                    </Badge>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Daily analytics */}
      <Card className="elevation-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-primary" />
            Daily Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Approval Rate</span>
                <span className="font-bold text-green-600 dark:text-green-400">87%</span>
              </div>
              <Progress value={87} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Average Response Time</span>
                <span className="font-bold">3.8 hours</span>
              </div>
              <Progress value={65} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Operations Processed</span>
                <span className="font-bold text-blue-600 dark:text-blue-400">24</span>
              </div>
              <Progress value={80} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Reports */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => setShowReports(true)}
      >
        <FileText className="h-4 w-4 mr-2" />
        View Reports
      </Button>
    </div>
  );
}