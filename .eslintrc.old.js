module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ["import"],
  rules: {
    "import/order": [
      `warn`,
      {
        alphabetize: { order: `asc`, caseInsensitive: true },
        "newlines-between": `never`,
      },
    ],
  },
};
