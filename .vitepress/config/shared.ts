import { withMermaid } from 'vitepress-plugin-mermaid'
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
  localIconLoader,
} from 'vitepress-plugin-group-icons'
// import { search as esSearch } from './es'
// import { search as ptSearch } from './pt'

const headConfig: any[] = [
  ['link', { rel: 'preconnect', href: 'https://cdn.zarv.com' }],
  ['link', { rel: 'preconnect', href: 'https://cdn.segment.com' }],
  ['link', { rel: 'preconnect', href: 'https://api.segment.io' }],
  ['link', { rel: 'preconnect', href: 'https://www.googletagmanager.com' }],
  ['link', { rel: 'icon', type: 'image/svg+xml', href: '/images/brand/zarv-logo-mini.svg' }],
  ['link', { rel: 'icon', type: 'image/png', href: '/images/brand/arv-logo-mini.png' }],
  ['meta', { name: 'theme-color', content: '#5d2a7c' }],
  ['meta', { property: 'og:type', content: 'website' }],
  ['meta', { property: 'og:locale', content: 'en' }],
  ['meta', { property: 'og:title', content: 'Zarv Developers' }],
  ['meta', { property: 'og:site_name', content: 'Zarv Developers' }],
  ['meta', { property: 'og:image', content: 'https://developers.zarv.com/images/brand/zarv-developers-og.jpg' }],
  ['meta', { property: 'og:url', content: 'https://developers.zarv.com/' }],
]

if (process.env.NODE_ENV === 'production') {
  headConfig.push(['script', {}, `!function(){var i="analytics",analytics=window[i]=window[i]||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","screen","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware","register"];analytics.factory=function(e){return function(){if(window[i].initialized)return window[i][e].apply(window[i],arguments);var n=Array.prototype.slice.call(arguments);if(["track","screen","alias","group","page","identify"].indexOf(e)>-1){var c=document.querySelector("link[rel='canonical']");n.push({__t:"bpc",c:c&&c.getAttribute("href")||void 0,p:location.pathname,u:location.href,s:location.search,t:document.title,r:document.referrer})}n.unshift(e);analytics.push(n);return analytics}};for(var n=0;n<analytics.methods.length;n++){var key=analytics.methods[n];analytics[key]=analytics.factory(key)}analytics.load=function(key,n){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.setAttribute("data-global-segment-analytics-key",i);t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(t,r);analytics._loadOptions=n};analytics._writeKey="VLroqXfffW6TG2XJ2EpJfOYCqyumiSVX";analytics.SNIPPET_VERSION="5.2.0";\nanalytics.load("VLroqXfffW6TG2XJ2EpJfOYCqyumiSVX");\nanalytics.page();\n}}();`])
}

