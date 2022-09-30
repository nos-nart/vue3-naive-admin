<template>
  <RouterLink :to="'/'">
    <img class="w-16" src="@/assets/logo-portrait.png" />
  </RouterLink>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppLogo",
});
</script>
