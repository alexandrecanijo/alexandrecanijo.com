export default {
  mode: 'universal',

  head: {
    title: 'AlexandreCanijo.com',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'title', name: 'title', content: 'AlexandreCanijo.com' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: 'AlexandreCanijo.com' },
      { hid: 'application-name', name: 'application-name', content: 'AlexandreCanijo.com' },
      { hid: 'msapplication-TileColor', name: 'msapplication-TileColor', content: '#fe6700' },
      { hid: 'msapplication-TileImage', name: 'msapplication-TileImage', content: '/mstile-144x144.png' },
      { hid: 'theme-color', name: 'theme-color', content: '#fe6700' },
      { hid: 'og:type', name: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', name: 'og:url', property: 'og:url', content: 'https://www.alexandrecanijo.com/' },
      { hid: 'og:title', name: 'og:title', property: 'og:title', content: 'AlexandreCanijo.com' },
      {
        hid: 'og:description',
        name: 'og:description',
        property: 'og:description',
        content: 'Personal website from web developer Alexandre Canijo',
      },
      { hid: 'og:image', name: 'og:image', property: 'og:image', content: 'https://www.alexandrecanijo.com/icon.png' },
      { hid: 'og:site_name', name: 'og:site_name', property: 'og:site_name', content: 'AlexandreCanijo.com' },
      { hid: 'og:host', name: 'og:host', property: 'og:host', content: 'https://www.alexandrecanijo.com/' },
      { hid: 'twitter:card', name: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:url', name: 'twitter:url', property: 'twitter:url', content: 'https://www.alexandrecanijo.com/' },
      { hid: 'twitter:title', name: 'twitter:title', property: 'twitter:title', content: 'AlexandreCanijo.com' },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        property: 'twitter:description',
        content: 'Personal website from web developer Alexandre Canijo',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        property: 'twitter:image',
        content: 'https://www.alexandrecanijo.com/icon.png',
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        property: 'twitter:site',
        content: 'https://www.alexandrecanijo.com/',
      },
      { hid: 'twitter:creator', name: 'twitter:creator', property: 'twitter:creator', content: 'alexandrecanijo' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'mask-icon', color: '#000000', href: '/safari-pinned-tab.svg' },
    ],
  },

  loading: { color: '#fe6700' },

  manifest: {
    name: 'Alexandre Canijo',
    short_name: 'Alexandre Canijo',
    description: `'Personal website from web developer Alexandre Canijo'`,
    theme_color: '#ffffff',
    background_color: '#fe6700',
    start_url: '/',
    display: 'standalone',
  },

  css: ['@/assets/scss/main.scss'],

  plugins: [],

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/stylelint-module'],

  modules: [
    '@nuxtjs/bulma',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources',
    '@nuxtjs/google-analytics',
    '@nuxtjs/sitemap',
  ],

  axios: {},

  googleAnalytics: {
    id: 'UA-529944-1',
  },

  styleResources: {
    scss: './assets/scss/vars/*.scss',
  },

  sitemap: {
    hostname: 'https://www.alexandrecanijo.com',
    gzip: true,
    exclude: [],
    routes: [],
  },

  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false,
        },
      },
    },
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
    quiet: false,
    optimization: {
      splitChunks: {
        name: true,
      },
    },
  },
  generate: {
    subFolders: true,
  },
  router: {
    base: '/',
  },
};
