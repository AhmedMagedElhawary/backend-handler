module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['eslint:all', 'plugin:@typescript-eslint/recommended', 'prettier'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['@typescript-eslint', 'sort-keys-fix', 'prettier'],
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'func-style': 'off',
    'max-params': 'off',
    'no-magic-numbers': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    'one-var': 'off',
    'prettier/prettier': 'error',
    'quote-props': ['error', 'as-needed'],
    quotes: ['error', 'single'],
    'sort-imports': 'off',
    'sort-keys-fix/sort-keys-fix': 'error',
    'sort-vars': 'off',
  },
};
