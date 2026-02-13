import React from "react";
import { cn } from "./utils";
import { Button, ButtonProps } from "./button";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";

interface Action {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

interface SplitButtonProps extends ButtonProps {
  label: string;
  actions: Action[];
  onMainAction: () => void;
}

export function SplitButton({
  label,
  actions,
  onMainAction,
  className,
  variant = "default",
  ...props
}: SplitButtonProps) {
  return (
    <div className={cn("inline-flex -space-x-px rounded-md shadow-sm", className)}>
      <Button
        className="rounded-r-none focus:z-10"
        variant={variant}
        onClick={onMainAction}
        {...props}
      >
        {label}
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className="rounded-l-none border-l border-l-primary-foreground/20 px-2 focus:z-10"
            variant={variant}
            {...props}
          >
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {actions.map((action, index) => (
            <DropdownMenuItem
              key={index}
              onClick={action.onClick}
              disabled={action.disabled}
            >
              {action.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}