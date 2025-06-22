// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ["dist/*", "api"],
  },

  {
    plugins: ["react-native"],
    files: [
      "*.ts",
      "*.tsx",
      "*.e2e.js",
      "**/*.spec.js",
      "**/*.spec.jsx",
      "**/tools.js",
    ],
    rules: {
      "react-native/no-unused-styles": "error",
      "@typescript-eslint/no-shadow": ["error"],
      "react-hooks/exhaustive-deps": "error",
      "no-shadow": "off",
      "no-undef": "off",
      "@typescript-eslint/no-explicit-any": "error",
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["..*", "./../*"],
              message: "Please use absolute import with @ instead",
            },
          ],
        },
      ],
      "no-restricted-modules": [
        "error",
        {
          patterns: ["src/assets/images/*", "src/assets/lottie/*"],
        },
      ],
    },
  },
]);
