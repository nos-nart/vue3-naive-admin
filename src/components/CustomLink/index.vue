<template>
  <a
    :class="[
      'text-blue-500',
      strong && 'font-bold',
      underline ? 'underline' : 'no-underline',
    ]"
    :href="href"
    :target="isInternal ? '_self' : '_blank'"
    rel="noopener noreferrer"
  >
    {{ title }}
  </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CustomLink",
  props: {
    href: { type: String, required: true },
    title: { type: String, required: true },
    strong: { type: Boolean, default: false },
    underline: { type: Boolean, default: false },
  },
  computed: {
    isInternal() {
      return this.href.toString().startsWith("/");
    },
  },
});
</script>
