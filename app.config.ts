import { defineConfig } from '@tanstack/react-start/config'
import tsConfigPaths from 'vite-tsconfig-paths'
import * as path from 'path'

export default defineConfig({
  vite: {
    plugins: [
      tsConfigPaths({
        projects: ['./tsconfig.json'],
      }),
    ],
    build: {
      // Ensure assets are placed in the correct directory
      assetsDir: 'assets',
      rollupOptions: {
        output: {
          assetFileNames: ({ name }) => {
            // Get the base name (without extension) and force lower-case.
            const base = name ? path.parse(name).name : 'asset'
            // Construct the asset name and force the entire string to lower-case.
            return `assets/${(base + '-[hash][extname]').toLowerCase()}`
          },
        },
      },
    },
  },
})
