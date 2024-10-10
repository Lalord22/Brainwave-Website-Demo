import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Brainwave-Website-Demo/",
  build: {
    assetsDir: "./assets", // Fuerza las rutas relativas en los recursos
  },
  plugins: [react()],
});
