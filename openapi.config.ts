import { locales } from 'vitepress-openapi/client'

export default {
  availableLanguages: [
    { code: 'en', label: 'English' },
    { code: 'pt-BR', label: 'Português (Brasil)' },
  ],
  requestBody: {
    // Set the default schema view.
    defaultView: 'contentType', // schema or contentType
  },
  jsonViewer: {
    // Set the JSON viewer depth.
    deep: 3,
    renderer: 'vue-json-pretty',
  },
  schemaViewer: {
    // Set the schema viewer depth.
    deep: 1,
  },
  // Set the heading levels.
  headingLevels: {
    h1: 2,
    h2: 3,
    h3: 4,
    h4: 5,
    h5: 6,
    h6: 6,
  },
  response: {
    // Set the response code selector.
    responseCodeSelector: 'tabs', // tabs or select
    // Set the maximum number of tabs, after which a Select will be shown.
    maxTabs: 5,
    body: {
      // Set the default view.
      defaultView: 'contentType', // schema or contentType
    },
  },
  operation: {
    // Set the operation badges. The order is respected.
    badges: ['deprecated'],
    // Slots to render in the OAOperation component.
    slots: [
      'header',
      // 'tags',
      'path',
      'description',
      'security',
      'request-body',
      'parameters',
      'responses',
      'code-samples',
      // 'playground',
    ],
    // Slots to hide in the OAOperation component.
    hiddenSlots: ['try-it', 'branding', 'footer'],
    // Set the number of columns to use in the OAOperation component.
    cols: 1,
    // Set the default base URL.
    defaultBaseUrl: 'https://services.zarv.com',
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
      'pt-BR': {
        ...locales['pt-BR'],
        'operation.badgePrefix.operationId': 'ID da operação',
      },
    },
    availableLocales: [
      { code: 'en', label: 'English' },
      { code: 'pt-BR', label: 'Português (Brasil)' },
    ],
  },
  // Set spec configuration.
  spec: {
    groupByTags: true, // Group paths by tags.
    collapsePaths: false, // Collapse paths when grouping by tags.
    showPathsSummary: false, // Show a summary of the paths when grouping by tags.
    avoidCirculars: true, // Avoid circular references when parsing schemas.
    lazyRendering: false, // Lazy render Paths and Tags components.
    defaultTag: 'Default', // Default tag to use when a path has no tags.
    wrapExamples: false, // Wrap examples in a row or show them in a column.
  },
} as any
