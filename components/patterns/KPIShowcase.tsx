import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { Separator } from "../ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { useState } from "react";
import { 
  TrendingUp, 
  TrendingDown,
  DollarSign,
  Users,
  FileText,
  Activity,
  Target,
  Zap,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  ShoppingCart,
  CreditCard,
  BarChart3,
  ArrowUp,
  ArrowDown,
  Minus,
  ArrowRight,
  Wallet,
  HandCoins,
  CheckCircle,
  AlertCircle,
  XCircle,
  Eye,
  MoreHorizontal,
  Download,
  Share2,
  Filter,
  Calendar,
  TrendingUpIcon,
  Circle,
  Info,
  Bell,
  ChevronDown,
  ChevronUp,
  Star,
  Award,
  Percent,
  Building2,
  Package,
  TrendingDownIcon,
  FileCheck2,
  Receipt
} from "lucide-react";
import { FactoringKpiCard } from "./FactoringKpiCard";

interface KPICardProps {
  title: string;
  value: string | number;
  change?: number;
  changeLabel?: string;
  icon: React.ReactNode;
  trend?: "up" | "down" | "neutral";
  format?: "currency" | "percentage" | "number";
}

function KPICard({ title, value, change, changeLabel, icon, trend, format = "number" }: KPICardProps) {
  const formatValue = (val: string | number) => {
    if (format === "currency") return `$${val.toLocaleString()}`;
    if (format === "percentage") return `${val}%`;
    return val;
  };

  return (
    <Card className="elevation-2">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">{title}</p>
            <p className="text-3xl font-bold">{formatValue(value)}</p>
            {change !== undefined && (
              <div className="flex items-center gap-2">
                {trend === "up" && (
                  <Badge variant="default" className="bg-green-500/10 text-green-600 border-green-500/20">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    +{change}%
                  </Badge>
                )}
                {trend === "down" && (
                  <Badge variant="destructive" className="bg-red-500/10 text-red-600 border-red-500/20">
                    <ArrowDownRight className="h-3 w-3 mr-1" />
                    -{change}%
                  </Badge>
                )}
                {changeLabel && (
                  <span className="text-xs text-muted-foreground">{changeLabel}</span>
                )}
              </div>
            )}
          </div>
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function KPIShowcase() {
  const [activeFactoringCard, setActiveFactoringCard] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold mb-2">KPI Dashboard</h1>
        <p className="text-muted-foreground">
          Key performance indicators with interactive visualizations
        </p>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <KPICard
          title="Total Revenue"
          value={845000}
          format="currency"
          change={12.5}
          changeLabel="vs last month"
          trend="up"
          icon={<DollarSign className="h-6 w-6" />}
        />
        <KPICard
          title="Active Clients"
          value={58}
          change={8.3}
          changeLabel="this month"
          trend="up"
          icon={<Users className="h-6 w-6" />}
        />
        <KPICard
          title="Operations"
          value={187}
          change={5.2}
          changeLabel="this week"
          trend="up"
          icon={<FileText className="h-6 w-6" />}
        />
        <KPICard
          title="Approval Rate"
          value={92}
          format="percentage"
          change={2.1}
          changeLabel="last 30 days"
          trend="up"
          icon={<Target className="h-6 w-6" />}
        />
      </div>

      {/* Additional Mini KPIs */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="elevation-1 bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Net Margin</p>
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">41.2%</p>
                <p className="text-xs text-muted-foreground mt-1">+3.2% vs average</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="elevation-1 bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-blue-500/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Average Time</p>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">2.1 hrs</p>
                <p className="text-xs text-muted-foreground mt-1">-0.4 hrs this week</p>
              </div>
              <Activity className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="elevation-1 bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-purple-500/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Average Ticket</p>
                <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">$4,518</p>
                <p className="text-xs text-muted-foreground mt-1">+12.5% this month</p>
              </div>
              <DollarSign className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* ===== ADVANCED KPI CARDS ===== */}
      <div className="pt-8 border-t border-border">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Advanced KPI Cards</h2>
          <p className="text-sm text-muted-foreground">
            Advanced components with mini-charts, progress rings, and period comparisons
          </p>
        </div>

        {/* KPI Cards with actions */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
          {/* Revenue Card */}
          <Card className="elevation-2 hover:elevation-3 transition-all">
            <CardContent className="p-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <DollarSign className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <Badge className="bg-green-500/10 text-green-600 border-green-500/20">
                    <ArrowUp className="h-3 w-3 mr-1" />
                    12.5%
                  </Badge>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Revenue</p>
                  <p className="text-2xl font-bold">$845.2K</p>
                  <p className="text-xs text-muted-foreground mt-1">vs last month</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Users Card */}
          <Card className="elevation-2 hover:elevation-3 transition-all">
            <CardContent className="p-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                    <Users className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <Badge className="bg-green-500/10 text-green-600 border-green-500/20">
                    <ArrowUp className="h-3 w-3 mr-1" />
                    8.3%
                  </Badge>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Active Users</p>
                  <p className="text-2xl font-bold">2,543</p>
                  <p className="text-xs text-muted-foreground mt-1">this month</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Orders Card */}
          <Card className="elevation-2 hover:elevation-3 transition-all">
            <CardContent className="p-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
                    <ShoppingCart className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <Badge className="bg-red-500/10 text-red-600 border-red-500/20">
                    <ArrowDown className="h-3 w-3 mr-1" />
                    2.4%
                  </Badge>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Orders</p>
                  <p className="text-2xl font-bold">1,248</p>
                  <p className="text-xs text-muted-foreground mt-1">this week</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Conversion Card */}
          <Card className="elevation-2 hover:elevation-3 transition-all">
            <CardContent className="p-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <Target className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <Badge className="bg-muted text-muted-foreground border-border">
                    <Minus className="h-3 w-3 mr-1" />
                    0%
                  </Badge>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Conversion</p>
                  <p className="text-2xl font-bold">3.24%</p>
                  <p className="text-xs text-muted-foreground mt-1">no change</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* KPI Cards with period comparison */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-6">
          {/* Card with previous month comparison */}
          <Card className="elevation-2">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <DollarSign className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
                    <ArrowUp className="h-3 w-3 mr-1" />
                    18.2%
                  </Badge>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Monthly Revenue</p>
                  <p className="text-2xl font-bold">$125,430</p>
                </div>
                <div className="pt-2 border-t border-border">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Previous month:</span>
                    <span className="font-medium">$106,250</span>
                  </div>
                  <div className="flex justify-between text-xs mt-1">
                    <span className="text-muted-foreground">3-month average:</span>
                    <span className="font-medium">$112,890</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card with multiple metrics */}
          <Card className="elevation-2">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <Badge className="bg-indigo-500/10 text-indigo-600 border-indigo-500/20">
                    <ArrowUp className="h-3 w-3 mr-1" />
                    5.7%
                  </Badge>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Documents</p>
                  <p className="text-2xl font-bold">1,847</p>
                </div>
                <div className="pt-2 border-t border-border">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Approved:</span>
                    <span className="font-medium text-green-600 dark:text-green-400">1,698 (92%)</span>
                  </div>
                  <div className="flex justify-between text-xs mt-1">
                    <span className="text-muted-foreground">Pending:</span>
                    <span className="font-medium text-yellow-600 dark:text-yellow-400">112 (6%)</span>
                  </div>
                  <div className="flex justify-between text-xs mt-1">
                    <span className="text-muted-foreground">Rejected:</span>
                    <span className="font-medium text-red-600 dark:text-red-400">37 (2%)</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card with goal and progress */}
          <Card className="elevation-2">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <Target className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <Badge className="bg-cyan-500/10 text-cyan-600 border-cyan-500/20">
                    85% complete
                  </Badge>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Quarterly Goal</p>
                  <p className="text-2xl font-bold">$340K / $400K</p>
                </div>
                <div className="pt-2 border-t border-border">
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-muted-foreground">Progress:</span>
                    <span className="font-medium">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-2">$60K remaining to reach the goal</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* ===== HERO UI STYLE KPIs WITH ACTIONS ===== */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">KPIs with Actions (Hero UI Style)</h3>
        </div>

        {/* KPIs with action buttons */}
        <div className="grid gap-4 md:grid-cols-2 mb-6">
          {/* Top Products Card */}
          <Card className="elevation-2">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-base font-medium">Top Products</CardTitle>
              <Button variant="ghost" size="sm" className="text-xs gap-1">
                View All
                <ArrowRight className="h-3 w-3" />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <ShoppingCart className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Product A</p>
                      <p className="text-xs text-muted-foreground">342 sales</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold">$45,280</p>
                    <Badge className="bg-green-500/10 text-green-600 border-green-500/20 text-xs">
                      <ArrowUp className="h-2 w-2 mr-0.5" />
                      12%
                    </Badge>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                      <ShoppingCart className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Product B</p>
                      <p className="text-xs text-muted-foreground">298 sales</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold">$38,120</p>
                    <Badge className="bg-green-500/10 text-green-600 border-green-500/20 text-xs">
                      <ArrowUp className="h-2 w-2 mr-0.5" />
                      8%
                    </Badge>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
                      <ShoppingCart className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Product C</p>
                      <p className="text-xs text-muted-foreground">187 sales</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold">$29,450</p>
                    <Badge className="bg-red-500/10 text-red-600 border-red-500/20 text-xs">
                      <ArrowDown className="h-2 w-2 mr-0.5" />
                      3%
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity Card */}
          <Card className="elevation-2">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-base font-medium">Recent Activity</CardTitle>
              <Button variant="ghost" size="sm" className="text-xs gap-1">
                View More
                <ArrowRight className="h-3 w-3" />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">New operation approved</p>
                    <p className="text-xs text-muted-foreground">Invoice #INV-2024-1523 for $12,450</p>
                    <p className="text-xs text-muted-foreground">5 minutes ago</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-yellow-500/10 flex items-center justify-center shrink-0">
                    <AlertCircle className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">Document pending review</p>
                    <p className="text-xs text-muted-foreground">Client: XYZ Corp.</p>
                    <p className="text-xs text-muted-foreground">23 minutes ago</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                    <Users className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">New client registered</p>
                    <p className="text-xs text-muted-foreground">ABC Trading Corp.</p>
                    <p className="text-xs text-muted-foreground">1 hour ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Metrics with Progress Bars */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
          {/* Approval Rate */}
          <Card className="elevation-2">
            <CardContent className="p-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">Approval Rate</p>
                  <Badge variant="secondary" className="text-xs">92%</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <p className="text-2xl font-bold">1,698</p>
                    <span className="text-xs text-muted-foreground">/ 1,847</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
                <p className="text-xs text-muted-foreground">
                  +5.2% vs last month
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Collection Efficiency */}
          <Card className="elevation-2">
            <CardContent className="p-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">Collection Efficiency</p>
                  <Badge variant="secondary" className="text-xs">88%</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <p className="text-2xl font-bold">$742K</p>
                    <span className="text-xs text-muted-foreground">/ $845K</span>
                  </div>
                  <Progress value={88} className="h-2" />
                </div>
                <p className="text-xs text-muted-foreground">
                  -1.3% vs last month
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Customer Satisfaction */}
          <Card className="elevation-2">
            <CardContent className="p-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">Customer Satisfaction</p>
                  <Badge variant="secondary" className="text-xs">94%</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <p className="text-2xl font-bold">4.7</p>
                    <span className="text-xs text-muted-foreground">/ 5.0</span>
                  </div>
                  <Progress value={94} className="h-2" />
                </div>
                <p className="text-xs text-muted-foreground">
                  +2.1% vs last month
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Processing Speed */}
          <Card className="elevation-2">
            <CardContent className="p-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">Processing Speed</p>
                  <Badge variant="secondary" className="text-xs">75%</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <p className="text-2xl font-bold">1.9</p>
                    <span className="text-xs text-muted-foreground">hrs average</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <p className="text-xs text-muted-foreground">
                  -0.4 hrs vs last week
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Financial Overview with multiple actions */}
        <Card className="elevation-2 mb-6">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Financial Overview</CardTitle>
              <CardDescription>Financial summary of the last quarter</CardDescription>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Eye className="h-4 w-4 mr-2" />
                View Report
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <TrendingUp className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total Revenue</p>
                    <p className="text-xl font-bold">$2.4M</p>
                  </div>
                </div>
                <Badge className="bg-green-500/10 text-green-600 border-green-500/20">
                  <ArrowUp className="h-3 w-3 mr-1" />
                  18.2% vs Q3
                </Badge>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <Wallet className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Net Profit</p>
                    <p className="text-xl font-bold">$985K</p>
                  </div>
                </div>
                <Badge className="bg-green-500/10 text-green-600 border-green-500/20">
                  <ArrowUp className="h-3 w-3 mr-1" />
                  12.5% vs Q3
                </Badge>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-purple-500/10 flex items-center justify-center">
                    <HandCoins className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Operating Costs</p>
                    <p className="text-xl font-bold">$1.42M</p>
                  </div>
                </div>
                <Badge className="bg-red-500/10 text-red-600 border-red-500/20">
                  <ArrowDown className="h-3 w-3 mr-1" />
                  3.8% vs Q3
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Team Performance */}
        <Card className="elevation-2">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-base font-medium">Team Performance</CardTitle>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button variant="ghost" size="sm" className="text-xs gap-1">
                View All
                <ArrowRight className="h-3 w-3" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Team Member 1 */}
              <div className="flex items-center gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="" alt="User" />
                  <AvatarFallback className="bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    JD
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-medium">John Doe</p>
                    <span className="text-xs text-muted-foreground">45 operations</span>
                  </div>
                  <Progress value={90} className="h-1.5" />
                </div>
                <Badge className="bg-green-500/10 text-green-600 border-green-500/20">
                  90%
                </Badge>
              </div>

              {/* Team Member 2 */}
              <div className="flex items-center gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="" alt="User" />
                  <AvatarFallback className="bg-purple-500/10 text-purple-600 dark:text-purple-400">
                    SM
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-medium">Sarah Martinez</p>
                    <span className="text-xs text-muted-foreground">38 operations</span>
                  </div>
                  <Progress value={85} className="h-1.5" />
                </div>
                <Badge className="bg-green-500/10 text-green-600 border-green-500/20">
                  85%
                </Badge>
              </div>

              {/* Team Member 3 */}
              <div className="flex items-center gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="" alt="User" />
                  <AvatarFallback className="bg-orange-500/10 text-orange-600 dark:text-orange-400">
                    RC
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-medium">Robert Chen</p>
                    <span className="text-xs text-muted-foreground">32 operations</span>
                  </div>
                  <Progress value={78} className="h-1.5" />
                </div>
                <Badge className="bg-yellow-500/10 text-yellow-600 border-yellow-500/20">
                  78%
                </Badge>
              </div>

              {/* Team Member 4 */}
              <div className="flex items-center gap-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="" alt="User" />
                  <AvatarFallback className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    LK
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-medium">Lisa Kim</p>
                    <span className="text-xs text-muted-foreground">41 operations</span>
                  </div>
                  <Progress value={88} className="h-1.5" />
                </div>
                <Badge className="bg-green-500/10 text-green-600 border-green-500/20">
                  88%
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* ===== FACTORING KPI CARDS (FIGMA IMPORT) ===== */}
      <div className="pt-8 border-t border-border">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Factoring KPI Cards</h2>
          <p className="text-sm text-muted-foreground">
            Invoice statuses with colored bottom border, click interaction to activate, and count badges
          </p>
        </div>

        {/* Interactive Demo - Con manejo de estado */}
        <div>
          <h3 className="text-lg font-medium mb-4">Interactive Demo (Click to Activate)</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <FactoringKpiCard
              label="Creadas"
              description="Invoices registered for evaluation"
              value="$125,420"
              count={234}
              variant="blue"
              isActive={activeFactoringCard === "creadas"}
              onClick={() => setActiveFactoringCard(activeFactoringCard === "creadas" ? null : "creadas")}
              icon={<FileCheck2 />}
            />
            <FactoringKpiCard
              label="En Proceso"
              description="Under review process"
              value="$125,420"
              count={234}
              variant="yellow"
              isActive={activeFactoringCard === "proceso"}
              onClick={() => setActiveFactoringCard(activeFactoringCard === "proceso" ? null : "proceso")}
              icon={<Clock />}
            />
            <FactoringKpiCard
              label="Negociadas"
              description="Under review process"
              value="$125,420"
              count={234}
              variant="green"
              isActive={activeFactoringCard === "negociadas"}
              onClick={() => setActiveFactoringCard(activeFactoringCard === "negociadas" ? null : "negociadas")}
              icon={<FileCheck2 />}
            />
            <FactoringKpiCard
              label="Endosadas a Fondeador"
              description="Transferred for disbursement"
              value="$125,420"
              count={234}
              variant="green"
              isActive={activeFactoringCard === "endosadas"}
              onClick={() => setActiveFactoringCard(activeFactoringCard === "endosadas" ? null : "endosadas")}
              icon={<Receipt />}
            />
          </div>
          {activeFactoringCard && (
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">
                Active status: <span className="font-medium text-foreground capitalize">{activeFactoringCard}</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}