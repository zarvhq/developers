---
aside: false
outline: false
title: {{ apiTitle}}
---

<script setup lang="ts">
import { onUnmounted, onMounted, ref } from 'vue'
import { useRoute } from 'vitepress'
import { useTheme } from 'vitepress-openapi/client'

const route = useRoute()

const apiTitle = route.data.params.title
const apiSlug = route.data.params.apiSlug
const spec = JSON.parse(JSON.stringify(route.data.params.specUrl))
const themeConfig = route.data.params.themeConfig
const loadSpec = ref(null)

const defaultConfig = {
  jsonViewer: {
    deep: 1,
  },
  schemaViewer: {
    deep: 1,
  },
  requestBody: {
    defaultView: 'schema',
  },
}

useTheme({ ...defaultConfig, ...themeConfig })

onUnmounted(() => {
  useTheme().reset()
  loadSpec.value = null
})

onMounted(async () => {
  const data = await fetch(spec)
  const json = await data.json()
  loadSpec.value = json
})
</script>

# API Reference - {{ apiTitle }}

<OASpec
  :groupByTags="false"
  :hideInfo="true"
  :hideOperations="true"
  :hideServers="true"
  :hideTags="true"
  :hideBranding="true"
  :hidePathsSummary="true"
  :spec="loadSpec"
/>
