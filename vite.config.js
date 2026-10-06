import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'
import { Analytics } from "@vercel/analytics/react"

export default defineConfig(({ mode }) => ({
  plugins: mode === 'preview' ? [react(), viteSingleFile()] : [react()],
  build: mode === 'preview' ? { outDir: 'preview-dist' } : {},
}))
