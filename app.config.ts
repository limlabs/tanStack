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
      manifest: true,
      assetsDir: '_build/assets',
      rollupOptions: {
        output: {
          assetFileNames: ({ name }) => {
            const base = name ? path.parse(name).name : 'asset'
            return `_build/assets/${base}-[hash][extname]`
          },
        },
      },
    },
  },
})
