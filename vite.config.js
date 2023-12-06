import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Checker(), react()],
  server: {
    port: 3001,
    proxy: {
      '/api': 'http://localhost:8000', 
    },
  },
});
