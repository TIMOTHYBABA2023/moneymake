import globals from "globals";
import pluginJs from "@eslint/js";
import * as tseslint from "@typescript-eslint/eslint-plugin";

/** @type {import('eslint').Linter.Config} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx}"],
    languageOptions: {
      parser: "@typescript-eslint/parser", // Set the parser to @typescript-eslint/parser
      parserOptions: {
        ecmaVersion: 2020, // Set ECMAScript version
        sourceType: "module", // Use module type for imports/exports
        ecmaFeatures: {
          jsx: true, // Enable JSX support for TSX
        },
      },
      globals: globals.browser,
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
    },
  },
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "script" },
  },
];
