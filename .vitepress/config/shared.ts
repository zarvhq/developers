import { withMermaid } from 'vitepress-plugin-mermaid'
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
  localIconLoader,
} from 'vitepress-plugin-group-icons'
// import { search as esSearch } from './es'
// import { search as faSearch } from './fa'
// import { search as koSearch } from './ko'
// import { search as ptSearch } from './pt'
// import { search as ruSearch } from './ru'
// import { search as zhSearch } from './zh'

export const shared = withMermaid({
  title: 'Developers',
  titleTemplate: ':title - Zarv',
  description:
    "Welcome to the Zarv Developers Documentation - your hub for building with Zarv's embedded insurance and risk management platform. Here you'll find guides, API references, SDKs, and integration tutorials to help you onboard, protect, and manage assets using Zarv's powerful data, AI, and IoT capabilities.",

  base: '/',

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
      'json#10': 'json',
    },
    codeTransformers: [
      // We use `[!!code` in demo to prevent transformation, here we revert it back.
      {
        postprocess(code) {
          return code.replace(/\[\!\!code/g, '[!code')
        },
      },
    ],
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
      return items.filter((item) => !item.url.includes('migration'))
    },
  },

  /* prettier-ignore */
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/zarv-logo-mini.svg' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/zarv-logo-mini.png' }],
    ['meta', { name: 'theme-color', content: '#5d2a7c' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:title', content: 'Zarv Developers' }],
    ['meta', { property: 'og:site_name', content: 'Zarv Developers' }],
    ['meta', { property: 'og:image', content: 'https://developers.zarv.com/zarv-developers-og.jpg' }],
    ['meta', { property: 'og:url', content: 'https://developers.zarv.com/' }],
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-JE9M7ZNF3W', },],
    ['script', {}, "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-JE9M7ZNF3W');"],
  ],

  themeConfig: {
    logo: { src: '/zarv-logo-mini.svg', width: 24, height: 24 },

    i18nRouting: true,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zarvhq' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/company/zarv' },
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
      //     ...zhSearch,
      //     ...ptSearch,
      //     ...ruSearch,
      //     ...esSearch,
      //     ...koSearch,
      //     ...faSearch,
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
    //       ...zhSearch,
    //       ...ptSearch,
    //       ...ruSearch,
    //       ...esSearch,
    //       ...koSearch,
    //       ...faSearch,
    //     },
    //   },
    // },
  },
  vite: {
    plugins: [
      // groupIconVitePlugin({
      //   customIcon: {
      //     vitepress: localIconLoader(import.meta.url, '../../public/zarv-logo-mini.svg'),
      //     firebase: 'logos:firebase',
      //   },
      // }),
    ],
  },
})
