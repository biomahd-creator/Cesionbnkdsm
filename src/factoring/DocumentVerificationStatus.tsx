import React from "react";
import { cn } from "../lib/utils";
import { Check, X, Clock, FileText, Upload, AlertCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";

export interface DocumentItem {
  id: string;
  name: string;
  status: "verified" | "pending" | "rejected" | "missing" | "processing";
  timestamp?: string;
  message?: string;
  required?: boolean;
}

interface DocumentVerificationStatusProps {
  documents: DocumentItem[];
  className?: string;
  onUpload?: (docId: string) => void;
}

const statusConfig = {
  verified: { icon: Check, color: "text-green-500", bg: "bg-green-500/10", label: "Verificado" },
  pending: { icon: Clock, color: "text-blue-500", bg: "bg-blue-500/10", label: "En Revisión" },
  rejected: { icon: X, color: "text-red-500", bg: "bg-red-500/10", label: "Rechazado" },
  missing: { icon: AlertCircle, color: "text-orange-500", bg: "bg-orange-500/10", label: "Pendiente" },
  processing: { icon: Clock, color: "text-purple-500", bg: "bg-purple-500/10", label: "Procesando" },
};

export function DocumentVerificationStatus({
  documents,
  className,
  onUpload,
}: DocumentVerificationStatusProps) {
  const verifiedCount = documents.filter(d => d.status === "verified").length;
  const progress = (verifiedCount / documents.length) * 100;

  return (
    <div className={cn("space-y-6", className)}>
      <div className="space-y-2">
        <div className="flex justify-between text-sm font-medium">
          <span>Progreso de Verificación</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-2" />
        <p className="text-xs text-muted-foreground">
          {verifiedCount} de {documents.length} documentos verificados correctamente.
        </p>
      </div>

      <div className="space-y-3">
        {documents.map((doc) => {
          const config = statusConfig[doc.status];
          const Icon = config.icon;

          return (
            <div
              key={doc.id}
              className="flex items-start gap-3 p-3 rounded-lg border bg-card transition-colors hover:bg-muted/30"
            >
              <div className={cn("h-8 w-8 rounded-full flex items-center justify-center shrink-0 mt-0.5", config.bg)}>
                <Icon className={cn("h-4 w-4", config.color)} />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-medium text-sm truncate">
                    {doc.name}
                    {doc.required && <span className="text-red-500 ml-1">*</span>}
                  </p>
                  <span className={cn("text-xs font-medium px-2 py-0.5 rounded-full", config.bg, config.color)}>
                    {config.label}
                  </span>
                </div>
                
                {doc.message ? (
                  <p className={cn("text-xs mt-1", doc.status === 'rejected' ? "text-red-500" : "text-muted-foreground")}>
                    {doc.message}
                  </p>
                ) : (
                  <p className="text-xs text-muted-foreground mt-1">
                    {doc.timestamp || "Pendiente de carga"}
                  </p>
                )}
              </div>

              {(doc.status === "missing" || doc.status === "rejected") && onUpload && (
                <Button
                  variant="outline"
                  size="sm"
                  className="shrink-0 h-8 px-2"
                  onClick={() => onUpload(doc.id)}
                >
                  <Upload className="h-3.5 w-3.5 mr-1" />
                  Cargar
                </Button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
