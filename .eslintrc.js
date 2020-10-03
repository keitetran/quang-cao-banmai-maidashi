// https://eslint.org/docs/user-guide/configuring
module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: "module"
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jquery: true
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ["eslint:recommended", "plugin:vue/strongly-recommended"],
  plugins: ["vue"], // required to lint *.vue files
  rules: {
    // allow debugger during development
    "no-console": process.env.APP_MODE === 'production' ? 'error' : 'off',
    "no-debugger": 0,
    "no-console": 0,
    "vue/max-attributes-per-line": 0,
    "vue/mustache-interpolation-spacing": 0,
    "vue/component-name-in-template-casing": 0,
    "vue/singleline-html-element-content-newline": 0,
    "vue/attribute-hyphenation": 0,
    "vue/require-prop-types": 0,
    "semi": ["error", "always"],
    "quotes": ["error", "double"],
    "no-unused-vars": 0,
    "no-irregular-whitespace": 0,
    "vue/require-default-prop": 0
  }
}