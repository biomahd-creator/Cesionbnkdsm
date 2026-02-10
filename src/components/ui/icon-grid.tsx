import { Check, Copy } from "lucide-react";
import { toast } from "sonner@2.0.3";

/**
 * IconGridItem
 * 
 * Componente reutilizable para mostrar un icono individual en la galería.
 * Incluye funcionalidad de copiar al portapapeles y feedback visual.
 * 
 * @component
 * @param {Object} props - Propiedades del componente
 * @param {string} props.name - Nombre del icono
 * @param {React.ComponentType} props.Icon - Componente del icono
 * @param {boolean} props.isCopied - Estado de copiado
 * @param {function} props.onCopy - Callback al copiar
 */
interface IconGridItemProps {
  name: string;
  Icon: React.ComponentType<{ className?: string }>;
  isCopied: boolean;
  onCopy: () => void;
}

export function IconGridItem({ name, Icon, isCopied, onCopy }: IconGridItemProps) {
  return (
    <button
      onClick={onCopy}
      className="group relative flex flex-col items-center gap-2 p-3 rounded-lg border bg-card hover:bg-muted/50 transition-all hover:shadow-md active:scale-95"
      title={name}
    >
      <div className="relative">
        <Icon className="h-6 w-6" />
        {isCopied && (
          <div className="absolute -top-1 -right-1">
            <Check className="h-3 w-3 text-green-500" />
          </div>
        )}
      </div>
      <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors line-clamp-1 w-full text-center">
        {name}
      </span>
      <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <Copy className="h-3 w-3 text-muted-foreground" />
      </div>
    </button>
  );
}

/**
 * IconGrid
 * 
 * Grid responsivo para mostrar múltiples iconos.
 * Optimizado para diferentes tamaños de pantalla.
 * 
 * @component
 * @param {Object} props - Propiedades del componente
 * @param {Array} props.icons - Array de objetos con name e Icon
 * @param {string} props.copiedIcon - Nombre del icono actualmente copiado
 * @param {function} props.onCopyIcon - Callback al copiar un icono
 */
interface IconGridProps {
  icons: Array<{ name: string; Icon: React.ComponentType<{ className?: string }> }>;
  copiedIcon: string | null;
  onCopyIcon: (name: string) => void;
}

export function IconGrid({ icons, copiedIcon, onCopyIcon }: IconGridProps) {
  const handleCopy = (iconName: string) => {
    const importCode = `import { ${iconName} } from "lucide-react";\n\n<${iconName} className="h-4 w-4" />`;
    navigator.clipboard.writeText(importCode);
    onCopyIcon(iconName);
    toast.success(`${iconName} copiado al portapapeles`);
  };

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3">
      {icons.map(({ name, Icon }) => (
        <IconGridItem
          key={name}
          name={name}
          Icon={Icon}
          isCopied={copiedIcon === name}
          onCopy={() => handleCopy(name)}
        />
      ))}
    </div>
  );
}
