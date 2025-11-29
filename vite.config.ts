import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { tanstackRouter } from '@tanstack/router-plugin/vite'

export default defineConfig({
  plugins: [
    tanstackRouter({
      target: 'solid',
      autoCodeSplitting: true,
    }),
    solidPlugin(),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './setupVitest.ts',
    coverage: {
      all: true,
      provider: 'c8',
    }
  },
  resolve: {
    conditions: ['development', 'browser'],
  },
});
