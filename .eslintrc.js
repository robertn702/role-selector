module.exports = {
  'parser': 'babel-eslint',
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  'settings': {
    'react': {
      'pragma': 'React',
      'version': '16.2',
    },
  },
  'env': {
    'browser': true,
    'es6': true,
    'jest': true,
    'node': true,
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
      'modules': true,
    },
  },
  rules: {
    'no-console': 0,
    'comma-dangle': ['error', 'only-multiline'],
  },
};
