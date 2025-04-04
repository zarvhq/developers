import { defineConfig, type DefaultTheme } from 'vitepress'

export const pt = defineConfig({
  lang: 'pt-BR',
  description: 'Gerador de sites estáticos com Vite e Vue.',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/guia/': { base: '/guia/', items: sidebarGuide() },
      '/referencia/': { base: '/referencia/', items: sidebarReference() },
    },
  },
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Guia',
      link: '/guia/o-que-e-vitepress',
      activeMatch: '/guia/',
    },
    {
      text: 'Referência',
      link: '/referencia/configuracao-do-site',
      activeMatch: '/referencia/',
    },
    {
      text: 'v1',
      items: [
        {
          text: 'Changelog',
          link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md',
        },
        {
          text: 'Contribuindo',
          link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md',
        },
      ],
    },
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Introdução',
      collapsed: false,
      items: [
        { text: 'O que é o VitePress?', link: 'o-que-e-vitepress' },
        { text: 'Começando', link: 'comecando' },
        { text: 'Roteamento', link: 'roteamento' },
        { text: 'Deploy', link: 'deploy' },
      ],
    },
    {
      text: 'Escrevendo',
      collapsed: false,
      items: [
        { text: 'Extensões de Markdown', link: 'markdown' },
        { text: 'Manipulação de Assets', link: 'manipulacao-de-assets' },
        { text: 'Frontmatter', link: 'frontmatter' },
        { text: 'Usando Vue no Markdown', link: 'usando-vue' },
        { text: 'Internacionalização', link: 'i18n' },
      ],
    },
    {
      text: 'Customização',
      collapsed: false,
      items: [
        { text: 'Usando um Tema Customizado', link: 'tema-customizado' },
        {
          text: 'Estendendo o Tema Padrão',
          link: 'estendendo-tema-padrao',
        },
        { text: 'Carregamento de Dados em Tempo de Build', link: 'carregamento-de-dados' },
        { text: 'Compatibilidade SSR', link: 'compatibilidade-ssr' },
        { text: 'Conectando a um CMS', link: 'cms' },
      ],
    },
    {
      text: 'Experimental',
      collapsed: false,
      items: [
        { text: 'Modo MPA', link: 'modo-mpa' },
        { text: 'Geração de Sitemap', link: 'geracao-de-sitemap' },
      ],
    },
    {
      text: 'Configuração & Referência de API',
      base: '/referencia/',
      link: 'configuracao-do-site',
    },
  ]
}

function sidebarReference(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Referência',
      items: [
        { text: 'Configuração do Site', link: 'configuracao-do-site' },
        { text: 'Configuração do Frontmatter', link: 'configuracao-do-frontmatter' },
        { text: 'API de Runtime', link: 'api-de-runtime' },
        { text: 'CLI', link: 'cli' },
        {
          text: 'Tema Padrão',
          base: '/referencia/tema-padrao-',
          items: [
            { text: 'Visão Geral', link: 'configuracao' },
            { text: 'Navegação', link: 'navegacao' },
            { text: 'Barra Lateral', link: 'barra-lateral' },
            { text: 'Página Inicial', link: 'pagina-inicial' },
            { text: 'Rodapé', link: 'rodape' },
            { text: 'Layout', link: 'layout' },
            { text: 'Badge', link: 'badge' },
            { text: 'Página da Equipe', link: 'pagina-da-equipe' },
            { text: 'Links Anterior / Próximo', link: 'links-anterior-proximo' },
            { text: 'Link de Edição', link: 'link-de-edicao' },
            { text: 'Última Atualização', link: 'ultima-atualizacao' },
            { text: 'Busca', link: 'busca' },
            { text: 'Anúncios Carbon', link: 'anuncios-carbon' },
          ],
        },
      ],
    },
  ]
}
