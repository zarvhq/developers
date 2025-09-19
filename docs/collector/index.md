---
aside: false
outline: true
---

# Collector API <Badge type="warning" :text="`v ${apiVersion}`" />

<br />

<OASpec
  :groupByTags="false"
  :hideInfo="true"
  :hideServers="true"
  :hideBranding="true"
  :hidePathsSummary="false"
  :spec="loadSpec"
/>

<script setup lang="ts">
  import { useTheme } from 'vitepress-openapi/client'
  // import openApiConfig from '../../openapi.config'
  import detranSpec from './collector-api.json' with { type: 'json' }

  useTheme({
    // schemaConfig: openApiConfig,
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
        'parameters',
        'responses',
      ],
      // Set the number of columns to use in the OAOperation component.
      cols: 1,
    }
  })

  const loadSpec = JSON.parse(JSON.stringify(detranSpec))
  // loadSpec.servers = [
  //   {
  //     url: 'https://api.detran.gov.br',
  //     description: 'Servidor de Produção',
  //   },
  // ]
  const apiVersion = loadSpec.info.version
 </script>
