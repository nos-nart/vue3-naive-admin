import { createProdMockServer } from "vite-plugin-mock/es/createProdMockServer";
import testModule from "./test";
import authModule from "./auth";

export function setupProdMockServer() {
  createProdMockServer([...testModule, ...authModule]);
}
