/* eslint-env node */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    'no-plusplus': [
      'error',
      {
        // well known and common pattern which will guarantee that there won't be any misuses by design
        allowForLoopAfterthoughts: true,
      },
    ],
  },
};
