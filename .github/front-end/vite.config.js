import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://r7vcs20h-8000.asse.devtunnels.ms/",
        changeOrigin: true,
      },
    },
  },
});

