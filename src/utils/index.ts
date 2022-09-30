import { h } from "vue";
import type { Component } from "vue";
import { NIcon } from "naive-ui";
import type { RouteRecordRaw } from "vue-router";
import { RouterLink } from "vue-router";
import type { MenuOption } from "naive-ui";

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

function sortRoute(a: RouteRecordRaw, b: RouteRecordRaw) {
  return (a.meta?.order || 0) - (b.meta?.order || 0);
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function generateMenu(rawMenu: RouteRecordRaw[]): MenuOption[] {
  return rawMenu.map((i) => {
    const { children = [], name, meta, path } = i;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const currentMenu: any = {
      label: () =>
        h(
          RouterLink,
          {
            to: { path },
          },
          { default: () => meta?.title }
        ),
      key: name,
      icon: meta?.icon,
    };
    if (children.length >= 1) {
      currentMenu.children = generateMenu(children);
    }
    return currentMenu;
  });
}

const regExp = {
  email: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
} as const;

type PartsOfDay = "morning" | "afternoon" | "evening" | "night";
const getPartsOfDay = (hour: number) =>
  ({
    [(hour >= 5 && hour < 12).toString()]: "morning",
    [(hour >= 12 && hour < 17).toString()]: "afternoon",
    [(hour >= 17 && hour < 21).toString()]: "evening",
    [(hour >= 21 || (hour >= 0 && hour < 5)).toString()]: "night",
  }["true"] as PartsOfDay);

export { sleep, renderIcon, sortRoute, generateMenu, regExp, getPartsOfDay };
