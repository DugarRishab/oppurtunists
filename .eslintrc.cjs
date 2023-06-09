module.exports = {
	env: { browser: true, es2020: true },
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"plugin:react-hooks/recommended",
	],
	parserOptions: { ecmaVersion: "latest", sourceType: "module" },
	settings: { react: { version: "18.2" } },
	plugins: ["react-refresh"],
	rules: {
		"react-refresh/only-export-components": "warn",
		"prettier/prettier": [
			"off",
			{ endOfLine: "auto" },
			{ usePrettierrc: true },
		],
		"spaced-comment": "off",
		"no-console": "warn",
		"consistent-return": "off",
		"func-names": "off",
		"no-tabs": ["off", { allowIndentationTabs: true }],
		"object-shorthand": "off",
		"no-process-exit": "off",
		"no-param-reassign": "off",
		"no-return-await": "off",
		"no-underscore-dangle": "off",
		"class-methods-use-this": "off",
		"prefer-destructuring": ["warn", { object: true, array: false }],
		"no-unused-vars": ["warn", { argsIgnorePattern: "req|res|next|val" }],
		"import/no-useless-path-segments": ["error", { noUselessIndex: true }],
		indent: ["error", "tab"],
	},
};
