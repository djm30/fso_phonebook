module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ["airbnb-base"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    quotes: ["error", "double"],
    indent: ["error", 2],
    "no-trailing-spaces": "error",
    eqeqeq: "error",
    "arrow-spacing": ["error", { before: true, after: true }],
    "consistent-return": "warn",
  },
};
