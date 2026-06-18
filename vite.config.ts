import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'KolibriThemeSystem',
      fileName: format =>
        format === 'cjs'
          ? 'kolibri-theme-system.cjs'
          : 'kolibri-theme-system.js',
      formats: ['es', 'cjs'],
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  test: {
    environment: 'jsdom',
    coverage: {
      reporter: ['text', 'html'],
    },
  },
});
