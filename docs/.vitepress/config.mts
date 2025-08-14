import { defineConfig } from "vitepress";
import { useSidebar } from "vitepress-openapi";
import spec from "../public/openapi/zarv-api.json" with { type: "json" };

const sidebar = useSidebar({ spec, linkPrefix: "/api/" });

export default defineConfig({
  title: "Developers",
  description:
    "Welcome to the Zarv Developers Documentation - your hub for building with Zarv's embedded insurance and risk management platform. Here you'll find guides, API references, SDKs, and integration tutorials to help you onboard, protect, and manage assets using Zarv's powerful data, AI, and IoT capabilities.",

  lang: "pt-BR",
  base: "/",
  outDir: "../dist",

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  themeConfig: {
    logo: {
      src: "/images/brand/zarv-logo-mini.svg",
      width: 24,
      height: 24,
    },

    nav: [
      { text: "Home", link: "/" },
      { text: "Referência de API", link: "/api" },
      {
        text: "Status Page",
        link: "https://status.zarv.com",
        target: "_blank",
      },
    ],

    sidebar: [
      {
        text: "Introdução",
        link: "/intro",
      },
      {
        text: "Autenticação",
        link: "/api/authentication",
      },
      {
        text: "Referência de API",
        link: "/api",
      },
      ...sidebar.generateSidebarGroups(),
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/zarvhq" },
      { icon: "linkedin", link: "https://linkedin.com/company/zarv" },
    ],

    footer: {
      message:
        '<div style="color: #c0c0c0;font-size:0.9em;margin-bottom:10px"><a href="https://www.zarv.com/legal/tos/?utm_source=developers&utm_campaign=footer">Termos de uso</a> | <a href="https://www.zarv.com/legal/privacy/?utm_source=developers&utm_campaign=footer">Politica de privacidade</a></div>',
      copyright: `<div style="color: #c0c0c0; margin-bottom: 20px; font-size: 0.9em">Copyright © ${new Date().getFullYear()} <a href="https://www.zarv.com/?utm_source=developers&utm_campaign=footer">Zarv Inc</a>. Todos os direitos reservados.</div>`,
    },
  },
});
