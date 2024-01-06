import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    include: ['**/*.test.ts'],
    globals: true,
    setupFiles: ['./test/setupTests.ts'],
    // transformMode: {
    //   web: [/.[tj]sx?$/],
    //   ssr: [/.[tj]sx?$/]
    // },
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  }
});