import type { RouteRecordRaw } from "vue-router";
import { renderIcon } from "@/utils";
import { Dashboard } from "@vicons/carbon";
import { AdminLayout } from "@/layouts";

const routeName = "dashboard";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/dashboard",
    name: routeName,
    redirect: "/dashboard/console",
    component: AdminLayout,
    meta: {
      title: "Dashboard",
      icon: renderIcon(Dashboard),
      sort: 0,
      roles: ["ADMIN"],
    },
    children: [
      {
        path: "console",
        name: `${routeName}_console`,
        component: () => import("@/views/dashboard/console.vue"),
        meta: {
          title: "Console",
          roles: ["ADMIN"],
        },
      },
    ],
  },
];

export default routes;
