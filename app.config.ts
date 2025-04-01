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
            const base = name ? path.parse(name).name : 'asset'
            return `assets/${base}-[hash][extname]`
          },
        },
      },
    },
  },
})
