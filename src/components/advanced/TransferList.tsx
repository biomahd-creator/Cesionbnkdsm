import React, { useState } from "react";
import { cn } from "../ui/utils";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { ScrollArea } from "../ui/scroll-area";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { ChevronRight, ChevronLeft, ChevronsRight, ChevronsLeft } from "lucide-react";

export interface TransferItem {
  id: string;
  label: string;
  disabled?: boolean;
}

interface TransferListProps {
  leftTitle?: string;
  rightTitle?: string;
  items: TransferItem[]; // All items
  initialRightIds?: string[]; // IDs of items initially on the right
  onChange?: (rightIds: string[]) => void;
  className?: string;
}

export function TransferList({
  leftTitle = "Disponibles",
  rightTitle = "Seleccionados",
  items,
  initialRightIds = [],
  onChange,
  className,
}: TransferListProps) {
  const [rightIds, setRightIds] = useState<string[]>(initialRightIds);
  const [checked, setChecked] = useState<string[]>([]);

  // Derived state
  const leftItems = items.filter((item) => !rightIds.includes(item.id));
  const rightItems = items.filter((item) => rightIds.includes(item.id));

  const leftChecked = checked.filter((id) => !rightIds.includes(id));
  const rightChecked = checked.filter((id) => rightIds.includes(id));

  const handleToggle = (id: string) => {
    const currentIndex = checked.indexOf(id);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(id);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleCheckedRight = () => {
    const newRightIds = [...rightIds, ...leftChecked];
    setRightIds(newRightIds);
    setChecked(checked.filter((id) => !leftChecked.includes(id)));
    onChange?.(newRightIds);
  };

  const handleCheckedLeft = () => {
    const newRightIds = rightIds.filter((id) => !rightChecked.includes(id));
    setRightIds(newRightIds);
    setChecked(checked.filter((id) => !rightChecked.includes(id)));
    onChange?.(newRightIds);
  };

  const handleAllRight = () => {
    const newRightIds = items.map((i) => i.id);
    setRightIds(newRightIds);
    setChecked([]);
    onChange?.(newRightIds);
  };

  const handleAllLeft = () => {
    setRightIds([]);
    setChecked([]);
    onChange?.([]);
  };

  const ItemList = ({ listItems, title }: { listItems: TransferItem[]; title: string }) => (
    <Card className="flex-1 min-w-0">
      <CardHeader className="py-3 px-4">
        <CardTitle className="text-sm font-medium">
          {title} ({listItems.length})
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[300px]">
          <div className="p-2 space-y-1">
            {listItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center space-x-2 p-2 rounded-md hover:bg-muted/50 cursor-pointer"
                onClick={() => !item.disabled && handleToggle(item.id)}
              >
                <Checkbox
                  checked={checked.includes(item.id)}
                  disabled={item.disabled}
                  onCheckedChange={() => !item.disabled && handleToggle(item.id)}
                />
                <span className={cn("text-sm", item.disabled && "opacity-50")}>
                  {item.label}
                </span>
              </div>
            ))}
            {listItems.length === 0 && (
              <div className="text-center py-8 text-muted-foreground text-sm">
                No hay elementos
              </div>
            )}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );

  return (
    <div className={cn("flex flex-col md:flex-row items-center gap-4 w-full", className)}>
      <ItemList listItems={leftItems} title={leftTitle} />
      
      <div className="flex flex-row md:flex-col gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={handleAllRight}
          disabled={leftItems.length === 0}
          title="Mover todos a la derecha"
        >
          <ChevronsRight className="h-4 w-4 md:rotate-0 rotate-90" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={handleCheckedRight}
          disabled={leftChecked.length === 0}
          title="Mover seleccionados a la derecha"
        >
          <ChevronRight className="h-4 w-4 md:rotate-0 rotate-90" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={handleCheckedLeft}
          disabled={rightChecked.length === 0}
          title="Mover seleccionados a la izquierda"
        >
          <ChevronLeft className="h-4 w-4 md:rotate-0 rotate-90" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={handleAllLeft}
          disabled={rightItems.length === 0}
          title="Mover todos a la izquierda"
        >
          <ChevronsLeft className="h-4 w-4 md:rotate-0 rotate-90" />
        </Button>
      </div>

      <ItemList listItems={rightItems} title={rightTitle} />
    </div>
  );
}