/*
TODO: Convert to the new eslint config format. This (.eslintrc.*) is deprecated and will not be the default format in v9, and will be removed in v10. eslint >=8.23.0 is 100% compatible with the new format, but many tools are still catching up as of Feb 2024.
*/

/** @type {import("@types/eslint").Linter.Config} */
module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'prettier',
  ],
  ignorePatterns: [
    '**/node_modules/',
    '.git/',
    'dist',
    'coverage',
    '.eslintrc.cjs',
    'eslint.config.js',
    'eslint.config.*.js',
    'pnpm-lock.yaml',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['react-refresh', '@typescript-eslint'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
  },
}
