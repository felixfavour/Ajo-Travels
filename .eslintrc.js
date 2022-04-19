module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
  },
  extends: ["@nuxtjs", "plugin:nuxt/recommended"],
  plugins: [],
  // My Custom Rules
  // Override Multi-Word component Names
  overrides: [
    {
      files: ["pages/**/*.vue", "layouts/*.vue"],
      rules: {
        "vue/multi-word-component-names": 0,
      },
    },
  ],
  rules: {},
};
