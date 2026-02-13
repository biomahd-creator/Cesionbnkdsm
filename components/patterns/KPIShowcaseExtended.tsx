import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { Separator } from "../ui/separator";
import { 
  TrendingUp, 
  TrendingDown,
  DollarSign,
  Users,
  FileText,
  Target,
  ArrowUp,
  ArrowDown,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  XCircle,
  Eye,
  Download,
  Share2,
  Filter,
  Calendar,
  Circle,
  Info,
  Bell,
  Star,
  Award,
  Building2,
  Package,
  ShoppingCart,
  Wallet,
  HandCoins
} from "lucide-react";

export function KPIShowcaseExtended() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold mb-2">Additional KPI Styles</h1>
        <p className="text-muted-foreground">
          KPI variants: side-by-side comparison, traffic light, compact inline, rankings, and more
        </p>
      </div>

      {/* 1. Side-by-Side Comparison KPIs (Current vs Previous) */}
      <div>
        <h3 className="text-lg font-medium mb-4">1. Side-by-Side Comparison</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="elevation-2">
            <CardContent className="p-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">Revenue Comparison</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Current</p>
                    <p className="text-xl font-bold">$845K</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Previous</p>
                    <p className="text-xl font-bold text-muted-foreground">$752K</p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <span className="text-xs text-muted-foreground">Difference</span>
                  <Badge className="bg-green-500/10 text-green-600 border-green-500/20">
                    +$93K (12.5%)
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="elevation-2">
            <CardContent className="p-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">Users Comparison</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">This Month</p>
                    <p className="text-xl font-bold">2,543</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Last Month</p>
                    <p className="text-xl font-bold text-muted-foreground">2,348</p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <span className="text-xs text-muted-foreground">Growth</span>
                  <Badge className="bg-green-500/10 text-green-600 border-green-500/20">
                    +195 (8.3%)
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="elevation-2">
            <CardContent className="p-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">Orders Comparison</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">This Week</p>
                    <p className="text-xl font-bold">1,248</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Last Week</p>
                    <p className="text-xl font-bold text-muted-foreground">1,279</p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <span className="text-xs text-muted-foreground">Change</span>
                  <Badge className="bg-red-500/10 text-red-600 border-red-500/20">
                    -31 (-2.4%)
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="elevation-2">
            <CardContent className="p-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">Conversion Comparison</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Current</p>
                    <p className="text-xl font-bold">3.24%</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Previous</p>
                    <p className="text-xl font-bold text-muted-foreground">3.24%</p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <span className="text-xs text-muted-foreground">Change</span>
                  <Badge className="bg-muted text-muted-foreground border-border">
                    No change
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* 2. KPIs with Status Indicators (Traffic Light) */}
      <div>
        <h3 className="text-lg font-medium mb-4">2. KPIs with Status Indicators</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card className="elevation-2">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                  <div>
                    <p className="text-sm text-muted-foreground">Server Status</p>
                    <p className="text-2xl font-bold">Operational</p>
                  </div>
                </div>
                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Uptime:</span>
                  <span className="font-medium">99.98%</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Response time:</span>
                  <span className="font-medium">142ms</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="elevation-2">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-yellow-500 animate-pulse" />
                  <div>
                    <p className="text-sm text-muted-foreground">System Load</p>
                    <p className="text-2xl font-bold">Moderate</p>
                  </div>
                </div>
                <AlertCircle className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">CPU Usage:</span>
                  <span className="font-medium">64%</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Memory:</span>
                  <span className="font-medium">5.2GB / 8GB</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="elevation-2">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-red-500 animate-pulse" />
                  <div>
                    <p className="text-sm text-muted-foreground">Payment Gateway</p>
                    <p className="text-2xl font-bold">Error</p>
                  </div>
                </div>
                <XCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Last error:</span>
                  <span className="font-medium">2 min ago</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Failed requests:</span>
                  <span className="font-medium">12</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* 3. Compact Inline KPIs */}
      <div>
        <h3 className="text-lg font-medium mb-4">3. KPIs Compactos (Inline)</h3>
        <Card className="elevation-2">
          <CardContent className="p-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                  <DollarSign className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground truncate">Total Sales</p>
                  <div className="flex items-baseline gap-2">
                    <p className="text-lg font-bold">$1.2M</p>
                    <Badge className="bg-green-500/10 text-green-600 border-green-500/20 text-[10px] px-1 py-0">
                      +12%
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0">
                  <Users className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground truncate">Active Users</p>
                  <div className="flex items-baseline gap-2">
                    <p className="text-lg font-bold">8.4K</p>
                    <Badge className="bg-green-500/10 text-green-600 border-green-500/20 text-[10px] px-1 py-0">
                      +8%
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0">
                  <Package className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground truncate">Orders</p>
                  <div className="flex items-baseline gap-2">
                    <p className="text-lg font-bold">3.2K</p>
                    <Badge className="bg-red-500/10 text-red-600 border-red-500/20 text-[10px] px-1 py-0">
                      -3%
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                  <Target className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground truncate">Conversion</p>
                  <div className="flex items-baseline gap-2">
                    <p className="text-lg font-bold">4.2%</p>
                    <Badge className="bg-muted text-muted-foreground border-border text-[10px] px-1 py-0">
                      0%
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 4. KPIs with Ranking/Leaderboard */}
      <div>
        <h3 className="text-lg font-medium mb-4">4. Rankings y Leaderboards</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="elevation-2">
            <CardHeader>
              <CardTitle className="text-base">Top Performing Products</CardTitle>
              <CardDescription>Ranked by sales volume</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 font-bold shrink-0">
                    1
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">Premium Plan</p>
                    <p className="text-xs text-muted-foreground">2,847 sales</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold">$427K</p>
                    <Badge className="bg-green-500/10 text-green-600 border-green-500/20 text-[10px]">
                      <TrendingUp className="h-2 w-2 mr-0.5" />
                      24%
                    </Badge>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-muted text-muted-foreground font-bold shrink-0">
                    2
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">Standard Plan</p>
                    <p className="text-xs text-muted-foreground">1,924 sales</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold">$192K</p>
                    <Badge className="bg-green-500/10 text-green-600 border-green-500/20 text-[10px]">
                      <TrendingUp className="h-2 w-2 mr-0.5" />
                      18%
                    </Badge>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-orange-500/20 text-orange-600 dark:text-orange-400 font-bold shrink-0">
                    3
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">Basic Plan</p>
                    <p className="text-xs text-muted-foreground">1,456 sales</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold">$87K</p>
                    <Badge className="bg-red-500/10 text-red-600 border-red-500/20 text-[10px]">
                      <TrendingDown className="h-2 w-2 mr-0.5" />
                      5%
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="elevation-2">
            <CardHeader>
              <CardTitle className="text-base">Regional Performance</CardTitle>
              <CardDescription>Sales by region</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-yellow-500 shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm font-medium">North America</p>
                      <span className="text-sm font-bold">$1.2M</span>
                    </div>
                    <Progress value={85} className="h-1.5" />
                  </div>
                  <Badge className="bg-yellow-500/10 text-yellow-600 border-yellow-500/20">
                    #1
                  </Badge>
                </div>
                <Separator />
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-muted-foreground shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm font-medium">Europe</p>
                      <span className="text-sm font-bold">$890K</span>
                    </div>
                    <Progress value={65} className="h-1.5" />
                  </div>
                  <Badge className="bg-muted text-muted-foreground border-border">
                    #2
                  </Badge>
                </div>
                <Separator />
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-orange-400 shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm font-medium">Asia Pacific</p>
                      <span className="text-sm font-bold">$675K</span>
                    </div>
                    <Progress value={48} className="h-1.5" />
                  </div>
                  <Badge className="bg-orange-500/10 text-orange-600 border-orange-500/20">
                    #3
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* 5. KPIs with Percentage Distribution */}
      <div>
        <h3 className="text-lg font-medium mb-4">5. Percentage Distribution (Breakdown)</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="elevation-2">
            <CardHeader>
              <CardTitle className="text-base">Revenue by Source</CardTitle>
              <CardDescription>Distribution across channels</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <Circle className="h-3 w-3 fill-blue-500 text-blue-500" />
                      <span>Direct Sales</span>
                    </div>
                    <span className="font-bold">$425K (42%)</span>
                  </div>
                  <Progress value={42} className="h-2" />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <Circle className="h-3 w-3 fill-purple-500 text-purple-500" />
                      <span>Online Store</span>
                    </div>
                    <span className="font-bold">$305K (30%)</span>
                  </div>
                  <Progress value={30} className="h-2" />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <Circle className="h-3 w-3 fill-green-500 text-green-500" />
                      <span>Marketplace</span>
                    </div>
                    <span className="font-bold">$183K (18%)</span>
                  </div>
                  <Progress value={18} className="h-2" />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <Circle className="h-3 w-3 fill-orange-500 text-orange-500" />
                      <span>Resellers</span>
                    </div>
                    <span className="font-bold">$102K (10%)</span>
                  </div>
                  <Progress value={10} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="elevation-2">
            <CardHeader>
              <CardTitle className="text-base">Customer Segments</CardTitle>
              <CardDescription>Breakdown by company size</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span>Enterprise (1000+)</span>
                    </div>
                    <span className="font-bold">158 (35%)</span>
                  </div>
                  <Progress value={35} className="h-2" />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                      <span>Mid-Market (100-999)</span>
                    </div>
                    <span className="font-bold">227 (28%)</span>
                  </div>
                  <Progress value={28} className="h-2" />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                      <span>SMB (10-99)</span>
                    </div>
                    <span className="font-bold">342 (22%)</span>
                  </div>
                  <Progress value={22} className="h-2" />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                      <span>Startup (1-9)</span>
                    </div>
                    <span className="font-bold">189 (15%)</span>
                  </div>
                  <Progress value={15} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* 6. KPI Hero (Full Width) */}
      <div>
        <h3 className="text-lg font-medium mb-4">6. KPI Hero (Full Width)</h3>
        <Card className="elevation-2 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-primary/20">
          <CardContent className="p-8">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total Revenue (YTD)</p>
                    <p className="text-4xl font-bold">$12.4M</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 ml-15">
                  <Badge className="bg-green-500/10 text-green-600 border-green-500/20">
                    <ArrowUp className="h-3 w-3 mr-1" />
                    +24.5% vs last year
                  </Badge>
                  <span className="text-sm text-muted-foreground">Target: $15M (83% achieved)</span>
                </div>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" size="sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  Change Period
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Export Report
                </Button>
                <Button size="sm">
                  <Eye className="h-4 w-4 mr-2" />
                  View Details
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 7. KPIs with Score/Rating Visual */}
      <div>
        <h3 className="text-lg font-medium mb-4">7. KPIs with Score/Rating Visual</h3>
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="elevation-2">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">Customer Satisfaction</p>
                  <div className="flex gap-0.5">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-muted stroke-muted-foreground/30 text-muted" />
                  </div>
                </div>
                <div className="flex items-baseline gap-2">
                  <p className="text-3xl font-bold">4.2</p>
                  <span className="text-sm text-muted-foreground">/ 5.0</span>
                </div>
                <div className="space-y-1 pt-2 border-t border-border">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Based on:</span>
                    <span className="font-medium">2,847 reviews</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="elevation-2">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">Product Quality Score</p>
                  <Badge className="bg-green-500/10 text-green-600 border-green-500/20">
                    Excellent
                  </Badge>
                </div>
                <div className="flex items-baseline gap-2">
                  <p className="text-3xl font-bold">94</p>
                  <span className="text-sm text-muted-foreground">/ 100</span>
                </div>
                <div className="space-y-2">
                  <Progress value={94} className="h-2" />
                  <p className="text-xs text-muted-foreground">
                    +6 points from last quarter
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="elevation-2">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">Net Promoter Score</p>
                  <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/20">
                    Good
                  </Badge>
                </div>
                <div className="flex items-baseline gap-2">
                  <p className="text-3xl font-bold">68</p>
                  <span className="text-sm text-muted-foreground">NPS</span>
                </div>
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-border">
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground">Promoters</p>
                    <p className="text-sm font-bold text-green-600 dark:text-green-400">72%</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground">Passives</p>
                    <p className="text-sm font-bold text-yellow-600 dark:text-yellow-400">24%</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground">Detractors</p>
                    <p className="text-sm font-bold text-red-600 dark:text-red-400">4%</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* 8. KPIs with Alerts and Notifications */}
      <div>
        <h3 className="text-lg font-medium mb-4">8. KPIs with Alerts and Notifications</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="elevation-2 border-yellow-500/50">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-yellow-500/10 flex items-center justify-center shrink-0">
                  <Bell className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                </div>
                <div className="flex-1 space-y-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-sm font-medium">Budget Alert</p>
                      <Badge variant="outline" className="bg-yellow-500/10 text-yellow-600 border-yellow-500/20">
                        Warning
                      </Badge>
                    </div>
                    <p className="text-2xl font-bold">$847K / $900K</p>
                  </div>
                  <div className="space-y-1">
                    <Progress value={94} className="h-2" />
                    <p className="text-xs text-muted-foreground">
                      You've used 94% of your monthly budget. $53K remaining.
                    </p>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    <Info className="h-3 w-3 mr-2" />
                    View Budget Details
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="elevation-2 border-red-500/50">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0">
                  <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                </div>
                <div className="flex-1 space-y-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-sm font-medium">Performance Issue</p>
                      <Badge variant="destructive" className="text-xs">
                        Critical
                      </Badge>
                    </div>
                    <p className="text-2xl font-bold">Server Response Time</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Current:</span>
                      <span className="font-bold text-red-600 dark:text-red-400">1,247ms</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Target:</span>
                      <span className="font-medium">200ms</span>
                    </div>
                  </div>
                  <Button variant="destructive" size="sm" className="w-full">
                    <Eye className="h-3 w-3 mr-2" />
                    Investigate Issue
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}