"use strict";

module.exports = {
  env: {
    es6: true,
    browser: true,
  },

  ignorePatterns: [`.pnp.js`, `.yarn`, `lib`, `.vscode`],

  overrides: [
    {
      files: [`./.eslintrc.js`],
      parserOptions: {
        sourceType: `script`,
      },
    },
  ],

  parserOptions: {
    sourceType: `module`,
  },

  plugins: [`import`],

  rules: {
    "import/order": [
      `warn`,
      {
        alphabetize: { order: `asc`, caseInsensitive: true },
        "newlines-between": `never`,
      },
    ],
  },

  settings: {
    "import/resolver": {
      node: {
        extensions: [`.js`, `.jsx`, `.ts`, `.tsx`],
      },
    },
  },
};
