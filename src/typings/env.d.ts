/// <reference types="vite/client" />
interface ServiceCOnfig {
  url: string;
}

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_APP_NAME: string;
  readonly VITE_APP_TITLE: string;
  readonly VITE_APP_DESC: string;
  readonly VITE_ROUTE_HOME_PATH: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
