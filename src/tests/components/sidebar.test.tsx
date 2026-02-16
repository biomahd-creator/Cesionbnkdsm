/**
 * Sidebar Component Tests (G14 Batch 7)
 *
 * Tests for Sidebar, SidebarProvider, SidebarTrigger, and sub-components.
 * Sidebar requires SidebarProvider context.
 * useIsMobile returns false in jsdom (no matchMedia), so desktop mode is tested.
 *
 * @version 0.2.3
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
} from '../../components/ui/sidebar';

// Wrapper helper
function renderWithProvider(children: React.ReactNode, props?: any) {
  return render(
    <SidebarProvider {...props}>
      {children}
    </SidebarProvider>
  );
}

describe('SidebarProvider', () => {
  it('renders children', () => {
    renderWithProvider(<span>Content</span>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('renders with data-slot="sidebar-wrapper"', () => {
    const { container } = renderWithProvider(<span>Content</span>);
    expect(container.querySelector('[data-slot="sidebar-wrapper"]')).toBeTruthy();
  });

  it('sets sidebar CSS custom properties', () => {
    const { container } = renderWithProvider(<span>Content</span>);
    const wrapper = container.querySelector('[data-slot="sidebar-wrapper"]') as HTMLElement;
    expect(wrapper.style.getPropertyValue('--sidebar-width')).toBe('16rem');
  });
});

describe('Sidebar', () => {
  it('renders with data-slot="sidebar"', () => {
    const { container } = renderWithProvider(
      <Sidebar>
        <span>Sidebar content</span>
      </Sidebar>
    );
    expect(container.querySelector('[data-slot="sidebar"]')).toBeTruthy();
  });

  it('renders data-state="expanded" when open', () => {
    const { container } = renderWithProvider(
      <Sidebar>
        <span>Sidebar</span>
      </Sidebar>
    );
    const sidebar = container.querySelector('[data-slot="sidebar"]') as HTMLElement;
    expect(sidebar.getAttribute('data-state')).toBe('expanded');
  });

  it('renders data-state="collapsed" when defaultOpen is false', () => {
    const { container } = render(
      <SidebarProvider defaultOpen={false}>
        <Sidebar>
          <span>Sidebar</span>
        </Sidebar>
      </SidebarProvider>
    );
    const sidebar = container.querySelector('[data-slot="sidebar"]') as HTMLElement;
    expect(sidebar.getAttribute('data-state')).toBe('collapsed');
  });

  it('renders with collapsible="none" variant', () => {
    const { container } = renderWithProvider(
      <Sidebar collapsible="none">
        <span>Static sidebar</span>
      </Sidebar>
    );
    expect(screen.getByText('Static sidebar')).toBeInTheDocument();
    const sidebar = container.querySelector('[data-slot="sidebar"]') as HTMLElement;
    // collapsible="none" renders a simpler div without data-state
    expect(sidebar.getAttribute('data-state')).toBeNull();
  });
});

describe('SidebarTrigger', () => {
  it('renders toggle button with sr-only text', () => {
    renderWithProvider(<SidebarTrigger />);
    expect(screen.getByText('Toggle Sidebar')).toBeInTheDocument();
  });

  it('has data-slot="sidebar-trigger"', () => {
    const { container } = renderWithProvider(<SidebarTrigger />);
    expect(container.querySelector('[data-slot="sidebar-trigger"]')).toBeTruthy();
  });
});

describe('SidebarHeader', () => {
  it('renders with data-slot="sidebar-header"', () => {
    const { container } = renderWithProvider(
      <Sidebar>
        <SidebarHeader>Header</SidebarHeader>
      </Sidebar>
    );
    expect(container.querySelector('[data-slot="sidebar-header"]')).toBeTruthy();
    expect(screen.getByText('Header')).toBeInTheDocument();
  });
});

describe('SidebarFooter', () => {
  it('renders with data-slot="sidebar-footer"', () => {
    const { container } = renderWithProvider(
      <Sidebar>
        <SidebarFooter>Footer</SidebarFooter>
      </Sidebar>
    );
    expect(container.querySelector('[data-slot="sidebar-footer"]')).toBeTruthy();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });
});

describe('SidebarContent', () => {
  it('renders with data-slot="sidebar-content"', () => {
    const { container } = renderWithProvider(
      <Sidebar>
        <SidebarContent>Main content</SidebarContent>
      </Sidebar>
    );
    expect(container.querySelector('[data-slot="sidebar-content"]')).toBeTruthy();
  });
});

describe('SidebarGroup', () => {
  it('renders with data-slot="sidebar-group"', () => {
    const { container } = renderWithProvider(
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>Group</SidebarGroup>
        </SidebarContent>
      </Sidebar>
    );
    expect(container.querySelector('[data-slot="sidebar-group"]')).toBeTruthy();
  });
});

describe('SidebarGroupLabel', () => {
  it('renders with data-slot="sidebar-group-label"', () => {
    const { container } = renderWithProvider(
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    );
    expect(container.querySelector('[data-slot="sidebar-group-label"]')).toBeTruthy();
    expect(screen.getByText('Navigation')).toBeInTheDocument();
  });
});

describe('SidebarGroupContent', () => {
  it('renders with data-slot="sidebar-group-content"', () => {
    const { container } = renderWithProvider(
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>Items here</SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    );
    expect(container.querySelector('[data-slot="sidebar-group-content"]')).toBeTruthy();
  });
});

describe('SidebarMenu', () => {
  it('renders as ul with data-slot="sidebar-menu"', () => {
    const { container } = renderWithProvider(
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>Home</SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    );
    expect(container.querySelector('[data-slot="sidebar-menu"]')?.tagName).toBe('UL');
    expect(screen.getByText('Home')).toBeInTheDocument();
  });
});

describe('SidebarMenuItem', () => {
  it('renders as li with data-slot="sidebar-menu-item"', () => {
    const { container } = renderWithProvider(
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>Item</SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    );
    expect(container.querySelector('[data-slot="sidebar-menu-item"]')?.tagName).toBe('LI');
  });
});

describe('SidebarMenuButton', () => {
  it('renders as button with data-slot', () => {
    const { container } = renderWithProvider(
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>Dashboard</SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    );
    expect(container.querySelector('[data-slot="sidebar-menu-button"]')).toBeTruthy();
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });

  it('sets data-active when isActive', () => {
    const { container } = renderWithProvider(
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton isActive>Active Item</SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    );
    const btn = container.querySelector('[data-slot="sidebar-menu-button"]');
    expect(btn?.getAttribute('data-active')).toBe('true');
  });
});

describe('SidebarMenuBadge', () => {
  it('renders with data-slot="sidebar-menu-badge"', () => {
    const { container } = renderWithProvider(
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>Inbox</SidebarMenuButton>
                  <SidebarMenuBadge>5</SidebarMenuBadge>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    );
    expect(container.querySelector('[data-slot="sidebar-menu-badge"]')).toBeTruthy();
    expect(screen.getByText('5')).toBeInTheDocument();
  });
});

describe('SidebarMenuSkeleton', () => {
  it('renders with data-slot="sidebar-menu-skeleton"', () => {
    const { container } = renderWithProvider(
      <Sidebar>
        <SidebarContent>
          <SidebarMenuSkeleton />
        </SidebarContent>
      </Sidebar>
    );
    expect(container.querySelector('[data-slot="sidebar-menu-skeleton"]')).toBeTruthy();
  });

  it('renders icon skeleton when showIcon is true', () => {
    const { container } = renderWithProvider(
      <Sidebar>
        <SidebarContent>
          <SidebarMenuSkeleton showIcon />
        </SidebarContent>
      </Sidebar>
    );
    expect(container.querySelector('[data-sidebar="menu-skeleton-icon"]')).toBeTruthy();
  });
});

describe('SidebarInput', () => {
  it('renders with data-slot="sidebar-input"', () => {
    const { container } = renderWithProvider(
      <Sidebar>
        <SidebarHeader>
          <SidebarInput placeholder="Search..." />
        </SidebarHeader>
      </Sidebar>
    );
    expect(container.querySelector('[data-slot="sidebar-input"]')).toBeTruthy();
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
  });
});

describe('SidebarSeparator', () => {
  it('renders with data-slot="sidebar-separator"', () => {
    const { container } = renderWithProvider(
      <Sidebar>
        <SidebarContent>
          <SidebarSeparator />
        </SidebarContent>
      </Sidebar>
    );
    expect(container.querySelector('[data-slot="sidebar-separator"]')).toBeTruthy();
  });
});

describe('SidebarInset', () => {
  it('renders as main element', () => {
    const { container } = renderWithProvider(
      <>
        <Sidebar>
          <SidebarContent>Nav</SidebarContent>
        </Sidebar>
        <SidebarInset>Main area</SidebarInset>
      </>
    );
    expect(container.querySelector('[data-slot="sidebar-inset"]')?.tagName).toBe('MAIN');
    expect(screen.getByText('Main area')).toBeInTheDocument();
  });
});

describe('SidebarRail', () => {
  it('renders with data-slot="sidebar-rail"', () => {
    const { container } = renderWithProvider(
      <Sidebar>
        <SidebarContent>Content</SidebarContent>
        <SidebarRail />
      </Sidebar>
    );
    expect(container.querySelector('[data-slot="sidebar-rail"]')).toBeTruthy();
  });

  it('has aria-label', () => {
    renderWithProvider(
      <Sidebar>
        <SidebarRail />
      </Sidebar>
    );
    expect(screen.getByLabelText('Toggle Sidebar')).toBeInTheDocument();
  });
});

describe('SidebarMenuSub', () => {
  it('renders as ul with data-slot', () => {
    const { container } = renderWithProvider(
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>Parent</SidebarMenuButton>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton>Child</SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    );
    expect(container.querySelector('[data-slot="sidebar-menu-sub"]')?.tagName).toBe('UL');
    expect(screen.getByText('Child')).toBeInTheDocument();
  });
});

describe('SidebarGroupAction', () => {
  it('renders with data-slot="sidebar-group-action"', () => {
    const { container } = renderWithProvider(
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Label</SidebarGroupLabel>
            <SidebarGroupAction>+</SidebarGroupAction>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    );
    expect(container.querySelector('[data-slot="sidebar-group-action"]')).toBeTruthy();
    expect(screen.getByText('+')).toBeInTheDocument();
  });
});

describe('SidebarMenuAction', () => {
  it('renders with data-slot="sidebar-menu-action"', () => {
    const { container } = renderWithProvider(
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>Item</SidebarMenuButton>
                  <SidebarMenuAction>X</SidebarMenuAction>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    );
    expect(container.querySelector('[data-slot="sidebar-menu-action"]')).toBeTruthy();
    expect(screen.getByText('X')).toBeInTheDocument();
  });
});

describe('useSidebar', () => {
  function Consumer() {
    const ctx = useSidebar();
    return <span data-testid="state">{ctx.state}</span>;
  }

  it('provides expanded state by default', () => {
    renderWithProvider(<Consumer />);
    expect(screen.getByTestId('state').textContent).toBe('expanded');
  });

  it('provides collapsed state when defaultOpen=false', () => {
    render(
      <SidebarProvider defaultOpen={false}>
        <Consumer />
      </SidebarProvider>
    );
    expect(screen.getByTestId('state').textContent).toBe('collapsed');
  });

  it('throws when used outside SidebarProvider', () => {
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => render(<Consumer />)).toThrow(
      'useSidebar must be used within a SidebarProvider.'
    );
    spy.mockRestore();
  });
});