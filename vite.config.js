import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from "@vitejs/plugin-vue";
import path from 'path';

export default defineConfig({
    plugins: [
        vue(),
        laravel({
            input: ['resources/scss/app.scss', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, 'resources/js/components'),
            '@assets': path.resolve(__dirname, 'resources/js/assets'),
            '@services': path.resolve(__dirname, 'resources/js/services'),
        }
    }
});
