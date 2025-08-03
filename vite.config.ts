import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    tsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tanstackStart({
      // Add your TanStack Start options here
    }),
  ],
  build: {
    manifest: true,
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: ({ name }) => {
          const baseName = name ? name.split('.')[0] : 'asset'
          return `assets/${baseName}-[hash][extname]`
        },
      },
    },
  },
})