export const shared = withMermaid({
  title: 'Developers',
  titleTemplate: ':title - Zarv',
  description:
    "Welcome to the Zarv Developers Documentation - your hub for building with Zarv's embedded insurance and risk management platform. Here you'll find guides, API references, SDKs, and integration tutorials to help you onboard, protect, and manage assets using Zarv's powerful data, AI, and IoT capabilities.",

  base: '/',
  outDir: './dist',

  rewrites: {
    'en/:rest*': ':rest*',
  },

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  markdown: {
    math: true,
    languageAlias: {
      svg: 'html',
    },
    config(md) {
      // TODO: remove when https://github.com/vuejs/vitepress/issues/4431 is fixed
      const fence = md.renderer.rules.fence!
      md.renderer.rules.fence = function (tokens, idx, options, env, self) {
        const { localeIndex = 'root' } = env
        const codeCopyButtonTitle = (() => {
          switch (localeIndex) {
            case 'es':
              return 'Copiar código'
            case 'pt':
              return 'Copiar código'
            default:
              return 'Copy code'
          }
        })()
        return fence(tokens, idx, options, env, self).replace(
          '<button title="Copy Code" class="copy"></button>',
          `<button title="${codeCopyButtonTitle}" class="copy"></button>`,
        )
      }
      md.use(groupIconMdPlugin)
    },
  },

  sitemap: {
    hostname: 'https://developers.zarv.com',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('request-token') && !item.url.includes('SECURITY') && !item.url.includes('README'))
    },
  },

  /* prettier-ignore */
  head: [
    ['link', { rel: 'preconnect', href: 'https://cdn.zarv.com' }],
    ['link', { rel: 'preconnect', href: 'https://cdn.segment.com' }],
    ['link', { rel: 'preconnect', href: 'https://api.segment.io' }],
    ['link', { rel: 'preconnect', href: 'https://www.googletagmanager.com' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/images/brand/zarv-logo-mini.svg' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/images/brand/arv-logo-mini.png' }],
    ['meta', { name: 'theme-color', content: '#5d2a7c' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:title', content: 'Zarv Developers' }],
    ['meta', { property: 'og:site_name', content: 'Zarv Developers' }],
    ['meta', { property: 'og:image', content: 'https://developers.zarv.com/images/brand/zarv-developers-og.jpg' }],
    ['meta', { property: 'og:url', content: 'https://developers.zarv.com/' }],
    ['script', {}, `!function(){var i="analytics",analytics=window[i]=window[i]||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","screen","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware","register"];analytics.factory=function(e){return function(){if(window[i].initialized)return window[i][e].apply(window[i],arguments);var n=Array.prototype.slice.call(arguments);if(["track","screen","alias","group","page","identify"].indexOf(e)>-1){var c=document.querySelector("link[rel='canonical']");n.push({__t:"bpc",c:c&&c.getAttribute("href")||void 0,p:location.pathname,u:location.href,s:location.search,t:document.title,r:document.referrer})}n.unshift(e);analytics.push(n);return analytics}};for(var n=0;n<analytics.methods.length;n++){var key=analytics.methods[n];analytics[key]=analytics.factory(key)}analytics.load=function(key,n){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.setAttribute("data-global-segment-analytics-key",i);t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(t,r);analytics._loadOptions=n};analytics._writeKey="VLroqXfffW6TG2XJ2EpJfOYCqyumiSVX";analytics.SNIPPET_VERSION="5.2.0";\nanalytics.load("VLroqXfffW6TG2XJ2EpJfOYCqyumiSVX");\nanalytics.page();\n}}();`],
  ],

  themeConfig: {
    logo: { src: '/images/brand/zarv-logo-mini.svg', width: 24, height: 24 },

    i18nRouting: true,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zarvhq' },
      { icon: 'linkedin', link: 'https://linkedin.com/company/zarv' },
    ],

    footer: {
      message:
        '<div style="color: #c0c0c0;font-size:0.9em;margin-bottom:10px"><a href="https://www.zarv.com/legal/tos">Terms of Use</a> | <a href="https://www.zarv.com/legal/privacy">Privacy Policy</a></div>',
      copyright: `<div style="color: #c0c0c0; margin-bottom: 20px; font-size: 0.9em">Copyright © ${new Date().getFullYear()} <a href="https://www.zarv.com">Zarv Inc</a>. All rights reserved.</div>`,
    },

    search: {
      provider: 'local',
      // options: {
      //   locales: {
      //     ...ptSearch,
      //     ...esSearch,
      //   },
      // },
    },
    // search: {
    //   provider: 'algolia',
    //   options: {
    //     appId: '8J64VVRP8K',
    //     apiKey: '52f578a92b88ad6abde815aae2b0ad7c',
    //     indexName: 'vitepress',
    //     locales: {
    //       ...ptSearch,
    //       ...esSearch,
    //     },
    //   },
    // },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern',
        },
      },
    },
    plugins: [
      groupIconVitePlugin({
        customIcon: {
          vitepress: localIconLoader(import.meta.url, '../../public/images/brand/zarv-logo-mini.svg'),
          firebase: 'logos:firebase',
        },
      }),
    ],
  },
})
