/**
 * THEME UTILITIES - Sistema Global de Colores Dinámicos
 * 
 * Este archivo contiene utilidades centralizadas para obtener colores
 * del Theme Customizer. Todos los componentes deben importar estas
 * funciones en lugar de crear sus propias implementaciones.
 * 
 * USO:
 * import { getThemeColor, getChartColors } from '@/lib/theme-utils';
 * 
 * const primaryColor = getThemeColor('--primary');
 * const chartColors = getChartColors();
 */

/**
 * Obtiene el valor de una variable CSS del tema actual
 * @param variable - Nombre de la variable CSS (ej: '--primary', '--chart-1')
 * @returns String con el valor en formato correcto (hsl, hex, rgb)
 */
export function getThemeColor(variable: string): string {
  if (typeof window === 'undefined') {
    return '#000000'; // Fallback para SSR
  }

  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(variable)
    .trim();

  // Si no hay valor, retornar fallback
  if (!value) return '#000000';

  // Si ya tiene formato de función CSS (hsl, rgb, etc), retornar tal cual
  if (value.includes('(')) return value;

  // Si son valores numéricos HSL (ej: "76 96% 62%"), envolver en hsl()
  if (value.includes('%') || value.match(/^\d+\s+\d+%\s+\d+%/)) {
    return `hsl(${value})`;
  }

  // Si es hexadecimal o cualquier otro formato, retornar tal cual
  return value;
}

/**
 * Obtiene todos los colores de marca principales del tema
 * @returns Objeto con los colores principales del tema
 */
export function getBrandColors() {
  return {
    primary: getThemeColor('--primary'),
    secondary: getThemeColor('--secondary'),
    destructive: getThemeColor('--destructive'),
    warning: getThemeColor('--warning'),
    success: getThemeColor('--success'),
    info: getThemeColor('--info'),
    accent: getThemeColor('--accent'),
  };
}

/**
 * Obtiene todos los colores para gráficos (Recharts)
 * @returns Array con los 5 colores de charts
 */
export function getChartColors(): string[] {
  return [
    getThemeColor('--chart-1'),
    getThemeColor('--chart-2'),
    getThemeColor('--chart-3'),
    getThemeColor('--chart-4'),
    getThemeColor('--chart-5'),
  ];
}

/**
 * Obtiene un objeto con todos los colores de charts indexados
 * @returns Objeto con chart1-chart5
 */
export function getChartColorsMap() {
  return {
    chart1: getThemeColor('--chart-1'),
    chart2: getThemeColor('--chart-2'),
    chart3: getThemeColor('--chart-3'),
    chart4: getThemeColor('--chart-4'),
    chart5: getThemeColor('--chart-5'),
  };
}

/**
 * Obtiene colores de UI (texto, bordes, fondos)
 * @returns Objeto con colores de UI comunes
 */
export function getUIColors() {
  return {
    foreground: getThemeColor('--foreground'),
    background: getThemeColor('--background'),
    muted: getThemeColor('--muted'),
    mutedForeground: getThemeColor('--muted-foreground'),
    border: getThemeColor('--border'),
    input: getThemeColor('--input'),
    ring: getThemeColor('--ring'),
  };
}

/**
 * Obtiene colores de links y navegación
 * @returns Objeto con colores de links
 */
export function getLinkColors() {
  return {
    link: getThemeColor('--link-color'),
    linkHover: getThemeColor('--link-hover'),
    linkVisited: getThemeColor('--link-visited'),
  };
}

/**
 * Obtiene todos los colores del tema en un solo objeto
 * Útil para pasar todos los colores de una vez a un componente
 * @returns Objeto completo con todos los colores del tema
 */
export function getAllThemeColors() {
  return {
    ...getBrandColors(),
    ...getChartColorsMap(),
    ...getUIColors(),
    ...getLinkColors(),
    focusRing: getThemeColor('--focus-ring'),
    selection: getThemeColor('--selection'),
  };
}

/**
 * Hook personalizado para usar colores del tema en componentes React
 * Útil si necesitas que el componente se re-renderice cuando cambie el tema
 */
export function useThemeColors() {
  // Por ahora retorna los colores directamente
  // En el futuro se puede extender con un listener de cambios
  return getAllThemeColors();
}
