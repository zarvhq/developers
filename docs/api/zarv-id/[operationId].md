---
aside: false
outline: false
title: Zarv
---

<script setup lang="ts">
import { useRoute } from 'vitepress'
import { useTheme } from 'vitepress-openapi/client'
import spec from "../../public/openapi/zarv-api.json" with { type: "json" };

const route = useRoute()

const operationId = route.data.params.operationId

useTheme({
    operation: {
      // Set the number of columns to use in the OAOperation component.
      cols: 1,
    }
  })
</script>

<OAOperation :spec="spec" :operationId="operationId"/>
