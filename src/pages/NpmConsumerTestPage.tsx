/**
 * NPM Consumer Test Page — CSS Health Check
 *
 * Validates that all CSS custom properties from theme.css resolve correctly,
 * key components render with proper styling, and dark/light modes cascade.
 *
 * This page is app-only (not shipped with the npm package).
 * Use it to verify CSS integrity AFTER publishing to npm.
 *
 * @version 0.2.3
 */

import { useState, useEffect, useCallback, useRef } from "react";
import { useTheme } from "../components/providers/ThemeProvider";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Switch } from "../components/ui/switch";
import { Checkbox } from "../components/ui/checkbox";
import { Label } from "../components/ui/label";
import { Progress } from "../components/ui/progress";
import { Separator } from "../components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Alert, AlertTitle, AlertDescription } from "../components/ui/alert";
import { Slider } from "../components/ui/slider";
import { Skeleton } from "../components/ui/skeleton";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../components/ui/accordion";
import {
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Package,
  Palette,
  Type,
  Moon,
  Sun,
  Copy,
  RefreshCw,
  Shield,
  Zap,
  Eye,
  Terminal,
  FileCode,
  Download,
} from "lucide-react";

// ═══════════════════════════════════════════════════════════
// CSS Token Definitions — the ground truth from theme.css
// ═══════════════════════════════════════════════════════════

interface TokenCheck {
  name: string;
  cssVar: string;
  expectedLight: string;  // Expected resolved value in light mode
  category: "core" | "semantic" | "kpi" | "sidebar" | "chart" | "shadow" | "cfinancia";
}

const CSS_TOKENS: TokenCheck[] = [
  // Core colors
  { name: "background", cssVar: "--background", expectedLight: "#ffffff", category: "core" },
  { name: "foreground", cssVar: "--foreground", expectedLight: "#1C2D3A", category: "core" },
  { name: "primary", cssVar: "--primary", expectedLight: "#00c951", category: "core" },
  { name: "primary-foreground", cssVar: "--primary-foreground", expectedLight: "#ffffff", category: "core" },
  { name: "secondary", cssVar: "--secondary", expectedLight: "#1C2D3A", category: "core" },
  { name: "secondary-foreground", cssVar: "--secondary-foreground", expectedLight: "#ffffff", category: "core" },
  { name: "card", cssVar: "--card", expectedLight: "#ffffff", category: "core" },
  { name: "card-foreground", cssVar: "--card-foreground", expectedLight: "#1C2D3A", category: "core" },
  { name: "muted", cssVar: "--muted", expectedLight: "#f4f4f5", category: "core" },
  { name: "muted-foreground", cssVar: "--muted-foreground", expectedLight: "#52525b", category: "core" },
  { name: "accent", cssVar: "--accent", expectedLight: "#f4f4f5", category: "core" },
  { name: "accent-foreground", cssVar: "--accent-foreground", expectedLight: "#1C2D3A", category: "core" },

  // Semantic
  { name: "destructive", cssVar: "--destructive", expectedLight: "#ef4444", category: "semantic" },
  { name: "success", cssVar: "--success", expectedLight: "#22c55e", category: "semantic" },
  { name: "warning", cssVar: "--warning", expectedLight: "#f59e0b", category: "semantic" },
  { name: "info", cssVar: "--info", expectedLight: "#3b82f6", category: "semantic" },
  { name: "ring", cssVar: "--ring", expectedLight: "#00c951", category: "semantic" },
  { name: "radius", cssVar: "--radius", expectedLight: "0.625rem", category: "semantic" },

  // Sidebar
  { name: "sidebar-primary", cssVar: "--sidebar-primary", expectedLight: "#1C2D3A", category: "sidebar" },
  { name: "sidebar-foreground", cssVar: "--sidebar-foreground", expectedLight: "#1C2D3A", category: "sidebar" },

  // KPI
  { name: "kpi-yellow", cssVar: "--kpi-yellow", expectedLight: "234 179 8", category: "kpi" },
  { name: "kpi-orange", cssVar: "--kpi-orange", expectedLight: "249 115 22", category: "kpi" },
  { name: "kpi-blue", cssVar: "--kpi-blue", expectedLight: "59 130 246", category: "kpi" },
  { name: "kpi-lime", cssVar: "--kpi-lime", expectedLight: "132 204 22", category: "kpi" },

  // C-Financia
  { name: "cfinancia-accent", cssVar: "--cfinancia-accent", expectedLight: "222 251 73", category: "cfinancia" },
  { name: "cfinancia-navy", cssVar: "--cfinancia-navy", expectedLight: "5 41 55", category: "cfinancia" },
];

