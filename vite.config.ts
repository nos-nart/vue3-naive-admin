import { fileURLToPath, URL } from "node:url";

import { defineConfig, splitVendorChunkPlugin } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Components from "unplugin-vue-components/vite";
import Unocss from "unocss/vite";
import { viteMockServe } from "vite-plugin-mock";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Components({
      dts: "src/typings/components.d.ts",
      dirs: ["src/components"],
      extensions: ["vue"],
      deep: true,
      types: [{ from: "vue-router", names: ["RouterLink", "RouterView"] }],
    }),
    Unocss({
      /* options */
    }),
    viteMockServe({
      mockPath: "mock",
      injectCode: `
        import { setupProdMockServer } from '../mock/mockProdServer';
        setupProdMockServer();
      `,
    }),
    splitVendorChunkPlugin(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    https: false,
    port: 3030,
    proxy: {
      "/api": {
        target: "http://116.97.88.30",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
        // ws: true,
      },
    },
  },
  preview: {
    port: 8080,
  },
  build: {
    // https://vitejs.dev/guide/build.html#customizing-the-build
    sourcemap: false,
    cssCodeSplit: true,
  },
});
