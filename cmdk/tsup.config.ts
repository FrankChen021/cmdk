import { defineConfig } from 'tsup'

export default defineConfig({
  sourcemap: true, // Enable sourcemaps for better debugging
  minify: false, // Disable minification for easier debugging
  dts: false, // Disabled due to React 19 type compatibility issues
  format: ['esm', 'cjs'],
  loader: {
    '.js': 'jsx',
  },
})
