import type { RouteRecordRaw } from "vue-router";
import { renderIcon } from "@/utils";
import { Notebook, DocumentAudio, Microphone } from "@vicons/carbon";
import { AdminLayout } from "@/layouts";

const routeName = "audio-converter";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/audio-converter",
    name: routeName,
    redirect: "/audio-converter/file",
    component: AdminLayout,
    meta: {
      title: "Chuyển đổi âm thanh",
      icon: renderIcon(DocumentAudio),
      sort: 3,
    },
    children: [
      {
        path: "file",
        name: `${routeName}_file`,
        component: () => import("@/views/audio-converter/file/index.vue"),
        meta: {
          title: "Tệp",
          icon: renderIcon(Notebook),
          roles: ["USER"],
        },
      },
      {
        path: "live",
        name: `${routeName}_live`,
        component: () => import("@/views/audio-converter/live/index.vue"),
        meta: {
          title: "Trực tiếp",
          icon: renderIcon(Microphone),
          roles: ["USER"],
        },
      },
    ],
  },
];

export default routes;
