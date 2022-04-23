module.exports = {
  "extends": [
    "eslint:recommended",
    "@e-chan1007/base",
    "plugin:vue/vue3-essential",
    "@vue/typescript/recommended"
  ],
  "rules": {
    "vue/html-closing-bracket-newline": ["error", { "singleline": "never", "multiline": "never" }],
    "vue/html-indent": ["error", 2, {
      "attribute": 1,
      "baseIndent": 1,
      "closeBracket": 0,
      "alignAttributesVertically": true,
      "ignores": []
    }],
    "vue/multi-word-component-names": "off"
  }
};
