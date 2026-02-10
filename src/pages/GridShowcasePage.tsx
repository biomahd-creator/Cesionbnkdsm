import { ComponentShowcase } from "../components/ui/component-showcase";
import { GridShowcase } from "../components/ui/grid-showcase";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import {
  TrendingUp,
  Users,
  DollarSign,
  Activity,
  Star,
} from "lucide-react";

const code = `import { GridShowcase } from "@/components/ui/grid-showcase";
import { Card } from "@/components/ui/card";

// 3 columnas con gap medio
<GridShowcase columns={3} gap="md">
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</GridShowcase>

// 4 columnas con gap pequeño
<GridShowcase columns={4} gap="sm">
  <Card>Stat 1</Card>
  <Card>Stat 2</Card>
  <Card>Stat 3</Card>
  <Card>Stat 4</Card>
</GridShowcase>

// Auto-fit (dinámico)
<GridShowcase columns="auto">
  <Card>Feature 1</Card>
  <Card>Feature 2</Card>
  <Card>Feature 3</Card>
</GridShowcase>`;

export function GridShowcasePage() {
  return (
    <ComponentShowcase
      title="Grid Showcase"
      description="Componente reutilizable de layout grid que controla columnas (1-4 o auto-fit) y espaciado (sm/md/lg). Responsive por defecto: se adapta automáticamente a diferentes tamaños de pantalla."
      category="Layout"
      preview={
        <div className="w-full">
          <GridShowcase columns={4} gap="sm">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-chart-1" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-semibold">$45,231</div>
                <p className="text-xs text-muted-foreground mt-1">
                  <span className="text-chart-1">+20.1%</span> from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm">Active Users</CardTitle>
                <Users className="h-4 w-4 text-chart-2" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-semibold">2,350</div>
                <p className="text-xs text-muted-foreground mt-1">
                  <span className="text-chart-2">+180</span> new this week
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm">Growth Rate</CardTitle>
                <TrendingUp className="h-4 w-4 text-chart-3" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-semibold">+12.5%</div>
                <p className="text-xs text-muted-foreground mt-1">
                  <span className="text-chart-3">+2.3%</span> vs last quarter
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm">Engagement</CardTitle>
                <Activity className="h-4 w-4 text-chart-4" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-semibold">89.2%</div>
                <p className="text-xs text-muted-foreground mt-1">
                  <span className="text-chart-4">+5.4%</span> increase
                </p>
              </CardContent>
            </Card>
          </GridShowcase>
        </div>
      }
      code={code}
      props={[
        { name: "columns", type: '1 | 2 | 3 | 4 | "auto"', default: "2", description: 'Número de columnas o "auto" para ajuste dinámico' },
        { name: "gap", type: '"sm" | "md" | "lg"', default: '"md"', description: "Espaciado entre elementos (16px, 24px, 32px)" },
        { name: "title", type: "string", description: "Título opcional de la sección" },
        { name: "description", type: "string", description: "Descripción opcional" },
        { name: "children", type: "ReactNode", description: "Contenido a mostrar en el grid", required: true },
        { name: "className", type: "string", description: "Clases CSS adicionales" },
      ]}
      examples={[
        {
          title: "3 Columnas - Product Cards",
          description: "Perfecto para catálogos de productos y portfolios. Mobile: 1 col, Tablet: 2 cols, Desktop: 3 cols.",
          preview: (
            <div className="w-full">
              <GridShowcase columns={3} gap="md">
                {[
                  { name: "Premium Plan", price: "$29", icon: Star, color: "text-chart-1", bg: "bg-chart-1/10" },
                  { name: "Business Plan", price: "$49", icon: TrendingUp, color: "text-chart-2", bg: "bg-chart-2/10" },
                  { name: "Enterprise Plan", price: "$99", icon: Users, color: "text-chart-3", bg: "bg-chart-3/10" },
                ].map((product, i) => (
                  <Card key={i}>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <div className={`p-2 rounded-lg ${product.bg}`}>
                          <product.icon className={`h-5 w-5 ${product.color}`} />
                        </div>
                        <Badge variant="outline">{product.price}</Badge>
                      </div>
                      <CardTitle className="text-lg">{product.name}</CardTitle>
                      <CardDescription>Perfect for growing teams</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full" variant={i === 1 ? "default" : "outline"}>
                        Get Started
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </GridShowcase>
            </div>
          ),
          code: `<GridShowcase columns={3} gap="md">
  <Card>Plan 1</Card>
  <Card>Plan 2</Card>
  <Card>Plan 3</Card>
</GridShowcase>`,
        },
        {
          title: "2 Columnas - Form Layouts",
          description: "Ideal para formularios lado a lado. Mobile: 1 col, Desktop: 2 cols.",
          preview: (
            <div className="w-full">
              <GridShowcase columns={2} gap="lg">
                <Card>
                  <CardHeader>
                    <CardTitle>Login Form</CardTitle>
                    <CardDescription>Sign in to your account</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Email</label>
                      <Input type="email" placeholder="you@example.com" className="mt-1" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Password</label>
                      <Input type="password" placeholder="••••••••" className="mt-1" />
                    </div>
                    <Button className="w-full">Sign In</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Register Form</CardTitle>
                    <CardDescription>Create a new account</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Full Name</label>
                      <Input placeholder="John Doe" className="mt-1" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Email</label>
                      <Input type="email" placeholder="you@example.com" className="mt-1" />
                    </div>
                    <Button className="w-full">Create Account</Button>
                  </CardContent>
                </Card>
              </GridShowcase>
            </div>
          ),
          code: `<GridShowcase columns={2} gap="lg">
  <Card>Login Form</Card>
  <Card>Register Form</Card>
</GridShowcase>`,
        },
        {
          title: "Auto-fit - Dynamic Features",
          description: "Se adapta automáticamente al espacio disponible, mínimo 280px por columna.",
          preview: (
            <div className="w-full">
              <GridShowcase columns="auto" gap="md">
                {[
                  { icon: "⚡", title: "Lightning Fast", desc: "Optimized performance" },
                  { icon: "🔒", title: "Secure", desc: "Bank-level encryption" },
                  { icon: "✅", title: "Reliable", desc: "99.9% uptime SLA" },
                  { icon: "📈", title: "Scalable", desc: "Grows with your business" },
                ].map((feature, i) => (
                  <Card key={i} className="text-center">
                    <CardContent className="pt-6 space-y-3">
                      <div className="text-4xl">{feature.icon}</div>
                      <h3 className="font-semibold">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </GridShowcase>
            </div>
          ),
          code: `<GridShowcase columns="auto" gap="md">
  <Card>Feature 1</Card>
  <Card>Feature 2</Card>
  <Card>Feature 3</Card>
</GridShowcase>`,
        },
        {
          title: "Gap Variations",
          description: "Comparación de los 3 tamaños de espaciado: sm (16px), md (24px), lg (32px).",
          preview: (
            <div className="w-full space-y-6">
              <div>
                <p className="text-sm font-medium mb-2 text-muted-foreground">Gap Small (16px)</p>
                <GridShowcase columns={4} gap="sm">
                  <Card><CardContent className="pt-6 text-center">1</CardContent></Card>
                  <Card><CardContent className="pt-6 text-center">2</CardContent></Card>
                  <Card><CardContent className="pt-6 text-center">3</CardContent></Card>
                  <Card><CardContent className="pt-6 text-center">4</CardContent></Card>
                </GridShowcase>
              </div>
              <div>
                <p className="text-sm font-medium mb-2 text-muted-foreground">Gap Medium (24px)</p>
                <GridShowcase columns={4} gap="md">
                  <Card><CardContent className="pt-6 text-center">1</CardContent></Card>
                  <Card><CardContent className="pt-6 text-center">2</CardContent></Card>
                  <Card><CardContent className="pt-6 text-center">3</CardContent></Card>
                  <Card><CardContent className="pt-6 text-center">4</CardContent></Card>
                </GridShowcase>
              </div>
              <div>
                <p className="text-sm font-medium mb-2 text-muted-foreground">Gap Large (32px)</p>
                <GridShowcase columns={4} gap="lg">
                  <Card><CardContent className="pt-6 text-center">1</CardContent></Card>
                  <Card><CardContent className="pt-6 text-center">2</CardContent></Card>
                  <Card><CardContent className="pt-6 text-center">3</CardContent></Card>
                  <Card><CardContent className="pt-6 text-center">4</CardContent></Card>
                </GridShowcase>
              </div>
            </div>
          ),
          code: `// Small gap
<GridShowcase columns={4} gap="sm">...</GridShowcase>

// Medium gap (default)
<GridShowcase columns={4} gap="md">...</GridShowcase>

// Large gap
<GridShowcase columns={4} gap="lg">...</GridShowcase>`,
        },
      ]}
    />
  );
}
