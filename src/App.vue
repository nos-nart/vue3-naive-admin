<template>
  <NConfigProvider
    :locale="enUS"
    :date-locale="dateEnUS"
    :theme="theme"
    :theme-overrides="themeOverrides"
  >
    <n-global-style />
    <NaiveProvider>
      <RouterView />
    </NaiveProvider>
  </NConfigProvider>
</template>

<script setup lang="ts">
import type { GlobalThemeOverrides } from "naive-ui";
import {
  enUS,
  dateEnUS,
  darkTheme,
  lightTheme,
  NConfigProvider,
} from "naive-ui";
import { computed } from "vue";
import { useGlobalColorMode } from "@/composables/useGlobalColorMode";

const themeOverrides: GlobalThemeOverrides = {
  common: {
    fontFamily: "Inter, system-ui",
  },
};

const mode = useGlobalColorMode();
const theme = computed(() => (mode.value === "dark" ? darkTheme : lightTheme));
</script>

<style lang="scss">
@import "./styles/index.scss";
</style>
