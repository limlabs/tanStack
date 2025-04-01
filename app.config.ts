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
      manifest: true,
      assetsDir: 'assets',
      rollupOptions: {
        output: {
          assetFileNames: ({ name }) => {
            const baseName = name ? path.parse(name).name : 'asset'
            return `assets/${baseName}-[hash][extname]`
          },
        },
      },
    },
  },
})
