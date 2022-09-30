import { defineAsyncComponent, h } from "vue";
import type { AsyncComponentLoader } from "vue";
import { NAlert, NSpin } from "naive-ui";

interface Options {
  size?: "small" | "medium" | "large" | number;
  delay?: number;
  timeout?: number;
  loading?: boolean;
  retry?: boolean;
}

export function useAsyncComponents(
  loader: AsyncComponentLoader,
  options: Options = {}
) {
  const { size = "small", delay = 1000, timeout = 30000 } = options;

  return defineAsyncComponent({
    loader,
    loadingComponent: h(NSpin, { size: size }),
    errorComponent: h(
      NAlert,
      { title: "Error", type: "error" },
      {
        default: () => {
          "alert";
        },
      }
    ),
    delay,
    timeout,
    suspensible: false,
    onError(error, retry, fail, attempts) {
      if (error.message.match(/fetch/) && attempts <= 3) {
        retry();
      } else {
        fail();
      }
    },
  });
}
