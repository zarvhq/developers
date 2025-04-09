---
aside: false
outline: false
title: API Reference
---

<script setup lang="ts">
import { onUnmounted, onMounted, ref } from 'vue'
import { useRoute } from 'vitepress'
import { useTheme } from 'vitepress-openapi/client'
import markdownit from 'markdown-it'

const md = markdownit({
  html: true,
  linkify: true,
  typographer: true,
})
const route = useRoute()

const apiTitle = route.data.params.title
const apiSlug = route.data.params.apiSlug
const spec = JSON.parse(JSON.stringify(route.data.params.specUrl))
const themeConfig = route.data.params.themeConfig
const loadSpec = ref('')
const loading = ref(true)

const defaultTheme = {
  requestBody: {
    // Set the default schema view.
    defaultView: 'schema', // schema or contentType
  },
  jsonViewer: {
    // Set the JSON viewer depth.
    deep: 1,
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
      defaultView: 'schema', // schema or contentType
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
    ],
    // Slots to hide in the OAOperation component.
    hiddenSlots: ['try-it', 'branding', 'footer', 'playground'],
    // Set the number of columns to use in the OAOperation component.
    cols: 2,
    // Set the default base URL.
    // defaultBaseUrl: 'https://developers.zarv.com',
  },
  spec: {
    groupByTags: true, // Group paths by tags.
    collapsePaths: false, // Collapse paths when grouping by tags.
    showPathsSummary: false, // Show a summary of the paths when grouping by tags.
    avoidCirculars: true, // Avoid circular references when parsing schemas.
    lazyRendering: false, // Lazy render Paths and Tags components.
    defaultTag: 'Default', // Default tag to use when a path has no tags.
    wrapExamples: false, // Wrap examples in a row or show them in a column.
  },
}

useTheme({ ...defaultTheme, ...themeConfig })

onMounted(async () => {
  const data = await fetch(spec)
  const json = await data.json()
  loadSpec.value = json
})
</script>

<div class="vp-loading" v-if="!loadSpec">
  <h1>Loading {{ apiTitle }} Reference...</h1>
  <OASpecSkeleton style="margin:10px 0 0 -20px" />
</div>
<div v-else>

# API Reference - {{ loadSpec.info?.title }}<Badge type="warning" :text="`v ${ loadSpec.info?.version }`" />

<div v-html="md.render(loadSpec.info?.description)" />

<OASpec
  :groupByTags="false"
  :hideInfo="true"
  :hideServers="true"
  :hideBranding="true"
  :hidePathsSummary="true"
  :spec="loadSpec"
/>

</div>
