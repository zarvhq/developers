---
layout: home

hero:
  # name: Zarv Developers
  text: Built to protect. Designed for trust.
  tagline: Zarv is a AI-powered risk management platform helps organizations to identify, assess, and mitigate risks in real-time.
  actions:
    - theme: brand
      text: Quickstart
      link: /guide
    - theme: alt
      text: API Reference
      link: /reference
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

<div class="flex flex-row gap-6 justify-center" style="position: relative; top: 50px">
  <img src="https://status.zarv.com/api/badge/8/status?label=Console" alt="Console Status" />
  <img src="https://status.zarv.com/api/badge/12/status?label=API" alt="API Status" />
  <img src="https://status.zarv.com/api/badge/5/status?label=Auth" alt="Auth Status" />
  <img src="https://status.zarv.com/api/badge/4/status?label=CDN" alt="CDN Status" />
</div>

<script setup>
import { useData } from 'vitepress'

const { isDark } = useData()
</script>
