// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-09-24',

  css: [
    '~/assets/css/main.css'
  ],

  app: {
    head: {
      title: 'โรงเรียนพิษณุโลกพิทยาคม',
      meta: [
        {
          name: 'description',
          content: 'Personal blog powered by Nuxt'
        }
      ]
    }
  }
})