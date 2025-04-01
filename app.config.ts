import { defineConfig } from '@tanstack/react-start/config'
import tsConfigPaths from 'vite-tsconfig-paths'

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
            // Force the file name (without hash/extension) to lower-case
            const lowerName = name ? name.toLowerCase() : 'asset'
            return `assets/${lowerName}-[hash][extname]`
          },
        },
      },
    },
  },
})
