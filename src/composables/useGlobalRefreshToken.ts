import { useStorage } from "@vueuse/core";

export const useGlobalRefreshToken = useStorage(
  "__REFRESH_TOKEN__",
  "",
  sessionStorage
);
