import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  server: {
    host: 'localhost',
    port: 8081,
    proxy: {
      '/backend': {
        target: 'http://192.168.26.103', // IIS on port 80
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/backend/, '') // Strip /backend prefix
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});