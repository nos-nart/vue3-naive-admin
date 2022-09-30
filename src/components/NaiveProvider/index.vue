<template>
  <n-loading-bar-provider>
    <n-message-provider :placement="'bottom'">
      <n-notification-provider>
        <n-dialog-provider>
          <slot name="default"></slot>
        </n-dialog-provider>
      </n-notification-provider>
    </n-message-provider>
  </n-loading-bar-provider>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  NDialogProvider,
  NNotificationProvider,
  NMessageProvider,
  NLoadingBarProvider,
} from "naive-ui";

export default defineComponent({
  name: "NaiveProvider",
  components: {
    NDialogProvider,
    NNotificationProvider,
    NMessageProvider,
    NLoadingBarProvider,
  },
  setup() {
    return {};
  },
});
</script>
