import type { MockMethod } from "vite-plugin-mock";

const testModule: MockMethod[] = [
  {
    url: "/api/get",
    method: "get",
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    response: ({ query }) => {
      return {
        code: 0,
        data: {
          name: "vben",
        },
      };
    },
  },
  {
    url: "/api/post",
    method: "post",
    timeout: 2000,
    response: {
      code: 0,
      data: {
        name: "vben",
      },
    },
  },
];

export default testModule;
