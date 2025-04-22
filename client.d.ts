// re-export vite client types. with strict installers like pnpm, user won't
// be able to reference vite/client in project root.
/// <reference types="vitepress/client" />

import { AnalyticsBrowser } from '@segment/analytics-next'

export * from 'vitepress/client'


declare global {
  interface Window {
    analytics: AnalyticsBrowser
  }

  interface ProcessEnv {
    readonly NODE_ENV: string
    readonly VITE_SEGMENT_API_KEY: string
  }
}
