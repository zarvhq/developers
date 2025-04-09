import { defineConfig, type DefaultTheme } from 'vitepress'
import { services } from '../../en/reference/api/services'

export const en = defineConfig({
  lang: 'en-US',
  description: 'Protection for every step of your journey.',

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
      text: 'Guide',
      link: '/guide/getting-started',
      activeMatch: '/guide/',
    },
    {
      text: 'Reference',
      link: '/reference/getting-started',
      activeMatch: '/reference/',
    },
    {
      text: 'Status Page',
      link: 'https://status.zarv.com',
    },
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Guide',
      items: [
        { text: 'Getting Started', link: 'getting-started' },
        { text: 'API', link: 'api' },
        { text: 'SDKs', link: 'sdk' },
      ],
    },
    {
      text: 'For Insurance',
      items: [
        { text: 'Underwriting', link: 'insurance/underwriting' },
        { text: 'Risk Exposure', link: 'insurance/risk-exposure' },
        { text: 'Investigations', link: 'insurance/investigations' },
        { text: 'Request Token', base: '/', link: 'request-token?origin=insurance' },
        { text: 'API Reference', link: 'insurance/api-reference' },
      ],
    },
    {
      text: 'For Credit',
      items: [
        { text: 'Risk Score', link: 'credit/risk-score' },
        { text: 'Default Recovery', link: 'credit/default-recovery' },
        { text: 'Pricing', link: 'credit/pricing' },
        { text: 'Request Token', base: '/', link: 'request-token?origin=credit' },
        { text: 'API Reference', link: 'credit/api-reference' },
      ],
    },
    // {
    //   text: 'For Fleets',
    //   items: [
    //     { text: 'Risk Score', link: 'fleets/risk-score' },
    //     { text: 'Default Recovery', link: 'fleets/default-recovery' },
    //     { text: 'Road Safety', link: 'fleets/road-safety' },
    //     { text: 'Pricing', link: 'fleets/pricing' },
    //     { text: 'Request Token', link: 'fleets/request-token' },
    //     { text: 'API Reference', link: 'insurance/api-reference' },
    //   ],
    // },
    {
      text: 'For Governments',
      items: [
        { text: 'Why Zarv?', link: 'governments/why-zarv' },
        { text: 'Safety Reports', link: 'governments/safety-reports' },
        { text: 'Road Safety', link: 'governments/road-safety' },
        { text: 'Request Token', base: '/', link: 'request-token?origin=government' },
        { text: 'API Reference', link: 'insurance/api-reference' },
      ],
    },
    {
      text: 'For Data Providers',
      items: [
        { text: 'Opex Improvement', link: 'data-providers/why-zarv' },
        { text: 'LPR Devices', link: 'data-providers/lpr-devices' },
        { text: 'GPS Devices', link: 'data-providers/gps-devices' },
        { text: 'Request Token', base: '/', link: 'request-token?origin=data-provider' },
        { text: 'API Reference', link: 'data-providers/api-reference' },
      ],
    },
    {
      text: 'Privacy',
      collapsed: true,
      items: [
        { text: 'Privacy Policy', link: 'privacy/privacy-policy' },
        { text: 'Terms of Service', link: 'privacy/terms-of-service' },
        { text: 'Data Protection', link: 'privacy/data-protection' },
        { text: 'Data Retention', link: 'privacy/data-retention' },
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
      text: 'Reference',
      collapsed: false,
      items: [
        { text: 'Getting Started', link: 'getting-started' },
        { text: 'Authentication', link: 'authentication' },
        { text: 'Errors', link: 'errors' },
        { text: 'Rate Limits', link: 'rate-limits' },
        { text: 'Access Token', base: '/', link: 'request-token' },
      ],
    },
    {
      text: 'Services',
      items: services.map((service: any) => ({
        text: service.label,
        link: `/api/${service.slug}`,
      })),
    },
  ]
}
