import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
  optimizeDeps: {
    include: ['@project/ui', '@project/store', '@project/api'],
  },
  server: {
    port: 3001,
  },
});
