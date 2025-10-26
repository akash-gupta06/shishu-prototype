import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/shishu-prototype/", // CRITICAL: Sets the correct base path for GitHub Pages
  build: {
    rollupOptions: {
      // Fixes the persistent 'lucide-react' resolve issue during build
      external: ['lucide-react'],
    },
  },
});