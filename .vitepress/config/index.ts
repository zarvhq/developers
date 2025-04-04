import { defineConfig } from 'vitepress'
import { shared } from './shared'
import { en } from './en'
// import { zh } from './zh'
// import { pt } from './pt'
// import { ru } from './ru'
// import { es } from './es'
// import { ko } from './ko'
// import { fa } from './fa'

export default defineConfig({
  ...shared,
  locales: {
    root: { label: 'English', ...en },
    // pt: { label: 'Português', ...pt },
    // es: { label: 'Español', ...es },x
  },
})
