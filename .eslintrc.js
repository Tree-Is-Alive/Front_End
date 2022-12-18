module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb', 'plugin:prettier/recommended'],
  'prettier/prettier': [
    'error',
    {
      endOfLine: 'auto',
    },
  ],
};
