<template>
  <n-back-top :show="show" class="z-50" />
</template>

<script>
export default {
  name: "BackToTop",
};
</script>

<script lang="ts" setup>
import { computed } from "vue";
import { useWindowScroll } from "@vueuse/core";

const { y: scrollY } = useWindowScroll();

const show = computed(() => scrollY.value > 180);
</script>
