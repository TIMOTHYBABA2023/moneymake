export default {
  languageOptions: {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: './tsconfig.json',
    },
  },
  ignores: ['node_modules/', 'build/', 'dist/'],
  rules: {
  },
};