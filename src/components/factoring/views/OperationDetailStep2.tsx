import { useState } from "react";
import { 
  ArrowLeft, 
  Check, 
  Info,
  Building2,
  Wallet
} from "lucide-react";
import { Button } from "../../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Switch } from "../../ui/switch";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "../../ui/table";
import { Badge } from "../../ui/badge";
import { toast } from "sonner@2.0.3";

interface OperationDetailStep2Props {
  onBack: () => void;
  onFinish: () => void;
}

export function OperationDetailStep2({ onBack, onFinish }: OperationDetailStep2Props) {
  const [isExcedente, setIsExcedente] = useState(false);

  const handleCreateOperation = () => {
    toast.success("Operación creada exitosamente", {
        description: "La operación #27008 ha sido registrada."
    });
    onFinish();
  };
  
  return (
    <div className="space-y-6 pb-20 animate-in fade-in slide-in-from-right-4 duration-500">
      
      {/* Breadcrumb & Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div className="flex flex-col">
            <div className="text-sm text-muted-foreground">
                Inicio {'>'} Factoring {'>'} Nueva Operación
            </div>
            <h1 className="text-2xl font-bold text-secondary">Detalle de Operación</h1>
        </div>
      </div>

      {/* Stepper */}
      <div className="flex items-center justify-center w-full mb-8">
        <div className="flex items-center w-full max-w-lg relative">
          {/* Linea base */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-border -z-10" />
          
          {/* Step 1 (Completed) */}
          <div className="flex flex-col items-center bg-muted/10 px-4 z-10 cursor-pointer" onClick={onBack}>
            <div className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground border-4 border-background flex items-center justify-center shadow-sm mb-2">
              <Check className="h-5 w-5" />
            </div>
            <span className="text-sm font-medium text-secondary">Facturas validadas</span>
          </div>
          
          {/* Spacer */}
          <div className="flex-1" />

          {/* Step 2 (Active) */}
          <div className="flex flex-col items-center bg-muted/10 px-4 z-10">
            <div className="w-10 h-10 rounded-full bg-primary border-4 border-background flex items-center justify-center shadow-sm mb-2">
              <span className="font-bold text-primary-foreground">2</span>
            </div>
            <span className="text-sm font-medium text-secondary">Validar desembolsos</span>
          </div>
        </div>
      </div>

      {/* Content: Cuentas de Desembolso */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
                <Wallet className="h-5 w-5 text-primary" />
                Cuentas para Desembolso
            </CardTitle>
            <Badge variant="outline" className="text-muted-foreground">
                Total a dispersar: $89.383.968
            </Badge>
        </CardHeader>
        <CardContent>
            <Table>
                <TableHeader className="bg-muted/50">
                    <TableRow>
                        <TableHead>NO. CUENTA</TableHead>
                        <TableHead>TIPO CUENTA</TableHead>
                        <TableHead>NOMBRE TITULAR</TableHead>
                        <TableHead>NO. IDENTIF</TableHead>
                        <TableHead>BANCO</TableHead>
                        <TableHead className="text-right">VALOR</TableHead>
                        <TableHead className="text-center">EXCEDENTE</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">455970078917</TableCell>
                        <TableCell>Ahorros</TableCell>
                        <TableCell>ODIN PETROIL Y GAS S.A.S.</TableCell>
                        <TableCell>900985911</TableCell>
                        <TableCell>
                            <div className="flex items-center gap-2">
                                <Building2 className="h-4 w-4 text-muted-foreground" />
                                DAVIVIENDA
                            </div>
                        </TableCell>
                        <TableCell className="text-right font-bold">$ 89.383.968</TableCell>
                        <TableCell className="text-center">
                            <Switch 
                                checked={isExcedente} 
                                onCheckedChange={setIsExcedente}
                                className="data-[state=checked]:bg-primary data-[state=checked]:border-secondary"
                            />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>

            <div className="mt-6 bg-blue-500/10 border border-blue-500/20 p-4 rounded-lg flex items-start gap-3">
                <Info className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                <div className="text-sm text-blue-800 dark:text-blue-300">
                    <p className="font-semibold mb-1">Confirmación de Cuenta</p>
                    <p>Por favor verifique que la cuenta seleccionada corresponde al beneficiario final de la operación. El desembolso se realizará inmediatamente después de la confirmación.</p>
                </div>
            </div>
        </CardContent>
      </Card>


      {/* SUMMARY FOOTER (Sticky) */}
      <Card className="bg-secondary text-secondary-foreground border-none mt-8 shadow-2xl">
        <CardContent className="p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-8">
                <div>
                    <p className="text-sm text-muted-foreground">Total Facturas (1)</p>
                    <p className="text-xl">$102.938.617,18</p>
                </div>
                <div className="h-10 w-px bg-primary-foreground/20 hidden md:block" />
                <div>
                    <p className="text-sm text-muted-foreground">Desembolso Neto</p>
                    <p className="text-xl text-primary">$89.383.968,00</p>
                </div>
            </div>

            <div className="flex items-center gap-4 w-full md:w-auto">
                 <Button 
                    variant="outline"
                    className="h-12 px-6 border-primary-foreground/20 text-secondary-foreground hover:bg-primary-foreground/10 hover:text-secondary-foreground"
                    onClick={onBack}
                >
                    Atrás
                </Button>
                <Button 
                    className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold h-12 px-8 min-w-[200px]"
                    onClick={handleCreateOperation}
                >
                    Crear Operación
                    <Check className="ml-2 h-5 w-5" />
                </Button>
            </div>
        </CardContent>
      </Card>
      
    </div>
  );
}
