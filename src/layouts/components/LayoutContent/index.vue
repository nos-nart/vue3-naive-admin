<template>
  <n-layout-content content-style="padding: 2rem;">
    <RouterView>
      <template #default="{ Component, route }">
        <transition :name="'fade-slide'" mode="out-in" appear>
          <component :is="Component" :key="route.fullPath" />
        </transition>
      </template>
    </RouterView>
  </n-layout-content>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { NLayoutContent } from "naive-ui";

export default defineComponent({
  name: "LayoutContent",
  components: { NLayoutContent },
  setup() {
    return {
      NLayoutContent,
    };
  },
});
</script>
