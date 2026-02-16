import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  LayoutHeader,
  LayoutFooter,
  LayoutSidebarNav,
  LayoutSidebarGroup,
  LayoutSidebarCollapsibleGroup,
  LayoutSidebarItem,
  ClientLayout,
  AdminLayout,
  useAdminLayout,
} from "../../components/patterns/AppLayout";

describe("AppLayout", () => {
  describe("LayoutHeader", () => {
    it("renders the header element", () => {
      const { container } = render(<LayoutHeader />);
      const header = container.querySelector('[data-slot="layout-header"]');
      expect(header).toBeInTheDocument();
    });

    it("renders logo slot", () => {
      render(<LayoutHeader logo={<span>MyLogo</span>} />);
      expect(screen.getByText("MyLogo")).toBeInTheDocument();
    });

    it("renders nav slot", () => {
      render(<LayoutHeader nav={<nav>Main Nav</nav>} />);
      expect(screen.getByText("Main Nav")).toBeInTheDocument();
    });

    it("renders actions slot", () => {
      render(<LayoutHeader actions={<button>Login</button>} />);
      expect(screen.getByText("Login")).toBeInTheDocument();
    });

    it("renders children", () => {
      render(<LayoutHeader>Header Content</LayoutHeader>);
      expect(screen.getByText("Header Content")).toBeInTheDocument();
    });
  });

  describe("LayoutFooter", () => {
    it("renders the footer element", () => {
      const { container } = render(<LayoutFooter>Footer</LayoutFooter>);
      const footer = container.querySelector('[data-slot="layout-footer"]');
      expect(footer).toBeInTheDocument();
    });

    it("renders children", () => {
      render(<LayoutFooter>© 2024 Company</LayoutFooter>);
      expect(screen.getByText("© 2024 Company")).toBeInTheDocument();
    });
  });

  describe("ClientLayout", () => {
    it("renders children in the body area", () => {
      render(<ClientLayout>Page Content</ClientLayout>);
      expect(screen.getByText("Page Content")).toBeInTheDocument();
    });

    it("renders the layout container", () => {
      const { container } = render(
        <ClientLayout>Content</ClientLayout>
      );
      expect(container.firstChild).toBeInTheDocument();
    });

    it("renders with custom header and footer", () => {
      render(
        <ClientLayout
          header={<LayoutHeader logo={<span>Logo</span>} />}
          footer={<LayoutFooter>Footer text</LayoutFooter>}
        >
          Main content
        </ClientLayout>
      );
      expect(screen.getByText("Logo")).toBeInTheDocument();
      expect(screen.getByText("Footer text")).toBeInTheDocument();
      expect(screen.getByText("Main content")).toBeInTheDocument();
    });
  });

  describe("LayoutSidebarNav", () => {
    it("renders the sidebar nav", () => {
      const { container } = render(
        <LayoutSidebarNav>
          <LayoutSidebarGroup label="Group 1">
            <LayoutSidebarItem label="Item 1" />
          </LayoutSidebarGroup>
        </LayoutSidebarNav>
      );
      expect(container.querySelector("nav")).toBeInTheDocument();
    });

    it("renders group labels", () => {
      render(
        <LayoutSidebarNav>
          <LayoutSidebarGroup label="Navigation">
            <LayoutSidebarItem label="Dashboard" />
          </LayoutSidebarGroup>
        </LayoutSidebarNav>
      );
      expect(screen.getByText("Navigation")).toBeInTheDocument();
      expect(screen.getByText("Dashboard")).toBeInTheDocument();
    });
  });

  describe("LayoutSidebarCollapsibleGroup", () => {
    it("renders with label", () => {
      render(
        <LayoutSidebarCollapsibleGroup label="Settings">
          <LayoutSidebarItem label="General" />
        </LayoutSidebarCollapsibleGroup>
      );
      expect(screen.getByText("Settings")).toBeInTheDocument();
    });

    it("renders collapsed (closed) by default", () => {
      render(
        <LayoutSidebarCollapsibleGroup label="Settings">
          <LayoutSidebarItem label="General" />
        </LayoutSidebarCollapsibleGroup>
      );
      // Children should NOT be visible when defaultOpen is false
      expect(screen.queryByText("General")).not.toBeInTheDocument();
    });

    it("renders expanded when defaultOpen is true", () => {
      render(
        <LayoutSidebarCollapsibleGroup label="Settings" defaultOpen>
          <LayoutSidebarItem label="General" />
        </LayoutSidebarCollapsibleGroup>
      );
      expect(screen.getByText("General")).toBeInTheDocument();
    });

    it("toggles open/close on click", async () => {
      const user = userEvent.setup();
      render(
        <LayoutSidebarCollapsibleGroup label="Settings">
          <LayoutSidebarItem label="General" />
        </LayoutSidebarCollapsibleGroup>
      );
      // Initially closed
      expect(screen.queryByText("General")).not.toBeInTheDocument();
      // Click to open
      await user.click(screen.getByText("Settings"));
      expect(screen.getByText("General")).toBeInTheDocument();
      // Click to close
      await user.click(screen.getByText("Settings"));
      expect(screen.queryByText("General")).not.toBeInTheDocument();
    });

    it("shows count badge when provided", () => {
      render(
        <LayoutSidebarCollapsibleGroup label="Items" count={5}>
          <LayoutSidebarItem label="Item" />
        </LayoutSidebarCollapsibleGroup>
      );
      expect(screen.getByText("5")).toBeInTheDocument();
    });

    it("renders icon-only in collapsed sidebar mode", () => {
      const { container } = render(
        <LayoutSidebarCollapsibleGroup label="Settings" collapsed>
          <LayoutSidebarItem label="General" />
        </LayoutSidebarCollapsibleGroup>
      );
      // Label should not be visible, no button to toggle
      expect(screen.queryByText("Settings")).not.toBeInTheDocument();
      // No data-slot in collapsed mode
      expect(container.querySelector('[data-slot="layout-sidebar-collapsible-group"]')).toBeNull();
    });

    it("sets aria-expanded attribute", () => {
      render(
        <LayoutSidebarCollapsibleGroup label="Section" defaultOpen>
          <LayoutSidebarItem label="Child" />
        </LayoutSidebarCollapsibleGroup>
      );
      const button = screen.getByText("Section").closest("button");
      expect(button?.getAttribute("aria-expanded")).toBe("true");
    });
  });

  describe("LayoutSidebarItem", () => {
    it("renders label", () => {
      render(<LayoutSidebarItem label="Dashboard" />);
      expect(screen.getByText("Dashboard")).toBeInTheDocument();
    });

    it("renders as button by default", () => {
      render(<LayoutSidebarItem label="Dashboard" />);
      expect(screen.getByText("Dashboard").closest("button")).toBeTruthy();
    });

    it("renders as anchor when href provided", () => {
      render(<LayoutSidebarItem label="Link" href="/page" />);
      const link = screen.getByText("Link").closest("a");
      expect(link).toBeTruthy();
      expect(link?.getAttribute("href")).toBe("/page");
    });

    it("applies active styling", () => {
      const { container } = render(<LayoutSidebarItem label="Active" active />);
      const item = container.querySelector('[data-slot="layout-sidebar-item"]');
      expect(item?.className).toContain("bg-primary");
    });

    it("renders badge when provided", () => {
      render(<LayoutSidebarItem label="Inbox" badge={<span>3</span>} />);
      expect(screen.getByText("3")).toBeInTheDocument();
    });

    it("calls onClick handler", async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();
      render(<LayoutSidebarItem label="Clickable" onClick={handleClick} />);
      await user.click(screen.getByText("Clickable"));
      expect(handleClick).toHaveBeenCalledOnce();
    });

    it("renders collapsed mode with title", () => {
      const { container } = render(
        <LayoutSidebarItem label="Dashboard" collapsed />
      );
      const item = container.querySelector('[data-slot="layout-sidebar-item"]');
      expect(item?.getAttribute("title")).toBe("Dashboard");
      // Label text should not be visible in collapsed mode
      expect(screen.queryByText("Dashboard")).not.toBeInTheDocument();
    });
  });

  describe("AdminLayout", () => {
    it("renders children", () => {
      render(<AdminLayout>Admin Content</AdminLayout>);
      expect(screen.getByText("Admin Content")).toBeInTheDocument();
    });

    it("renders sidebar when provided", () => {
      render(
        <AdminLayout
          sidebar={
            <LayoutSidebarNav>
              <LayoutSidebarItem label="Dashboard" />
            </LayoutSidebarNav>
          }
        >
          Admin Page
        </AdminLayout>
      );
      expect(screen.getByText("Dashboard")).toBeInTheDocument();
      expect(screen.getByText("Admin Page")).toBeInTheDocument();
    });

    it("renders data-slot admin-layout", () => {
      const { container } = render(<AdminLayout>Content</AdminLayout>);
      expect(container.querySelector('[data-slot="admin-layout"]')).toBeTruthy();
    });

    it("renders header when provided", () => {
      render(
        <AdminLayout header={<LayoutHeader logo={<span>Logo</span>} />}>
          Content
        </AdminLayout>
      );
      expect(screen.getByText("Logo")).toBeInTheDocument();
    });

    it("renders footer when provided", () => {
      render(
        <AdminLayout footer={<LayoutFooter>Admin Footer</LayoutFooter>}>
          Content
        </AdminLayout>
      );
      expect(screen.getByText("Admin Footer")).toBeInTheDocument();
    });

    it("renders sidebarHeader when provided", () => {
      render(
        <AdminLayout sidebarHeader={<span>Sidebar Brand</span>} sidebar={<span>Nav</span>}>
          Content
        </AdminLayout>
      );
      expect(screen.getByText("Sidebar Brand")).toBeInTheDocument();
    });

    it("renders sidebarFooter when provided", () => {
      render(
        <AdminLayout sidebarFooter={<span>User Menu</span>} sidebar={<span>Nav</span>}>
          Content
        </AdminLayout>
      );
      expect(screen.getByText("User Menu")).toBeInTheDocument();
    });

    it("renders collapse toggle button", () => {
      render(
        <AdminLayout sidebar={<span>Nav</span>}>
          Content
        </AdminLayout>
      );
      expect(screen.getByLabelText("Collapse sidebar")).toBeInTheDocument();
    });

    it("renders mobile hamburger toggle", () => {
      render(
        <AdminLayout header={<LayoutHeader />}>
          Content
        </AdminLayout>
      );
      expect(screen.getByLabelText("Toggle menu")).toBeInTheDocument();
    });
  });

  describe("useAdminLayout", () => {
    function Consumer() {
      const ctx = useAdminLayout();
      return <span data-testid="collapsed">{String(ctx.sidebarCollapsed)}</span>;
    }

    it("provides context within AdminLayout", () => {
      render(
        <AdminLayout>
          <Consumer />
        </AdminLayout>
      );
      expect(screen.getByTestId("collapsed").textContent).toBe("false");
    });

    it("provides collapsed=true when defaultCollapsed", () => {
      render(
        <AdminLayout defaultCollapsed>
          <Consumer />
        </AdminLayout>
      );
      expect(screen.getByTestId("collapsed").textContent).toBe("true");
    });

    it("throws when used outside AdminLayout", () => {
      const spy = vi.spyOn(console, "error").mockImplementation(() => {});
      expect(() => render(<Consumer />)).toThrow(
        "useAdminLayout must be used within an <AdminLayout>"
      );
      spy.mockRestore();
    });
  });
});