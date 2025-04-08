import { services } from './services.ts'

export default {
  paths() {
    return services.map(({ slug, specUrl, themeConfig, label }) => {
      return {
        params: {
          title: label,
          apiSlug: slug,
          specUrl,
          themeConfig,
        },
      }
    })
  },
}
