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
      rollupOptions:{
        output: {
          assetFileNames: 'assets/[name]-[hash][extname]',
        }
      }
    },
  },
})
