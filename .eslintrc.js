module.exports = {
  env: {
    commonjs: true,
    browser: true,
    es6: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  globals: {},
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    requireConfigFile: false,
    sourceType: "module",
  },
  plugins: ["react", "import", "react-hooks"],
  ignorePatterns: ["node_modules/"],
  rules: {
    "no-eval": ["error"],
    "react/react-in-jsx-scope": 0,
    "react/jsx-uses-react": 0,
    "no-unused-vars": ["warn"],
  },
  settings: {
    react: {
      version: "detect", // "detect" automatically picks the version you have installed.
    },
  },
};
