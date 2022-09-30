<template>
  <n-space vertical :size="12">
    <n-h2 style="margin-bottom: 0">{{ $t("audioConverter.audioList") }}</n-h2>
    <n-p class="mt-0">The description of this page - TBD</n-p>
    <n-hr />
    <!-- @FIXME: make it a modal instead -->
    <AudioConverterFileForm />
    <n-hr />
    <AudioConverterFileTable />
  </n-space>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AudioConverterFileForm from "./form.vue";
import AudioConverterFileTable from "./table.vue";
import { fetchAudios } from "@/services/audio-converter";

export default defineComponent({
  name: "AudioConverterLive",
  components: { AudioConverterFileForm, AudioConverterFileTable },
  async setup() {
    const { data } = await fetchAudios({
      page: 1,
      max_result: 5,
      order_by: "create_time",
      order_direction: -1,
      add_audio_url: true,
    });

    console.log(data);

    return {};
  },
});
</script>
