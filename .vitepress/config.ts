import { resolveSiteDataByRoute } from 'vitepress'
import { type HeadConfig } from 'vitepress'
import {
  groupIconMdPlugin,
  // groupIconVitePlugin,
  // localIconLoader,
} from 'vitepress-plugin-group-icons'
import llmstxt from 'vitepress-plugin-llms'
import { withMermaid } from 'vitepress-plugin-mermaid'
import { services } from '../services.config'

const prod = process.env.NODE_ENV === 'production'
const SEGMENT_API_KEY = process.env.VITE_SEGMENT_API_KEY || null

const headConfig = (): HeadConfig[] => {
  const output: HeadConfig[] = [
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/images/brand/zarv-logo-mini.svg' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/images/brand/zarv-logo-mini.png' }],
    ['meta', { name: 'theme-color', content: '#5d2a7c' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:title', content: 'Zarv Developers' }],
    ['meta', { property: 'og:site_name', content: 'Zarv Developers' }],
    [
      'meta',
      {
        property: 'og:image',
        content: 'https://developers.zarv.com/images/brand/zarv-developers-og.jpg',
      },
    ],
    ['meta', { property: 'og:url', content: 'https://developers.zarv.com/' }],
  ]

  // Add BetterStack Uptime
  if (prod) {
    output.push([
      'script',
      {
        type: 'text/javascript',
        src: 'https://uptime.betterstack.com/widgets/announcement.js',
        'data-id': '166087',
        async: '',
      },
    ])
  }

  // Add Segment Analytics
  if (SEGMENT_API_KEY) {
    output.push([
      'script',
      {},
      `!function(){var i="analytics",analytics=window[i]=window[i]||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","screen","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware","register"];analytics.factory=function(e){return function(){if(window[i].initialized)return window[i][e].apply(window[i],arguments);var n=Array.prototype.slice.call(arguments);if(["track","screen","alias","group","page","identify"].indexOf(e)>-1){var c=document.querySelector("link[rel='canonical']");n.push({__t:"bpc",c:c&&c.getAttribute("href")||void 0,p:location.pathname,u:location.href,s:location.search,t:document.title,r:document.referrer})}n.unshift(e);analytics.push(n);return analytics}};for(var n=0;n<analytics.methods.length;n++){var key=analytics.methods[n];analytics[key]=analytics.factory(key)}analytics.load=function(key,n){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.setAttribute("data-global-segment-analytics-key",i);t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(t,r);analytics._loadOptions=n};analytics._writeKey="${SEGMENT_API_KEY}";analytics.SNIPPET_VERSION="5.2.0";\nanalytics.load("${SEGMENT_API_KEY}");\nanalytics.page();\n}}();`,
    ])
  }

  return output
}

const sitemapBlacklist = [
  'detran-api',
  'request-token',
  'SECURITY',
  'README',
  'CONTRIBUTING',
  'CHANGELOG',
  'LICENSE',
  'CODE_OF_CONDUCT',
  'SUPPORT',
]

export default withMermaid({
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
            case 'fa':
              return 'کپی کد'
            case 'ko':
              return '코드 복사'
            case 'pt':
              return 'Copiar código'
            case 'ru':
              return 'Скопировать код'
            case 'zh':
              return '复制代码'
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
      return items.filter(
        (item) => !sitemapBlacklist.some((blacklisted) => item.url.includes(blacklisted)),
      )
    },
  },

  /* prettier-ignore */
  head: headConfig(),

  themeConfig: {
    logo: { src: '/images/brand/zarv-logo-mini.svg', width: 24, height: 24 },

    i18nRouting: true,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zarvhq' },
      { icon: 'linkedin', link: 'https://linkedin.com/company/zarv' },
    ],

    footer: {
      message:
        '<div style="color: #c0c0c0;font-size:0.9em;margin-bottom:10px"><a href="https://www.zarv.com/legal/tos/?utm_source=developers&utm_campaign=footer">Terms of Use</a> | <a href="https://www.zarv.com/legal/privacy/?utm_source=developers&utm_campaign=footer">Privacy Policy</a></div>',
      copyright: `<div style="color: #c0c0c0; margin-bottom: 20px; font-size: 0.9em">Copyright © ${new Date().getFullYear()} <a href="https://www.zarv.com/?utm_source=developers&utm_campaign=footer">Zarv Inc</a>. All rights reserved.</div>`,
    },

    search: {
      provider: 'local',
      // provider: 'algolia',
      // options: {
      //   appId: '8J64VVRP8K',
      //   apiKey: '52f578a92b88ad6abde815aae2b0ad7c',
      //   indexName: 'zarv-developers',
      // locales: {
      //   ...enSearch,
      //   ...ptSearch,
      //     ...esSearch,
      // },
      // },
    },
  },

  locales: {
    root: { label: 'English' },
    // zh: { label: '简体中文' },
    pt: { label: 'Português' },
    // ru: { label: 'Русский' },
    // es: { label: 'Español' },
    // ko: { label: '한국어' },
    // fa: { label: 'فارسی' }
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
      // groupIconVitePlugin({
      //   customIcon: {
      //     vitepress: localIconLoader(import.meta.url, '../public/images/brand/zarv-logo-mini.svg'),
      //     firebase: 'logos:firebase',
      //   },
      // }),
      prod &&
        llmstxt({
          workDir: 'en',
          ignoreFiles: ['index.md', ...services.map((s) => `reference/${s.slug}.md`)],
        }),
    ],
  },

  transformPageData: prod
    ? (pageData, ctx) => {
        const site = resolveSiteDataByRoute(ctx.siteConfig.site, pageData.relativePath)
        const title = `${pageData.title || site.title} | ${pageData.description || site.description}`
        ;((pageData.frontmatter.head ??= []) as HeadConfig[]).push(
          ['meta', { property: 'og:locale', content: site.lang }],
          ['meta', { property: 'og:title', content: title }],
        )
      }
    : undefined,
})
