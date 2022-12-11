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
    'prettier/prettier': 'error',
    'quote-props': ['error', 'as-needed'],
    quotes: ['error', 'single'],
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        memberSyntaxSortOrder: ['all'],
      },
    ],
    'sort-keys-fix/sort-keys-fix': 'warn',
  },
};
