import { useStorage } from "@vueuse/core";

export const useGlobalToken = useStorage("__TOKEN__", "", sessionStorage);
