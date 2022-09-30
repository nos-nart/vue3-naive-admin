import type { Router, RouteRecordRaw } from "vue-router";
import { isNavigationFailure } from "vue-router";
import { useTitle } from "@vueuse/core";
import { PageEnum } from "@/enums";
import { useGlobalToken } from "@/composables/useGlobalToken";
import { useAsyncRouteStore } from "@/stores/modules/async-route";

const { LOGIN_PATH } = PageEnum;
const whiteListPath: Array<PageEnum> = [LOGIN_PATH];

export function createRouterGuards(router: Router) {
  const $loading = window.$loadingBar;
  const asyncRouteStore = useAsyncRouteStore();

  router.beforeEach(async (to, from, next) => {
    $loading?.start();
    const token = useGlobalToken.value;

    if (whiteListPath.includes(to.path as PageEnum)) {
      if (to.path === LOGIN_PATH && token) {
        next({ path: "/dashboard/console" });
        return;
      }
      next();
      return;
    }

    if (!token) {
      if (to.meta.ignoreAuth) {
        next();
        return;
      }

      const redirectData: {
        path: string;
        replace: boolean;
        query?: TypeUtil.Recordable<string>;
      } = {
        path: LOGIN_PATH,
        replace: true,
      };
      if (to.path) {
        redirectData.query = {
          ...redirectData.query,
          redirect: to.path,
        };
      }
      next(redirectData);
      return;
    }

    const routes = await asyncRouteStore.generateRoutes(["USER"]);
    routes.forEach((route: RouteRecordRaw) => {
      router.addRoute(route);
    });

    if (
      from.path === LOGIN_PATH &&
      to.path === "/dashboard/console" &&
      to.name === "not-found"
    ) {
      next("/dashboard/console");
      return;
    } else {
      next();
    }
  });

  router.afterEach((to, _from, failure) => {
    useTitle(to.meta.title as string);

    if (isNavigationFailure(failure)) {
      console.log("Navigate failure ", failure);
    }

    $loading?.finish();
  });

  router.onError((error) => {
    console.log(error, "Navigate error");
  });
}
