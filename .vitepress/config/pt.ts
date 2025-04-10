import { defineConfig, type DefaultTheme } from 'vitepress'
import { services } from '../../services.config'

export const pt = defineConfig({
  lang: 'pt-BR',
  description: 'Zarv é uma plataforma de gerenciamento de riscos baseada em IA que ajuda organizações a identificar, avaliar e mitigar riscos em tempo real.',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/guide/': { base: '/guide/', items: sidebarGuide() },
      '/reference/': { base: '/reference/', items: sidebarReference() },
    },
  },
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Guia',
      link: '/guide/getting-started',
      activeMatch: '/guide/',
    },
    {
      text: 'Referência',
      link: '/reference/getting-started',
      activeMatch: '/reference/',
    },
    {
      text: 'Página de Status',
      link: 'https://status.zarv.com',
    },
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Guia',
      items: [
        { text: 'Introdução', link: 'getting-started' },
        { text: 'API', link: 'api' },
        { text: 'SDKs', link: 'sdk' },
        { text: 'Referência da API', base: 'reference/', link: 'getting-started' },
      ],
    },
    {
      text: 'Para Seguros',
      items: [
        { text: 'Subscrição', link: 'insurance/underwriting' },
        { text: 'Exposição ao Risco', link: 'insurance/risk-exposure' },
        { text: 'Investigações', link: 'insurance/investigations' },
        { text: 'Solicitar Token', base: '/', link: 'request-token#origin=insurance' },
      ],
    },
    {
      text: 'Para Crédito',
      items: [
        { text: 'Pontuação de Risco', link: 'credit/risk-score' },
        { text: 'Recuperação de Inadimplência', link: 'credit/default-recovery' },
        { text: 'Precificação', link: 'credit/pricing' },
        { text: 'Solicitar Token', base: '/', link: 'request-token#origin=credit' },
      ],
    },
    {
      text: 'Para Governos',
      items: [
        { text: 'Por que Zarv?', link: 'governments/why-zarv' },
        { text: 'Relatórios de Segurança', link: 'governments/safety-reports' },
        { text: 'Segurança Viária', link: 'governments/road-safety' },
        { text: 'Solicitar Token', base: '/', link: 'request-token#origin=government' },
      ],
    },
    {
      text: 'Para Provedores de Dados',
      items: [
        { text: 'Melhoria de Opex', link: 'data-partners/why-zarv' },
        { text: 'Dispositivos LPR', link: 'data-partners/lpr-devices' },
        { text: 'Dispositivos GPS', link: 'data-partners/gps-devices' },
        { text: 'Solicitar Token', base: '/', link: 'request-token#origin=data-partner' },
        { text: 'Referência da API', base: 'reference/', link: 'collector' },
      ],
    },
    {
      text: 'Privacidade',
      collapsed: true,
      items: [
        { text: 'Política de Privacidade', link: 'privacy/privacy-policy' },
        { text: 'Termos de Serviço', link: 'privacy/terms-of-service' },
        { text: 'Proteção de Dados', link: 'privacy/data-protection' },
        { text: 'Retenção de Dados', link: 'privacy/data-retention' },
        { text: 'LGPD', link: 'privacy/lgpd' },
        { text: 'GDPR', link: 'privacy/gdpr' },
        { text: 'CCPA', link: 'privacy/ccpa' },
      ],
    },
  ]
}

function sidebarReference(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Referência',
      collapsed: false,
      items: [
        { text: 'Introdução', link: 'getting-started' },
        { text: 'Autenticação', link: 'authentication' },
        { text: 'Erros', link: 'errors' },
        { text: 'Limites de Taxa', link: 'rate-limits' },
        { text: 'Token de Acesso', base: '/', link: 'request-token' },
      ],
    },
    {
      text: 'Serviços',
      items: services.map((service: any) => ({
        text: service.label,
        link: `/api/${service.slug}`,
      })),
    },
  ]
}
