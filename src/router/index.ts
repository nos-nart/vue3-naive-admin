import type { App } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import { createRouterGuards } from "./router-guards";
import { AuthLayout } from "../layouts";
import { sortRoute } from "../utils";

const modules = import.meta.glob<Record<string, TypeUtil.FixTypeLater>>(
  "./modules/**/*.ts",
  {
    eager: true,
  }
);

const routeModuleList: RouteRecordRaw[] = [];

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

routeModuleList.sort(sortRoute);

const RootRoute: RouteRecordRaw = {
  path: "/",
  name: "root",
  redirect: "/dashboard",
  meta: {
    title: "Root",
  },
};

export const asyncRoutes = [...routeModuleList];

const AuthRoute: RouteRecordRaw = {
  name: "auth",
  path: "/auth",
  component: AuthLayout,
  redirect: "/auth/login",
  children: [
    {
      name: "auth_login",
      path: "login",
      component: () => import("@/views/login/index.vue"),
      meta: {
        title: "Login",
      },
    },
  ],
};

export const constantRoutes: RouteRecordRaw[] = [
  RootRoute,
  AuthRoute,
  {
    path: "/401",
    name: "unauthorized",
    component: () => import("@/views/exception/401.vue"),
    meta: {
      title: "Unauthorized",
    },
  },
  {
    path: "/500",
    name: "service-error",
    component: () => import("@/views/exception/500.vue"),
    meta: {
      title: "Service Error",
    },
  },
  {
    path: "/:path(.*)*",
    name: "not-found",
    component: () => import("@/views/exception/404.vue"),
    meta: {
      title: "Not Found",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: [...constantRoutes],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export async function setupRouter(app: App<Element>) {
  app.use(router);
  createRouterGuards(router);
  await router.isReady();
}

export default router;
