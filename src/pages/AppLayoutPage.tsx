/**
 * AppLayoutPage — Showcase for ClientLayout & AdminLayout
 * Demonstrates both layout shells with interactive controls.
 */
import { useState } from "react";
import { ComponentShowcase } from "../components/ui/component-showcase";
import {
  ClientLayout,
  AdminLayout,
  LayoutHeader,
  LayoutFooter,
  LayoutSidebarNav,
  LayoutSidebarGroup,
  LayoutSidebarItem,
} from "../components/patterns/AppLayout";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";
import {
  Home,
  Users,
  FileText,
  BarChart3,
  Settings,
  Bell,
  Search,
  HelpCircle,
  LogOut,
  Shield,
  Database,
} from "lucide-react";

/* ── Demo: Client Layout ── */
function ClientLayoutDemo() {
  return (
    <div className="border border-border rounded-[var(--radius)] overflow-hidden h-[420px] w-full">
      <ClientLayout
        stickyHeader
        header={
          <LayoutHeader
            logo={
              <span className="text-primary font-medium">CESIONBNK</span>
            }
            nav={
              <>
                <a href="#" className="px-3 py-2 text-sm text-foreground/70 hover:text-foreground transition-colors rounded-[var(--radius)] hover:bg-accent">
                  Home
                </a>
                <a href="#" className="px-3 py-2 text-sm text-primary transition-colors rounded-[var(--radius)] bg-primary/10">
                  Products
                </a>
                <a href="#" className="px-3 py-2 text-sm text-foreground/70 hover:text-foreground transition-colors rounded-[var(--radius)] hover:bg-accent">
                  About
                </a>
                <a href="#" className="px-3 py-2 text-sm text-foreground/70 hover:text-foreground transition-colors rounded-[var(--radius)] hover:bg-accent">
                  Contact
                </a>
              </>
            }
            actions={
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm">
                  <Search className="h-4 w-4" />
                </Button>
                <Button variant="default" size="sm">Sign In</Button>
              </div>
            }
          />
        }
        footer={
          <LayoutFooter
            left={<span>&copy; 2026 CESIONBNK. All rights reserved.</span>}
            right={
              <div className="flex gap-4">
                <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
                <a href="#" className="hover:text-foreground transition-colors">Terms</a>
              </div>
            }
          />
        }
        bodyClassName="p-6"
      >
        <div className="space-y-6">
          <div>
            <h2 className="text-foreground">Welcome to CESIONBNK</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Client-facing layout: header, scrollable body, and footer.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {["Operations", "Invoices", "Reports"].map((title) => (
              <div
                key={title}
                className="rounded-[var(--radius)] border border-border bg-card p-6 hover-lift"
              >
                <h4 className="text-foreground">{title}</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Manage your {title.toLowerCase()} efficiently.
                </p>
              </div>
            ))}
          </div>
          <div className="h-32 rounded-[var(--radius)] border border-dashed border-border flex items-center justify-center text-muted-foreground text-sm">
            Scrollable body area
          </div>
        </div>
      </ClientLayout>
    </div>
  );
}

