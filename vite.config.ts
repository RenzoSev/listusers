import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import istanbul from 'vite-plugin-istanbul';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/listusers',
  plugins: [
    react(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],
  // Docker
  server: {
    host: true,
    port: 5173,
  },
});
