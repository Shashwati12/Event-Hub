import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import AutoImport from 'unplugin-auto-import/vite';
import tailwindcss from '@tailwindcss/vite'

// Fix for __dirname in ESM (since you're using "type": "module")
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Export the config
export default defineConfig({
  plugins: [
    react(),
    AutoImport({
      imports: ['react'],
      dts: 'src/auto-imports.d.ts',
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      components: path.resolve(__dirname, './src/components'),
      pages: path.resolve(__dirname, './src/pages'),
      utils: path.resolve(__dirname, './src/utils'),
    },
  },
  base: '/',
});
