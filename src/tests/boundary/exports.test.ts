/**
 * Library Boundary Tests (G1)
 *
 * Validates that the library barrel exports don't leak app-only code.
 * This is a compile-time safety net for the boundary check script.
 *
 * @version 0.1.0
 */

import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

const ROOT = path.resolve(__dirname, '../..');

describe('Library Boundary (G1)', () => {
  describe('index.ts (root barrel)', () => {
    const content = fs.readFileSync(path.join(ROOT, 'index.ts'), 'utf-8');

    it('does NOT import from /components/factoring/', () => {
      expect(content).not.toMatch(/from\s+['"].*factoring/i);
    });

    it('does NOT import from /pages/', () => {
      expect(content).not.toMatch(/from\s+['"].*pages/i);
    });

    it('does NOT import App.tsx', () => {
      expect(content).not.toMatch(/from\s+['"].*App['"]/i);
    });

    it('does NOT import main.tsx', () => {
      expect(content).not.toMatch(/from\s+['"].*main['"]/i);
    });

    it('does NOT import PageRenderer', () => {
      expect(content).not.toMatch(/PageRenderer/);
    });

    it('does NOT import SidebarNew', () => {
      expect(content).not.toMatch(/SidebarNew/);
    });
  });

  describe('components/index.ts (component barrel)', () => {
    const content = fs.readFileSync(
      path.join(ROOT, 'components', 'index.ts'),
      'utf-8'
    );

    it('does NOT export from /factoring/', () => {
      expect(content).not.toMatch(/from\s+['"].*factoring/i);
    });

    it('does NOT export PageRenderer', () => {
      expect(content).not.toMatch(/PageRenderer/);
    });

    it('does NOT export SidebarNew', () => {
      expect(content).not.toMatch(/SidebarNew/);
    });

    it('exports from ./ui', () => {
      expect(content).toMatch(/from\s+['"]\.\/ui['"]/);
    });

    it('exports from ./patterns', () => {
      expect(content).toMatch(/from\s+['"]\.\/patterns['"]/);
    });

    it('exports from ./advanced', () => {
      expect(content).toMatch(/from\s+['"]\.\/advanced['"]/);
    });

    it('exports from ./widgets', () => {
      expect(content).toMatch(/from\s+['"]\.\/widgets['"]/);
    });

    it('exports from ./providers', () => {
      expect(content).toMatch(/from\s+['"]\.\/providers['"]/);
    });
  });

  describe('package.json exports field', () => {
    const pkg = JSON.parse(
      fs.readFileSync(path.join(ROOT, 'package.json'), 'utf-8')
    );

    it('has sideEffects: false for tree-shaking', () => {
      expect(pkg.sideEffects).toBe(false);
    });

    it('has type: module for ESM', () => {
      expect(pkg.type).toBe('module');
    });

    it('has sub-path exports for each layer', () => {
      expect(pkg.exports['.']).toBeDefined();
      expect(pkg.exports['./ui']).toBeDefined();
      expect(pkg.exports['./patterns']).toBeDefined();
      expect(pkg.exports['./advanced']).toBeDefined();
      expect(pkg.exports['./widgets']).toBeDefined();
      expect(pkg.exports['./providers']).toBeDefined();
      expect(pkg.exports['./hooks']).toBeDefined();
      expect(pkg.exports['./lib']).toBeDefined();
    });

    it('exports theme.css', () => {
      expect(pkg.exports['./theme.css']).toBeDefined();
    });

    it('has typesVersions for TypeScript resolution', () => {
      expect(pkg.typesVersions).toBeDefined();
      expect(pkg.typesVersions['*']).toBeDefined();
      expect(pkg.typesVersions['*']['ui']).toBeDefined();
    });

    it('does NOT include app-only files in "files" field', () => {
      const files = pkg.files;
      expect(files).not.toContain('pages');
      expect(files).not.toContain('App.tsx');
      expect(files).not.toContain('main.tsx');
    });
  });
});
