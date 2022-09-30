<template>
  <n-dropdown trigger="click" :options="options" size="large">
    <n-button text>
      <n-avatar round size="medium">Johnny</n-avatar>
    </n-button>
  </n-dropdown>
</template>

<script lang="ts">
import { renderIcon } from "@/utils";
import { defineComponent } from "vue";
import { UserProfile, Logout, FaceWink } from "@vicons/carbon";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "UserProfile",
  setup() {
    const { t } = useI18n();

    const options = [
      {
        label: t("messages.hi") + " Johnny",
        key: "welcome",
        icon: renderIcon(FaceWink),
        disabled: true,
      },
      {
        label: t("messages.userInfo"),
        key: "profile",
        icon: renderIcon(UserProfile),
      },
      {
        label: t("messages.signOut"),
        key: "signout",
        icon: renderIcon(Logout),
      },
    ];
    return { options };
  },
});
</script>
