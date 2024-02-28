// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  site: {
    name: 'VS Contábil',
    description: 'Simplifique a gestão do seu negócio com nossas soluções integradas em Departamento Pessoal, Fiscal e Contábil.',
    identity: {
      type: 'Organization'
    },
    defaultLocale: 'pt-BR',
  },

  app: {
    head: {
      titleTemplate: '%s %separator %siteName',
      htmlAttrs: {
        lang: 'pt-BR'
      },
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&family=Plus+Jakarta+Sans:wght@500&display=swap',
        }
      ]
    }
  },

  routeRules: {
    "/": { prerender: true },
  },

  nitro: {
    preset: 'vercel'
  },

  devtools: { enabled: true },

  srcDir: 'src/',

  css: ['@/assets/index.scss'],

  modules: [
    'nuxt-site-config',
    'nuxt-speedkit',
    '@nuxtjs/seo',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
    '@nuxt/image',
    'nuxt-icon',
    '@nuxtjs/device'
  ],

  image: {
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536
    },
    format: ['webp'],
    densities: [1, 2],
  },

  vite: {
    esbuild: {
      tsconfigRaw: {
        compilerOptions: {
          experimentalDecorators: true,
        }
      }
    }
  },

  runtimeConfig: {
    google: {
      client: process.env.GOOGLE_CLIENT,
      apiKey: process.env.GOOGLE_API,
      sheet: process.env.GOOGLE_SHEET_ID,
      sheet_page: "Cadastro", // It will be by default "Page1"
    },
  },

  eslint: {
    emitWarning: false
  },
})
