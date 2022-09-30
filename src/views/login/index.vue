<template>
  <n-h1>{{ $t("messages.login") }}</n-h1>
  <n-p>{{ $t("login.welcome") }} 👋</n-p>
  <n-form ref="formRef" :model="formValue" :rules="rules">
    <div class="mb-12">
      <n-form-item path="email" label="Email">
        <n-auto-complete
          v-model:value="formValue.email"
          :options="autoCompleteOptions"
          @keydown.enter.prevent
          placeholder="example@domain.com"
        />
      </n-form-item>
      <n-form-item path="password" :label="$t('login.password.label')">
        <n-input
          v-model:value="formValue.password"
          type="password"
          show-password-on="click"
          @keydown.enter.prevent
          :placeholder="$t('login.password.placeholder')"
        />
      </n-form-item>
      <div class="text-right">
        <custom-link
          underline
          href="/xac-thuc-khach-xem"
          :title="$t('login.joinByMeetingID')"
        />
      </div>
    </div>
    <n-row :gutter="[0, 24]">
      <n-col :span="24">
        <n-button
          attr-type="submit"
          type="primary"
          class="w-full"
          @click="handleLogin"
        >
          {{ $t("messages.login") }}
        </n-button>
      </n-col>
    </n-row>
  </n-form>
  <screen-loader :show="isFetching" />
</template>

<script lang="ts">
import { ref, defineComponent, computed } from "vue";
import type { FormInst, FormRules, FormItemRule } from "naive-ui";
import { useAuthStore } from "@/stores/modules/auth";
import router from "@/router";
import { regExp } from "@/utils";
import { useI18n } from "vue-i18n";
import { StatusCodes } from "http-status-codes";
import { storeToRefs } from "pinia";

export default defineComponent({
  name: "LoginPage",
  setup() {
    const formRef = ref<FormInst | null>(null);
    const formValue = ref({ email: "", password: "" });
    const { login } = useAuthStore();
    const { isFetching } = storeToRefs(useAuthStore());
    const { t } = useI18n();

    const rules: FormRules = {
      email: [
        {
          required: true,
          validator(rule: FormItemRule, value: string) {
            if (!value || !regExp.email.test(value)) {
              return new Error(t("login.validate.email"));
            }

            return true;
          },
          trigger: ["input", "blur"],
        },
      ],
      password: [
        {
          required: true,
          validator(rule: FormItemRule, value: string) {
            if (value.length < 6) {
              return new Error(t("login.validate.password"));
            }
            return true;
          },
          trigger: ["input", "blur"],
        },
      ],
    };

    const autoCompleteOptions = computed(() => {
      return ["@gmail.com", "@mydomain.vn"].map((suffix) => {
        const prefix = formValue.value.email.split("@")[0];
        return {
          label: prefix + suffix,
          value: prefix + suffix,
        };
      });
    });

    function handleLogin(e: MouseEvent) {
      e.preventDefault();
      formRef.value?.validate(async (errors) => {
        if (!errors) {
          const { email, password } = formValue.value;
          const statusCode = await login(email, password);

          if (statusCode === StatusCodes.OK) {
            window.$notification?.success({
              content: t("login.successMessage"),
            });

            const path = "/audio-converter/file";
            router.push({ path });
          } else {
            window.$notification?.error({ content: t("login.failedMessage") });
          }
        } else {
          window.$message?.warning(t("login.invalidEmailPassword"));
        }
      });
    }

    return {
      isFetching,
      formValue,
      formRef,
      handleLogin,
      rules,
      autoCompleteOptions,
    };
  },
});
</script>
