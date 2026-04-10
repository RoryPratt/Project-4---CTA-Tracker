import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 5173,
    strictPort: true,
    allowedHosts: ["project-4-cta-tracker.fly.dev"],
    proxy: {
      "/api/cta-trains": {
        target: "https://lapi.transitchicago.com",
        changeOrigin: true,
        rewrite: () =>
          "/api/1.0/ttpositions.aspx?key=619e116f4e3d459d8794dfeb1d0ada68&rt=red,blue,brn,g,org,p,pink,y&outputType=JSON",
      },
    },
  },
});