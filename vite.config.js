import { defineConfig } from 'vite';

export default defineConfig({
  base: '/indigochamber.space/', // Adjust to your deployment subdirectory
  build: {
    outDir: 'dist', // Output directory (default is 'dist')
  },
});
