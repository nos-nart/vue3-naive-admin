<template>
  <n-dropdown
    trigger="click"
    size="small"
    placement="bottom-end"
    :options="options"
    @select="handleSelectLang"
  >
    <n-button quaternary circle>
      <n-icon size="25">
        <Language />
      </n-icon>
    </n-button>
  </n-dropdown>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Language } from "@vicons/carbon";
import { useGlobalI18n } from "@/composables/useGlobalI18n";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "LangSwitcher",
  components: { Language },
  setup() {
    const lang = useGlobalI18n();
    const { locale } = useI18n({ useScope: "global" });

    const options = [
      {
        label: "Vietnamese",
        key: "vi-vn",
      },
      {
        label: "English",
        key: "en",
      },
    ];

    const handleSelectLang = (key: string) => {
      lang.value = key;
      locale.value = key;
    };

    return {
      lang,
      handleSelectLang,
      options,
    };
  },
});
</script>
