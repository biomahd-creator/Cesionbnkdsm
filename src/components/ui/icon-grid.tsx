import { Check, Copy } from "lucide-react";
import { toast } from "sonner@2.0.3";

/**
 * IconGridItem
 * 
 * Reusable component for displaying a single icon in the gallery.
 * Includes functionality to copy to clipboard and visual feedback.
 * 
 * @component
 * @param {Object} props - Component properties
 * @param {string} props.name - Icon name
 * @param {React.ComponentType} props.Icon - Icon component
 * @param {boolean} props.isCopied - Copy state
 * @param {function} props.onCopy - Copy callback
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
 * Responsive grid for displaying multiple icons.
 * Optimized for different screen sizes.
 * 
 * @component
 * @param {Object} props - Component properties
 * @param {Array} props.icons - Array of objects with name and Icon
 * @param {string} props.copiedIcon - Name of the currently copied icon
 * @param {function} props.onCopyIcon - Copy icon callback
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
    toast.success(`${iconName} copied to clipboard`);
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