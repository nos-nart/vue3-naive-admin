import type { ICounterState } from "./counter";

export interface IStore {
  counter: ICounterState;
}

export interface IAuthStore {
  userInfo: Record<string, string | number | Array<string>>;
  token: string;
  isFetching: boolean;
}
