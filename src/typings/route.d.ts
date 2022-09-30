import "vue-router";
import type { renderIcon } from "../utils";

declare module "vue-router" {
  interface RouteMeta {
    title: string;
    icon?: ReturnType<typeof renderIcon>;
    order?: number;
    ignoreAuth?: boolean;
    roles?: Auth.RoleType[];
  }
}
