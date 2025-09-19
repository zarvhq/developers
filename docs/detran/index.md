---
aside: false
outline: true
editLink: false
---

# Detran API <Badge type="warning" :text="`v ${apiVersion}`" />

A API de Retomada de Veículos, desenvolvida pelo Detran, facilita a gestão de processos de retomada extrajudicial de veículos. Ela oferece endpoints para autenticação, criação, cancelamento de retomadas e transferência de propriedade, automatizando e simplificando operações com maior eficiência e segurança.

## Visão Geral

O diagrama abaixo ilustra as principais etapas do processo de retomada de veículos, desde a autenticação até a regularização de dívidas. Cada etapa é representada por um endpoint específico da API, permitindo uma visão clara do fluxo de dados e das interações necessárias para a execução bem-sucedida do processo.

![Fluxo de Dados da API](./api.svg){.img-fluid.no-border}

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
  import detranSpec from './detran.json' with { type: 'json' }

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
