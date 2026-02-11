# Guía de Solución de Problemas - Servidor de Desarrollo

## ✅ Archivos Creados/Configurados

Se han creado/modificado los siguientes archivos para resolver el error ERR_CONNECTION_REFUSED:

1. **`/index.html`** - Archivo HTML de entrada con el div#root y script de bootstrap
2. **`/main.tsx`** - Punto de entrada React con createRoot (importa únicamente `/styles/globals.css` con Tailwind v4)
3. **`/styles/globals.css`** - ÚNICO archivo de estilos con Tailwind v4 `@theme` + custom properties CESIONBNK
4. **`/tailwind.config.js`** - Configuración de Tailwind CSS v4
5. **`/postcss.config.js`** - Configuración de PostCSS

### ⚠️ Archivos Eliminados (Conflicto Resuelto)

- **`/index.css`** ❌ - Eliminado el 11 de febrero, 2026
  - Razón: Era una versión compilada de Tailwind v3 que causaba redundancia y colisiones con `/styles/globals.css`
  - Solución: Mantener únicamente `/styles/globals.css` con sintaxis `@theme` de Tailwind v4 para consistencia entre Figma Make y GitHub

## 🚀 Pasos para Iniciar el Servidor

```bash
# 1. Instalar/Actualizar dependencias (IMPORTANTE - ejecutar primero)
npm install

# 2. Iniciar el servidor de desarrollo
npm run dev
```

El servidor debería arrancar en `http://localhost:5173`

## 🔍 Verificaciones

### Si el servidor no arranca:

1. **Verificar que las dependencias se instalaron correctamente**:
   ```bash
   npm ls react react-dom vite
   ```
   Debe mostrar react@18.2.x, react-dom@18.2.x y vite@6.4.x

2. **Limpiar caché y reinstalar** (si hay problemas persistentes):
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Verificar el puerto**:
   Si el puerto 5173 está ocupado, Vite intentará usar el siguiente disponible (5174, 5175, etc.)
   Revisa la salida de la consola para ver el puerto real asignado.

4. **Revisar logs de error**:
   Si hay errores de TypeScript o módulos faltantes, la consola mostrará los detalles específicos.

## 📋 Archivos Clave del Servidor

```
/
├── index.html          # Punto de entrada HTML
├── main.tsx           # Bootstrap React (createRoot)
├── App.tsx            # Componente principal
├── vite.config.ts     # Configuración Vite desarrollo
├── tailwind.config.js # Configuración Tailwind
├── postcss.config.js  # Configuración PostCSS
└── package.json       # Dependencias actualizadas
```

## 🎯 Características del Servidor de Desarrollo

- **Hot Module Replacement (HMR)**: Los cambios en código se reflejan automáticamente sin recargar
- **Fast Refresh**: React Fast Refresh habilitado para preservar el estado del componente
- **Puerto por defecto**: 5173
- **Host**: localhost (127.0.0.1)

## ⚠️ Notas Importantes

1. **React/React-DOM**: Ahora están en `devDependencies` además de `peerDependencies`
   - Esto permite el desarrollo local sin problemas
   - Los consumidores de la librería npm seguirán usando sus propias versiones (peer deps)

2. **Archivo `main.ts` eliminado**: Era un archivo de configuración de Storybook mal ubicado
   - Storybook está actualmente desactivado según Guidelines.md
   - Si se reactiva Storybook en el futuro, su configuración debería ir en `.storybook/main.ts`

3. **Modo de la aplicación**: Por defecto arranca en modo "factoring" 
   - Se puede cambiar al modo "dsm" (Design System Manager) desde la UI
   - El estado se persiste en localStorage

## 🐛 Errores Comunes

### "Cannot find module 'react'"
**Solución**: Ejecutar `npm install` para instalar react y react-dom

### "Failed to resolve entry point"  
**Solución**: Verificar que `/index.html` y `/main.tsx` existen

### "Tailwind styles not loading"
**Solución**: Verificar que `styles/globals.css` está importado en algún componente y que postcss.config.js existe

### Puerto ocupado (EADDRINUSE)
**Solución**: Vite asignará automáticamente el siguiente puerto disponible. Revisar la consola para ver el puerto asignado.

---

**Última actualización**: 11 de febrero, 2026