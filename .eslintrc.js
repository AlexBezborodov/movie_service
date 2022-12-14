module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:jest/recommended",
  ],
  env: {
    browser: true,
    node: true,
    "jest/globals": true,
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      tsx: true,
      modules: true,
    },
    ecmaVersion: 6,
    sourceType: "module",
  },
  plugins: ["react", "jest", "testing-library", "react-hooks", "import"],
  rules: {
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "react/jsx-curly-brace-presence": "error",
    "react/sort-comp": "error",
    "react/sort-prop-types": "off",
    "react/jsx-sort-props": "off",
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
    "react/no-unescaped-entities": "off",
    "no-extra-boolean-cast": "off",
    "sort-keys": ["off", "asc", { natural: true }],
    "sort-imports": "off",
    "sort-vars": "warn",
    "jest/valid-expect": "off",
    "no-console": "off",
    "no-unused-vars": "off",
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal"],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
          {
            pattern: "src/**",
            group: "internal",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
  settings: {
    react: {
      version: "18.2.0",
    },
  },
};
