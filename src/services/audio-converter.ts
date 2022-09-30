import { useMyFetch } from "../composables/useFetch";

export function fetchAudios(payload: TypeUtil.FixTypeLater) {
  const { page, max_result, order_by, order_direction, add_audio_url } =
    payload;
  return useMyFetch<TypeUtil.FixTypeLater>(
    `analytic/v1/audios?page=${page}&max_result=${max_result}&order_by=${order_by}&order_direction=${order_direction}&add_audio_url=${add_audio_url}`
  )
    .get()
    .json();
}
