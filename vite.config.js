import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
const baseUrl = process.env.VERCEL ? "/" : "/portofolio/";

export default defineConfig({
  base: baseUrl,
  plugins: [react(), tailwindcss()],
})
