// https://vue-i18n.intlify.dev/guide/advanced/typescript.html#global-resource-schema-type-definition
import { createI18n } from "vue-i18n";
import type { App } from "vue";
import localeEn from "./en";
import localeViVn from "./vi-vn";
import {
  loginEn,
  loginViVn,
  audioConverterEn,
  audioConverterViVn,
} from "./pages";
import { useGlobalI18n } from "@/composables/useGlobalI18n";

const messages = {
  ["vi-vn"]: {
    login: loginViVn.default,
    messages: localeViVn,
    audioConverter: audioConverterViVn.default,
  },
  ["en"]: {
    login: loginEn.default,
    messages: localeEn,
    audioConverter: audioConverterEn.default,
  },
};

const lang = useGlobalI18n();
const i18n = createI18n({
  legacy: false, // to use Composition API
  locale: lang.value,
  fallbackLocale: "vi-vn",
  messages,
});

export function setupI18n(app: App<Element>) {
  app.use(i18n);
}
