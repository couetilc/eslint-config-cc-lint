module.exports = {
  parserOptions: {
    ecmaVersion: 2021,
  },
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  plugins: [
    'node'
  ],
  rules: {
    /* I like these rules */
    // possible errors
    "for-direction": ["error"],
    "getter-return": ["error"],
    "no-async-promise-executor": ["error"],
    "no-compare-neg-zero": ["error"],
    "no-cond-assign": ["error"],
    "no-console": ["warn"],
    "no-constant-condition": ["error"],
    "no-control-regex": ["error"],
    "no-debugger": ["error"],
    "no-dupe-args": ["error"],
    "no-dupe-else-if": ["error"],
    "no-dupe-keys": ["error"],
    "no-duplicate-case": ["error"],
    "no-empty": ["error"],
    "no-empty-character-class": ["error"],
    "no-ex-assign": ["error"],
    "no-extra-boolean-cast": ["error", { "enforceForLogicalOperands": true }],
    "no-extra-semi": ["error"],
    "no-func-assign": ["error"],
    "no-import-assign": ["error"],
    "no-inner-declarations": ["error", "both"],
    "no-invalid-regexp": ["error"],
    "no-irregular-whitespace": ["error"],
    "no-loss-of-precision": ["warn"],
    "no-misleading-character-class": ["error"],
    "no-obj-calls": ["error"],
    "no-promise-executor-return": ["error"],
    "no-prototype-builtins": ["error"],
    "no-regex-spaces": ["error"],
    "no-setter-return": ["error"],
    "no-sparse-arrays": ["error"],
    "no-template-curly-in-string": ["error"],
    "no-unexpected-multiline": ["error"],
    "no-unreachable": ["error"],
    "no-unreachable-loop": ["error"],
    "no-unsafe-finally": ["error"],
    "no-unsafe-negation": ["error", { "enforceForOrderingRelations": true }],
    "no-unsafe-optional-chaining": ["error", { "disallowArithmeticOperators": true }],
    "no-useless-backreference": ["error"],
    "require-atomic-updates": ["error"],
    "use-isnan": ["error", { "enforceForSwitchCase": true, "enforceForIndexOf": true }],
    "valid-typeof": ["error", { "requireStringLiterals": true }],
    // best practices
    "accessor-pairs": ["error"],
    "array-callback-return": ["error", { "allowImplicit": false, "checkForEach": true }],
    "block-scoped-var": ["error"],
    "class-methods-use-this": ["error"],
    "curly": ["error", "multi-line", "consistent"],
    "default-case": ["error"],
    "default-case-last": ["error"],
    "dot-location": ["error", "property"],
    "dot-notation": ["error", { "allowPattern": "^[a-z]+(_[a-z]+)+$" }], // allow snake case properties
    "eqeqeq": ["error", "smart"],
    "guard-for-in": ["error"],
    "no-alert": ["error"],
    "no-caller": ["error"],
    "no-case-declarations": ["error"],
    "no-constructor-return": ["error"],
    "no-else-return": ["error", { "allowElseIf": false }],
    "no-empty-function": ["error"],
    "no-empty-pattern": ["error"],
    "no-eq-null": ["error"],
    "no-eval": ["error"],
    "no-extend-native": ["error"],
    "no-extra-bind": ["error"],
    "no-extra-label": ["error"],
    "no-fallthrough": ["error"],
    "no-floating-decimal": ["error"],
    "no-global-assign": ["error"],
    "no-implicit-coercion": ["error"],
    "no-implied-eval": ["error"],
    "no-loop-func": ["error"],
    "no-new": ["error"],
    "no-new-func": ["error"],
    "no-new-wrappers": ["error"],
    "no-nonoctal-decimal-escape": ["error"],
    "no-octal": ["error"],
    "no-octal-escape": ["error"],
    "no-param-reassign": ["error", { "props": true }],
    "no-proto": ["error"],
    "no-redeclare": ["error"],
    "no-return-assign": ["error"],
    "no-return-await": ["error"],
    "no-script-url": ["error"],
    "no-self-assign": ["error"],
    "no-self-compare": ["error"],
    "no-sequences": ["error"],
    "no-throw-literal": ["error"],
    "no-unmodified-loop-condition": ["error"],
    "no-unused-expressions": ["error"],
    "no-unused-labels": ["error"],
    "no-useless-call": ["error"],
    "no-useless-catch": ["error"],
    "no-useless-concat": ["error"],
    "no-useless-escape": ["error"],
    "no-useless-return": ["error"],
    "no-void": ["error"],
    "no-with": ["error"],
    "prefer-promise-reject-errors": ["error"],
    "prefer-regex-literals": ["error", { "disallowRedundantWrapping": true }],
    "radix": ["error"],
    "require-await": ["error"],
    "require-unicode-regexp": ["error"],
    "vars-on-top": ["error"],
    "wrap-iife": ["error"],
    // - Variables
    "no-delete-var": ["error"],
    "no-shadow-restricted-names": ["error"],
    "no-undef": ["error"],
    "no-undefined": ["error"],
    "no-unused-vars": ["error"],
    "no-use-before-define": ["error", "nofunc"],
    // - Stylistic Issues
    "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
    // - ECMAScript 6
    "constructor-super": ["error"],
    "no-class-assign": ["error"],
    "no-const-assign": ["error"],
    "no-dupe-class-members": ["error"],
    "no-new-symbol": ["error"],
    "no-this-before-super": ["error"],
    "no-useless-computed-key": ["error"],
    "no-useless-constructor": ["error"],
    "no-useless-rename": ["error"],
    "no-var": ["error"],
    "prefer-const": ["error"],
    "require-yield": ["error"],

    // eslint-plugin-node
    "node/no-unpublished-bin": ["error"],
    "node/no-unpublished-import": ["error"],
    "node/no-unpublished-require": ["error"],
    "node/process-exit-as-throw": ["error"],
    "node/shebang": ["error"],

    /* not so sure about these rules */
    // possible errors
    "no-await-in-loop": ["error"],
    // best practices
    "consistent-return": ["error"],
    "default-param-last": ["error"],
    "no-div-regex": ["error"], // not sure what this is checking for
    "no-lone-blocks": ["error"],
  },
};
