const perfPlugin = require('@curiousdev-oss/eslint-plugin-web-perf');

module.exports = {
  root: true,
  ignorePatterns: [
    "projects/**/*"
  ],
  overrides: [
    {
      files: [
        "*.ts"
      ],
      parserOptions: {
        project: [
          "tsconfig.json"
        ],
        createDefaultProgram: true
      },
      extends: [
        "@angular-eslint/recommended",
        "@angular-eslint/template/process-inline-templates"
      ],
      rules: {}
    },
    {
      files: [
        "*.html"
      ],
      extends: [
        "@angular-eslint/template/recommended"
      ],
      rules: {}
    }
  ],
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    '@typescript-eslint',
    '@curiousdev-oss/perf'
  ],
  extends: [
    ...perfPlugin.configs.angular,  // Use Angular-specific configuration
    'eslint:recommended',
    '@typescript-eslint/recommended'
  ],
  rules: {
    // Enable specific performance rules for testing
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
};
