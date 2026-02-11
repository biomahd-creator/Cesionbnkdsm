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

### Requisitos Previos
- Node.js 18+ 
- npm 8+

### Instalación e Inicio

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Iniciar servidor de desarrollo**:
   ```bash
   npm run dev
   ```
   El servidor arrancará en `http://localhost:5173` (por defecto)

3. **Build para producción**:
   ```bash
   npm run build:lib
   ```

4. **Ejecutar validaciones (TypeScript + Build + Circular Dependencies)**:
   ```bash
   npm run validate
   ```

### Estructura de Archivos del Servidor Dev

El proyecto requiere los siguientes archivos para funcionar en desarrollo:
- `/index.html` - Punto de entrada HTML
- `/main.tsx` - Punto de entrada React (bootstrap con createRoot)
- `/App.tsx` - Componente principal con providers
- `/vite.config.ts` - Configuración de Vite para desarrollo
- `/tailwind.config.js` - Configuración de Tailwind CSS
- `/postcss.config.js` - Configuración de PostCSS

## Dependencias y Seguridad

### Vulnerabilidades Conocidas

**xlsx (dependencia transitiva de recharts)**

- **Estado**: Vulnerabilidad sin fix automático disponible
- **Impacto**: Bajo - Solo se usa en exportación de datos con importación dinámica
- **Ubicación**: `components/advanced/ExportData.tsx`
- **Contexto**: La biblioteca solo genera archivos Excel desde datos internos del cliente; no procesa archivos externos potencialmente maliciosos
- **Riesgo**: Minimal en el contexto actual ya que:
  - Se usa con importación dinámica (no afecta el bundle principal)
  - Solo genera archivos, no parsea archivos de origen desconocido
  - Se ejecuta únicamente cuando el usuario solicita exportar datos
- **Alternativas evaluadas**: exceljs requiere refactorización significativa sin beneficio claro de seguridad en este contexto de uso

**Nota**: Monitoreamos activamente actualizaciones de seguridad. Si tu aplicación necesita procesar archivos Excel de fuentes externas, considera implementar validación adicional o usar alternativas como `exceljs`.

### Actualización de Dependencias

Para actualizar dependencias y verificar vulnerabilidades:

```bash
npm audit
npm update
npm audit fix
```

Para dependencias con vulnerabilidades sin solución automática, evaluar manualmente el contexto de uso antes de aplicar correcciones manuales.