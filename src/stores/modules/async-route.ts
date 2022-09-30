import { toRaw } from "vue";
import { defineStore } from "pinia";
import type { RouteRecordRaw } from "vue-router";
import { constantRoutes, asyncRoutes } from "@/router";
import { RoleEnum } from "@/enums";

export interface IAsyncRouteState {
  menus: RouteRecordRaw[];
  routers: RouteRecordRaw[];
  addRouters: RouteRecordRaw[];
}

function hasRole(roles: Auth.RoleType[], route: RouteRecordRaw): boolean {
  const routeRole: Auth.RoleType[] | undefined = route?.meta?.roles;
  if (routeRole) {
    return roles.some((role) => routeRole?.includes(role));
  } else {
    return true;
  }
}

function filterAsyncRoutes(routes: RouteRecordRaw[], roles: Auth.RoleType[]) {
  const result: RouteRecordRaw[] = [];
  routes.forEach((route) => {
    const temp = { ...route };
    if (hasRole(roles, temp)) {
      if (temp.children) {
        temp.children = filterAsyncRoutes(temp.children, roles);
      }
      result.push(temp);
    }
  });

  return result;
}

export const useAsyncRouteStore = defineStore({
  id: "app-async-route",
  state: (): IAsyncRouteState => ({
    menus: [],
    routers: constantRoutes,
    addRouters: [],
  }),
  getters: {
    getMenus(): RouteRecordRaw[] {
      return this.menus;
    },
    getRouters(): RouteRecordRaw[] {
      return this.addRouters;
    },
  },
  actions: {
    setRouters(routers: RouteRecordRaw[]) {
      this.$patch((state) => {
        state.addRouters = routers;
        state.routers = constantRoutes.concat(routers);
      });
    },
    setMenus(menus: RouteRecordRaw[]) {
      this.$patch((state) => {
        state.menus = menus;
      });
    },
    async generateRoutes(roles: Auth.RoleType[]) {
      let routes: RouteRecordRaw[] = [];

      if (roles.includes(RoleEnum.ADMIN)) {
        routes = asyncRoutes;
      } else {
        routes = filterAsyncRoutes(asyncRoutes, roles);
      }

      this.setRouters(routes);
      this.setMenus(routes);
      return toRaw(routes);
    },
  },
});
