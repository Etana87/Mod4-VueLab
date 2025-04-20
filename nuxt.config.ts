// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
  components: true,
  css: ['@/assets/css/styles.css'],
  app: {
    baseURL: '/nuxt-app/'
  },
  ssr: true, 
  nitro: {
    preset: 'static'
  }
})
