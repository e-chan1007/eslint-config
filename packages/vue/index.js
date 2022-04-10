module.exports = {
  "extends": [
    "eslint:recommended",
    "@e-chan1007/base",
    "plugin:vue/vue3-essential",
    "@vue/typescript/recommended"
  ],
  "rules": { "vue/html-closing-bracket-newline": ["error", { "singleline": "never", "multiline": "never" }] }
};
