module.exports = {
  extends: [
    'plugin:plugin/node/no-deprecated-api',
    'plugin:plugin/node/no-unsupported-features'
  ],
  rules: {
    'arrow-parens': 'error',
    'arrow-body-style': ['error', 'always'],
    'prefer-arrow-callback': 'error',
    'eslint prefer-template': 'error',
    'eslint require-yield': 'error',
    'prefer-const': 'error',
    'no-var': 'error'
  },
  env: {
    es6: true
  }
}
