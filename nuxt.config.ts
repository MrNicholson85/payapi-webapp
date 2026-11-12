// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules:['@nuxt/fonts'],
  app: {
    head: {
      title: 'PayAPI',
      meta: [
        { name: 'description', content: 'PayAPI is a payment processing platform that allows businesses to accept payments online.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
        // google material icons rounded solid
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200' }
      ]
    }
  },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
