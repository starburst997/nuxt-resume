require('dotenv').config();

const googleFontsLink =
  'https://fonts.googleapis.com/css?family=Bitter:400,400i,700&display=swap';

const config = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: 'Jean-Denis Boivin - Résumé',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          "Fast learner and auto-dictate, I've been enjoying programming since I was a kid.",
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:title',
        content: 'Jean-Denis Boivin - Résumé',
      },
      {
        property: 'og:description',
        content:
          "Fast learner and auto-dictate, I've been enjoying programming since I was a kid.",
      },
      {
        property: 'og:image',
        content: 'https://jd.boiv.in/assets/images/resume_screenshot.png',
      },
      {
        property: 'og:image:type',
        content: 'image/png',
      },
      {
        property: 'og:image:width',
        content: '1200',
      },
      {
        property: 'og:image:height',
        content: '630',
      },
      {
        name: 'msapplication-TileColor',
        content: '#2d89ef',
      },
      {
        name: 'theme-color',
        content: '#ffffff',
      },
    ],
    link: [
      {
        rel: 'preconnect',
        crossorigin: true,
        href: googleFontsLink,
      },
      {
        rel: 'stylesheet',
        href: googleFontsLink,
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/assets/meta/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/assets/meta/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/assets/meta/favicon-16x16.png',
      },
      {
        rel: 'manifest',
        href: '/assets/meta/site.webmanifest',
      },
      {
        rel: 'mask-icon',
        href: '/assets/meta/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
    ],
    script: [
      {
        src: 'google-analytics-setup.js',
        body: true,
        class: 'do-not-strip',
      },
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-FJ1LGLFEE1',
        async: true,
        body: true,
        class: 'do-not-strip',
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/utilities.css', '@/assets/css/global.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/global-data'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
  env: {
    isProduction: Boolean(process.env.CI),
    timestamp: new Date().toISOString(),
    projectUrl: process.env.CI_PROJECT_URL,
    commitSha: process.env.CI_COMMIT_SHORT_SHA,

    // // comment above and uncomment below
    // // to simulate production environment
    // isProduction: true,
    // gitlabCi: {
    //   timestamp: new Date().toISOString(),
    //   projectUrl: 'https://github.com/starburst997/nuxt-resume',
    //   commitSha: 'c6d21f92',
    // },
  },
  server: {
    port: 3001,
    host: '0.0.0.0',
  },
  generate: {
    dir: 'git/resume',
  },
};

export default config;