/* ── Demo: Admin Layout ── */
function AdminLayoutDemo() {
  const [activePage, setActivePage] = useState("dashboard");

  return (
    <div className="border border-border rounded-[var(--radius)] overflow-hidden h-[460px] w-full">
      <AdminLayout
        stickyHeader
        collapsible
        sidebarWidth={220}
        sidebarCollapsedWidth={56}
        sidebarHeader={
          <span className="text-primary font-medium text-sm truncate">CESIONBNK</span>
        }
        header={
          <LayoutHeader
            logo={<span className="text-primary font-medium pl-10 md:pl-0">Admin Panel</span>}
            actions={
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm">
                  <Bell className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <HelpCircle className="h-4 w-4" />
                </Button>
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-xs text-primary">
                  JD
                </div>
              </div>
            }
          />
        }
        sidebar={
          <LayoutSidebarNav>
            <LayoutSidebarGroup label="Main">
              <LayoutSidebarItem
                icon={Home}
                label="Dashboard"
                active={activePage === "dashboard"}
                onClick={() => setActivePage("dashboard")}
              />
              <LayoutSidebarItem
                icon={FileText}
                label="Invoices"
                active={activePage === "invoices"}
                onClick={() => setActivePage("invoices")}
                badge={<Badge variant="secondary" className="text-xs px-1.5 py-0">12</Badge>}
              />
              <LayoutSidebarItem
                icon={Users}
                label="Clients"
                active={activePage === "clients"}
                onClick={() => setActivePage("clients")}
              />
              <LayoutSidebarItem
                icon={BarChart3}
                label="Reports"
                active={activePage === "reports"}
                onClick={() => setActivePage("reports")}
              />
            </LayoutSidebarGroup>

            <LayoutSidebarGroup label="System">
              <LayoutSidebarItem
                icon={Shield}
                label="Permissions"
                active={activePage === "permissions"}
                onClick={() => setActivePage("permissions")}
              />
              <LayoutSidebarItem
                icon={Database}
                label="Database"
                active={activePage === "database"}
                onClick={() => setActivePage("database")}
              />
              <LayoutSidebarItem
                icon={Settings}
                label="Settings"
                active={activePage === "settings"}
                onClick={() => setActivePage("settings")}
              />
            </LayoutSidebarGroup>
          </LayoutSidebarNav>
        }
        sidebarFooter={
          <button className="flex w-full items-center gap-3 rounded-[var(--radius)] px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-sidebar-accent transition-colors">
            <LogOut className="h-4 w-4" />
            <span>Log out</span>
          </button>
        }
        footer={
          <LayoutFooter
            left={<span>CESIONBNK Admin v0.2.0</span>}
            right={<span>admin@cesionbnk.com</span>}
          />
        }
        bodyClassName="p-6"
      >
        <div className="space-y-4">
          <h2 className="text-foreground capitalize">{activePage}</h2>
          <p className="text-sm text-muted-foreground">
            Active view: <strong>{activePage}</strong>. Click sidebar items to navigate.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="rounded-[var(--radius)] border border-border bg-card p-4"
              >
                <div className="h-3 w-24 rounded bg-muted mb-2" />
                <div className="h-2 w-full rounded bg-muted/60" />
                <div className="h-2 w-3/4 rounded bg-muted/40 mt-1" />
              </div>
            ))}
          </div>
        </div>
      </AdminLayout>
    </div>
  );
}

