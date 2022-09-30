<template>
  <div class="w-full h-screen flex flex-col">
    <div :class="['h-20', 'flex-between', 'px-12']">
      <AppLogo />
      <div class="flex-y-center gap-4">
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
    <div class="flex-1 flex items-center justify-center">
      <div class="md:w-sm w-full text-black">
        <RouterView />
      </div>
    </div>
    <div :class="['h-20', 'flex-between', 'px-12']">
      <span>@{{ year }} <strong>Company</strong></span>
      <div class="grid grid-cols-4">
        <CustomLink href="https://google.com" title="Term" underline strong />
        <CustomLink
          href="https://google.com"
          title="Privacy"
          underline
          strong
        />
        <CustomLink
          href="https://google.com"
          title="Security"
          underline
          strong
        />
        <CustomLink
          href="/dashboard/console"
          title="Get In Touch"
          underline
          strong
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import dayjs from "dayjs";

export default defineComponent({
  name: "AuthLayout",
  setup() {
    const year = dayjs().year();

    return {
      year,
    };
  },
});
</script>
