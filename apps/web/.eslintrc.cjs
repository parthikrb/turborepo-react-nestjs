/* globals module */
module.exports = {
  root: true,
  extends: ['@repo/eslint-config/base.js'],
  languageOptions: {
    globals: {
      module: true,
      require: true,
      __dirname: true,
      __filename: true,
      exports: true,
      process: true,
    },
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
};
