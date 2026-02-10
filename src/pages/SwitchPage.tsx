import { ComponentShowcase } from "../components/ui/component-showcase";
import { Switch } from "../components/ui/switch";
import { Label } from "../components/ui/label";
import { Card } from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import { Bell, Wifi, Bluetooth, Moon, Volume2, Lock } from "lucide-react";
import { useState } from "react";

export function SwitchPage() {
  return (
    <ComponentShowcase
      title="Switch"
      description="A control that allows users to toggle between checked and unchecked states, commonly used for on/off settings."
      category="Forms"
      
      // Main Preview
      preview={
        <div className="flex flex-col gap-4">
          <div className="flex items-center space-x-2">
            <Switch id="demo-1" />
            <Label htmlFor="demo-1">Airplane Mode</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="demo-2" defaultChecked />
            <Label htmlFor="demo-2">Enabled by default</Label>
          </div>
        </div>
      }
      
      // Main Code
      code={`import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function SwitchDemo() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center space-x-2">
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="wifi" defaultChecked />
        <Label htmlFor="wifi">WiFi</Label>
      </div>
    </div>
  );
}`}
      
      // Props Documentation
      props={[
        {
          name: "checked",
          type: "boolean",
          description: "Estado controlado del switch",
        },
        {
          name: "defaultChecked",
          type: "boolean",
          default: "false",
          description: "Estado inicial no controlado",
        },
        {
          name: "onCheckedChange",
          type: "(checked: boolean) => void",
          description: "Callback cuando cambia el estado",
        },
        {
          name: "disabled",
          type: "boolean",
          default: "false",
          description: "Deshabilita el switch",
        },
        {
          name: "required",
          type: "boolean",
          default: "false",
          description: "Campo requerido en formularios",
        },
        {
          name: "name",
          type: "string",
          description: "Nombre del campo (para formularios)",
        },
        {
          name: "id",
          type: "string",
          description: "ID para asociar con Label",
          required: true,
        },
        {
          name: "className",
          type: "string",
          description: "Clases CSS adicionales",
        },
      ]}
      
      // Examples
      examples={[
        {
          title: "Basic Switch",
          description: "Switch simple con label",
          preview: (
            <div className="flex items-center space-x-2">
              <Switch id="basic" />
              <Label htmlFor="basic">Enable feature</Label>
            </div>
          ),
          code: `import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function BasicSwitch() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="basic" />
      <Label htmlFor="basic">Enable feature</Label>
    </div>
  );
}`,
        },
        {
          title: "With Descriptions",
          description: "Switches con descripciones adicionales en layout horizontal",
          preview: (
            <div className="space-y-4 max-w-md">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="marketing">Marketing emails</Label>
                  <p className="text-muted-foreground">
                    Receive emails about new products
                  </p>
                </div>
                <Switch id="marketing" />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="security">Security emails</Label>
                  <p className="text-muted-foreground">
                    Receive emails about your account
                  </p>
                </div>
                <Switch id="security" defaultChecked />
              </div>
            </div>
          ),
          code: `import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export function SwitchWithDescriptions() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <Label htmlFor="marketing">Marketing emails</Label>
          <p className="text-sm text-muted-foreground">
            Receive emails about new products
          </p>
        </div>
        <Switch id="marketing" />
      </div>
      
      <Separator />
      
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <Label htmlFor="security">Security emails</Label>
          <p className="text-sm text-muted-foreground">
            Receive emails about your account
          </p>
        </div>
        <Switch id="security" defaultChecked />
      </div>
    </div>
  );
}`,
        },
        {
          title: "With Icons",
          description: "Switches con iconos para mejor UX visual",
          preview: (
            <div className="space-y-4">
              <div className="flex items-center justify-between max-w-xs">
                <div className="flex items-center gap-2">
                  <Bell className="h-4 w-4 text-muted-foreground" />
                  <Label htmlFor="notifications">Notifications</Label>
                </div>
                <Switch id="notifications" defaultChecked />
              </div>
              <div className="flex items-center justify-between max-w-xs">
                <div className="flex items-center gap-2">
                  <Wifi className="h-4 w-4 text-muted-foreground" />
                  <Label htmlFor="wifi">WiFi</Label>
                </div>
                <Switch id="wifi" defaultChecked />
              </div>
              <div className="flex items-center justify-between max-w-xs">
                <div className="flex items-center gap-2">
                  <Bluetooth className="h-4 w-4 text-muted-foreground" />
                  <Label htmlFor="bluetooth">Bluetooth</Label>
                </div>
                <Switch id="bluetooth" />
              </div>
            </div>
          ),
          code: `import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Bell, Wifi, Bluetooth } from "lucide-react";

export function SwitchWithIcons() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bell className="h-4 w-4 text-muted-foreground" />
          <Label htmlFor="notifications">Notifications</Label>
        </div>
        <Switch id="notifications" defaultChecked />
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Wifi className="h-4 w-4 text-muted-foreground" />
          <Label htmlFor="wifi">WiFi</Label>
        </div>
        <Switch id="wifi" defaultChecked />
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bluetooth className="h-4 w-4 text-muted-foreground" />
          <Label htmlFor="bluetooth">Bluetooth</Label>
        </div>
        <Switch id="bluetooth" />
      </div>
    </div>
  );
}`,
        },
        {
          title: "Card Layout",
          description: "Switches organizados en cards para agrupación visual",
          preview: (
            <div className="grid gap-4 max-w-md">
              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Moon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <Label htmlFor="dark-mode" className="cursor-pointer">Dark Mode</Label>
                      <p className="text-muted-foreground">
                        Enable dark theme
                      </p>
                    </div>
                  </div>
                  <Switch id="dark-mode" />
                </div>
              </Card>
              
              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Volume2 className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <Label htmlFor="sound" className="cursor-pointer">Sound Effects</Label>
                      <p className="text-muted-foreground">
                        Play UI sounds
                      </p>
                    </div>
                  </div>
                  <Switch id="sound" defaultChecked />
                </div>
              </Card>
            </div>
          ),
          code: `import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Moon, Volume2 } from "lucide-react";

export function CardLayoutSwitch() {
  return (
    <div className="grid gap-4">
      <Card className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Moon className="h-4 w-4 text-primary" />
            </div>
            <div>
              <Label htmlFor="dark-mode" className="cursor-pointer">
                Dark Mode
              </Label>
              <p className="text-sm text-muted-foreground">
                Enable dark theme
              </p>
            </div>
          </div>
          <Switch id="dark-mode" />
        </div>
      </Card>
      
      <Card className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Volume2 className="h-4 w-4 text-primary" />
            </div>
            <div>
              <Label htmlFor="sound" className="cursor-pointer">
                Sound Effects
              </Label>
              <p className="text-sm text-muted-foreground">
                Play UI sounds
              </p>
            </div>
          </div>
          <Switch id="sound" defaultChecked />
        </div>
      </Card>
    </div>
  );
}`,
        },
        {
          title: "Controlled State",
          description: "Switch con estado controlado mediante React state",
          preview: (
            <SwitchControlledExample />
          ),
          code: `import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function ControlledSwitch() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Switch
          id="controlled"
          checked={isEnabled}
          onCheckedChange={setIsEnabled}
        />
        <Label htmlFor="controlled">
          Feature is {isEnabled ? "enabled" : "disabled"}
        </Label>
      </div>
      
      <p className="text-sm text-muted-foreground">
        Current state: <strong>{isEnabled ? "ON" : "OFF"}</strong>
      </p>
    </div>
  );
}`,
        },
        {
          title: "Disabled States",
          description: "Switch en estados deshabilitados (on y off)",
          preview: (
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch id="disabled-off" disabled />
                <Label htmlFor="disabled-off">Disabled (off)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="disabled-on" disabled defaultChecked />
                <Label htmlFor="disabled-on">Disabled (on)</Label>
              </div>
            </div>
          ),
          code: `import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function DisabledSwitch() {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Switch id="disabled-off" disabled />
        <Label htmlFor="disabled-off">Disabled (off)</Label>
      </div>
      
      <div className="flex items-center space-x-2">
        <Switch id="disabled-on" disabled defaultChecked />
        <Label htmlFor="disabled-on">Disabled (on)</Label>
      </div>
    </div>
  );
}`,
        },
        {
          title: "Settings Panel",
          description: "Panel completo de configuración con múltiples switches",
          preview: (
            <div className="max-w-md space-y-1 border rounded-lg p-4">
              <h3 className="font-semibold mb-4">Privacy Settings</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2">
                  <div className="space-y-1">
                    <Label htmlFor="profile-visible">Profile Visibility</Label>
                    <p className="text-muted-foreground">
                      Make your profile visible to others
                    </p>
                  </div>
                  <Switch id="profile-visible" defaultChecked />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between py-2">
                  <div className="space-y-1">
                    <Label htmlFor="search-indexing">Search Indexing</Label>
                    <p className="text-muted-foreground">
                      Allow search engines to index your profile
                    </p>
                  </div>
                  <Switch id="search-indexing" />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between py-2">
                  <div className="space-y-1">
                    <Label htmlFor="data-collection">Data Collection</Label>
                    <p className="text-muted-foreground">
                      Help us improve by sharing usage data
                    </p>
                  </div>
                  <Switch id="data-collection" defaultChecked />
                </div>
              </div>
            </div>
          ),
          code: `import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export function SettingsPanel() {
  return (
    <div className="border rounded-lg p-4">
      <h3 className="font-semibold mb-4">Privacy Settings</h3>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between py-2">
          <div className="space-y-1">
            <Label htmlFor="profile-visible">Profile Visibility</Label>
            <p className="text-sm text-muted-foreground">
              Make your profile visible to others
            </p>
          </div>
          <Switch id="profile-visible" defaultChecked />
        </div>
        
        <Separator />
        
        <div className="flex items-center justify-between py-2">
          <div className="space-y-1">
            <Label htmlFor="search-indexing">Search Indexing</Label>
            <p className="text-sm text-muted-foreground">
              Allow search engines to index your profile
            </p>
          </div>
          <Switch id="search-indexing" />
        </div>
        
        <Separator />
        
        <div className="flex items-center justify-between py-2">
          <div className="space-y-1">
            <Label htmlFor="data-collection">Data Collection</Label>
            <p className="text-sm text-muted-foreground">
              Help us improve by sharing usage data
            </p>
          </div>
          <Switch id="data-collection" defaultChecked />
        </div>
      </div>
    </div>
  );
}`,
        },
        {
          title: "With Confirmation",
          description: "Switch que requiere confirmación al activarse",
          preview: (
            <SwitchWithConfirmation />
          ),
          code: `import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Lock } from "lucide-react";
import { useState } from "react";

export function SwitchWithConfirmation() {
  const [isLocked, setIsLocked] = useState(true);

  const handleChange = (checked: boolean) => {
    if (checked) {
      const confirmed = window.confirm(
        "Are you sure you want to enable this feature?"
      );
      if (confirmed) {
        setIsLocked(false);
      }
    } else {
      setIsLocked(true);
    }
  };

  return (
    <div className="flex items-center justify-between max-w-xs">
      <div className="flex items-center gap-2">
        <Lock className="h-4 w-4 text-muted-foreground" />
        <Label htmlFor="locked">Secure Mode</Label>
      </div>
      <Switch
        id="locked"
        checked={!isLocked}
        onCheckedChange={handleChange}
      />
    </div>
  );
}`,
        },
      ]}
    />
  );
}

// Helper component for Controlled State example
function SwitchControlledExample() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Switch
          id="controlled"
          checked={isEnabled}
          onCheckedChange={setIsEnabled}
        />
        <Label htmlFor="controlled">
          Feature is {isEnabled ? "enabled" : "disabled"}
        </Label>
      </div>
      
      <p className="text-muted-foreground">
        Current state: <strong>{isEnabled ? "ON" : "OFF"}</strong>
      </p>
    </div>
  );
}

// Helper component for Confirmation example
function SwitchWithConfirmation() {
  const [isLocked, setIsLocked] = useState(true);

  const handleChange = (checked: boolean) => {
    if (checked) {
      const confirmed = window.confirm(
        "Are you sure you want to enable this feature?"
      );
      if (confirmed) {
        setIsLocked(false);
      }
    } else {
      setIsLocked(true);
    }
  };

  return (
    <div className="flex items-center justify-between max-w-xs">
      <div className="flex items-center gap-2">
        <Lock className="h-4 w-4 text-muted-foreground" />
        <Label htmlFor="locked">Secure Mode</Label>
      </div>
      <Switch
        id="locked"
        checked={!isLocked}
        onCheckedChange={handleChange}
      />
    </div>
  );
}
