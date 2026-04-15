import globals from 'globals';
import js from '@eslint/js';

export default [
  {
    ignores: ['coverage/**', 'node_modules/**']
  },
  js.configs.recommended,
  {
    files: ['tests/**/*.js', 'playwright/**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest
      }
    },
    rules: {
      'max-len': ['error', { code: 120 }]
    }
  }
];