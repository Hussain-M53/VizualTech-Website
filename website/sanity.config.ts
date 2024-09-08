import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './studio/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'studio',
  projectId: 'xo996002',
  dataset: 'production',
  basePath: "/studio",
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
})
