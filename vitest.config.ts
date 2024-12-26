import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	// @ts-ignore
	plugins: [tsconfigPaths()],
	test: {
		globals: true,
		exclude: ['**/node_modules/**'],
		include: ['**/__tests__/*.spec.ts', '**/__tests__/*.test.ts'],
		coverage: {
			provider: 'istanbul',
			reporter: ['html', 'json', 'lcov'],
			reportsDirectory: './.tests/coverage',
			exclude: ['.tests/**/*', 'dist/**/*', '**/*/main.ts', '**/*/index.ts', '**/*/*.spec.ts', '**/*/*.test.ts'],
			reportOnFailure: true,
		},
		reporters: ['default', 'html'],
		outputFile: {
			html: './.tests/index.html',
		},
		environment: 'node',
	},
});
