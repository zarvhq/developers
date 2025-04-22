---
layout: home

hero:
  # name: Zarv Developers
  text: Construído para proteger. Projetado para confiança.
  tagline: Zarv é uma plataforma de gerenciamento de riscos impulsionada por IA que ajuda organizações a identificar, avaliar e mitigar riscos em tempo real.
  actions:
    - theme: brand
      text: Início Rápido
      link: /guide/getting-started
    - theme: alt
      text: Referência da API
      link: /reference/getting-started
  image:
    src: /images/home/heroe.png
    alt: Zarv Developers

features:
  - icon:
      src: /images/home/shield.png
    title: Reforce Sua Segurança
    details: Aproveite insights impulsionados por IA para identificar e mitigar riscos antes que se tornem ameaças.
  - icon:
      src: /images/home/statistics.png
    title: Análise de Riscos em Tempo Real
    details: Obtenha inteligência acionável com monitoramento em tempo real e avaliações de risco abrangentes.
  - icon: 
      src: /images/home/workflow.png
    title: Personalize Seu Fluxo de Trabalho
    details: Adapte os processos de gerenciamento de riscos às necessidades e objetivos únicos da sua organização.
  - icon:
      src: /images/home/rocket.png
    title: Acelere a Tomada de Decisões
    details: Tome decisões informadas mais rapidamente com análises preditivas e priorização automatizada de riscos.
---

<script setup>
import { useData } from 'vitepress'

const { isDark } = useData()
</script>

<iframe src="https://status.zarv.com/badge?theme=dark" width="250" height="40" frameborder="0" scrolling="no" style="color-scheme: normal; margin: 60px auto" v-if="isDark"></iframe>
<iframe src="https://status.zarv.com/badge?theme=light" width="250" height="40" frameborder="0" scrolling="no" style="color-scheme: normal; margin: 60px auto" v-if="!isDark"></iframe>
