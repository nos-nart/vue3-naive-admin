<template>
  <n-form
    ref="formRef"
    label-placement="top"
    :label-width="80"
    :model="formValue"
  >
    <n-grid :span="24" :x-gap="24">
      <n-form-item-gi :span="6" :label="$t('messages.name')" path="name">
        <n-input
          v-model:value="formValue.name"
          :placeholder="$t('audioConverter.audioName')"
        />
      </n-form-item-gi>
      <n-form-item-gi :span="6" :label="$t('messages.period')" path="period">
        <n-date-picker
          v-model:value="formValue.period"
          type="daterange"
          clearable
          :start-placeholder="$t('messages.startDate')"
          :end-placeholder="$t('messages.endDate')"
        />
      </n-form-item-gi>
      <n-form-item-gi :span="4" :label="$t('messages.status')" path="status">
        <n-select
          v-model:value="formValue.status"
          :options="options"
          :placeholder="$t('messages.selectStatus')"
        />
      </n-form-item-gi>
      <n-gi class="flex-y-center" :span="2">
        <n-button strong secondary type="info" icon-placement="left">
          <template #icon>
            <n-icon>
              <Search />
            </n-icon>
          </template>
          {{ $t("messages.search") }}
        </n-button>
      </n-gi>
    </n-grid>
  </n-form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import type { FormInst } from "naive-ui";
// import type { SelectOption } from "naive-ui";
import { useI18n } from "vue-i18n";
import { Search } from "@vicons/carbon";

const audioStatus = {
  uploaded: 1,
  waitForProcessing: 2,
  processing: 3,
  completed: 4,
  audioError: 5,
  unableToProcess: 6,
} as const;

export default defineComponent({
  name: "AudioConverterFileForm",
  components: { Search },
  setup() {
    const formRef = ref<FormInst | null>(null);
    const { t } = useI18n();

    // @FIXME: select options not changes upon changing locale
    // let options = ref<SelectOption[]>([]);
    // watch(
    //   locale,
    //   () => {
    //     options = Object.entries(audioStatus).map(([key, value]) => ({
    //       label: t(`audioConverter.${key}`),
    //       value,
    //     }));
    //   },
    //   { immediate: true }
    // );

    return {
      range: ref<[number, number]>([1183135260000, Date.now()]),
      formRef,
      formValue: ref({
        name: "",
        period: "",
        status: undefined,
      }),
      options: Object.entries(audioStatus).map(([key, value]) => ({
        label: t(`audioConverter.${key}`),
        value,
      })),
    };
  },
});
</script>