/* ── Main Page ── */
export function AppLayoutPage() {
  return (
    <ComponentShowcase
      title="App Layouts"
      description="Full-page shell layouts for client-facing and admin interfaces. ClientLayout provides Header + Body + Footer. AdminLayout adds a collapsible sidebar with responsive mobile drawer."
      category="Layout"
      preview={
        <div className="w-full space-y-8">
          {/* ClientLayout Demo */}
          <div className="space-y-2">
            <h3 className="text-foreground">ClientLayout</h3>
            <p className="text-sm text-muted-foreground">Header + Body + Footer (customer-facing)</p>
            <ClientLayoutDemo />
          </div>

          <Separator />

          {/* AdminLayout Demo */}
          <div className="space-y-2">
            <h3 className="text-foreground">AdminLayout</h3>
            <p className="text-sm text-muted-foreground">Header + Sidebar + Body + Footer (admin). Sidebar collapses on toggle and becomes a drawer on mobile.</p>
            <AdminLayoutDemo />
          </div>
        </div>
      }
      code={`import {
  ClientLayout,
  AdminLayout,
  LayoutHeader,
  LayoutFooter,
  LayoutSidebarNav,
  LayoutSidebarGroup,
  LayoutSidebarItem,
  useAdminLayout,
} from "@biomahd-creator/financio-design-system/patterns";

// ── Client Layout ──
<ClientLayout
  stickyHeader
  header={
    <LayoutHeader
      logo={<Logo />}
      nav={<NavLinks />}
      actions={<UserMenu />}
    />
  }
  footer={
    <LayoutFooter
      left={<span>© 2026 CESIONBNK</span>}
      right={<a href="/privacy">Privacy</a>}
    />
  }
>
  {/* Body content */}
</ClientLayout>

// ── Admin Layout ──
<AdminLayout
  stickyHeader
  collapsible
  sidebarWidth={260}
  sidebarCollapsedWidth={64}
  sidebarHeader={<Logo />}
  header={<LayoutHeader logo={<span>Admin</span>} actions={<UserMenu />} />}
  sidebar={
    <LayoutSidebarNav>
      <LayoutSidebarGroup label="Main">
        <LayoutSidebarItem icon={Home} label="Dashboard" active />
        <LayoutSidebarItem icon={FileText} label="Invoices" badge={<Badge>12</Badge>} />
        <LayoutSidebarItem icon={Users} label="Clients" />
      </LayoutSidebarGroup>
    </LayoutSidebarNav>
  }
  sidebarFooter={<LogoutButton />}
  footer={<LayoutFooter left={<span>v0.2.0</span>} />}
>
  {/* Body content */}
</AdminLayout>`}
      props={[
        { name: "header", type: "ReactNode", description: "Header element (use LayoutHeader or custom)" },
        { name: "footer", type: "ReactNode", description: "Footer element (use LayoutFooter or custom)" },
        { name: "stickyHeader", type: "boolean", default: "true", description: "Stick header to top on scroll" },
        { name: "stickyFooter", type: "boolean", default: "false", description: "Stick footer to bottom" },
        { name: "bodyClassName", type: "string", description: "Additional classes for body wrapper" },
        { name: "sidebar", type: "ReactNode", description: "AdminLayout only — sidebar content" },
        { name: "sidebarHeader", type: "ReactNode", description: "AdminLayout only — logo/brand at top of sidebar" },
        { name: "sidebarFooter", type: "ReactNode", description: "AdminLayout only — content at bottom of sidebar" },
        { name: "sidebarWidth", type: "number", default: "260", description: "AdminLayout only — expanded sidebar width in px" },
        { name: "sidebarCollapsedWidth", type: "number", default: "64", description: "AdminLayout only — collapsed sidebar width in px" },
        { name: "collapsible", type: "boolean", default: "true", description: "AdminLayout only — allow icon-only collapse" },
        { name: "sidebarPosition", type: '"left" | "right"', default: '"left"', description: "AdminLayout only — sidebar position" },
      ]}
      examples={[
        {
          title: "LayoutHeader with transparent mode",
          description: "Transparent header for hero sections or landing pages.",
          preview: (
            <div className="w-full rounded-[var(--radius)] overflow-hidden border border-border bg-gradient-to-br from-primary/20 to-secondary/20">
              <LayoutHeader
                transparent
                logo={<span className="text-primary font-medium">CESIONBNK</span>}
                nav={
                  <>
                    <a href="#" className="px-3 py-2 text-sm text-foreground/70 hover:text-foreground">Home</a>
                    <a href="#" className="px-3 py-2 text-sm text-foreground/70 hover:text-foreground">About</a>
                  </>
                }
                actions={<Button size="sm">Get Started</Button>}
              />
            </div>
          ),
          code: `<LayoutHeader
  transparent
  logo={<span>CESIONBNK</span>}
  nav={<NavLinks />}
  actions={<Button>Get Started</Button>}
/>`,
        },
        {
          title: "LayoutFooter with three slots",
          description: "Footer with left, center, and right content areas.",
          preview: (
            <div className="w-full rounded-[var(--radius)] overflow-hidden border border-border">
              <LayoutFooter
                left={<span>© 2026 CESIONBNK</span>}
                center={<span>Built with Financio DS</span>}
                right={
                  <div className="flex gap-3">
                    <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
                    <a href="#" className="hover:text-foreground transition-colors">Terms</a>
                  </div>
                }
              />
            </div>
          ),
          code: `<LayoutFooter
  left={<span>© 2026 CESIONBNK</span>}
  center={<span>Built with Financio DS</span>}
  right={<LegalLinks />}
/>`,
        },
        {
          title: "Sidebar navigation items",
          description: "LayoutSidebarNav with groups and items showing active state and badges.",
          preview: (
            <div className="w-64 rounded-[var(--radius)] overflow-hidden border border-border bg-sidebar text-sidebar-foreground">
              <LayoutSidebarNav>
                <LayoutSidebarGroup label="Main">
                  <LayoutSidebarItem icon={Home} label="Dashboard" active />
                  <LayoutSidebarItem icon={FileText} label="Invoices" badge={<Badge variant="secondary" className="text-xs px-1.5 py-0">5</Badge>} />
                  <LayoutSidebarItem icon={Users} label="Clients" />
                </LayoutSidebarGroup>
                <LayoutSidebarGroup label="System">
                  <LayoutSidebarItem icon={Settings} label="Settings" />
                </LayoutSidebarGroup>
              </LayoutSidebarNav>
            </div>
          ),
          code: `<LayoutSidebarNav>
  <LayoutSidebarGroup label="Main">
    <LayoutSidebarItem icon={Home} label="Dashboard" active />
    <LayoutSidebarItem icon={FileText} label="Invoices" badge={<Badge>5</Badge>} />
    <LayoutSidebarItem icon={Users} label="Clients" />
  </LayoutSidebarGroup>
  <LayoutSidebarGroup label="System">
    <LayoutSidebarItem icon={Settings} label="Settings" />
  </LayoutSidebarGroup>
</LayoutSidebarNav>`,
        },
      ]}
    />
  );
}
