#!/usr/bin/env node

/**
 * Script de verificación de configuración de Tailwind CSS v4
 * Verifica que todos los archivos y dependencias estén correctamente configurados
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Verificando configuración de Tailwind CSS v4...\n');

let errors = 0;
let warnings = 0;

// Función helper para verificar archivos
function checkFile(filePath, description) {
  const exists = fs.existsSync(filePath);
  if (exists) {
    console.log(`✅ ${description}: ${filePath}`);
    return true;
  } else {
    console.log(`❌ ${description} no encontrado: ${filePath}`);
    errors++;
    return false;
  }
}

// Función helper para verificar contenido de archivo
function checkFileContent(filePath, pattern, description) {
  if (!fs.existsSync(filePath)) {
    console.log(`❌ ${description}: Archivo no existe ${filePath}`);
    errors++;
    return false;
  }
  
  const content = fs.readFileSync(filePath, 'utf-8');
  const found = pattern.test(content);
  
  if (found) {
    console.log(`✅ ${description}`);
    return true;
  } else {
    console.log(`❌ ${description}`);
    errors++;
    return false;
  }
}

// 1. Verificar archivos de configuración
console.log('📦 Archivos de configuración:\n');
checkFile('./postcss.config.js', 'PostCSS config');
checkFile('./tailwind.config.js', 'Tailwind config');
checkFile('./styles/globals.css', 'Globals CSS');
checkFile('./main.tsx', 'Main entry point');
checkFile('./vite.config.ts', 'Vite config');
console.log('');

// 2. Verificar contenido de PostCSS
console.log('🔧 Contenido de PostCSS:\n');
checkFileContent(
  './postcss.config.js',
  /@tailwindcss\/postcss/,
  'PostCSS usa @tailwindcss/postcss'
);
console.log('');

// 3. Verificar contenido de Tailwind config
console.log('🎨 Contenido de Tailwind config:\n');
checkFileContent(
  './tailwind.config.js',
  /content:/,
  'Tailwind config tiene content paths'
);
console.log('');

// 4. Verificar globals.css
console.log('🎭 Contenido de globals.css:\n');
checkFileContent(
  './styles/globals.css',
  /@import\s+["']tailwindcss["']/,
  'globals.css importa tailwindcss'
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

// 5. Verificar main.tsx
console.log('⚛️  Contenido de main.tsx:\n');
checkFileContent(
  './main.tsx',
  /import\s+['"]\.\/styles\/globals\.css['"]/,
  'main.tsx importa globals.css'
);
console.log('');

// 6. Verificar package.json
console.log('📦 Dependencias:\n');
if (fs.existsSync('./package.json')) {
  const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));
  
  // Verificar dependencias principales
  const requiredDevDeps = {
    '@tailwindcss/postcss': '^4.0.0',
    'tailwindcss': '^4.0.0',
    'autoprefixer': '^10.4.18',
    'postcss': '^8.4.35'
  };
  
  const requiredDeps = {
    'tailwindcss-animate': '^1.0.7'
  };
  
  // Verificar devDependencies
  for (const [dep, version] of Object.entries(requiredDevDeps)) {
    if (pkg.devDependencies && pkg.devDependencies[dep]) {
      console.log(`✅ devDependency: ${dep} (${pkg.devDependencies[dep]})`);
    } else {
      console.log(`❌ devDependency faltante: ${dep} (requerido: ${version})`);
      errors++;
    }
  }
  
  // Verificar dependencies
  for (const [dep, version] of Object.entries(requiredDeps)) {
    if (pkg.dependencies && pkg.dependencies[dep]) {
      console.log(`✅ dependency: ${dep} (${pkg.dependencies[dep]})`);
    } else {
      console.log(`❌ dependency faltante: ${dep} (requerido: ${version})`);
      errors++;
    }
  }
} else {
  console.log('❌ package.json no encontrado');
  errors++;
}
console.log('');

// 7. Verificar archivos duplicados
console.log('🔍 Verificando archivos duplicados:\n');
const duplicates = [
  './postcss.config.cjs',
  './tailwind.config.cjs'
];

let hasDuplicates = false;
duplicates.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`⚠️  Archivo duplicado encontrado (debería ser eliminado): ${file}`);
    warnings++;
    hasDuplicates = true;
  }
});

if (!hasDuplicates) {
  console.log('✅ No hay archivos duplicados');
}
console.log('');

// Resumen final
console.log('═══════════════════════════════════════════════════════════');
if (errors === 0 && warnings === 0) {
  console.log('✨ ¡Todo está correctamente configurado! ✨');
  console.log('');
  console.log('Puedes ejecutar:');
  console.log('  npm install    - Instalar dependencias');
  console.log('  npm run dev    - Iniciar servidor de desarrollo');
  console.log('  npm run build  - Build de producción');
  process.exit(0);
} else {
  console.log(`❌ Encontrados ${errors} errores y ${warnings} advertencias`);
  console.log('');
  console.log('Por favor, revisa los mensajes anteriores y corrige los problemas.');
  console.log('Consulta LOCAL_DEV.md para más información.');
  process.exit(1);
}
