import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: './', // Useful for some deployment environments
    build: {
        outDir: 'dist',
        emptyOutDir: true,
    }
});
