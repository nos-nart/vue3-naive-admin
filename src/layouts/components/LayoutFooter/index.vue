<template>
  <n-layout-footer bordered>
    <div class="flex-between h-16 px-8">
      <span>@{{ year }} <b>Company</b></span>
    </div>
  </n-layout-footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { NLayoutFooter } from "naive-ui";
import dayjs from "dayjs";

export default defineComponent({
  name: "LayoutFooter",
  components: { NLayoutFooter },
  setup() {
    const year = dayjs().year();
    return {
      year,
    };
  },
});
</script>
