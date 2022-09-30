<template>
  <n-space vertical :size="12">
    <n-space justify="space-between" align="center">
      <n-p>
        You have selected {{ checkedRowKeys.length }} row{{
          checkedRowKeys.length < 2 ? "" : "s"
        }}.
      </n-p>
      <n-space :size="12">
        <n-button icon-placement="left" @click="handleConfirmDeletion">
          <template #icon>
            <n-icon>
              <RowDelete />
            </n-icon>
          </template>
          {{ $t("messages.delete") }}
        </n-button>
        <n-button secondary type="success" icon-placement="left">
          <template #icon>
            <n-icon>
              <CloudUpload />
            </n-icon>
          </template>
          {{ $t("messages.upload") }}
        </n-button>
      </n-space>
    </n-space>
    <n-data-table
      v-model:checked-row-keys="checkedRowKeys"
      :columns="columns"
      :data="data"
      :pagination="pagination"
    />
  </n-space>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import type { DataTableColumns } from "naive-ui";
import { RowDelete, CloudUpload } from "@vicons/carbon";
import { useI18n } from "vue-i18n";

const data: any[] = [
  {
    name: `audio`,
    length: "6s",
    status: `London, Park Lane no. 1`,
    uploadedTime: "12/09/2022 23:22",
  },
];

export default defineComponent({
  name: "AudioConverterFileTable",
  components: { RowDelete, CloudUpload },
  setup() {
    const checkedRowKeysRef = ref<Array<string | number>>([]);
    const { t } = useI18n();

    const paginationReactive = reactive({
      page: 2,
      pageSize: 5,
      showSizePicker: true,
      pageSizes: [5, 10, 20, 30],
      onChange: (page: number) => {
        paginationReactive.page = page;
      },
      onUpdatePageSize: (pageSize: number) => {
        paginationReactive.pageSize = pageSize;
        paginationReactive.page = 1;
      },
    });

    const columns: DataTableColumns<any> = [
      {
        type: "selection",
        options: ["all", "none"],
        // disabled(row) {
        //   return row.name === "Edward King 3";
        // },
      },
      {
        title: t("audioConverter.audioName"),
        key: "name",
        sortOrder: "ascend",
        sorter: "default",
      },
      {
        title: t("messages.length"),
        key: "length",
        sortOrder: false,
        sorter: "default",
      },
      {
        title: t("messages.status"),
        key: "status",
      },
      {
        title: t("audioConverter.uploadedTime"),
        key: "uploadedTime",
      },
      {
        title: t("messages.actions"),
        key: "actions",
      },
    ];

    function handleConfirmDeletion() {
      window.$dialog?.warning({
        title: t("messages.deleteConfirmation.title"),
        content: t("messages.deleteConfirmation.content"),
        positiveText: t("messages.deleteConfirmation.positive"),
        negativeText: t("messages.deleteConfirmation.negative"),
        onPositiveClick: () => {
          // do delete
        },
        onNegativeClick: () => {
          // cancellation
        },
      });
    }

    return {
      checkedRowKeys: checkedRowKeysRef,
      data,
      pagination: paginationReactive,
      columns,
      handleConfirmDeletion,
    };
  },
});
</script>
