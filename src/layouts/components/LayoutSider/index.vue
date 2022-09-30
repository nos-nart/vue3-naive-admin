<template>
  <n-layout-sider
    collapse-mode="width"
    :collapsed-width="64"
    :collapsed="collapsed"
    :width="240"
    :native-scrollbar="false"
    bordered
    position="absolute"
    class="z-2"
  >
    <div class="px-5 py-2">
      <AppLogo />
    </div>
    <SiderMenu />
  </n-layout-sider>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SiderMenu from "./menu.vue";
import { NLayoutSider } from "naive-ui";
import { useGlobalLayout } from "@/composables/useGlobalLayout";

export default defineComponent({
  name: "LayoutSider",
  components: { NLayoutSider, SiderMenu },
  setup() {
    const collapsed = useGlobalLayout();

    return {
      collapsed,
    };
  },
});
</script>
