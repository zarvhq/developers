<script setup lang="ts">
import { watchEffect } from 'vue'
import { useData, inBrowser } from 'vitepress'
import { useCookies } from '@vueuse/integrations/useCookies'
import DefaultTheme from 'vitepress/theme'

const { lang } = useData()
const cookies = useCookies(['locale'])

watchEffect(() => {
  if (inBrowser) {
    cookies.set('nf_lang', lang.value, { expires: new Date('2030-01-01T00:00:00Z'), path: '/' })
  }
})
</script>

<template>
  <DefaultTheme.Layout />
</template>
