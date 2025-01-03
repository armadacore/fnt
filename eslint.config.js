import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
	{ ignores: ['@types/**/*', 'dist/**/*', 'vite.config.ts', 'vitest.config.ts', 'tsconfig.json'] },
	{ files: ['**/*.{js,mjs,cjs,ts}'] },
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	// ...tseslint.configs.recommended,
	...tseslint.configs.recommendedTypeChecked,
	{
		languageOptions: {
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
	{
		rules: {
			'no-console': 'warn',
			'no-debugger': 'warn',
			'no-undefined': 'error',
			'no-unused-vars': 'off',
			'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
			'no-nested-ternary': 'error',
			'newline-before-return': 'error',
			'require-await': 'error',
			'@typescript-eslint/no-floating-promises': 'error',
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					caughtErrorsIgnorePattern: '^_',
				},
			],
			'@typescript-eslint/naming-convention': [
				'error',
				{
					selector: 'default',
					leadingUnderscore: 'allowSingleOrDouble',
					format: ['camelCase'],
					filter: { regex: '__brand', match: false },
				},
				{ selector: 'typeLike', format: ['PascalCase'] },
				{
					selector: 'variable',
					types: ['boolean'],
					leadingUnderscore: 'allowSingleOrDouble',
					format: ['PascalCase'],
					prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
				},
				{ selector: 'variable', leadingUnderscore: 'allowSingleOrDouble', format: ['camelCase'] },
				{
					selector: 'variable',
					modifiers: ['const'],
					leadingUnderscore: 'allowSingleOrDouble',
					format: ['camelCase', 'UPPER_CASE'],
				},
				{ selector: 'function', leadingUnderscore: 'allowSingleOrDouble', format: ['camelCase', 'PascalCase'] },
			],
		},
	},
];
