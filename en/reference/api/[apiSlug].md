---
aside: false
outline: false
title: API Reference
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
const loadSpec = ref('')
const loading = ref(true)

useTheme(themeConfig)

onUnmounted(() => {
  useTheme().reset()
})

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

{{ loadSpec.info?.description }}

<OASpec
  :groupByTags="false"
  :hideInfo="true"
  :hideServers="true"
  :hideBranding="true"
  :hidePathsSummary="true"
  :spec="loadSpec"
/>

</div>
