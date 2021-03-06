module.exports = {
  root: true,
  env: {
    node: true
  },
  plugins: [
    'vuetify'
  ],
  'extends': [
    'plugin:vue/essential',
    '@vue/standard',
    'standard'
  ],
  rules: {
    'vuetify/no-deprecated-classes': 'error',
    'vuetify/grid-unknown-attributes': 'error',
    'vuetify/no-legacy-grid': 'error',
    'indent': 'off',
    'vue/script-indent': ['error', 2, {
      'baseIndent': 1
    }],
    'no-console': 'off',
    'no-debugger': 'off',
    'import/no-webpack-loader-syntax': 'off',
    'vue/attribute-hyphenation': [
      'error',
      'always'
    ],
    'vue/html-end-tags': 'error',
    'vue/html-self-closing': 'error',
    'vue/require-default-prop': 'error',
    'vue/require-prop-types': 'error',
    'vue/attributes-order': 'error',
    'vue/html-quotes': [
      'error',
      'double'
    ],
    'vue/order-in-components': 'error'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
