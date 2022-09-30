import { createGlobalState, useStorage } from "@vueuse/core";

export const useGlobalI18n = createGlobalState(() =>
  useStorage("__I18N__", "vi-vn", localStorage)
);
