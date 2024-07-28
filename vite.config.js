// import { defineConfig } from 'vite';

// export default defineConfig({
//   base: './'
// });



import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,
  },
  base: './',
});