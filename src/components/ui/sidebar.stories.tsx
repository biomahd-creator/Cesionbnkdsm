import type { Meta, StoryObj } from '@storybook/react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from './sidebar';
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

const meta: Meta<typeof Sidebar> = {
  title: 'UI/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export const Default: Story = {
  render: () => (
    <SidebarProvider>
      <div className="flex h-[500px] w-full border rounded-lg overflow-hidden bg-background">
        <Sidebar>
          <SidebarHeader className="p-4 border-b">
            <h2 className="text-lg font-bold">App Name</h2>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Application</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <a href={item.url}>
                          <item.icon />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter className="p-4 border-t">
            <p className="text-xs text-muted-foreground">© 2024 Company</p>
          </SidebarFooter>
        </Sidebar>
        <main className="flex-1 p-6 bg-muted/10">
          <SidebarTrigger />
          <div className="mt-4">
            <h1 className="text-2xl font-bold">Main Content</h1>
            <p className="text-muted-foreground">This is where your page content goes.</p>
          </div>
        </main>
      </div>
    </SidebarProvider>
  ),
};
