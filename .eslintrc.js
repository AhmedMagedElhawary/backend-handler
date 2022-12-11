module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": [
        "eslint:all", // recommended
        "plugin:@typescript-eslint/recommended",
    ],
    "overrides": [],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "plugins": [
        "@typescript-eslint",
        "sort-keys-fix"
    ],
    "rules": {
        "quotes": [2, "single"],
        "quote-props": [2, "as-needed"],
        "sort-keys-fix/sort-keys-fix": "warn",
    }
};