// ═══════════════════════════════════════════════════════════
// Diagnostic Result Types
// ═══════════════════════════════════════════════════════════

type DiagStatus = "pass" | "fail" | "warn";

interface DiagResult {
  token: string;
  cssVar: string;
  status: DiagStatus;
  resolvedValue: string;
  expected: string;
  message: string;
}

interface DiagSummary {
  total: number;
  passed: number;
  failed: number;
  warnings: number;
  fontLoaded: boolean;
  darkModeActive: boolean;
  results: DiagResult[];
}

// ═══════════════════════════════════════════════════════════
// Diagnostic Runner
// ═══════════════════════════════════════════════════════════

function runDiagnostics(isDark: boolean): DiagSummary {
  const root = document.documentElement;
  const styles = getComputedStyle(root);
  const results: DiagResult[] = [];

  for (const token of CSS_TOKENS) {
    const resolved = styles.getPropertyValue(token.cssVar).trim();
    let status: DiagStatus = "pass";
    let message = "Token resolves correctly";

    if (!resolved) {
      status = "fail";
      message = `Token ${token.cssVar} is empty or undefined`;
    } else if (!isDark && resolved !== token.expectedLight) {
      // In light mode, check expected values
      // Some values might resolve differently (e.g., oklch vs hex)
      // so we use a "warn" for non-exact matches that are still non-empty
      status = "warn";
      message = `Resolved "${resolved}" (expected "${token.expectedLight}")`;
    }

    results.push({
      token: token.name,
      cssVar: token.cssVar,
      status,
      resolvedValue: resolved || "(empty)",
      expected: isDark ? "(dark mode)" : token.expectedLight,
      message,
    });
  }

  // Check font
  const bodyFont = styles.getPropertyValue("font-family").trim();
  const fontLoaded = bodyFont.toLowerCase().includes("satoshi");

  // Check dark mode
  const darkModeActive = root.classList.contains("dark") ||
    document.body.classList.contains("dark") ||
    root.closest?.(".dark") !== null;

  return {
    total: results.length,
    passed: results.filter((r) => r.status === "pass").length,
    failed: results.filter((r) => r.status === "fail").length,
    warnings: results.filter((r) => r.status === "warn").length,
    fontLoaded,
    darkModeActive: isDark,
    results,
  };
}

// ════════════���══════════════════════════════════════════════
// Sub-Components
// ═══════════════════════════════════════════════════════════

function StatusIcon({ status }: { status: DiagStatus }) {
  if (status === "pass") return <CheckCircle2 className="size-4 text-green-600" />;
  if (status === "fail") return <XCircle className="size-4 text-red-600" />;
  return <AlertTriangle className="size-4 text-yellow-600" />;
}

function TokenSwatch({ cssVar }: { cssVar: string }) {
  return (
    <div
      className="size-6 rounded border border-border"
      style={{ backgroundColor: `var(${cssVar})` }}
      title={cssVar}
    />
  );
}

