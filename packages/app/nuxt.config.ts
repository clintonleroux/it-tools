// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  extends: [
    'src/modules/app',
  ],

  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
  ],

  fonts: {
    provider: 'bunny',
    defaults: {
      weights: [400, 500, 600, 700, 800],
    },
  },

  colorMode: {
    preference: 'system',
    fallback: 'dark',
    classSuffix: '',
    storage: 'cookie',
    storageKey: 'itts-color-mode',
  },

  i18n: {
    strategy: 'prefix',
    vueI18n: './i18n.config.ts',
    locales: ['en', 'fr'],
    defaultLocale: 'en',
  },
});
