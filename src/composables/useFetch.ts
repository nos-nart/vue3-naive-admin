import { createFetch } from "@vueuse/core";
import { useGlobalToken } from "./useGlobalToken";
import { StatusCodes } from "http-status-codes";
import { fetchRefreshToken } from "@/services/auth";

export const useMyFetch = createFetch({
  baseUrl: import.meta.env.VITE_API_URL,
  options: {
    timeout: 10000,
    async beforeFetch({ options }) {
      options.headers = {
        ...options.headers,
        Authorization: `Basic ${useGlobalToken.value}`,
      };

      return { options };
    },
    onFetchError(ctx) {
      console.log(ctx);
      // @TODO: redirect on status code and show message
      return ctx;
    },
    async afterFetch(ctx) {
      const { response } = ctx;

      if (response.status === StatusCodes.UNAUTHORIZED) {
        await fetchRefreshToken();
      }

      return ctx;
    },
  },
  fetchOptions: {
    mode: "cors",
  },
});
