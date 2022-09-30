import { createGlobalState, useStorage } from "@vueuse/core";

export const useGlobalLayout = createGlobalState(() =>
  useStorage("__LAYOUT_COLLAPSED__", false, sessionStorage)
);
