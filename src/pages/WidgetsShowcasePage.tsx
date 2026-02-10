import { 
  StatCard, 
  StatsGrid, 
  SearchBar, 
  FilterBar, 
  FilterChip, 
  ApprovalTimelineItem,
  ActionButton,
  SimpleFormField,
  NavigationBar
} from "../components/widgets";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import { Badge } from "../components/ui/badge";
import { CheckCircle, Clock, DollarSign, FileText, Search, Bell, Settings, User } from "lucide-react";

export function WidgetsShowcasePage() {
  return (
    <div className="space-y-10 pb-10">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">UI Widgets</h1>
        <p className="text-muted-foreground">
          Reinstanciable building blocks and functional components for building application interfaces.
        </p>
      </div>

      <Separator />

      {/* Statistics */}
      <section id="stats" className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold">Statistics</h2>
          <p className="text-sm text-muted-foreground">Components for displaying data trends and KPIs.</p>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Stat Card</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <StatCard 
              title="Total Revenue" 
              value="$45,231.89" 
              change="+20.1%" 
              trend="up" 
              icon={DollarSign} 
            />
            <StatCard 
              title="Active Users" 
              value="+2350" 
              change="+180.1%" 
              trend="up" 
              icon={User} 
            />
            <StatCard 
              title="Bounce Rate" 
              value="12.23%" 
              change="-4.5%" 
              trend="down" 
              icon={Clock} 
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Stats Grid</h3>
          <StatsGrid />
        </div>
      </section>

      <Separator />

      {/* Navigation & Search */}
      <section id="navigation" className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold">Navigation & Search</h2>
          <p className="text-sm text-muted-foreground">Components for user navigation and data filtering.</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Navigation Bar</h3>
          <div className="border rounded-md overflow-hidden bg-background">
            <NavigationBar />
            <div className="p-8 bg-muted/20 text-center text-muted-foreground text-sm">
              Page Content Area
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Filter Bar</h3>
          <Card>
            <CardContent className="pt-6">
              <FilterBar />
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Search Bar</h3>
            <Card>
              <CardContent className="pt-6">
                <SearchBar placeholder="Search users..." />
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Filter Chips</h3>
            <Card>
              <CardContent className="pt-6 flex flex-wrap gap-2">
                <FilterChip label="Status" value="Active" onRemove={() => {}} />
                <FilterChip label="Role" value="Admin" onRemove={() => {}} />
                <FilterChip label="Date" value="Today" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* Action & Interaction */}
      <section id="actions" className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold">Actions & Interaction</h2>
          <p className="text-sm text-muted-foreground">Interactive elements for user actions.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Action Buttons</h3>
            <Card>
              <CardContent className="pt-6 flex gap-4">
                <ActionButton icon={Bell} label="Notifications" />
                <ActionButton icon={Settings} label="Settings" variant="outline" />
                <ActionButton icon={Search} label="Search" variant="ghost" />
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Form Field</h3>
            <Card>
              <CardContent className="pt-6 space-y-4">
                <SimpleFormField 
                  label="Username" 
                  id="username" 
                  placeholder="Enter username" 
                  required 
                />
                <SimpleFormField 
                  label="Email" 
                  id="email" 
                  type="email" 
                  placeholder="Enter email" 
                  error="Invalid email address" 
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* Data Display */}
      <section id="display" className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold">Data Display</h2>
          <p className="text-sm text-muted-foreground">Components for visualizing chronological or structured data.</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Approval Timeline Item</h3>
          <Card>
            <CardContent className="pt-6 space-y-6">
              <ApprovalTimelineItem
                icon={CheckCircle}
                iconColor="text-green-500"
                title="Order Delivered"
                user="System"
                role="Automated"
                timestamp="2 mins ago"
                status="Completed"
                statusVariant="default"
              />
              <ApprovalTimelineItem
                icon={Clock}
                iconColor="text-amber-500"
                title="Order Processing"
                user="Jane Doe"
                role="Warehouse"
                timestamp="1 hour ago"
                status="In Progress"
                statusVariant="secondary"
              />
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}