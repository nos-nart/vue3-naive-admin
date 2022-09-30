import { useFetch } from "@vueuse/core";
import { unref } from "vue";
import { StatusCodes } from "http-status-codes";
import { useGlobalRefreshToken } from "@/composables/useGlobalRefreshToken";
import { useGlobalToken } from "@/composables/useGlobalToken";

interface ILoginResponse {
  access_token: string;
  expire_after: number;
  expire_at: number;
  refresh_token: string;
  user_id: string;
}

export function fetchLogin(email: string, password: string) {
  return useFetch<ILoginResponse>(
    "http://myserver.com/authen/api/v1/auth/login",
    {
      timeout: 10000,
    }
  )
    .json()
    .post({
      email,
      password,
      ib: true,
    });
}

export async function fetchRefreshToken() {
  const { data, statusCode } = await useFetch("api/v2/token").json().post({
    refresh_token: useGlobalRefreshToken.value,
  });

  if (unref(statusCode) === StatusCodes.OK) {
    useGlobalToken.value = unref(data).value.access_token;
  } else {
    useGlobalRefreshToken.value = null;
    useGlobalToken.value = null;
  }
}
