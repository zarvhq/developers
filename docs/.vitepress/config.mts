import { defineConfig } from "vitepress";
import { useSidebar } from "vitepress-openapi";
import collectorSpec from "../public/openapi/collector-api.json" with { type: "json" };
import zarvIdSpec from "../public/openapi/zarv-api.json" with { type: "json" };

import ptBR from "./locales/pt-BR.ts";

const sidebar = useSidebar({ spec: zarvIdSpec, linkPrefix: "/api/zarv-id/" });
const collectorSidebar = useSidebar({
  spec: collectorSpec,
  linkPrefix: "/api/collector/",
});

export default defineConfig({
  locales: {
    root: {
      label: "Português (Brasil)",
      lang: "pt-BR",
      title: "Developers",
      description:
        "Bem vindo à documentação para desenvolvedores da Zarv - seu hub para construir com a plataforma de seguro e gerenciamento de riscos integrada da Zarv. Aqui você encontrará guias, referências de API, SDKs, e tutoriais de integração para ajudar você a se integrar, proteger, e gerenciar ativos usando as capacidades poderosas de dados, IA, e IoT da Zarv.",
      themeConfig: ptBR,
    },
  },

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
      { text: "Referência das API's", link: "/api" },
      {
        text: "Status Page",
        link: "https://status.zarv.com",
        target: "_blank",
      },
    ],

    sidebar: {
      "/detran/": [],
      "/api/collector/": [
        {
          text: "Autenticação",
          link: "/api/collector/authentication",
        },
        {
          text: "Referência da API",
          link: "/api/collector",
        },
        ...collectorSidebar.generateSidebarGroups(),
      ],
      "/api/zarv-id/": [
        {
          text: "Autenticação",
          link: "/api/zarv-id/authentication",
        },
        {
          text: "Webhook de Verificação",
          link: "/api/zarv-id/webhook",
        },
        {
          text: "Referência da API",
          link: "/api/zarv-id",
        },
        ...sidebar.generateSidebarGroups(),
      ],
      "/api/assets/": [
        {
          text: "Autenticação",
          link: "/api/assets/authentication",
        },
        {
          text: "Webhook de Verificação",
          link: "/api/assets/webhook",
        },
        {
          text: "Referência da API",
          link: "/api/assets",
        },
        ...sidebar.generateSidebarGroups(),
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/zarvhq" },
      { icon: "linkedin", link: "https://linkedin.com/company/zarv" },
    ],
  },
});
