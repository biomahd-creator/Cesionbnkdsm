# ⚡ Quick Reference - CESIONBNK

## Comandos más usados

```bash
# Verificar configuración
npm run check:setup

# Desarrollo
npm run dev

# Build
npm run build:lib

# Validación completa
npm run validate
```

---

## Estructura de archivos clave

```
/
├── postcss.config.js       # PostCSS con @tailwindcss/postcss
├── tailwind.config.js      # Content paths (tokens en CSS)
├── styles/globals.css      # Todos los tokens con @theme
├── main.tsx                # Entry point (importa globals.css)
├── vite.config.ts          # Config de Vite
└── package.json            # Dependencies
```

---

## Tokens del sistema de diseño

### Colores
```css
--primary: #00c951           /* Verde CESIONBNK */
--secondary: #1C2D3A         /* Azul marino */
```

### Uso en componentes
```tsx
<div className="bg-primary text-primary-foreground">
  Primary button
</div>

<div className="bg-secondary text-secondary-foreground">
  Secondary button
</div>
```

### Tipografía
```css
font-family: 'Satoshi', sans-serif;
letter-spacing: 0.025em;
```

### Border Radius
```css
--radius: 0.625rem          /* 10px */
--radius-sm: calc(var(--radius) - 4px)
--radius-md: calc(var(--radius) - 2px)
--radius-lg: var(--radius)
--radius-xl: calc(var(--radius) + 4px)
```

### Uso en componentes
```tsx
<div className="rounded-lg">     {/* 10px */}
<div className="rounded-md">     {/* 8px */}
<div className="rounded-sm">     {/* 6px */}
```

---

## Modo oscuro

### Activación
```tsx
// Agregar clase .dark al html o body
document.documentElement.classList.add('dark');
document.documentElement.classList.remove('dark');
```

### En componentes
```tsx
// Las clases de Tailwind responden automáticamente al modo oscuro
<div className="bg-card text-card-foreground">
  {/* Cambia automáticamente con .dark */}
</div>
```

---

## Variables CSS personalizadas

### KPI Cards
```css
--kpi-yellow: 234 179 8
--kpi-orange: 249 115 22
--kpi-blue: 59 130 246
--kpi-lime: 132 204 22
```

### C-Financia Brand
```css
--cfinancia-accent: 222 251 73       /* #DEFB49 */
--cfinancia-accent-hover: 67 249 119 /* #43F977 */
--cfinancia-navy: 5 41 55            /* #052937 */
```

### Shadows
```css
--shadow-elevation-1  /* Sutil */
--shadow-elevation-2  /* Media */
--shadow-elevation-3  /* Pronunciada */
--shadow-elevation-4  /* Muy pronunciada */

--shadow-glow-blue-sm
--shadow-glow-green-md
--shadow-glow-yellow-lg
--shadow-glow-primary-xl
```

---

## Componentes principales

### UI (Atomic)
```tsx
import { Button, Card, Input, Select } from '@/components/ui';
```

### Patterns (Composed)
```tsx
import { 
  DataTableAdvanced, 
  MultiStepWizard,
  OnboardingWizard 
} from '@/components/patterns';
```

### Factoring (Domain)
```tsx
import { 
  FactoringApp,
  FactoringSidebar,
  FactoringHeader,
  RadianAdminDashboard 
} from '@/components/factoring';
```

---

## Providers

```tsx
// Orden correcto de providers en App.tsx
<ThemeProvider>
  <LoadingProvider>
    <TransitionProvider>
      <HelpProvider>
        {/* Tu app aquí */}
      </HelpProvider>
    </TransitionProvider>
  </LoadingProvider>
</ThemeProvider>
```

---

## Hooks útiles

```tsx
import { useLoadingState } from '@/hooks/useLoadingState';
import { usePageTransition } from '@/hooks/usePageTransition';
```

---

## Problemas comunes

### ❌ Estilos no se aplican
```bash
# Verifica que globals.css esté importado
# Verifica en /main.tsx línea 4
```

### ❌ Error de módulo @tailwindcss/postcss
```bash
npm install
```

### ❌ Clases de Tailwind no funcionan
```bash
# Reinicia el servidor
npm run dev
```

### ❌ Modo oscuro no funciona
```tsx
// Verifica que usas el ThemeProvider
// Verifica que .dark se agrega al <html> o <body>
```

---

## Links útiles

- **[LOCAL_DEV.md](./LOCAL_DEV.md)** → Guía completa
- **[SETUP_CHECKLIST.md](./SETUP_CHECKLIST.md)** → Checklist
- **[SETUP_COMPLETE.md](./SETUP_COMPLETE.md)** → Resumen de configuración
- **[Guidelines.md](./guidelines/Guidelines.md)** → Sistema de diseño

---

## Scripts disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run build:lib` | Build de librería npm |
| `npm run typecheck` | Verificar TypeScript |
| `npm run check:setup` | Verificar configuración |
| `npm run check:circular` | Verificar dependencias circulares |
| `npm run validate` | Validación completa |
| `npm run lint` | Ejecutar ESLint |
| `npm run preview` | Preview del build |

---

**¡Desarrollo rápido y eficiente! ⚡**
