import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    build: {
      outDir: 'build',
    },
    base: "/lab-react-components-boilerplate/",
    plugins: [react()],
    assetsInclude: ["**/*.jpg", "**/*.JPG"],
  };
});