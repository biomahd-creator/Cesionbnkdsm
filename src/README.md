# Financio Design System

La librería oficial de componentes UI para el ecosistema Financio / Biomahd Creator. Construida con React, TypeScript, Tailwind CSS y Radix UI.

## Instalación

```bash
npm install @biomahd-creator/financio-design-system
```

## Configuración Obligatoria

Para que los estilos funcionen correctamente, necesitas integrar los tokens y estilos base en tu proyecto.

### 1. Importar Estilos Base

En tu archivo de entrada principal (ej: `src/main.tsx` o `src/App.tsx`), importa el CSS:

```tsx
import "@biomahd-creator/financio-design-system/styles.css";
```

### 2. Configurar Tailwind

Edita tu archivo `tailwind.config.js` para usar el preset de la librería. Esto inyectará automáticamente los colores, fuentes y animaciones.

```javascript
// tailwind.config.js
module.exports = {
  presets: [
    require('@biomahd-creator/financio-design-system/tailwind-preset')
  ],
  content: [
    // Asegúrate de incluir el path a node_modules para que Tailwind escanee las clases dentro de la librería
    './node_modules/@biomahd-creator/financio-design-system/dist-lib/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  // ... tu configuración local
}
```

## Uso de Componentes

Ahora puedes usar los componentes directamente:

```tsx
import { Button, Card, useLoading } from "@biomahd-creator/financio-design-system";

function App() {
  const { startLoading } = useLoading();

  return (
    <Card className="p-4">
      <h1 className="text-primary font-bold">Hola Mundo</h1>
      <Button onClick={startLoading}>Click Me</Button>
    </Card>
  );
}
```

## Estructura del Proyecto

- `components/ui`: Componentes atómicos (Botones, Inputs, etc.)
- `components/patterns`: Patrones compuestos complejos (Tablas avanzadas, Wizards)
- `components/advanced`: Componentes de visualización de datos (Gráficos, Tablas Pivote)
- `hooks`: Hooks personalizados reutilizables
- `lib`: Utilidades (cn, formats)

## Desarrollo Local

1. Instalar dependencias: `npm install`
2. Correr Storybook: `npm run storybook`
