/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import { resolve } from 'path'

import eslintPlugin from 'vite-plugin-eslint'
import dts from 'vite-plugin-dts'
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [eslintPlugin(), dts(), react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src', 'index.ts'),
      formats: ['es', 'cjs'],
      fileName: (ext) => `index.${ext}.js`
      // for UMD name: 'GlobalName'
    },
    rollupOptions: {
      external: ['react-native', 'react']
    },
    target: 'esnext',
    sourcemap: true
  }
})
