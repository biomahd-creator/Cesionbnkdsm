/**
 * Components - Central Barrel Export
 *
 * Uses sub-barrel re-exports to prevent drift between
 * individual listings and the actual index files in each layer.
 *
 * NOTA: /factoring/ and /pages/ are NOT exported here.
 * Factoring is app-specific business logic (excluded from DS).
 * Pages are showcase/demo views (excluded from DS).
 */

// UI Components (Atoms & Molecules)
export * from "./ui";

// Patterns (Generic Organisms without business logic)
export * from "./patterns";

// Advanced Components (Charts, Tables, Editors, etc.)
export * from "./advanced";

// Widgets (Composed Functional Blocks)
export * from "./widgets";

// Providers (All context providers — infrastructure + feature)
export * from "./providers";
