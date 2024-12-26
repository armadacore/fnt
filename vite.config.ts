import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	plugins: [tsconfigPaths(), dts({ include: ['src'] })],
	build: {
		copyPublicDir: false,
		lib: {
			entry: resolve(__dirname, 'src/main.ts'),
			fileName: 'main',
			formats: ['es'],
		},
	},
});
