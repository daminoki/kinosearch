module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'overrides': [
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'indent': ['error', 2],
    'no-multi-spaces': ['error'],
    'react/prop-types': ['off'],
  }
};
