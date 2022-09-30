import type { MockMethod } from "vite-plugin-mock";
import { Random } from "mockjs";

const authModule: MockMethod[] = [
  {
    url: "/api/onlogin",
    method: "get",
    response: () => {
      return {
        code: 200,
        message: "ok",
        data: {
          permList: [
            "/dashboard",
            "/dashboard/analysis",
            "/dashboard/workbench",
          ],
          other: Random.integer(1, 100),
        },
      };
    },
  },
];

export default authModule;
