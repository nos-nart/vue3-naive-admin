import { defineConfig, presetUno } from "unocss";

export default defineConfig({
  exclude: [
    "node_modules",
    ".git",
    ".husky",
    ".vscode",
    "dist",
    "public",
    "build",
    "mock",
    "./stats.html",
  ],
  presets: [presetUno({ dark: "class" })],
  shortcuts: {
    "transition-base": "transition-all duration-300 ease-in-out",
    "flex-center": "flex justify-center items-center",
    "flex-between": "flex justify-between items-center",
    "flex-y-center": "flex items-center",
    "flex-y-end": "flex items-end",
    "flex-x-between": "flex justify-between",
    "flex-x-center": "flex justify-center",
  },
  rules: [["bg-position-center", { "background-position": "center" }]],
});
