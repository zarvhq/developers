// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { theme, useTheme, useOpenapi } from 'vitepress-openapi/client'
import openApiConfig from './openapi.config'
import 'vitepress-openapi/dist/style.css'
import './zarv.scss'
import './style.scss'
// import 'virtual:group-icons.css'
import Layout from './Layout.vue'

import spec from '../../swagger.json' assert { type: 'json' }

export default {
  extends: DefaultTheme,
  Layout,
  NotFound: () => h('p', { class: 'not-found' }, 'Page not found'),
  enhanceApp({ app, router, siteData }) {

    const openapi = useOpenapi({ spec }) as any

    // useOpenapi()
    theme.enhanceApp({ app, openapi, router, siteData })

    useTheme(openApiConfig)
  },
} satisfies Theme
