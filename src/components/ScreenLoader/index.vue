<template>
  <teleport to="body">
    <transition :name="transition">
      <div
        v-if="show"
        class="h-screen w-full inset-0 absolute flex-center bg-gray-100/50"
        aria-label="loading"
      >
        <n-spin size="large">
          <template #description v-if="description">{{ description }}</template>
        </n-spin>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ScreenLoader",
  props: {
    show: { type: Boolean, default: false },
    transition: { type: String, default: "fade" },
    blur: { type: String, default: "2px" },
    description: { type: String, default: "Loading" },
  },
});
</script>
