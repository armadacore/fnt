import {defineConfig} from "vite";
import {resolve} from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
    plugins: [dts({include: ['src']})],
    build: {
        copyPublicDir: false,
        lib: {
            entry: resolve(__dirname, 'src/main.ts'),
            fileName: 'main',
            formats: ['es'],
        }
    }
})