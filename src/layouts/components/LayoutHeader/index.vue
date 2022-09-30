<template>
  <n-layout-header
    bordered
    class="z-1 fixed top-0 right-0 transition-padding"
    :style="{ paddingLeft: collapse ? '64px' : '240px' }"
  >
    <div class="flex-between h-16 px-8">
      <n-button text style="font-size: 24px" @click="handleCollapse">
        <n-icon>
          <chevron-right v-if="collapse" />
          <chevron-left v-else />
        </n-icon>
      </n-button>
      <div class="flex-y-center gap-4">
        {{ $t(`messages.greeting.${partOfDay}`) }}
        <ThemeSwitcher />
        <LangSwitcher />
        <UserProfile />
      </div>
    </div>
  </n-layout-header>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { NLayoutHeader } from "naive-ui";
import { ChevronLeft, ChevronRight } from "@vicons/carbon";
import { useGlobalLayout } from "@/composables/useGlobalLayout";
import { getPartsOfDay } from "@/utils";
import dayjs from "dayjs";

export default defineComponent({
  name: "LayoutHeader",
  components: { NLayoutHeader, ChevronLeft, ChevronRight },
  setup() {
    const collapse = useGlobalLayout();

    const handleCollapse = () => {
      collapse.value = !collapse.value;
    };

    const partOfDay = computed(() => getPartsOfDay(dayjs().hour()));

    return {
      partOfDay,
      collapse,
      handleCollapse,
    };
  },
});
</script>
