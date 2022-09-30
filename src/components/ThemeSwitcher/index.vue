<template>
  <n-button quaternary circle @click="changeTheme">
    <n-icon size="25" :component="mode === 'light' ? Sun : Moon" />
  </n-button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Sun, Moon } from "@vicons/carbon";
import { useGlobalColorMode } from "@/composables/useGlobalColorMode";

export default defineComponent({
  name: "ThemeSwitcher",
  // eslint-disable-next-line vue/no-unused-components
  components: { Sun, Moon },
  setup() {
    const mode = useGlobalColorMode();

    function changeTheme() {
      mode.value = mode.value === "dark" ? "light" : "dark";
    }

    return {
      mode,
      Sun,
      Moon,
      changeTheme,
    };
  },
});
</script>
