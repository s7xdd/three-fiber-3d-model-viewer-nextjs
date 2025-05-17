module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals" // For Next.js projects
  ],
  rules: {
    "@typescript-eslint/no-explicit-any": "off" // Completely disables this rule
  }
};
