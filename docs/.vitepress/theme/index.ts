// https://vitepress.dev/guide/custom-theme
import type { Theme } from "vitepress";
import { theme, useOpenapi } from "vitepress-openapi/client";
import DefaultTheme from "vitepress/theme";
import { h } from "vue";

import "vitepress-openapi/dist/style.css";
import "./style.css";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  async enhanceApp({ app, router, siteData }) {
    useOpenapi({
      config: {},
    });

    theme.enhanceApp({ app, router, siteData });
  },
} satisfies Theme;
