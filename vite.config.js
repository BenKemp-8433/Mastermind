import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  esbuild: { legalComments: 'none' },
  plugins: [ vue() ]
})
