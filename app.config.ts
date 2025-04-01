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
            // Remove the extension from the name and then lowercase it.
            // For example, "app.css" becomes "app"
            let base = name ? path.parse(name).name : 'asset'
            base = base.toLowerCase()
            return `assets/${base}-[hash][extname]`
          },
        },
      },
    },
  },
})
