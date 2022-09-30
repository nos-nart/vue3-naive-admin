import { defineStore } from "pinia";
import { unref } from "vue";
import { fetchLogin } from "@/services/auth";
import type { IAuthStore } from "../types";
import { StatusCodes } from "http-status-codes";
import { useGlobalToken } from "@/composables/useGlobalToken";
import { useGlobalRefreshToken } from "@/composables/useGlobalRefreshToken";
import { fetchUser } from "@/services/user";

export const useAuthStore = defineStore({
  id: "app-user",
  state: (): IAuthStore => ({
    userInfo: {},
    token: "",
    isFetching: false,
  }),
  getters: {
    isLogin(state) {
      return Boolean(state.token);
    },
    getFetching(state) {
      return state.isFetching;
    },
  },
  actions: {
    resetAuthStore() {
      useGlobalToken.value = null;
      this.$reset();
    },
    async logout() {
      this.resetAuthStore();
      return Promise.resolve("");
    },
    async login(email: string, password: string) {
      try {
        this.isFetching = true;
        const { data, statusCode, error } = await fetchLogin(email, password);

        if (error) {
          throw new Error(error.value);
        }

        // @NOTE:
        // Temporarily keep token within browser storage (vulnerable to XSS)
        // save it into the service worker
        if (unref(statusCode) === StatusCodes.OK) {
          this.token = unref(data.value.access_token);
          useGlobalToken.value = unref(data.value.access_token);
          useGlobalRefreshToken.value = unref(data.value.refresh_token);

          this.isFetching = false;
          return await this.getUserInfo();
        }
      } catch (error) {
        this.isFetching = false;
        this.resetAuthStore();
        throw new Error(error as any);
      }
    },
    async getUserInfo() {
      if (!this.token) {
        return null;
      }

      const { data: userInfo, statusCode } = await fetchUser();
      this.$patch((state) => {
        state.userInfo = unref(userInfo);
      });

      return unref(statusCode);
    },
  },
});
