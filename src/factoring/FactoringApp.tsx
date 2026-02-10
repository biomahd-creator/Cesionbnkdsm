// ═══════════════════════════════════════════════════════════════════
// Causa 13: FactoringApp se movió a /components/factoring/FactoringApp.tsx
// para que FGCmp2 pueda instrumentar el archivo dentro del árbol
// /components/ (donde instrumenta todos los archivos .tsx).
//
// Este archivo es un re-export para mantener compatibilidad con
// imports existentes desde /factoring/index.ts y otros módulos.
// ═══════════════════════════════════════════════════════════════════
export { FactoringApp } from "../components/factoring/FactoringApp";
