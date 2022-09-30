import { useMyFetch } from "../composables/useFetch";

interface IUserResponse {
  activated: string;
  allow_features: Array<string>;
  email: string;
  group: Array<unknown>;
  create_time: string;
  id: string;
  full_name: string;
  update_time: string;
  group_id: string;
  user_code: string;
  phone_number: string;
}

export function fetchUser() {
  return useMyFetch<IUserResponse>("authen/api/v1/auth/user").get().json();
}
