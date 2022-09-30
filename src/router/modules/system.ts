import type { RouteRecordRaw } from "vue-router";
import { renderIcon } from "@/utils";
import { SettingsCheck } from "@vicons/carbon";
import { AdminLayout } from "@/layouts";

const routeName = "system";

const routes: Array<RouteRecordRaw> = [
  {
    path: `/${routeName}`,
    name: routeName,
    redirect: `/${routeName}/setting`,
    component: AdminLayout,
    meta: {
      title: "Setting",
      icon: renderIcon(SettingsCheck),
      sort: 1,
      roles: ["ADMIN"],
    },
    children: [
      {
        path: "setting",
        name: `${routeName}_setting`,
        component: () => import("@/views/system/setting.vue"),
        meta: {
          title: "System Setting",
          roles: ["ADMIN"],
        },
      },
    ],
  },
];

export default routes;
