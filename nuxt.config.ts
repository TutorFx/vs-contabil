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

  googleFonts: {
    families: {
      'Plus+Jakarta+Sans': 500,
      'Playfair+Display': 500,
    }
  },

  modules: [
    'nuxt-site-config',
    'nuxt-speedkit',
    '@nuxtjs/seo',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
    '@nuxt/image',
    'nuxt-icon',
    '@nuxtjs/device',
    '@nuxtjs/google-fonts'
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
    public: {
      phone: '5562994882079',
      URL: process.env.NUXT_PUBLIC_SITE_URL ?? "http://localhost:3000/",
    }
  },

  eslint: {
    emitWarning: false
  },
})
