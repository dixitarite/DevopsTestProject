const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angularTs = require("@angular-eslint/eslint-plugin");
const angularHtml = require("@angular-eslint/eslint-plugin-template");

module.exports = tseslint.config(
  // TypeScript files
  {
    files: ["**/*.ts"],
    ignores: ["coverage/**", "node_modules/**"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      angularTs.configs.recommended // from @angular-eslint/eslint-plugin
    ],
    processor: angularTs.processInlineTemplates,
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase"
        }
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case"
        }
      ]
    }
  },

  // HTML template files
  {
    files: ["**/*.html"],
    ignores: ["coverage/**", "node_modules/**"],
    extends: [
      angularHtml.configs.recommended,
      angularHtml.configs.accessibility
    ],
    rules: {}
  }
);
