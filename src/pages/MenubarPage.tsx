import { ComponentShowcase } from "../components/ui/component-showcase";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
} from "../components/ui/menubar";

export function MenubarPage() {
  return (
    <ComponentShowcase
      title="Menubar"
      description="Menú persistente para aplicaciones desktop. Usa Menubar como contenedor, MenubarMenu para cada sección, MenubarTrigger para el botón y MenubarContent para las opciones."
      category="Navigation"
      
      // Main Preview
      preview={
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                New Window <MenubarShortcut>⌘N</MenubarShortcut>
              </MenubarItem>
              <MenubarItem disabled>New Incognito Window</MenubarItem>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Share</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Email link</MenubarItem>
                  <MenubarItem>Messages</MenubarItem>
                  <MenubarItem>Notes</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarItem>
                Print... <MenubarShortcut>⌘P</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Edit</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                Undo <MenubarShortcut>⌘Z</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Find</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Search the web</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Find...</MenubarItem>
                  <MenubarItem>Find Next</MenubarItem>
                  <MenubarItem>Find Previous</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarItem>Cut</MenubarItem>
              <MenubarItem>Copy</MenubarItem>
              <MenubarItem>Paste</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>View</MenubarTrigger>
            <MenubarContent>
              <MenubarCheckboxItem checked>Always Show Bookmarks Bar</MenubarCheckboxItem>
              <MenubarCheckboxItem>Always Show Full URLs</MenubarCheckboxItem>
              <MenubarSeparator />
              <MenubarItem inset>
                Reload <MenubarShortcut>⌘R</MenubarShortcut>
              </MenubarItem>
              <MenubarItem disabled inset>
                Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem inset>Toggle Fullscreen</MenubarItem>
              <MenubarSeparator />
              <MenubarItem inset>Hide Sidebar</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Profiles</MenubarTrigger>
            <MenubarContent>
              <MenubarRadioGroup value="default">
                <MenubarRadioItem value="default">Default Profile</MenubarRadioItem>
                <MenubarRadioItem value="work">Work Profile</MenubarRadioItem>
                <MenubarRadioItem value="personal">Personal Profile</MenubarRadioItem>
              </MenubarRadioGroup>
              <MenubarSeparator />
              <MenubarItem inset>Edit Profiles...</MenubarItem>
              <MenubarSeparator />
              <MenubarItem inset>Add Profile...</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      }
      
      // Main Code
      code={`import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"

export function MenubarDemo() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>New Window</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Share</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Print</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}`}
      
      // Props Documentation
      props={[
        { name: "children", type: "ReactNode", description: "MenubarMenu items que componen la barra.", required: true },
        { name: "className", type: "string", description: "Clases adicionales para el contenedor raíz." },
        { name: "dir", type: "\"ltr\" | \"rtl\"", description: "Dirección de lectura del menú." },
        { name: "defaultValue", type: "string", description: "Valor del menú abierto por defecto." },
        { name: "value", type: "string", description: "Valor controlado del menú activo." },
        { name: "onValueChange", type: "(value: string) => void", description: "Callback al cambiar el menú activo." },
      ]}
      
      // Examples
      examples={[
        {
          title: "Simple Menubar",
          description: "Basic menus without nesting.",
          preview: (
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>Home</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>Dashboard</MenubarItem>
                  <MenubarItem>Analytics</MenubarItem>
                  <MenubarItem>Reports</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>Projects</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>All Projects</MenubarItem>
                  <MenubarItem>Active</MenubarItem>
                  <MenubarItem>Archived</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>New Project</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>Settings</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>Account</MenubarItem>
                  <MenubarItem>Preferences</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Log out</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          ),
          code: `<Menubar>
  {/* ... Menus */}
</Menubar>`
        }
      ]}
    />
  );
}