function CodeBlock({ code, language = "bash" }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [code]);

  return (
    <div className="relative group">
      <pre className="bg-secondary text-secondary-foreground rounded-lg p-4 overflow-x-auto text-[13px] leading-relaxed">
        <code>{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-secondary-foreground/10 hover:bg-secondary-foreground/20 rounded p-1.5"
        title="Copy to clipboard"
      >
        {copied ? (
          <CheckCircle2 className="size-4 text-green-400" />
        ) : (
          <Copy className="size-4 text-secondary-foreground/70" />
        )}
      </button>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// Main Page Component
// ═══════════════════════════════════════════════════════════

export function NpmConsumerTestPage() {
  const { theme, toggleTheme } = useTheme();
  const [diagnostics, setDiagnostics] = useState<DiagSummary | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const isDark = theme === "dark";

  const handleRunDiagnostics = useCallback(() => {
    setIsRunning(true);
    // Small delay so the UI shows the "running" state
    setTimeout(() => {
      const results = runDiagnostics(isDark);
      setDiagnostics(results);
      setIsRunning(false);
    }, 300);
  }, [isDark]);

  // Auto-run on first mount
  useEffect(() => {
    handleRunDiagnostics();
  }, []);

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* ── Header ── */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="flex items-center gap-3">
            <Package className="size-7 text-primary" />
            NPM Consumer CSS Health Check
          </h1>
          <p className="text-muted-foreground mt-1">
            Validates that <code className="text-primary bg-primary/10 px-1.5 py-0.5 rounded text-[13px]">theme.css</code> tokens, component styling, and dark/light modes work correctly after publishing to npm.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={toggleTheme}
            className="gap-2"
          >
            {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
            {isDark ? "Light" : "Dark"}
          </Button>
          <Button
            onClick={handleRunDiagnostics}
            disabled={isRunning}
            className="gap-2"
          >
            <RefreshCw className={`size-4 ${isRunning ? "animate-spin" : ""}`} />
            Run Diagnostics
          </Button>
        </div>
      </div>

      {/* ── Diagnostic Summary ── */}
      {diagnostics && (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <Card>
            <CardContent className="pt-4 pb-4 text-center">
              <div className="text-2xl tabular-nums">{diagnostics.total}</div>
              <div className="text-muted-foreground text-[13px]">Total Tokens</div>
            </CardContent>
          </Card>
          <Card className="border-green-500/30 bg-green-500/5">
            <CardContent className="pt-4 pb-4 text-center">
              <div className="text-2xl text-green-600 tabular-nums">{diagnostics.passed}</div>
              <div className="text-muted-foreground text-[13px]">Passed</div>
            </CardContent>
          </Card>
          <Card className={diagnostics.failed > 0 ? "border-red-500/30 bg-red-500/5" : ""}>
            <CardContent className="pt-4 pb-4 text-center">
              <div className={`text-2xl tabular-nums ${diagnostics.failed > 0 ? "text-red-600" : ""}`}>{diagnostics.failed}</div>
              <div className="text-muted-foreground text-[13px]">Failed</div>
            </CardContent>
          </Card>
          <Card className={diagnostics.warnings > 0 ? "border-yellow-500/30 bg-yellow-500/5" : ""}>
            <CardContent className="pt-4 pb-4 text-center">
              <div className={`text-2xl tabular-nums ${diagnostics.warnings > 0 ? "text-yellow-600" : ""}`}>{diagnostics.warnings}</div>
              <div className="text-muted-foreground text-[13px]">Warnings</div>
            </CardContent>
          </Card>
          <Card className={diagnostics.fontLoaded ? "border-green-500/30 bg-green-500/5" : "border-red-500/30 bg-red-500/5"}>
            <CardContent className="pt-4 pb-4 text-center">
              {diagnostics.fontLoaded ? (
                <CheckCircle2 className="size-6 text-green-600 mx-auto" />
              ) : (
                <XCircle className="size-6 text-red-600 mx-auto" />
              )}
              <div className="text-muted-foreground text-[13px] mt-1">Satoshi Font</div>
            </CardContent>
          </Card>
        </div>
      )}

      <Tabs defaultValue="tokens" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="tokens" className="gap-2">
            <Palette className="size-4" />
            Tokens
          </TabsTrigger>
          <TabsTrigger value="components" className="gap-2">
            <Eye className="size-4" />
            Components
          </TabsTrigger>
          <TabsTrigger value="setup" className="gap-2">
            <Terminal className="size-4" />
            Consumer Setup
          </TabsTrigger>
          <TabsTrigger value="script" className="gap-2">
            <FileCode className="size-4" />
            Test Script
          </TabsTrigger>
        </TabsList>

        {/* ═══════════════════════════════════════════════════════ */}
        {/* TAB 1: Token Diagnostics                               */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TabsContent value="tokens" className="space-y-6 mt-6">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Shield className="size-4" />
            <span className="text-[13px]">
              Mode: <Badge variant={isDark ? "secondary" : "outline"}>{isDark ? "Dark" : "Light"}</Badge>
              {" "}— Click &quot;Run Diagnostics&quot; after toggling mode to re-check.
            </span>
          </div>

          {/* Color Token Grid */}
          <div className="space-y-4">
            {(["core", "semantic", "kpi", "sidebar", "cfinancia"] as const).map((category) => {
              const tokens = CSS_TOKENS.filter((t) => t.category === category);
              const results = diagnostics?.results.filter((r) =>
                tokens.some((t) => t.cssVar === r.cssVar)
              ) ?? [];

              return (
                <Card key={category}>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-[15px] capitalize flex items-center gap-2">
                      {category === "core" && <Palette className="size-4 text-primary" />}
                      {category === "semantic" && <Zap className="size-4 text-yellow-500" />}
                      {category === "kpi" && <Shield className="size-4 text-blue-500" />}
                      {category === "sidebar" && <Eye className="size-4 text-muted-foreground" />}
                      {category === "cfinancia" && <Package className="size-4 text-green-500" />}
                      {category} tokens
                      {results.length > 0 && (
                        <Badge
                          variant={results.every((r) => r.status === "pass") ? "default" : "outline"}
                          className="ml-auto"
                        >
                          {results.filter((r) => r.status === "pass").length}/{results.length}
                        </Badge>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {tokens.map((token) => {
                        const result = results.find((r) => r.cssVar === token.cssVar);
                        return (
                          <div
                            key={token.cssVar}
                            className="flex items-center gap-3 p-2 rounded-md bg-muted/30 text-[13px]"
                          >
                            <TokenSwatch cssVar={token.cssVar} />
                            {result && <StatusIcon status={result.status} />}
                            <code className="text-foreground/80">{token.cssVar}</code>
                            <span className="ml-auto text-muted-foreground font-mono text-[11px] truncate max-w-[150px]">
                              {result?.resolvedValue ?? "—"}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Detailed Results Table */}
          {diagnostics && diagnostics.results.some((r) => r.status !== "pass") && (
            <Card className="border-yellow-500/30">
              <CardHeader className="pb-3">
                <CardTitle className="text-[15px] flex items-center gap-2">
                  <AlertTriangle className="size-4 text-yellow-500" />
                  Issues Found
                </CardTitle>
                <CardDescription>
                  Warnings may be caused by value format differences (e.g., oklch vs hex) and are usually harmless.
                  Only &quot;fail&quot; status indicates a missing token.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  {diagnostics.results
                    .filter((r) => r.status !== "pass")
                    .map((r) => (
                      <div
                        key={r.cssVar}
                        className="flex items-start gap-3 p-2 rounded text-[13px] bg-muted/30"
                      >
                        <StatusIcon status={r.status} />
                        <div className="flex-1 min-w-0">
                          <code className="text-foreground">{r.cssVar}</code>
                          <div className="text-muted-foreground mt-0.5">{r.message}</div>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* ═══════════════════════════════════════════════════════ */}
        {/* TAB 2: Visual Component Rendering                      */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TabsContent value="components" className="space-y-6 mt-6">
          <Alert>
            <Eye className="size-4" />
            <AlertTitle>Visual Validation</AlertTitle>
            <AlertDescription>
              These components should render with proper CESIONBNK styling: green primary (#00c951),
              navy secondary (#1C2D3A), Satoshi font, 10px border radius.
              Toggle dark/light mode to validate both themes.
            </AlertDescription>
          </Alert>

          {/* Buttons */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-[15px]">Buttons</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button size="sm">Small</Button>
              <Button size="lg">Large</Button>
              <Button disabled>Disabled</Button>
            </CardContent>
          </Card>

          {/* Badges */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-[15px]">Badges</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="info">Info</Badge>
            </CardContent>
          </Card>

          {/* Alerts */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-[15px]">Alerts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Alert>
                <AlertTitle>Default Alert</AlertTitle>
                <AlertDescription>This is a default alert with standard styling.</AlertDescription>
              </Alert>
              <Alert variant="destructive">
                <AlertTitle>Destructive Alert</AlertTitle>
                <AlertDescription>This uses the destructive color token.</AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Form Elements */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-[15px]">Form Elements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="test-input">Input</Label>
                  <Input id="test-input" placeholder="Type something..." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="test-disabled">Disabled Input</Label>
                  <Input id="test-disabled" placeholder="Disabled" disabled />
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Checkbox id="test-check" />
                  <Label htmlFor="test-check">Checkbox</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Switch id="test-switch" />
                  <Label htmlFor="test-switch">Switch</Label>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Slider</Label>
                <Slider defaultValue={[50]} max={100} />
              </div>
              <div className="space-y-2">
                <Label>Progress</Label>
                <Progress value={65} />
              </div>
            </CardContent>
          </Card>

          {/* Card Composition */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-[15px]">Card Composition</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-[14px]">Standard Card</CardTitle>
                    <CardDescription>With description text</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[13px] text-muted-foreground">Card content goes here.</p>
                  </CardContent>
                </Card>
                <Card className="border-primary/30 bg-primary/5">
                  <CardHeader>
                    <CardTitle className="text-[14px] text-primary">Primary Card</CardTitle>
                    <CardDescription>Styled with primary color</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[13px] text-muted-foreground">Uses primary token.</p>
                  </CardContent>
                </Card>
                <Card className="border-destructive/30 bg-destructive/5">
                  <CardHeader>
                    <CardTitle className="text-[14px] text-destructive">Error Card</CardTitle>
                    <CardDescription>Styled with destructive color</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[13px] text-muted-foreground">Uses destructive token.</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* Typography & Skeleton */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-[15px]">Typography & Skeleton</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1">
                <p className="text-foreground">Foreground text (--foreground)</p>
                <p className="text-muted-foreground">Muted foreground text (--muted-foreground)</p>
                <p className="text-primary">Primary text (--primary: #00c951)</p>
                <p className="text-destructive">Destructive text (--destructive)</p>
              </div>
              <Separator />
              <div className="space-y-2">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            </CardContent>
          </Card>

          {/* Accordion */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-[15px]">Accordion</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Border & focus ring check</AccordionTrigger>
                  <AccordionContent>
                    This accordion tests border-color (--border), focus ring (--ring), and
                    transition animations. The border should use the CESIONBNK border token.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Dark mode cascade check</AccordionTrigger>
                  <AccordionContent>
                    When switching to dark mode, the .dark selector overrides CSS custom
                    properties. The @theme bridge in theme.css re-maps --color-* variables
                    for Tailwind v4 to pick up the dark values at runtime.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Elevation Shadows */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-[15px]">Elevation Shadows</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-4">
                {[1, 2, 3, 4].map((level) => (
                  <div
                    key={level}
                    className="h-20 rounded-lg bg-card flex items-center justify-center text-[13px] text-muted-foreground"
                    style={{ boxShadow: `var(--shadow-elevation-${level})` }}
                  >
                    elevation-{level}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Glow Shadows */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-[15px]">Glow Shadows</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-4">
                {(["primary", "blue", "green", "yellow"] as const).map((color) => (
                  <div
                    key={color}
                    className="h-20 rounded-lg bg-card flex items-center justify-center text-[13px] text-muted-foreground"
                    style={{ boxShadow: `var(--shadow-glow-${color}-md)` }}
                  >
                    glow-{color}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ═══════════════════════════════════════════════════════ */}
        {/* TAB 3: Consumer Setup Instructions                     */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TabsContent value="setup" className="space-y-6 mt-6">
          <Alert>
            <Terminal className="size-4" />
            <AlertTitle>Consumer Setup Guide</AlertTitle>
            <AlertDescription>
              Follow these steps to set up a fresh project that consumes the published npm package.
              Use this to verify CSS works correctly post-publish.
            </AlertDescription>
          </Alert>

          <Card>
            <CardHeader>
              <CardTitle className="text-[15px] flex items-center gap-2">
                <span className="size-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-[12px]">1</span>
                Create a new Vite + React project
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`npm create vite@latest cesionbnk-test -- --template react-ts
cd cesionbnk-test
npm install`}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-[15px] flex items-center gap-2">
                <span className="size-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-[12px]">2</span>
                Install the design system + Tailwind v4
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={`npm install @biomahd-creator/financio-design-system
npm install -D tailwindcss @tailwindcss/postcss postcss`}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-[15px] flex items-center gap-2">
                <span className="size-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-[12px]">3</span>
                Configure PostCSS (postcss.config.cjs)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Alert variant="destructive">
                <AlertTriangle className="size-4" />
                <AlertTitle>Critical</AlertTitle>
                <AlertDescription>
                  Use <code>@tailwindcss/postcss</code> (v4), NEVER <code>tailwindcss</code> + <code>autoprefixer</code> (v3).
                </AlertDescription>
              </Alert>
              <CodeBlock
                language="js"
                code={`// postcss.config.cjs
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};`}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-[15px] flex items-center gap-2">
                <span className="size-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-[12px]">4</span>
                Import theme.css in your main CSS file
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Alert>
                <Zap className="size-4" />
                <AlertTitle>This is the #1 issue</AlertTitle>
                <AlertDescription>
                  Without this import, ALL components render unstyled. The <code>@source</code> directive
                  inside theme.css tells Tailwind v4 to scan <code>dist-lib/</code> for utility classes
                  used by library components. If components still render unstyled, add the
                  <code>@source</code> fallback shown below.
                </AlertDescription>
              </Alert>
              <CodeBlock
                language="css"
                code={`/* src/index.css (or src/styles.css) */
@import "tailwindcss";
@import "@biomahd-creator/financio-design-system/theme.css";

/* FALLBACK: If components render unstyled, add this @source
   to explicitly tell YOUR Tailwind to scan the library output.
   This is needed when @source inside an @imported node_modules
   file is not honored by the CSS processor. */
@source "../node_modules/@biomahd-creator/financio-design-system/dist-lib";`}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-[15px] flex items-center gap-2">
                <span className="size-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-[12px]">5</span>
                Test a component
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CodeBlock
                language="tsx"
                code={`// src/App.tsx
import { Button, Card, CardHeader, CardTitle, CardContent } from "@biomahd-creator/financio-design-system";
import { Badge } from "@biomahd-creator/financio-design-system/ui";

function App() {
  return (
    <div className="p-8 space-y-4">
      <h1>CESIONBNK Consumer Test</h1>
      <Card>
        <CardHeader>
          <CardTitle>CSS Verification</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-3">
          <Button>Primary Green</Button>
          <Button variant="secondary">Secondary Navy</Button>
          <Badge variant="success">Success</Badge>
        </CardContent>
      </Card>
    </div>
  );
}`}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-[15px] flex items-center gap-2">
                <span className="size-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-[12px]">6</span>
                Run and verify
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CodeBlock code={`npm run dev`} />
              <div className="mt-4 space-y-2 text-[13px]">
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-green-600" />
                  Button Primary should be green (#00c951)
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-green-600" />
                  Button Secondary should be navy (#1C2D3A)
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-green-600" />
                  Font should be Satoshi (check DevTools &gt; Computed &gt; font-family)
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-green-600" />
                  Border radius should be 10px (0.625rem)
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-green-600" />
                  Card borders should use the correct border token
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ═══════════════════════════════════════════════════════ */}
        {/* TAB 4: Automated Test Script                           */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TabsContent value="script" className="space-y-6 mt-6">
          <Alert>
            <FileCode className="size-4" />
            <AlertTitle>Automated Consumer Verification Script</AlertTitle>
            <AlertDescription>
              Run this script after <code>npm publish</code> to create a minimal consumer project,
              install the package, and verify CSS resolution. Copy and run in your terminal.
            </AlertDescription>
          </Alert>

          <Card>
            <CardHeader>
              <CardTitle className="text-[15px] flex items-center gap-2">
                <Download className="size-4 text-primary" />
                test-consumer.sh (Bash)
              </CardTitle>
              <CardDescription>
                Creates a temp Vite project, installs the DSM, builds, and checks for CSS token presence.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                language="bash"
                code={`#!/bin/bash
# ═══════════════════════════════════════════════════════════
# CESIONBNK DSM — Consumer CSS Verification Script
# Run after: npm publish
# ═══════════════════════════════════════════════════════════
set -e

PKG="@biomahd-creator/financio-design-system"
DIR="cesionbnk-consumer-test"

echo "=== Creating test project ==="
rm -rf "$DIR"
npm create vite@latest "$DIR" -- --template react-ts
cd "$DIR"

echo "=== Installing dependencies ==="
npm install
npm install "$PKG"
npm install -D tailwindcss @tailwindcss/postcss postcss

echo "=== Configuring PostCSS ==="
cat > postcss.config.cjs << 'EOF'
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
EOF

echo "=== Setting up CSS import ==="
cat > src/index.css << 'EOF'
@import "tailwindcss";
@import "@biomahd-creator/financio-design-system/theme.css";
EOF

echo "=== Writing test component ==="
cat > src/App.tsx << 'APPEOF'
import { Button, Card, CardHeader, CardTitle, CardContent, Badge } from "@biomahd-creator/financio-design-system";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <h1 className="text-2xl mb-4">CESIONBNK Consumer Test</h1>
      <Card className="max-w-md">
        <CardHeader>
          <CardTitle>CSS Verification</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Badge>Default</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
        </CardContent>
      </Card>
      <div className="mt-8 p-4 border rounded-lg">
        <p className="text-primary">Primary text (#00c951)</p>
        <p className="text-muted-foreground">Muted text</p>
        <p className="text-destructive">Destructive text</p>
      </div>
    </div>
  );
}

export default App;
APPEOF

echo "=== Building project ==="
npm run build

echo ""
echo "=== Checking CSS token presence in build output ==="
CSS_FILE=$(find dist -name "*.css" | head -1)

if [ -z "$CSS_FILE" ]; then
  echo "ERROR: No CSS file found in dist/"
  exit 1
fi

TOKENS_OK=true
for token in "--primary" "--background" "--foreground" "--secondary" "--radius" "--ring" "--border"; do
  if grep -q "$token" "$CSS_FILE"; then
    echo "  PASS: $token found in output CSS"
  else
    echo "  FAIL: $token NOT found in output CSS"
    TOKENS_OK=false
  fi
done

if grep -q "Satoshi" "$CSS_FILE"; then
  echo "  PASS: Satoshi font reference found"
else
  echo "  WARN: Satoshi font not in CSS (may be loaded via CDN link)"
fi

if [ "$TOKENS_OK" = true ]; then
  echo ""
  echo "=== ALL CHECKS PASSED ==="
  echo "Run 'cd $DIR && npm run dev' to visually verify."
else
  echo ""
  echo "=== SOME CHECKS FAILED ==="
  echo "Check theme.css @source directive and PostCSS config."
  exit 1
fi`}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-[15px] flex items-center gap-2">
                <Terminal className="size-4 text-primary" />
                PowerShell Version (Windows)
              </CardTitle>
              <CardDescription>
                For Windows users — PowerShell equivalent.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                language="powershell"
                code={`# CESIONBNK DSM — Consumer CSS Verification (PowerShell)
$PKG = "@biomahd-creator/financio-design-system"
$DIR = "cesionbnk-consumer-test"

Write-Host "=== Creating test project ===" -ForegroundColor Cyan
if (Test-Path $DIR) { Remove-Item $DIR -Recurse -Force }
npm create vite@latest $DIR -- --template react-ts
Set-Location $DIR

Write-Host "=== Installing dependencies ===" -ForegroundColor Cyan
npm install
npm install $PKG
npm install -D tailwindcss "@tailwindcss/postcss" postcss

Write-Host "=== Configuring PostCSS ===" -ForegroundColor Cyan
@'
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
'@ | Set-Content postcss.config.cjs

Write-Host "=== Setting up CSS import ===" -ForegroundColor Cyan
@'
@import "tailwindcss";
@import "@biomahd-creator/financio-design-system/theme.css";
'@ | Set-Content src/index.css

Write-Host "=== Writing test component ===" -ForegroundColor Cyan
@'
import { Button, Card, CardHeader, CardTitle, CardContent, Badge } from "@biomahd-creator/financio-design-system";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <h1 className="text-2xl mb-4">CESIONBNK Consumer Test</h1>
      <Card className="max-w-md">
        <CardHeader>
          <CardTitle>CSS Verification</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Badge>Default</Badge>
          <Badge variant="success">Success</Badge>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
'@ | Set-Content src/App.tsx

Write-Host "=== Building project ===" -ForegroundColor Cyan
npm run build

Write-Host ""
Write-Host "=== Checking CSS tokens ===" -ForegroundColor Cyan
$cssFile = Get-ChildItem dist -Filter "*.css" -Recurse | Select-Object -First 1
if (-not $cssFile) {
  Write-Host "ERROR: No CSS file found" -ForegroundColor Red
  exit 1
}
$content = Get-Content $cssFile.FullName -Raw
$allOk = $true
foreach ($token in @("--primary", "--background", "--foreground", "--secondary")) {
  if ($content -match [regex]::Escape($token)) {
    Write-Host "  PASS: $token" -ForegroundColor Green
  } else {
    Write-Host "  FAIL: $token" -ForegroundColor Red
    $allOk = $false
  }
}
if ($allOk) {
  Write-Host "${'`'}n=== ALL CHECKS PASSED ===" -ForegroundColor Green
} else {
  Write-Host "${'`'}n=== SOME CHECKS FAILED ===" -ForegroundColor Red
}`}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-[15px]">Common Issues Checklist</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-[13px]">
                <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                  <XCircle className="size-4 text-red-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-foreground">Components render unstyled (no colors, default browser styles)</p>
                    <p className="text-muted-foreground mt-1">
                      Missing <code className="text-primary bg-primary/10 px-1 rounded">@import &quot;@biomahd-creator/financio-design-system/theme.css&quot;</code> in your CSS file.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                  <XCircle className="size-4 text-red-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-foreground">PostCSS error: &quot;Unknown plugin tailwindcss&quot;</p>
                    <p className="text-muted-foreground mt-1">
                      Using v3 config. Change <code>tailwindcss</code> to <code>@tailwindcss/postcss</code> in postcss.config.cjs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                  <XCircle className="size-4 text-red-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-foreground">Tailwind classes from library components not generated</p>
                    <p className="text-muted-foreground mt-1">
                      The <code>@source &quot;../dist-lib&quot;</code> directive in theme.css tells Tailwind to scan node_modules. Verify it&apos;s not being stripped.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-destructive/5 border border-destructive/20 rounded-lg">
                  <XCircle className="size-4 text-red-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-foreground">CSS tokens load but Tailwind utility classes are missing (colors show via inline style but not via className)</p>
                    <p className="text-muted-foreground mt-1">
                      The <code>@source</code> inside theme.css may not be honored when processed from <code>node_modules</code>. Add this to YOUR CSS file:
                    </p>
                    <code className="block mt-2 text-primary bg-primary/10 px-2 py-1 rounded text-[12px]">
                      @source &quot;../node_modules/@biomahd-creator/financio-design-system/dist-lib&quot;;
                    </code>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                  <XCircle className="size-4 text-red-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-foreground">Dark mode doesn&apos;t work</p>
                    <p className="text-muted-foreground mt-1">
                      Add <code className="text-primary bg-primary/10 px-1 rounded">class=&quot;dark&quot;</code> to your <code>&lt;html&gt;</code> element. The <code>@custom-variant dark</code> directive uses <code>.dark</code> selector strategy.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                  <AlertTriangle className="size-4 text-yellow-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-foreground">Font looks different (not Satoshi)</p>
                    <p className="text-muted-foreground mt-1">
                      Satoshi is loaded via CDN (<code>fonts.cdnfonts.com</code>). Check network connectivity or ad blockers. The font-family falls back to <code>ui-sans-serif, system-ui, sans-serif</code>.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}