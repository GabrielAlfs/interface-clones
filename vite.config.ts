import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as volar from '@volar/experimental/compiler';
import { resolve } from 'path';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, './src') },
      {
        find: '@application',
        replacement: resolve(__dirname, './src/application'),
      },
      {
        find: '@ui',
        replacement: resolve(__dirname, './src/ui'),
      },
    ],
  },
  plugins: [vue(volar.getVuePluginOptionsForVite()), vueJsx()],
});
