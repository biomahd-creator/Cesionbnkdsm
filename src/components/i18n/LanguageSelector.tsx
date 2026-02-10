import { useLanguage } from "./LanguageProvider";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Languages, Check } from "lucide-react";
import { Locale } from "./translations";

const localeOptions: { value: Locale; label: string; flag: string }[] = [
  { value: "es", label: "Español", flag: "🇪🇸" },
  { value: "en", label: "English", flag: "🇺🇸" },
];

export function LanguageSelector() {
  const { locale, setLocale } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          aria-label={locale === "es" ? "Cambiar idioma" : "Change language"}
        >
          <Languages className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[140px]">
        {localeOptions.map((opt) => (
          <DropdownMenuItem
            key={opt.value}
            onClick={() => setLocale(opt.value)}
            className="flex items-center justify-between gap-2"
          >
            <span className="flex items-center gap-2">
              <span>{opt.flag}</span>
              <span>{opt.label}</span>
            </span>
            {locale === opt.value && <Check className="h-3.5 w-3.5 text-primary" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
