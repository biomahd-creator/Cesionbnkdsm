import { useState } from "react";
import { Star } from "lucide-react";
import { cn } from "../ui/utils";

interface RatingProps {
  value?: number;
  onChange?: (rating: number) => void;
  max?: number;
  readonly?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Rating({
  value = 0,
  onChange,
  max = 5,
  readonly = false,
  size = "md",
}: RatingProps) {
  const [rating, setRating] = useState(value);
  const [hover, setHover] = useState(0);

  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
  };

  const handleClick = (newRating: number) => {
    if (readonly) return;
    setRating(newRating);
    onChange?.(newRating);
  };

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: max }, (_, i) => i + 1).map((star) => {
        const filled = (hover || rating) >= star;
        return (
          <button
            key={star}
            type="button"
            onClick={() => handleClick(star)}
            onMouseEnter={() => !readonly && setHover(star)}
            onMouseLeave={() => !readonly && setHover(0)}
            disabled={readonly}
            className={cn(
              "transition-all",
              !readonly && "hover:scale-110 cursor-pointer",
              readonly && "cursor-default"
            )}
          >
            <Star
              className={cn(
                sizeClasses[size],
                filled ? "fill-primary text-primary" : "text-muted-foreground"
              )}
            />
          </button>
        );
      })}
    </div>
  );
}
