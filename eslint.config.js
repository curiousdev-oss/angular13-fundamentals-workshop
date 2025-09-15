import perfPlugin from '@curiousdev-oss/eslint-plugin-web-perf';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import angulareslint from '@angular-eslint/eslint-plugin';
import angularTemplate from '@angular-eslint/template/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  // Ignore patterns
  {
    ignores: [
      'projects/**/*',
      'dist/**/*',
      'node_modules/**/*'
    ]
  },
  
  // Base JavaScript config
  js.configs.recommended,
  
  // TypeScript files configuration
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        project: './tsconfig.json'
      },
      globals: {
        browser: true,
        node: true,
        es2021: true
      }
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      '@angular-eslint': angulareslint,
      '@curiousdev-oss/perf': perfPlugin
    },
    rules: {
      // TypeScript recommended rules
      ...tseslint.configs.recommended.rules,
      
      // Angular specific rules
      '@angular-eslint/directive-selector': ['error', {
        type: 'attribute',
        prefix: 'app',
        style: 'camelCase'
      }],
      '@angular-eslint/component-selector': ['error', {
        type: 'element',
        prefix: 'app',
        style: 'kebab-case'
      }],
      
      // Performance rules from web-perf-toolkit plugin
      '@curiousdev-oss/perf/angular-onpush-change-detection': 'warn',
      '@curiousdev-oss/perf/angular-require-trackby': 'warn',
      '@curiousdev-oss/perf/angular-prefer-async-pipe': 'warn',
      '@curiousdev-oss/perf/angular-img-ngoptimizedimage': 'warn',
      '@curiousdev-oss/perf/img-requires-dimensions': 'warn',
      '@curiousdev-oss/perf/no-heavy-namespace-imports': 'warn',
      '@curiousdev-oss/perf/prefer-lazy-loading': 'warn',
      '@curiousdev-oss/perf/no-memory-leaks': 'warn',
      '@curiousdev-oss/perf/prefer-modern-apis': 'warn',
      '@curiousdev-oss/perf/no-blocking-apis': 'warn'
    }
  },
  
  // Use the Angular configuration from perfPlugin
  ...perfPlugin.configs.angular,
  
  // HTML template files configuration
  {
    files: ['**/*.html'],
    plugins: {
      '@angular-eslint/template': angularTemplate
    },
    rules: {
      // Angular template recommended rules
      '@angular-eslint/template/banana-in-box': 'error',
      '@angular-eslint/template/no-negated-async': 'error'
    }
  }
];
