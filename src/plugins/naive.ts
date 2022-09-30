import type { App } from "vue";
import {
  create,
  NInput,
  NButton,
  NBackTop,
  NGlobalStyle,
  NTable,
  NMenu,
  NScrollbar,
  createDiscreteApi,
  NForm,
  NFormItem,
  NRow,
  NCol,
  NH1,
  NH2,
  NP,
  NResult,
  NIcon,
  NAnchorLink,
  NAutoComplete,
  NSpace,
  NDropdown,
  NAvatar,
  NDataTable,
  NSelect,
  NFormItemGi,
  NGrid,
  NGi,
  NDatePicker,
  NUpload,
  NUploadDragger,
  NHr,
  NSpin,
  NSkeleton,
} from "naive-ui";

const naive = create({
  components: [
    NInput,
    NButton,
    NBackTop,
    NGlobalStyle,
    NTable,
    NMenu,
    NScrollbar,
    NForm,
    NFormItem,
    NRow,
    NCol,
    NH1,
    NH2,
    NP,
    NResult,
    NIcon,
    NAnchorLink,
    NAutoComplete,
    NSpace,
    NDropdown,
    NAvatar,
    NDataTable,
    NSelect,
    NFormItemGi,
    NGrid,
    NGi,
    NDatePicker,
    NUpload,
    NUploadDragger,
    NHr,
    NSpin,
    NSkeleton,
  ],
});

const { message, notification, dialog, loadingBar } = createDiscreteApi([
  "message",
  "dialog",
  "loadingBar",
  "notification",
]);

export function setupNaive(app: App<Element>) {
  // attach to global object cause <script setup> does not have access to this instance
  window.$message = message;
  window.$notification = notification;
  window.$dialog = dialog;
  window.$loadingBar = loadingBar;
  app.use(naive);
}
