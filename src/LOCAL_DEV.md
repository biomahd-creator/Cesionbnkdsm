# Desarrollo Local - CESIONBNK

## Configuración de Tailwind CSS v4

Este proyecto usa **Tailwind CSS v4** con la nueva sintaxis `@theme` en CSS.

### Archivos de configuración

- **`/postcss.config.js`**: Configuración de PostCSS que usa el plugin `@tailwindcss/postcss` (versión 4.0)
- **`/tailwind.config.js`**: Archivo legacy/referencia. **NO es usado por Tailwind v4**. Solo se conserva para compatibilidad de tooling.
- **`/styles/globals.css`**: Contiene todos los tokens del sistema de diseño usando `@theme` y `@theme inline`, ademas de la directiva `@source "../"` que indica a Tailwind v4 donde buscar archivos de contenido.

### Directiva @source (CRITICA para desarrollo local)

El archivo `/styles/globals.css` incluye la directiva:

```css
@import "tailwindcss";
@source "../";
```

Esta directiva `@source "../"` es **esencial** para que Tailwind v4 funcione correctamente en desarrollo local. Sin ella, Tailwind solo escanea archivos dentro de `/styles/` y no genera las clases de utilidad usadas en los componentes `.tsx` del proyecto.

### Tokens del sistema de diseño

Los colores, fuentes, espaciados y demás tokens están definidos en `/styles/globals.css`:

- **Colores primarios**: 
  - Primary: `#00c951` (verde CESIONBNK)
  - Secondary: `#1C2D3A` (azul marino)
  
- **Tipografía**: 
  - Satoshi (exclusiva, cargada desde CDN)
  - Letter-spacing calibrado: `0.025em`
  
- **Border Radius**: `10px` (definido como `--radius: 0.625rem`)

- **Modos**: Light y Dark (toggle con `.dark` class)

### Comandos de desarrollo

```bash
# Instalar dependencias
npm install

# Desarrollo local (Vite dev server)
npm run dev

# Build de producción
npm run build

# Build de librería (para npm)
npm run build:lib

# Validación completa
npm run validate
```

### Dependencias clave

- **@tailwindcss/postcss** (^4.0.0): Plugin de PostCSS para Tailwind v4
- **tailwindcss** (^4.0.0): Core de Tailwind CSS v4
- **tailwindcss-animate** (^1.0.7): Plugin de animaciones (incluido en dependencies)
- **autoprefixer** (^10.4.18): Prefijos CSS automáticos

### Estructura del proyecto

```
/
├── styles/
│   └── globals.css          # Tokens con @theme
├── components/              # Componentes React
├── pages/                   # Páginas de demostración
├── postcss.config.js        # Config de PostCSS
├── tailwind.config.js       # Config de Tailwind (content paths)
└── vite.config.ts           # Config de Vite
```

### Notas importantes

1. **No modificar tokens directamente en tailwind.config.js**: Los tokens están en `/styles/globals.css` usando `@theme`. El archivo `tailwind.config.js` es inerte (legacy) y no es referenciado por Tailwind v4.

2. **Modo oscuro**: Se activa añadiendo la clase `.dark` al elemento `<html>` o `<body>` (gestionado por `ThemeProvider`).

3. **Compatibilidad**: Este proyecto funciona tanto en Figma Make (con procesamiento runtime de Tailwind) como en desarrollo local con Vite.

4. **Publicación npm**: El paquete `@biomahd-creator/financio-design-system` se publica automáticamente via GitHub Actions.

---

**Última actualización**: Febrero 11, 2026 — v6.5.0