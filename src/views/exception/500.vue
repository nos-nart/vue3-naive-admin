<template>
  <n-result
    status="500"
    title="500 Server Error"
    description="Please come back later when we fixed that problem. Thanks."
  >
    <template #footer>
      <n-button>Speard Money Out</n-button>
    </template>
  </n-result>
</template>

<script lang="ts">
export default {
  name: "ServerErrorPage",
};
</script>

<script setup lang="ts"></script>
