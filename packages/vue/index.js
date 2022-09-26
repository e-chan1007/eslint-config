/** @type {import('eslint/lib/shared/types').ConfigData} */
module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "@vue/typescript/recommended",
    "@e-chan1007/base"
  ],
  "parser": "vue-eslint-parser",
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
          "pattern": "~/**",
          "group": "internal"
        },
        {
          "pattern": "react",
          "group": "builtin",
          "position": "before"
        },
        ...["app", "head", "components", "imports", "build"].map(name => (
          {
            "pattern": `#${name}`,
            "group": "builtin"
          }
        ))
      ],
      "pathGroupsExcludedImportTypes": ["builtin"],
      "warnOnUnassignedImports": true
    }],
    "vue/html-closing-bracket-newline": [
      "error",
      {
        "singleline": "never",
        "multiline": "never"
      }
    ],
    "vue/html-indent": ["error", 2, {
      "attribute": 1,
      "baseIndent": 1,
      "closeBracket": 0,
      "alignAttributesVertically": true,
      "ignores": []
    }],
    "vue/max-attributes-per-line": "off",
    "max-len": "off",
    "vue/max-len": [
      "error",
      {
        "code": 140,
        "ignoreComments": true,
        "ignoreHTMLAttributeValues": true,
        "ignoreHTMLTextContents": true,
        "ignoreRegExpLiterals": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true,
        "ignoreTrailingComments": true,
        "ignoreUrls": true
      }
    ],
    "vue/multi-word-component-names": "off"
  }
};
