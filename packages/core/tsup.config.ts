import { defineConfig } from 'tsup';

export default defineConfig({
  clean: true,
  dts: true,
  entry: ['src/index.ts'],
  outDir: 'dist',
  format: ['cjs', 'esm', 'iife'],
  globalName: 'ColumnResizerCore',
  minify: true,
  treeshake: true,
  tsconfig: 'tsconfig.json',
  splitting: true,
});
