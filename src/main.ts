import { createApp } from "vue";

import "uno.css";
import "@unocss/reset/normalize.css";

import App from "./App.vue";
import { setupNaive } from "./plugins/naive";
import { setupRouter } from "./router";
import { setupStore } from "./stores";
import { setupI18n } from "./i18n";

async function bootstrap() {
  const app = createApp(App);

  setupNaive(app);
  setupI18n(app);
  setupStore(app);
  await setupRouter(app);

  app.mount("#app");
}

void bootstrap();
