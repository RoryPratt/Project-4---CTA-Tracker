import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/cta-trains": {
        target: "http://lapi.transitchicago.com",
        changeOrigin: true,
        rewrite: () =>
          `/api/1.0/ttpositions.aspx?key=${process.env.VITE_CTA_API_KEY}`,
      },
    },
  },
});