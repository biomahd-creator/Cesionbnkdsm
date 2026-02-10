import { Palette, Download, Upload, RotateCcw, Check, Copy, Sparkles } from "lucide-react";
import { useState } from "react";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { Progress } from "../components/ui/progress";
import { toast } from "sonner@2.0.3";
import { getUIColors } from "../lib/theme-utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Separator } from "../components/ui/separator";
import { Slider } from "../components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { MasterDataGrid } from "../components/advanced/MasterDataGrid";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { SafeChartContainer } from "../components/ui/safe-chart-container";
import { useTheme } from "../components/ThemeProvider";

export function ThemeCustomizerPage() {
  const { config, updateConfig, resetToDefaults, exportConfig, importConfig, applyPreset } = useTheme();
  const [copied, setCopied] = useState(false);

  const handleColorChange = (key: string, value: string) => {
    updateConfig({ [key]: value });
  };

  const handleExport = () => {
    const configString = exportConfig();
    // Fallback para cuando clipboard API está bloqueado
    try {
      navigator.clipboard.writeText(configString).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        toast.success("Configuración copiada al portapapeles");
      }).catch(() => {
        // Fallback: crear elemento temporal para copiar
        const textArea = document.createElement("textarea");
        textArea.value = configString;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
          document.execCommand('copy');
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
          toast.success("Configuración copiada al portapapeles");
        } catch (err) {
          toast.error("No se pudo copiar. Intenta manualmente.");
          console.log(configString);
        }
        textArea.remove();
      });
    } catch (err) {
      toast.error("No se pudo copiar. Revisa la consola.");
      console.log("Config to copy:", configString);
    }
  };

  const handleImport = () => {
    // Fallback para cuando clipboard API está bloqueado
    const jsonString = prompt("Pega la configuración JSON:");
    if (jsonString) {
      try {
        importConfig(jsonString);
        toast.success("Configuración importada correctamente");
      } catch (error) {
        toast.error("Error al importar configuración");
      }
    }
  };

  const handleReset = () => {
    resetToDefaults();
    toast.success("Tema restaurado a valores por defecto");
  };

  const handlePreset = (preset: string) => {
    applyPreset(preset);
    toast.success(`Preset "${preset}" aplicado`);
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        updateConfig({ logoUrl: base64String });
        toast.success("Logo actualizado correctamente");
      };
      reader.readAsDataURL(file);
    }
  };

  // Sample data for charts
  const chartData = [
    { name: "Ene", value: 400, revenue: 240, expenses: 140 },
    { name: "Feb", value: 300, revenue: 139, expenses: 221 },
    { name: "Mar", value: 200, revenue: 980, expenses: 229 },
    { name: "Abr", value: 278, revenue: 390, expenses: 200 },
    { name: "May", value: 189, revenue: 480, expenses: 218 },
  ];

  const pieData = [
    { name: "Marketing", value: 400 },
    { name: "Desarrollo", value: 300 },
    { name: "Diseño", value: 300 },
    { name: "Ventas", value: 200 },
    { name: "Soporte", value: 150 },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <Palette className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-medium">Theme Customizer</h1>
          <Badge variant="secondary">
            <Sparkles className="h-3 w-3 mr-1" />
            Live Preview
          </Badge>
        </div>
        <p className="text-muted-foreground">
          Personaliza colores, gráficos y parámetros visuales. Los cambios se reflejan en tiempo real.
        </p>
      </div>

      <Separator />

      {/* Two-column layout: Presets + Actions on left, Tabs on right */}
      <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6 items-start">
        {/* Left Column: Actions + Presets (sticky) */}
        <div className="lg:sticky lg:top-4 space-y-6">
          {/* Actions Bar */}
          <div className="flex flex-col gap-2">
            <Button onClick={handleExport} variant="outline" className="w-full justify-start">
              {copied ? (
                <>
                  <Check className="h-4 w-4 mr-2" />
                  Copiado
                </>
              ) : (
                <>
                  <Download className="h-4 w-4 mr-2" />
                  Exportar Config
                </>
              )}
            </Button>
            <Button onClick={handleImport} variant="outline" className="w-full justify-start">
              <Upload className="h-4 w-4 mr-2" />
              Importar Config
            </Button>
            <Button onClick={handleReset} variant="outline" className="w-full justify-start">
              <RotateCcw className="h-4 w-4 mr-2" />
              Restaurar Defaults
            </Button>
          </div>

          {/* Presets */}
          <Card className="p-5">
            <h3 className="text-lg font-semibold mb-3">Presets de Temas</h3>
            <div className="flex flex-col gap-2">
              <Button onClick={() => handlePreset("default")} variant="outline" className="h-auto py-3 justify-start">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="h-5 w-5 rounded-full bg-primary border-2 border-border" />
                    <div className="h-5 w-5 rounded-full bg-secondary border-2 border-border" />
                  </div>
                  <span>Default</span>
                </div>
              </Button>
              <Button onClick={() => handlePreset("ocean")} variant="outline" className="h-auto py-3 justify-start">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="h-5 w-5 rounded-full bg-[#06B6D4] border-2 border-border" />
                    <div className="h-5 w-5 rounded-full bg-[#0E7490] border-2 border-border" />
                  </div>
                  <span>Ocean</span>
                </div>
              </Button>
              <Button onClick={() => handlePreset("sunset")} variant="outline" className="h-auto py-3 justify-start">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="h-5 w-5 rounded-full bg-[#F59E0B] border-2 border-border" />
                    <div className="h-5 w-5 rounded-full bg-[#DC2626] border-2 border-border" />
                  </div>
                  <span>Sunset</span>
                </div>
              </Button>
              <Button onClick={() => handlePreset("forest")} variant="outline" className="h-auto py-3 justify-start">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="h-5 w-5 rounded-full bg-[#84CC16] border-2 border-border" />
                    <div className="h-5 w-5 rounded-full bg-[#15803D] border-2 border-border" />
                  </div>
                  <span>Forest</span>
                </div>
              </Button>
              <Button onClick={() => handlePreset("purple")} variant="outline" className="h-auto py-3 justify-start">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="h-5 w-5 rounded-full bg-[#A855F7] border-2 border-border" />
                    <div className="h-5 w-5 rounded-full bg-[#7C3AED] border-2 border-border" />
                  </div>
                  <span>Purple</span>
                </div>
              </Button>
            </div>
          </Card>
        </div>

        {/* Right Column: Tabs */}
        <div>
          <Tabs defaultValue="brand" className="w-full">
            <TabsList className="grid w-full grid-cols-5 max-w-xl">
              <TabsTrigger value="brand">Brand</TabsTrigger>
              <TabsTrigger value="ui">UI Elements</TabsTrigger>
              <TabsTrigger value="inputs">Inputs</TabsTrigger>
              <TabsTrigger value="charts">Charts</TabsTrigger>
              <TabsTrigger value="layout">Layout</TabsTrigger>
            </TabsList>

            {/* Brand Colors Tab */}
            <TabsContent value="brand" className="mt-6">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                {/* Logo */}
                <Card className="p-5">
                  <h3 className="text-lg font-semibold mb-5">Identidad de Marca</h3>
                  <div className="space-y-3">
                    <Label>Logo Image</Label>
                    <div className="flex flex-col gap-3">
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={handleLogoUpload}
                        className="cursor-pointer"
                      />
                      <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                          <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                          <span className="bg-background px-2 text-muted-foreground">Or use URL</span>
                        </div>
                      </div>
                      <Input
                        type="text"
                        placeholder="https://example.com/logo.png"
                        value={config.logoUrl || ""}
                        onChange={(e) => handleColorChange("logoUrl", e.target.value)}
                        className="flex-1"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Sube una imagen o pega una URL externa.
                    </p>
                  </div>
                </Card>

                {/* Brand Colors */}
                <Card className="p-5">
                  <h3 className="text-lg font-semibold mb-5">Colores de Marca</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Primary */}
                    <div className="space-y-2">
                      <Label>Primary Color</Label>
                      <div className="flex items-center gap-2">
                        <Input type="color" value={config.primary} onChange={(e) => handleColorChange("primary", e.target.value)} className="w-12 h-10 cursor-pointer p-0.5" />
                        <Input type="text" value={config.primary} onChange={(e) => handleColorChange("primary", e.target.value)} className="flex-1 font-mono text-xs" />
                      </div>
                      <p className="text-xs text-muted-foreground">CTAs y elementos destacados</p>
                    </div>
                    {/* Secondary */}
                    <div className="space-y-2">
                      <Label>Secondary Color</Label>
                      <div className="flex items-center gap-2">
                        <Input type="color" value={config.secondary} onChange={(e) => handleColorChange("secondary", e.target.value)} className="w-12 h-10 cursor-pointer p-0.5" />
                        <Input type="text" value={config.secondary} onChange={(e) => handleColorChange("secondary", e.target.value)} className="flex-1 font-mono text-xs" />
                      </div>
                      <p className="text-xs text-muted-foreground">Texto principal y fondos oscuros</p>
                    </div>
                    {/* Destructive */}
                    <div className="space-y-2">
                      <Label>Destructive Color</Label>
                      <div className="flex items-center gap-2">
                        <Input type="color" value={config.destructive} onChange={(e) => handleColorChange("destructive", e.target.value)} className="w-12 h-10 cursor-pointer p-0.5" />
                        <Input type="text" value={config.destructive} onChange={(e) => handleColorChange("destructive", e.target.value)} className="flex-1 font-mono text-xs" />
                      </div>
                      <p className="text-xs text-muted-foreground">Acciones destructivas y errores</p>
                    </div>
                    {/* Accent */}
                    <div className="space-y-2">
                      <Label>Accent Color</Label>
                      <div className="flex items-center gap-2">
                        <Input type="color" value={config.accent} onChange={(e) => handleColorChange("accent", e.target.value)} className="w-12 h-10 cursor-pointer p-0.5" />
                        <Input type="text" value={config.accent} onChange={(e) => handleColorChange("accent", e.target.value)} className="flex-1 font-mono text-xs" />
                      </div>
                      <p className="text-xs text-muted-foreground">Hover states e interactivos</p>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>

            {/* UI Elements Colors Tab */}
            <TabsContent value="ui" className="mt-6">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                {/* Links & Navigation */}
                <Card className="p-5">
                  <h3 className="text-lg font-semibold mb-5">Links & Navigation</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Link Color (Default)</Label>
                      <div className="flex items-center gap-2">
                        <Input type="color" value={config.link} onChange={(e) => handleColorChange("link", e.target.value)} className="w-12 h-10 cursor-pointer p-0.5" />
                        <Input type="text" value={config.link} onChange={(e) => handleColorChange("link", e.target.value)} className="flex-1 font-mono text-xs" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Link Hover Color</Label>
                      <div className="flex items-center gap-2">
                        <Input type="color" value={config.linkHover} onChange={(e) => handleColorChange("linkHover", e.target.value)} className="w-12 h-10 cursor-pointer p-0.5" />
                        <Input type="text" value={config.linkHover} onChange={(e) => handleColorChange("linkHover", e.target.value)} className="flex-1 font-mono text-xs" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Link Visited Color</Label>
                      <div className="flex items-center gap-2">
                        <Input type="color" value={config.linkVisited} onChange={(e) => handleColorChange("linkVisited", e.target.value)} className="w-12 h-10 cursor-pointer p-0.5" />
                        <Input type="text" value={config.linkVisited} onChange={(e) => handleColorChange("linkVisited", e.target.value)} className="flex-1 font-mono text-xs" />
                      </div>
                    </div>
                    <div className="p-3 border rounded-lg bg-muted/20">
                      <p className="text-sm">
                        Ejemplo:{" "}
                        <a href="#" style={{ color: config.link }} className="underline">Este es un enlace</a>
                        {" "}y{" "}
                        <a href="#" style={{ color: config.linkHover }} className="underline">este está en hover</a>
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Status & Feedback */}
                <Card className="p-5">
                  <h3 className="text-lg font-semibold mb-5">Status & Feedback</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-3">
                      <div className="space-y-2">
                        <Label>Success</Label>
                        <div className="flex items-center gap-1">
                          <Input type="color" value={config.success} onChange={(e) => handleColorChange("success", e.target.value)} className="w-10 h-10 cursor-pointer p-0.5" />
                          <Input type="text" value={config.success} onChange={(e) => handleColorChange("success", e.target.value)} className="flex-1 font-mono text-xs" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Warning</Label>
                        <div className="flex items-center gap-1">
                          <Input type="color" value={config.warning} onChange={(e) => handleColorChange("warning", e.target.value)} className="w-10 h-10 cursor-pointer p-0.5" />
                          <Input type="text" value={config.warning} onChange={(e) => handleColorChange("warning", e.target.value)} className="flex-1 font-mono text-xs" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Info</Label>
                        <div className="flex items-center gap-1">
                          <Input type="color" value={config.info} onChange={(e) => handleColorChange("info", e.target.value)} className="w-10 h-10 cursor-pointer p-0.5" />
                          <Input type="text" value={config.info} onChange={(e) => handleColorChange("info", e.target.value)} className="flex-1 font-mono text-xs" />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="p-2.5 rounded-lg" style={{ backgroundColor: config.success + "20", borderLeft: `4px solid ${config.success}` }}>
                        <p className="text-sm font-medium" style={{ color: config.success }}>✓ Operación exitosa</p>
                      </div>
                      <div className="p-2.5 rounded-lg" style={{ backgroundColor: config.warning + "20", borderLeft: `4px solid ${config.warning}` }}>
                        <p className="text-sm font-medium" style={{ color: config.warning }}>⚠ Advertencia importante</p>
                      </div>
                      <div className="p-2.5 rounded-lg" style={{ backgroundColor: config.info + "20", borderLeft: `4px solid ${config.info}` }}>
                        <p className="text-sm font-medium" style={{ color: config.info }}>ℹ Información relevante</p>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Interactive Elements */}
                <Card className="p-5 xl:col-span-2">
                  <h3 className="text-lg font-semibold mb-5">Interactive Elements</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>Focus Ring Color</Label>
                        <div className="flex items-center gap-2">
                          <Input type="color" value={config.focusRing} onChange={(e) => handleColorChange("focusRing", e.target.value)} className="w-12 h-10 cursor-pointer p-0.5" />
                          <Input type="text" value={config.focusRing} onChange={(e) => handleColorChange("focusRing", e.target.value)} className="flex-1 font-mono text-xs" />
                        </div>
                        <p className="text-xs text-muted-foreground">Anillo de foco (accesibilidad)</p>
                      </div>
                      <div className="space-y-2">
                        <Label>Selection Color</Label>
                        <div className="flex items-center gap-2">
                          <Input type="color" value={config.selection} onChange={(e) => handleColorChange("selection", e.target.value)} className="w-12 h-10 cursor-pointer p-0.5" />
                          <Input type="text" value={config.selection} onChange={(e) => handleColorChange("selection", e.target.value)} className="flex-1 font-mono text-xs" />
                        </div>
                        <p className="text-xs text-muted-foreground">Texto seleccionado y highlight</p>
                      </div>
                    </div>
                    <div className="p-4 border rounded-lg space-y-3 bg-muted/20 flex flex-col justify-center">
                      <Button className="w-full" style={{ outline: `2px solid ${config.focusRing}`, outlineOffset: "2px" }}>
                        Botón con Focus Ring
                      </Button>
                      <p className="text-sm p-2" style={{ backgroundColor: config.selection + "40" }}>
                        Este texto tiene el color de selección aplicado
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>

            {/* Inputs Colors Tab */}
            <TabsContent value="inputs" className="mt-6">
              <Card className="p-5">
                <h3 className="text-lg font-semibold mb-5">Colores de Inputs</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Input Background (Light Mode)</Label>
                      <div className="flex items-center gap-2">
                        <Input type="color" value={config.inputBackgroundLight} onChange={(e) => handleColorChange("inputBackgroundLight", e.target.value)} className="w-12 h-10 cursor-pointer p-0.5" />
                        <Input type="text" value={config.inputBackgroundLight} onChange={(e) => handleColorChange("inputBackgroundLight", e.target.value)} className="flex-1 font-mono text-xs" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Input Background (Dark Mode)</Label>
                      <div className="flex items-center gap-2">
                        <Input type="color" value={config.inputBackgroundDark} onChange={(e) => handleColorChange("inputBackgroundDark", e.target.value)} className="w-12 h-10 cursor-pointer p-0.5" />
                        <Input type="text" value={config.inputBackgroundDark} onChange={(e) => handleColorChange("inputBackgroundDark", e.target.value)} className="flex-1 font-mono text-xs" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Input Border Color</Label>
                      <div className="flex items-center gap-2">
                        <Input type="color" value={config.inputBorder} onChange={(e) => handleColorChange("inputBorder", e.target.value)} className="w-12 h-10 cursor-pointer p-0.5" />
                        <Input type="text" value={config.inputBorder} onChange={(e) => handleColorChange("inputBorder", e.target.value)} className="flex-1 font-mono text-xs" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg space-y-3 bg-muted/20 flex flex-col justify-center">
                    <Input placeholder="Input example" style={{ backgroundColor: config.inputBackgroundLight, borderColor: config.inputBorder }} />
                    <Select>
                      <SelectTrigger style={{ backgroundColor: config.inputBackgroundLight, borderColor: config.inputBorder }}>
                        <SelectValue placeholder="Select example" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">Option 1</SelectItem>
                        <SelectItem value="2">Option 2</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Charts Tab */}
            <TabsContent value="charts" className="mt-6">
              <Card className="p-5">
                <h3 className="text-lg font-semibold mb-5">Colores de Gráficos</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Controls */}
                  <div className="space-y-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div key={i} className="space-y-2">
                        <Label>Chart Color {i + 1}</Label>
                        <div className="flex items-center gap-2">
                          <Input type="color" value={config[`chart${i + 1}` as keyof typeof config]} onChange={(e) => handleColorChange(`chart${i + 1}`, e.target.value)} className="w-12 h-10 cursor-pointer p-0.5" />
                          <Input type="text" value={config[`chart${i + 1}` as keyof typeof config]} onChange={(e) => handleColorChange(`chart${i + 1}`, e.target.value)} className="flex-1 font-mono text-xs" />
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Previews */}
                  <div className="space-y-6">
                    <SafeChartContainer width="100%" height="200px" minHeight="200px">
                        <BarChart data={chartData}>
                          <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                          <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} />
                          <YAxis fontSize={12} tickLine={false} axisLine={false} />
                          <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                          <Bar dataKey="value" fill={config.chart1} radius={[4, 4, 0, 0]} />
                          <Bar dataKey="revenue" fill={config.chart2} radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </SafeChartContainer>
                    <SafeChartContainer width="100%" height="200px" minHeight="200px">
                        <PieChart>
                          <Pie data={pieData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                            {pieData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={config[`chart${(index % 5) + 1}` as keyof typeof config]} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </SafeChartContainer>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Layout Tab */}
            <TabsContent value="layout" className="mt-6">
              <Card className="p-5">
                <h3 className="text-lg font-semibold mb-5">Layout & Spacing</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Controls */}
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <Label>Border Radius</Label>
                        <span className="text-sm text-muted-foreground">{config.radius}rem</span>
                      </div>
                      <Slider
                        value={[parseFloat(config.radius)]}
                        min={0}
                        max={2}
                        step={0.1}
                        onValueChange={(value) => handleColorChange("radius", value[0].toString())}
                      />
                    </div>
                    <Separator />
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <Label>Sidebar Width</Label>
                        <span className="text-sm text-muted-foreground">{config.sidebarWidth}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {["16rem", "18rem", "20rem", "24rem"].map((width) => (
                          <Button key={width} variant={config.sidebarWidth === width ? "default" : "outline"} onClick={() => handleColorChange("sidebarWidth", width)} className="w-full">
                            {width}
                          </Button>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <Label>Header Height</Label>
                        <span className="text-sm text-muted-foreground">{config.headerHeight}</span>
                      </div>
                      <div className="flex gap-2">
                        {["3.5rem", "4rem", "5rem"].map((height) => (
                          <Button key={height} variant={config.headerHeight === height ? "default" : "outline"} onClick={() => handleColorChange("headerHeight", height)} className="flex-1">
                            {height}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Preview */}
                  <div className="p-4 border rounded-lg bg-muted/20 space-y-4 flex flex-col justify-center">
                    <p className="text-sm text-muted-foreground mb-2">Preview</p>
                    <div className="flex gap-4 items-center flex-wrap">
                      <div className="h-16 w-16 border-2 border-primary bg-primary/10 flex items-center justify-center text-xs" style={{ borderRadius: `${config.radius}rem` }}>
                        Box
                      </div>
                      <Button style={{ borderRadius: `${config.radius}rem` }}>Button</Button>
                      <Input placeholder="Input" className="w-32" style={{ borderRadius: `${config.radius}rem` }} />
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}