import { defineConfig } from "vitepress";
import { useSidebar } from "vitepress-openapi";
import spec from "../public/openapi/zarv-api.json" with { type: "json" };
import collectorSpec from "../public/openapi/collector-api.json" with { type: "json" };

import ptBR from "./locales/pt-BR.ts";

const sidebar = useSidebar({ spec, linkPrefix: "/api/" });
const collectorSidebar = useSidebar({ spec: collectorSpec, linkPrefix: "/collector/" });

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
      { text: "Referência de API", link: "/api" },
      {
        text: "Status Page",
        link: "https://status.zarv.com",
        target: "_blank",
      },
    ],

    sidebar: {
      "/detran/": [],
      "/collector/": [
        {
          text: "Introdução",
          link: "/intro",
        },
        {
          text: "Autenticação",
          link: "/collector/authentication",
        },
        ...collectorSidebar.generateSidebarGroups(),
      ],
      "/api/": [
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
        {
          text: "Webhook de Verificação",
          link: "/api/webhook",
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
