module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['react-app', 'eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'linebreak-style': ['error', 'unix'],
    'no-debugger': 'warn',
    'no-unused-vars': 'warn',
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
  },
};
