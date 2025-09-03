---
aside: false
outline: false
title: Zarv
---

<script setup lang="ts">
import { useRoute } from 'vitepress'
import { useTheme } from 'vitepress-openapi/client'

const route = useRoute()

const operationId = route.data.params.operationId

useTheme({
    operation: {
      // Set the number of columns to use in the OAOperation component.
      cols: 1,
    }
  })
</script>

<OAOperation :operationId="operationId"/>
