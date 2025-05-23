// https://vitepress.dev/guide/custom-theme
import { type Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { theme, useTheme } from 'vitepress-openapi/client'
import openApiConfig from '../../openapi.config'

import Layout from './Layout.vue'
import './zarv.scss'
import 'vitepress-openapi/dist/style.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app, router, siteData }) {
    theme.enhanceApp({ app, router, siteData })
    useTheme(openApiConfig)
  },
} satisfies Theme
