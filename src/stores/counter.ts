import { defineStore } from "pinia";

export interface ICounterState {
  counter: number;
}

export const useCounterStore = defineStore({
  id: "counter",
  state: (): ICounterState => ({
    counter: 0,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
});
