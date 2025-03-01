import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  base: "/",
  plugins: [react()],
  server: {
    historyApiFallback: true, // Enable history fallback for client-side routing
  },
  define: {
    "process.env": Object.fromEntries(
      Object.entries(process.env).filter(([key]) => key.startsWith("VITE_"))
    ),
  },
});
