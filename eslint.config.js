// @ts-check

import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import react from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'

export default tseslint.config(
  {
    // Set global ignore patterns (by specifying without other keys, this pattern is added after the default ignore patterns, so it's not necessary to include the default ignore patterns here, but it's not harmful to do so either.)
    ignores: [
      '**/node_modules/',
      '.git/',
      'dist',
      'coverage',
      '.eslintrc.cjs',
      'eslint.config.js',
      'pnpm-lock.yaml',
    ],
  },
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  // ...react.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      // project: ['./tsconfig.json', './tsconfig.node.json'],
      // tsconfigRootDir: __dirname,
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },

    plugins: {
      'react-hooks': reactHooksPlugin,
    },

    // See https://github.com/facebook/react/issues/28313
    // This is a workaround for the above issue.
    // TODO: Revise this when the issue is resolved according to any updates to the recommended config.
    rules: {
      ...reactHooksPlugin.configs.recommended.rules,
    },
  },
  {
    // config for TSX/JSX source files
    plugins: {
      'react-refresh': reactRefresh,
    },
    rules: {
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
    files: ['**/*.tsx', '**/*.jsx'],
  }
)
