---
sidebar: true
aside: false
outline: [1, 2]
title: Zarv
---

<script setup lang="ts">
import { useTheme } from 'vitepress-openapi/client'
import spec from "../../public/openapi/collector-api.json" with { type: "json" };

useTheme({
  operation: {
    // Set the number of columns to use in the OAOperation component.
    cols: 1,
  }
})
</script>

<OASpec :spec="spec" />
