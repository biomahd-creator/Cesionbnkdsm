/**
 * ChartStyles - Configuraciones de estilos para gráficos (Recharts)
 * 
 * NOTA: Algunos estilos inline son necesarios para Recharts porque:
 * 1. Los componentes Tooltip y Legend de Recharts solo aceptan objetos de estilo
 * 2. No soportan className para estas props específicas
 * 3. Necesitan CSS-in-JS para funcionar correctamente
 */

// Tooltip styles para Recharts - REQUIERE style inline
export const tooltipStyle = {
  backgroundColor: 'var(--popover)',
  border: '1px solid var(--border)',
  borderRadius: 'var(--radius)',
  padding: '12px',
};

export const tooltipLabelStyle = {
  color: 'var(--popover-foreground)',
  fontWeight: '500',
};

// Tooltip alternativo para modo card
export const tooltipCardStyle = {
  backgroundColor: 'var(--card)',
  border: '1px solid var(--border)',
  borderRadius: '8px',
  padding: '12px',
};

// Colores predefinidos para gráficos
export const chartColors = {
  primary: 'var(--primary)',
  secondary: 'var(--secondary)',
  success: 'var(--success)',
  warning: 'var(--warning)',
  destructive: 'var(--destructive)',
  info: 'var(--info)',
  muted: 'var(--muted)',
};

// Configuración de alturas mínimas para contenedores de gráficos
export const containerMinHeight = { minHeight: '300px' };
export const containerMinHeightSmall = { minHeight: '250px' };
export const containerMinHeightLarge = { minHeight: '400px' };
