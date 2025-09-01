// scripts/build-tokens.mjs
import fs from "node:fs";
import path from "node:path";

// HEX 색상을 RGB 값으로 변환하는 함수
function hexToRgb(hex) {
  if (!hex || typeof hex !== 'string' || !hex.startsWith('#')) {
    return hex;
  }
  
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return hex;
  
  const r = parseInt(result[1], 16);
  const g = parseInt(result[2], 16);
  const b = parseInt(result[3], 16);
  
  return `${r} ${g} ${b}`;
}

const THEMES_DIR = "themes";
const OUT = "src/app/theme.css";

// 토큰 참조를 CSS 변수로 변환하는 헬퍼 함수
function resolveTokenReference(value) {
  if (typeof value !== 'string' || !value.includes('{')) {
    return value;
  }
  
  // {primitives.colors.gray.50} -> var(--color-gray-50)
  if (value.includes('primitives.colors.')) {
    const colorPath = value.replace(/\{primitives\.colors\.|}/g, '').replace(/\./g, '-');
    return `var(--color-${colorPath})`;
  }
  
  // {primitives.radii.sm} -> var(--radius-sm)
  if (value.includes('primitives.radii.')) {
    const radiusPath = value.replace(/\{primitives\.radii\.|}/g, '');
    return `var(--radius-${radiusPath})`;
  }
  
  // {primitives.shadows.md} -> var(--shadow-md)
  if (value.includes('primitives.shadows.')) {
    const shadowPath = value.replace(/\{primitives\.shadows\.|}/g, '');
    return `var(--shadow-${shadowPath})`;
  }
  
  // {primitives.font.sizes.base} -> var(--font-size-base)
  if (value.includes('primitives.font.sizes.')) {
    const sizePath = value.replace(/\{primitives\.font\.sizes\.|}/g, '');
    return `var(--font-size-${sizePath})`;
  }
  
  // {primitives.font.weights.bold} -> var(--font-weight-bold)
  if (value.includes('primitives.font.weights.')) {
    const weightPath = value.replace(/\{primitives\.font\.weights\.|}/g, '');
    return `var(--font-weight-${weightPath})`;
  }
  
  // {primitives.font.families.body} -> var(--font-family-body)
  if (value.includes('primitives.font.families.')) {
    const familyPath = value.replace(/\{primitives\.font\.families\.|}/g, '');
    return `var(--font-family-${familyPath})`;
  }
  
  // {semantic.bg.base} -> var(--bg-base)
  if (value.includes('semantic.')) {
    const semanticPath = value.replace(/\{semantic\.|}/g, '').replace(/\./g, '-');
    return `var(--${semanticPath})`;
  }
  
  // Fallback: return as-is
  return value;
}

