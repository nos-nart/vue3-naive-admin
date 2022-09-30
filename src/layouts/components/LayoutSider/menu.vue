<template>
  <n-menu
    :collapsed-width="64"
    :collapsed-icon-size="22"
    :options="options"
    :indent="18"
  />
</template>

<script lang="ts">
import { onMounted, ref } from "vue";
import { useAsyncRouteStore } from "@/stores/modules/async-route";
import { defineComponent } from "vue";
import { generateMenu } from "@/utils";
import type { MentionOption } from "naive-ui";

export default defineComponent({
  name: "SiderMenu",
  setup() {
    const asyncRouteStore = useAsyncRouteStore();
    const options = ref<MentionOption[]>([]);

    function updateMenu() {
      options.value = generateMenu(asyncRouteStore.getMenus);
    }

    onMounted(() => {
      updateMenu();
    });

    return {
      options,
    };
  },
});
</script>
