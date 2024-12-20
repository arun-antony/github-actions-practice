import globals from "globals";
import tseslint from "typescript-eslint";


export default [
  {files: ["**/*.{jsx,js,mjs,cjs,ts}"]},
  {files: ["**/*.js"], languageOptions: {sourceType: "script"}},
  {languageOptions: { globals: globals.browser }},
  ...tseslint.configs.recommended,
];