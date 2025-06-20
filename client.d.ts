// re-export vite client types. with strict installers like pnpm, user won't
// be able to reference vite/client in project root.
/// <reference types="vitepress/client" />

export * from 'vitepress/client'


declare global {
  interface Window {}

  interface ProcessEnv {
    readonly NODE_ENV: string
    readonly VITE_SEGMENT_API_KEY: string
  }
}
