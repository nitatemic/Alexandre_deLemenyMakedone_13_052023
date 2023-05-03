import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import mkcert from 'vite-plugin-mkcert';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), mkcert()],
	css: {
		postcss: {
			plugins: [
				autoprefixer,
			],
		},
	},
	server: {
		port: 8080,
		hot: true,
		https: false,
	},
});
