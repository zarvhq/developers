---
aside: false
outline: true
---

# Detran API

A API de Retomada de Veículos, desenvolvida pelo Detran, facilita a integração com a Zarv para a gestão de processos de retomada extrajudicial de veículos. Ela oferece endpoints para autenticação, criação, cancelamento de retomadas e transferência de propriedade, automatizando e simplificando operações com maior eficiência e segurança.

## Fluxo de Dados da API

O diagrama abaixo ilustra o fluxo de dados entre os principais endpoints da API:
  
![Fluxo de Dados da API](./api.svg){.img-fluid.no-border}

<!-- <script setup>
  import { useTheme } from 'vitepress-openapi/client'
  import openApiConfig from '../../.vitepress/theme/openapi.config'
  import detranSpec from './detran.json'

  useTheme({
    ...openApiConfig,
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
        cols: 1,
      }
     })

  const loadSpec = JSON.parse(JSON.stringify(detranSpec))
  loadSpec.servers = [
    {
      url: 'https://api.detran.gov.br',
      description: 'Servidor de Produção',
    },
  ]
 </script>

<OASpec
  :groupByTags="false"
  :hideInfo="true"
  :hideServers="true"
  :hideBranding="true"
  :hidePathsSummary="true"
  :spec="loadSpec"
/> -->
