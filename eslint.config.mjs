import { defineConfig, globalIgnores } from "eslint/config";
import astro from "eslint-plugin-astro";
import a11y from "eslint-plugin-jsx-a11y";
import globals from "globals";
import js from "@eslint/js";
export default defineConfig([
	globalIgnores([
		"**/dist/**",
		"**/.astro/**",
		".stylelintcache",
		"**/node_modules/**",
		"package-lock.json",
		"npm-debug.log*",
		"yarn-debug.log*",
		"yarn-error.log*",
		"pnpm-debug.log*",
		".env",
		".env.production",
		".DS_Store",
		"**/.idea/**",
		"**/.vscode/**",
		"*.txt",
	]),
	js.configs.recommended,
	astro.configs.recommended,
	{
		files: ["**/*.{js,mjs,cjs,astro}"],
		plugins: {
			js,
			"jsx-a11y": a11y,
			astro,
		},
		languageOptions: { globals: globals.browser },
		linterOptions: {},
		rules: {
			...a11y.flatConfigs.strict.rules,
		},
	},
]);
