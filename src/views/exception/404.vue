<template>
  <n-result
    status="404"
    title="404 Not Found"
    description="You know life is always ridiculous."
  >
    <template #footer>
      <n-button @click="goHome">Find Something Funny</n-button>
    </template>
  </n-result>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "NotFoundPage",
  setup() {
    const router = useRouter();

    function goHome() {
      router.push("/audio-converter/file");
    }

    return {
      goHome,
    };
  },
});
</script>
