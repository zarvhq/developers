import { defineConfig, type DefaultTheme } from 'vitepress'

export const en = defineConfig({
  lang: 'en-US',
  description: 'Protection for every step of your journey.',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/guide/': { base: '/guide/', items: sidebarGuide() },
      '/api/': { base: '/api/', items: sidebarApi() },
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
      link: '/api/getting-started',
      activeMatch: '/api/',
    },
    {
      text: 'Status',
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
        { text: 'Pricing', link: 'insurance/pricing' },
        { text: 'Request Token', link: 'insurance/request-token' },
        { text: 'API Reference', link: 'insurance/api-reference' },
      ],
    },
    {
      text: 'For Credit',
      items: [
        { text: 'Risk Score', link: 'credit/risk-score' },
        { text: 'Default Recovery', link: 'credit/default-recovery' },
        { text: 'Pricing', link: 'credit/pricing' },
        { text: 'Request Token', link: 'credit/request-token' },
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
        { text: 'Request Token', link: 'governments/request-token' },
        { text: 'API Reference', link: 'insurance/api-reference' },
      ],
    },
    {
      text: 'For Data Providers',
      items: [
        { text: 'Opex Improvement', link: 'data-providers/why-zarv' },
        { text: 'LPR Devices', link: 'data-providers/lpr-devices' },
        { text: 'GPS Devices', link: 'data-providers/gps-devices' },
        { text: 'Request Token', link: 'data-providers/request-token' },
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

function sidebarApi(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Reference',
      items: [
        { text: 'Getting Started', link: 'getting-started' },
        { text: 'Authentication', link: 'authentication' },
        { text: 'Errors', link: 'errors' },
        { text: 'Rate Limits', link: 'rate-limits' },
        { text: 'Webhooks', link: 'webhooks' },
      ],
    },
    {
      text: 'Services',
      collapsed: true,
      items: [
        { text: 'Assets', link: 'assets' },
        { text: 'Claims', link: 'claims' },
        { text: 'Coverages', link: 'coverages' },
        { text: 'Documents', link: 'documents' },
        { text: 'Events', link: 'events' },
        { text: 'Integrations', link: 'integrations' },
        { text: 'Policies', link: 'policies' },
        { text: 'Quotes', link: 'quotes' },
        { text: 'Risks', link: 'risks' },
        { text: 'Transactions', link: 'transactions' },
        { text: 'Policies', link: 'policies' },
        { text: 'Users', link: 'users' },
        { text: 'Webhooks', link: 'webhooks' },
      ],
    },
    {
      text: 'Experimental',
      collapsed: true,
      items: [
        { text: 'MPA Mode', link: 'mpa-mode' },
        { text: 'Sitemap Generation', link: 'sitemap-generation' },
      ],
    },
  ]
}
