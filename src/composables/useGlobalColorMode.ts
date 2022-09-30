import { createGlobalState, useColorMode } from "@vueuse/core";

export const useGlobalColorMode = createGlobalState(useColorMode);
