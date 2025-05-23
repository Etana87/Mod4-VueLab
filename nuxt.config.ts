// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
  components: true,
  css: ['@/assets/css/styles.css'],
  app: {
    baseURL: '/Mod7-CloudLab-v2/'
  },
  nitro: {
    preset: 'static'
  }
})
