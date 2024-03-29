/** @type {import('eslint/lib/shared/types').ConfigData} */
module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended"
  ],
  "settings": {
    "import/resolver": {
      "node": true,
      "typescript": true
    }
  },
  "rules": {
    "@typescript-eslint/ban-ts-comment": ["warn", { "ts-expect-error": "allow-with-description" }],
    "@typescript-eslint/consistent-type-imports": ["error", { prefer: "type-imports" }],
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "@typescript-eslint/no-var-requires": "off",
    "array-bracket-newline": ["warn", "consistent"],
    "array-bracket-spacing": ["error", "never"],
    "array-element-newline": ["error", "consistent"],
    "arrow-body-style": ["error", "as-needed"],
    "arrow-parens": ["error", "as-needed"],
    "arrow-spacing": "error",
    "block-spacing": ["error", "always"],
    "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
    "camelcase": ["warn", {
      "ignoreImports": false,
      "properties": "never"
    }],
    "comma-dangle": ["error", "never"],
    "comma-spacing": ["error", {
      "after": true,
      "before": false
    }],
    "comma-style": ["error", "last"],
    "computed-property-spacing": ["error", "never"],
    "curly": ["error", "multi-line", "consistent"],
    "default-case-last": "error",
    "dot-location": ["error", "property"],
    "dot-notation": ["error", { "allowPattern": "^[a-z]+([-_][a-z]+)+$" }],
    "eol-last": ["error", "always"],
    "eqeqeq": ["error", "always"],
    "func-call-spacing": ["error", "never"],
    "func-name-matching": "warn",
    "function-call-argument-newline": ["error", "consistent"],
    "function-paren-newline": "off",
    "implicit-arrow-linebreak": "off",
    "import/default": "off",
    "import/namespace": "off",
    "import/no-anonymous-default-export": "off",
    "import/no-named-as-default": "off",
    "import/no-named-as-default-member": "off",
    "import/no-unresolved": "off",
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "key-spacing": ["error", {
      "afterColon": true,
      "beforeColon": false,
      "mode": "strict"
    }],
    "keyword-spacing": ["error", {
      "after": true,
      "before": true
    }],
    "linebreak-style": ["error", "unix"],
    "lines-between-class-members": ["error", "never"],
    "max-len": [
      "error",
      {
        "code": 140,
        "ignoreComments": true,
        "ignoreRegExpLiterals": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true,
        "ignoreTrailingComments": true,
        "ignoreUrls": true
      }
    ],
    "new-parens": ["error", "always"],
    "newline-per-chained-call": ["error", { "ignoreChainWithDepth": 5 }],
    "no-alert": "error",
    "no-console": "warn",
    "no-constructor-return": "error",
    "no-empty": ["error", { "allowEmptyCatch": true }],
    "no-empty-function": "off",
    "no-eval": "error",
    "no-implicit-coercion": "error",
    "no-implicit-globals": "warn",
    "no-invalid-this": "error",
    "no-labels": "warn",
    "no-lone-blocks": "error",
    "no-loop-func": "error",
    "no-multi-spaces": "error",
    "no-multi-str": "error",
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 2,
        "maxBOF": 0,
        "maxEOF": 1
      }
    ],
    "no-nested-ternary": "error",
    "no-new": "off",
    "no-new-func": "error",
    "no-new-wrappers": "warn",
    "no-param-reassign": ["error", { "props": false }],
    "no-return-assign": ["error", "except-parens"],
    "no-self-assign": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-tabs": "error",
    "no-trailing-spaces": "error",
    "no-undef": "off",
    "no-undef-init": "error",
    "no-undefined": "error",
    "no-unused-expressions": "warn",
    "no-use-before-define": "off",
    "no-useless-call": "error",
    "no-useless-catch": "error",
    "no-useless-concat": "error",
    "no-useless-escape": "warn",
    "no-useless-return": "error",
    "no-var": "error",
    "no-void": "error",
    "no-whitespace-before-property": "error",
    "no-with": "error",
    "nonblock-statement-body-position": "off",
    "object-curly-newline": ["error", { "multiline": true }],
    "object-curly-spacing": ["error", "always"],
    "quote-props": ["error", "consistent"],
    "quotes": ["error", "double", { "allowTemplateLiterals": true }],
    "semi": ["error", "always"],
    "semi-spacing": ["error", {
      "after": true,
      "before": false
    }],
    "sort-vars": "error",
    "space-before-blocks": "error",
    "space-before-function-paren": ["error", {
      "anonymous": "always",
      "asyncArrow": "always",
      "named": "never"
    }],
    "space-in-parens": ["error", "never"],
    "yoda": ["error", "never"]
  }
};
