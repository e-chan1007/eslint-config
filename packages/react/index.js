/** @type {import('eslint/lib/shared/types').ConfigData} */
module.exports = {
  "extends": ["eslint:recommended", "@e-chan1007/base", "plugin:react/recommended"],
  "rules": {
    "jsx-quotes": ["error", "prefer-double"],
    "react/jsx-indent": ["error", 2, { checkAttributes: false, indentLogicalExpressions: true }],
    "react-hooks/exhaustive-deps": "off"
  }
};
