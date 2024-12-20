import globals from "globals";
import pluginJs from "@eslint/js";
import * as tseslint from "@typescript-eslint/eslint-plugin";

/** @type {import('eslint').Linter.Config} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx}"],
    languageOptions: {
      parser: "@typescript-eslint/parser", 
      parserOptions: {
        ecmaVersion: 2020, 
        sourceType: "module", 
        ecmaFeatures: {
          jsx: true, 
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
