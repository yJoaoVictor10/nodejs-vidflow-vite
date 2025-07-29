// eslint.config.js
export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        document: 'readonly',
        console: 'readonly',
        fetch: 'readonly'
      }
    },
    rules: {
      // Removidas as regras de aspas e ponto e vírgula
      'no-undef': 'error'
    },
  },
];
