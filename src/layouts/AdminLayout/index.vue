<template>
  <n-layout has-sider>
    <LayoutSider />
    <n-layout
      class="transition-padding"
      :style="{
        paddingTop: '60px',
        paddingLeft: collapse ? '64px' : '240px',
      }"
    >
      <LayoutHeader />
      <LayoutContent />
      <LayoutFooter />
    </n-layout>
  </n-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { NLayout } from "naive-ui";
import {
  LayoutHeader,
  LayoutContent,
  LayoutFooter,
  LayoutSider,
} from "../components";
import { useGlobalLayout } from "@/composables/useGlobalLayout";

export default defineComponent({
  name: "AdminLayout",
  components: {
    NLayout,
    LayoutFooter,
    LayoutHeader,
    LayoutContent,
    LayoutSider,
  },

  setup() {
    const collapse = useGlobalLayout();

    return {
      collapse,
    };
  },
});
</script>
