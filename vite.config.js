import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // To match firebase.json public directory
  },
  server: {
    port: 3000,
    open: true,
  },
});