// 새로운 완전한 디자인 시스템 JSON을 CSS 변수로 변환하는 함수
function extractCSSVariables(themeData, prefix = '') {
  const variables = {};
  
  if (themeData.primitives) {
    // Colors - RGB 형태로 변환
    if (themeData.primitives.colors) {
      Object.entries(themeData.primitives.colors).forEach(([key, value]) => {
        if (typeof value === 'string') {
          variables[`${prefix}color-${key}`] = hexToRgb(value);
        } else if (typeof value === 'object') {
          Object.entries(value).forEach(([subKey, subValue]) => {
            variables[`${prefix}color-${key}-${subKey}`] = hexToRgb(subValue);
          });
        }
      });
    }
    
    // Spacing
    if (themeData.primitives.spacing) {
      Object.entries(themeData.primitives.spacing).forEach(([key, value]) => {
        variables[`${prefix}spacing-${key}`] = value;
      });
    }
    
    // Font sizes
    if (themeData.primitives.font?.sizes) {
      Object.entries(themeData.primitives.font.sizes).forEach(([key, value]) => {
        variables[`${prefix}font-size-${key}`] = value;
      });
    }
    
    // Font weights
    if (themeData.primitives.font?.weights) {
      Object.entries(themeData.primitives.font.weights).forEach(([key, value]) => {
        variables[`${prefix}font-weight-${key}`] = value;
      });
    }
    
    // Font families
    if (themeData.primitives.font?.families) {
      Object.entries(themeData.primitives.font.families).forEach(([key, value]) => {
        variables[`${prefix}font-family-${key}`] = value;
      });
    }
    
    // Line heights
    if (themeData.primitives.font?.lineHeights) {
      Object.entries(themeData.primitives.font.lineHeights).forEach(([key, value]) => {
        variables[`${prefix}line-height-${key}`] = value;
      });
    }
    
    // Radii
    if (themeData.primitives.radii) {
      Object.entries(themeData.primitives.radii).forEach(([key, value]) => {
        variables[`${prefix}radius-${key}`] = value;
      });
    }
    
    // Shadows
    if (themeData.primitives.shadows) {
      Object.entries(themeData.primitives.shadows).forEach(([key, value]) => {
        variables[`${prefix}shadow-${key}`] = value;
      });
    }
  }
  
  // Semantic tokens
  if (themeData.semantic) {
    function processSemanticGroup(group, groupName) {
      if (!group) return;
      Object.entries(group).forEach(([key, value]) => {
        variables[`${prefix}${groupName}-${key}`] = resolveTokenReference(value);
      });
    }
    
    processSemanticGroup(themeData.semantic.bg, 'bg');
    processSemanticGroup(themeData.semantic.fg, 'fg');
    processSemanticGroup(themeData.semantic.border, 'border');
    processSemanticGroup(themeData.semantic.primary, 'primary');
    processSemanticGroup(themeData.semantic.success, 'success');
    processSemanticGroup(themeData.semantic.warning, 'warning');
    processSemanticGroup(themeData.semantic.danger, 'danger');
    processSemanticGroup(themeData.semantic.elevation, 'elevation');
  }
  
  // Components
  if (themeData.components) {
    function processComponent(component, componentName) {
      if (!component) return;
      Object.entries(component).forEach(([key, value]) => {
        if (key === 'font' && typeof value === 'object') {
          // Handle nested font properties
          Object.entries(value).forEach(([fontKey, fontValue]) => {
            variables[`${prefix}${componentName}-font-${fontKey}`] = resolveTokenReference(fontValue);
          });
        } else if (key === 'variants') {
          // Skip variants for now - they're complex nested structures
          return;
        } else if (typeof value === 'object') {
          // Skip complex objects for now (like badge sizes with multiple values)
          return;
        } else {
          variables[`${prefix}${componentName}-${key}`] = resolveTokenReference(value);
        }
      });
    }
    
    processComponent(themeData.components.button, 'button');
    processComponent(themeData.components.input, 'input');
    processComponent(themeData.components.card, 'card');
    processComponent(themeData.components.tooltip, 'tooltip');
    processComponent(themeData.components.badge, 'badge');
  }
  
  return variables;
}

// 레거시 단순 테마 지원 함수
function extractLegacyVariables(themeData, prefix = '') {
  const variables = {};
  const toTriplet = (arr) => Array.isArray(arr) ? `${arr[0]} ${arr[1]} ${arr[2]}` : arr;
  
  if (themeData.colors) {
    Object.entries(themeData.colors).forEach(([key, value]) => {
      variables[`${prefix}${key}`] = toTriplet(value);
    });
  }
  
  if (themeData.radius) {
    Object.entries(themeData.radius).forEach(([key, value]) => {
      variables[`${prefix}radius-${key}`] = value;
    });
  }
  
  return variables;
}

const files = fs.readdirSync(THEMES_DIR).filter(f => f.endsWith(".json"));
let css = `/* auto-generated: do not edit */\n`;

for (const file of files) {
  const json = JSON.parse(fs.readFileSync(path.join(THEMES_DIR, file), "utf8"));
  const themeName = json.name || path.basename(file, ".json");
  
  css += `\n[data-theme="${themeName}"]{\n`;
  
  let variables = {};
  
  // 새로운 완전한 디자인 시스템인지 체크
  if (json.primitives && json.semantic && json.components) {
    variables = extractCSSVariables(json);
  } else {
    // 레거시 단순 테마 형식
    variables = extractLegacyVariables(json);
  }
  
  // CSS 변수들을 정렬해서 출력
  Object.entries(variables)
    .sort(([a], [b]) => a.localeCompare(b))
    .forEach(([key, value]) => {
      css += `  --${key}: ${value};\n`;
    });
  
  css += `}\n`;
}

fs.writeFileSync(OUT, css);
console.log(`✓ wrote ${OUT} with ${files.length} themes`);