---
layout: home

hero:
  # name: Zarv Developers
  text: Built to protect. Designed for trust.
  tagline: Zarv is a AI-powered risk management platform helps organizations to identify, assess, and mitigate risks in real-time.
  actions:
    - theme: brand
      text: Quickstart
      link: /guide/getting-started
    - theme: alt
      text: API Reference
      link: /reference/getting-started
  image:
    src: /images/home/heroe.png
    alt: Zarv Developers

features:
  - icon:
      src: /images/home/shield.png
    title: Strengthen Your Security
    details: Leverage AI-driven insights to identify and mitigate risks before they become threats.
  - icon:
      src: /images/home/statistics.png
    title: Real-Time Risk Analysis
    details: Gain actionable intelligence with real-time monitoring and comprehensive risk assessments.
  - icon: 
      src: /images/home/workflow.png
    title: Customize Your Workflow
    details: Tailor risk management processes to fit your organization's unique needs and objectives.
  - icon:
      src: /images/home/rocket.png
    title: Accelerate Decision-Making
    details: Make informed decisions faster with predictive analytics and automated risk prioritization.
---

<script setup>
import { useData } from 'vitepress'

const { isDark } = useData()
</script>

<iframe src="https://status.zarv.com/badge?theme=dark" width="250" height="40" frameborder="0" scrolling="no" style="color-scheme: normal; margin: 60px auto" v-if="isDark"></iframe>
<iframe src="https://status.zarv.com/badge?theme=light" width="250" height="40" frameborder="0" scrolling="no" style="color-scheme: normal; margin: 60px auto" v-else></iframe>
