<template>
  <LayoutContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { LayoutContent } from "../components";

export default defineComponent({
  name: "BlankLayout",
  components: {
    LayoutContent,
  },
});
</script>
