module.exports = {
  root: true,
  lintOnSave: false,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-unused-components': 'off',
    'indent': 'off',
    'vue/script-indent': ['off', 2, {
      'baseIndent': 1
    }],
    "space-before-function-paren": 0,
    "space-before-blocks": "off",
    "quotes": "off",
    "no-extra-semi": "off"
  }
}
