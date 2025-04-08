// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { theme, useTheme, locales, useOpenapi } from 'vitepress-openapi/client'
import 'vitepress-openapi/dist/style.css'
import './zarv.scss'
import './style.scss'
// import 'virtual:group-icons.css'
import Layout from './Layout.vue'

// import spec from '../../swagger.json' assert { type: 'json' }

export default {
  extends: DefaultTheme,
  Layout,
  NotFound: () => h('p', { class: 'not-found' }, 'Page not found'),
  enhanceApp({ app, router, siteData }) {

    // const openapi = useOpenapi({ spec }) as any
    useOpenapi()
    theme.enhanceApp({ app, router, siteData })

    useTheme({
      requestBody: {
        // Set the default schema view.
        defaultView: 'schema', // schema or contentType
      },
      jsonViewer: {
        // Set the JSON viewer depth.
        deep: Infinity,
      },
      schemaViewer: {
        // Set the schema viewer depth.
        deep: Infinity,
      },
      // Set the heading levels.
      headingLevels: {
        h1: 1,
        h2: 2,
        h3: 3,
        h4: 4,
        h5: 5,
        h6: 6,
      },
      response: {
        // Set the response code selector.
        responseCodeSelector: 'tabs', // tabs or select
        // Set the maximum number of tabs, after which a Select will be shown.
        maxTabs: 5,
        body: {
          // Set the default view.
          defaultView: 'schema', // schema or contentType
        },
      },
      operation: {
        // Set the operation badges. The order is respected.
        badges: ['deprecated'],
        // Slots to render in the OAOperation component.
        slots: [
          'header',
          'path',
          'description',
          'security',
          'request-body',
          'responses',
          'playground',
          'code-samples',
          'branding',
          'footer',
        ],
        // Slots to hide in the OAOperation component.
        hiddenSlots: ['try-it'],
        // Set the number of columns to use in the OAOperation component.
        cols: 2,
        // Set the default base URL.
        defaultBaseUrl: 'https://developer.zarv.com',
        // Deprecated. Use `server.getServers` instead.
        getServers: ({ method, path, operation }) => [],
      },
      // Set the i18n configuration.
      i18n: {
        locale: 'en', // en | es | pt-BR | string
        fallbackLocale: 'en', // en | es | pt-BR | string
        messages: {
          en: {
            ...locales.en,
            'operation.badgePrefix.operationId': 'Operation ID',
          },
          es: {
            ...locales.es,
            'operation.badgePrefix.operationId': 'ID de operación',
          },
        },
        availableLocales: [
          { code: 'en', label: 'English' },
          { code: 'es', label: 'Español' },
          { code: 'pt-BR', label: 'Português (Brasil)' },
        ],
      },
      // Set spec configuration.
      spec: {
        groupByTags: true, // Group paths by tags.
        collapsePaths: false, // Collapse paths when grouping by tags.
        showPathsSummary: true, // Show a summary of the paths when grouping by tags.
        avoidCirculars: false, // Avoid circular references when parsing schemas.
        lazyRendering: false, // Lazy render Paths and Tags components.
        defaultTag: 'General', // Default tag to use when a path has no tags.
        wrapExamples: true, // Wrap examples in a row or show them in a column.
      },
      server: {
        // Set a custom function to get servers.
        getServers: ({ method, path, operation }) => [],
        // Allow custom servers.
        allowCustomServer: true,
      },
    })
  },
} satisfies Theme
