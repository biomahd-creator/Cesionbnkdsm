#!/usr/bin/env node

/**
 * Script de verificación de configuración de Tailwind CSS v4
 * Verifica que todos los archivos y dependencias estén correctamente configurados
 *
 * NOTE: This file uses .cjs extension because the project has "type": "module"
 * in package.json, and this script uses CommonJS require().
 */

const fs = require('fs');
const path = require('path');

console.log('Verificando configuración de Tailwind CSS v4...\n');

let errors = 0;
let warnings = 0;

// Función helper para verificar archivos
function checkFile(filePath, description) {
  const exists = fs.existsSync(filePath);
  if (exists) {
    console.log(`  OK ${description}: ${filePath}`);
    return true;
  } else {
    console.log(`  FAIL ${description} no encontrado: ${filePath}`);
    errors++;
    return false;
  }
}

// Función helper para verificar contenido de archivo
function checkFileContent(filePath, pattern, description) {
  if (!fs.existsSync(filePath)) {
    console.log(`  FAIL ${description}: Archivo no existe ${filePath}`);
    errors++;
    return false;
  }
  
  const content = fs.readFileSync(filePath, 'utf-8');
  const found = pattern.test(content);
  
  if (found) {
    console.log(`  OK ${description}`);
    return true;
  } else {
    console.log(`  FAIL ${description}`);
    errors++;
    return false;
  }
}

// 1. Verificar archivos de configuración
console.log('Archivos de configuración:\n');
checkFile('./postcss.config.cjs', 'PostCSS config');
checkFile('./styles/globals.css', 'Globals CSS');
checkFile('./main.tsx', 'Main entry point');
checkFile('./vite.config.ts', 'Vite config');
console.log('');

// 2. Verificar contenido de PostCSS
console.log('Contenido de PostCSS:\n');
checkFileContent(
  './postcss.config.cjs',
  /@tailwindcss\/postcss/,
  'PostCSS usa @tailwindcss/postcss'
);
console.log('');

// 3. Verificar globals.css
console.log('Contenido de globals.css:\n');
checkFileContent(
  './styles/globals.css',
  /@import\s+["']tailwindcss["']/,
  'globals.css importa tailwindcss'
);
checkFileContent(
  './styles/globals.css',
  /@source\s+["']\.\.\/["']/,
  'globals.css tiene @source "../" para escanear desde la raiz del proyecto'
);
checkFileContent(
  './styles/globals.css',
  /@theme\s*\{/,
  'globals.css usa @theme'
);
checkFileContent(
  './styles/globals.css',
  /--color-primary:\s*var\(--primary\)/,
  'globals.css define color tokens'
);
console.log('');

// 4. Verificar main.tsx
console.log('Contenido de main.tsx:\n');
checkFileContent(
  './main.tsx',
  /import\s+['"]\.\/styles\/globals\.css['"]/,
  'main.tsx importa globals.css'
);
console.log('');

// 5. Verificar package.json
console.log('Dependencias:\n');
if (fs.existsSync('./package.json')) {
  const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));
  
  const requiredDevDeps = {
    '@tailwindcss/postcss': '^4.0.0',
    'tailwindcss': '^4.0.0',
    'postcss': '^8.4.35'
  };
  
  for (const [dep, version] of Object.entries(requiredDevDeps)) {
    if (pkg.devDependencies && pkg.devDependencies[dep]) {
      console.log(`  OK devDependency: ${dep} (${pkg.devDependencies[dep]})`);
    } else {
      console.log(`  FAIL devDependency faltante: ${dep} (requerido: ${version})`);
      errors++;
    }
  }
} else {
  console.log('FAIL package.json no encontrado');
  errors++;
}
console.log('');

// 6. Verificar sideEffects y type en package.json
console.log('Library Config (G1/G3):\n');
if (fs.existsSync('./package.json')) {
  const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));
  
  if (pkg.sideEffects === false) {
    console.log('  OK sideEffects: false (tree-shaking enabled)');
  } else {
    console.log('  WARN sideEffects not set to false');
    warnings++;
  }
  
  if (pkg.type === 'module') {
    console.log('  OK type: module (ESM)');
  } else {
    console.log('  WARN type not set to module');
    warnings++;
  }
  
  if (pkg.exports && pkg.exports['./ui']) {
    console.log('  OK Sub-path exports configured');
  } else {
    console.log('  WARN Sub-path exports missing');
    warnings++;
  }
}
console.log('');

// Resumen final
console.log('===================================');
if (errors === 0 && warnings === 0) {
  console.log('Todo esta correctamente configurado!');
  console.log('');
  console.log('Puedes ejecutar:');
  console.log('  npm install       - Instalar dependencias');
  console.log('  npm run dev       - Iniciar servidor de desarrollo');
  console.log('  npm run build:lib - Build de libreria');
  console.log('  npm test          - Ejecutar tests');
  process.exit(0);
} else {
  console.log(`Encontrados ${errors} errores y ${warnings} advertencias`);
  console.log('');
  console.log('Por favor, revisa los mensajes anteriores y corrige los problemas.');
  process.exit(errors > 0 ? 1 : 0);
}