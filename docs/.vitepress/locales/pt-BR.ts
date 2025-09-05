export default {
  // Theme configuration
  outline: {
    label: "Nesta página",
  },

  docFooter: {
    prev: "Página anterior",
    next: "Próxima página",
  },

  darkModeSwitchLabel: "Aparência",
  lightModeSwitchTitle: "Mudar para tema claro",
  darkModeSwitchTitle: "Mudar para tema escuro",

  sidebarMenuLabel: "Menu",
  returnToTopLabel: "Voltar ao topo",

  lastUpdated: {
    text: "Atualizado em",
    formatOptions: {
      dateStyle: "short" as const,
      timeStyle: "medium" as const,
    },
  },

  editLink: {
    pattern: "https://github.com/zarv/developers/edit/main/docs/:path",
    text: "Editar esta página no GitHub",
  },

  footer: {
    message:
      '<div style="color: #c0c0c0;font-size:0.9em;margin-bottom:10px"><a href="https://www.zarv.com/legal/tos/?utm_source=developers&utm_campaign=footer">Termos de uso</a> | <a href="https://www.zarv.com/legal/privacy/?utm_source=developers&utm_campaign=footer">Politica de privacidade</a></div>',
    copyright: `<div style="color: #c0c0c0; margin-bottom: 20px; font-size: 0.9em">Copyright © ${new Date().getFullYear()} <a href="https://www.zarv.com/?utm_source=developers&utm_campaign=footer">Zarv Inc</a>. Todos os direitos reservados.</div>`,
  },

  // Search translations
  search: {
    provider: "local" as const,
    options: {
      translations: {
        button: {
          buttonText: "Pesquisar",
          buttonAriaLabel: "Pesquisar",
        },
        modal: {
          noResultsText: "Nenhum resultado encontrado",
          resetButtonTitle: "Limpar pesquisa",
          footer: {
            selectText: "para selecionar",
            navigateText: "para navegar",
            closeText: "para fechar",
            searchByText: "pesquisado por",
          },
        },
      },
    },
  },
};
