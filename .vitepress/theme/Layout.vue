<script setup lang="ts">
import { nextTick, onMounted, watch, watchEffect } from 'vue'
import { useData, useRoute, inBrowser } from 'vitepress'
import { useCookies } from '@vueuse/integrations/useCookies'
import DefaultTheme from 'vitepress/theme'

const { lang } = useData()
const cookies = useCookies(['locale'])
const route = useRoute()

let preventScroll = false

const scrollToY = (y: number): void => {
  window.scrollTo({ top: y, behavior: 'instant' })
}

// Click on the tab with the given label text
function showCodeWithLabel(labelText: string) {
  document.querySelectorAll(`.vp-code-group .tabs label`).forEach((label) => {
    const labelName = label.getHTML().trim()
    if (labelName === labelText) {
      const input = document.getElementById(label.getAttribute('for')!)

      if (!input?.getAttribute('checked')) {
        input?.setAttribute('checked', 'true')
        input?.click()
      }
    }
  })
}

// Select the given tab and scroll to the top of the page
function selectTabAndScrollToTop(tab: string | null) {
  if (!tab) {
    return
  }

  // Restore the last selected tab and scroll back to to top
  // Enable 'preventScroll' to avoid scrolling to all the tabs
  preventScroll = true
  showCodeWithLabel(tab)
  nextTick(() => {
    preventScroll = false
    scrollToY(0)
  })
}

function codeGroupInit() {
  // Find all the labels
  const labels = document.querySelectorAll('.vp-code-group .tabs label')

  console.log('codeGroupInit', labels.length > 0)

  selectTabAndScrollToTop(localStorage.getItem('codeGroupTab'))

  labels.forEach((label) => {
    label.addEventListener('click', ($event) => {
      const labelFor = label.getAttribute('for')
      const labelName = label.getHTML().trim()
      const initialRect = label.getBoundingClientRect()
      const initialScrollY = window.scrollY

      // Save the selected tab
      localStorage.setItem('codeGroupTab', labelName)

      // Show the selected tab on each code group
      showCodeWithLabel(labelName)

      // Use nextTick to ensure DOM is updated and scroll to the position
      // so that the clicked label is at the same position as before
      nextTick(() => {
        if (preventScroll || !$event.isTrusted) {
          return
        }

        // Find the new position of the label
        const labelNew = document.querySelector(`label[for="${labelFor}"]`)
        if (!labelNew) {
          return
        }
        const newRect = labelNew.getBoundingClientRect()

        // Calculate the difference in position relative to the document
        const yDiff = newRect.top + window.scrollY - (initialRect.top + initialScrollY)

        // Scroll to maintain the label's position
        scrollToY(initialScrollY + yDiff)
      })
    })
  })
}

onMounted(() => {
  if (inBrowser) {
    setTimeout(() => {
      codeGroupInit()
    }, 0)
  }
})

watch(
  () => route.path,
  () => {
    nextTick(() => {
      // Bind click event on new page
      codeGroupInit()
      selectTabAndScrollToTop(localStorage.getItem('codeGroupTab'))
    })
  },
)

watchEffect(() => {
  if (inBrowser) {
    cookies.set('nf_lang', lang.value, { expires: new Date('2030-01-01T00:00:00Z'), path: '/' })
  }
})
</script>

<template>
  <DefaultTheme.Layout />
</template>
