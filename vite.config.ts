import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: '/securekloud-intranet/', // 👈 MUST match your GitHub repo name
  server: {
    host: '0.0.0.0',
    port: 8081,
    proxy: {
      '/backend': {
        target: 'http://192.168.26.103',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/backend/, ''),
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
