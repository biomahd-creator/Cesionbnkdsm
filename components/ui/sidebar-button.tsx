import { cn } from "./utils";
import { Button } from "./button";

interface SidebarButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
  children: React.ReactNode;
}

export function SidebarButton({
  isActive = false,
  icon,
  badge,
  children,
  className,
  ...props
}: SidebarButtonProps) {
  return (
    <Button
      variant="ghost"
      className={cn(
        "w-full justify-start gap-3",
        isActive
          ? "bg-primary text-primary-foreground font-bold"
          : "text-secondary-foreground/70 hover:text-secondary-foreground hover:bg-secondary-foreground/10",
        className
      )}
      {...props}
    >
      {icon}
      <span>{children}</span>
      {badge}
    </Button>
  );
}