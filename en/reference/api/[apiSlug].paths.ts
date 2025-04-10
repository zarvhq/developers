import fs from 'node:fs'
import { services } from './services.ts'

export default {
  async paths() {

    // Download the OpenAPI spec files and save them to the local filesystem
    const openApiSpecs = await Promise.all(
      services.map(async ({ slug, specUrl }) => {
        const response = await fetch(specUrl)
        if (!response.ok) {
          console.error(`  ➜  Failed to fetch ${slug}: ${response.statusText}`)
        }
        return response.json()
      }),
    )
    // Save the OpenAPI specs to the local filesystem
    await Promise.all(
      openApiSpecs.map(async (spec, index) => {
        const { slug } = services[index]
        const filePath = `./public/openapi/${slug}.json`


        // Remove the "servers" property from the spec
        if (spec.servers) {
          delete spec.servers
        }
        // Remove the "basePath" property from the spec
        if (spec.basePath) {
          delete spec.basePath
        }
        // Remove the "host" property from the spec
        if (spec.host) {
          delete spec.host
        }

        await fs.promises.writeFile(
          filePath,
          JSON.stringify(spec),
          'utf-8',
        )
        console.log(`  ➜  Saved OpenAPI Spec for ${slug} to ${filePath}`)
      }),
    )

    return services.map(({ slug, themeConfig, label }) => {
      return {
        params: {
          title: label,
          apiSlug: slug,
          specUrl: `/openapi/${slug}.json`,
          themeConfig,
        },
      }
    })
  },
}
