module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true
    },
    extends: [
        'eslint:all',
        'plugin:@typescript-eslint/recommended'
    ],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest'
    },
    plugins: [
        '@typescript-eslint',
        'sort-keys-fix'
    ],
    rules: {
        'quote-props': [
            'error',
            'as-needed'
        ],
        quotes: [
            'error',
            'single'
        ],
        'sort-keys-fix/sort-keys-fix': 'warn'
    }
};
