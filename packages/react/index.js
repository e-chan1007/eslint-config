/** @type {import('eslint/lib/shared/types').ConfigData} */
module.exports = {
  "extends": ["eslint:recommended", "@e-chan1007/base", "plugin:react/recommended"],
  "settings": { "react": { "version": "detect" } },
  "rules": {
    "import/order": ["error", {
      "alphabetize": {
        order: "asc",
        caseInsensitive: true
      },
      "groups": ["builtin", "external", "internal", "parent", "sibling", "index", "object", "type"],
      "newlines-between": "always",
      "pathGroups": [
        {
          "pattern": "react",
          "group": "builtin",
          "position": "before"
        }
      ],
      "pathGroupsExcludedImportTypes": [],
      "warnOnUnassignedImports": true
    }],
    "jsx-quotes": ["error", "prefer-double"],
    "react/jsx-indent": ["error", 2, { checkAttributes: false, indentLogicalExpressions: true }],
    "react/react-in-jsx-scope": "off",
    "react-hooks/exhaustive-deps": "off"
  }
};
