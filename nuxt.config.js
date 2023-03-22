export default {
  srcDir: 'src/',

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  modern: ({ isDev }) => !isDev,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'AlexandreCanijo.com',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'title', name: 'title', content: 'AlexandreCanijo.com' },
      { hid: 'description', name: 'description', content: 'Personal website from web developer Alexandre Canijo' },
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
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      {
        rel: 'preconnect',
        href: 'https://cdn.jsdelivr.net',
        crossorigin: 'crossorigin',
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'mask-icon', color: '#000000', href: '/safari-pinned-tab.svg' },
    ],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/style-resources',
    '@nuxtjs/pwa',
    '@nuxtjs/google-analytics',
  ],

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@assets/styles/main.scss'],

  styleResources: {
    hoistUseStatements: true,
    scss: ['~/assets/styles/scss/_variables.scss'],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/sentry', '@nuxtjs/sitemap'],

  eslint: {
    fix: true,
    extensions: ['js', 'ts', 'vue', 'css', 'scss'],
  },

  sentry: {
    dsn: 'https://ef62f5dd2ea749fbaf9500701df04251@o1428923.ingest.sentry.io/6779427',
    tracing: true,
    config: {
      tracing: true,
    },
  },

  manifest: {
    name: 'Alexandre Canijo',
    short_name: 'Alexandre Canijo',
    description: `'Personal website from web developer Alexandre Canijo'`,
    theme_color: '#ffffff',
    background_color: '#fe6700',
    start_url: '/',
    display: 'standalone',
  },

  googleAnalytics: {
    id: 'UA-529944-1',
  },

  sitemap: {
    hostname: 'https://www.alexandrecanijo.com',
    gzip: true,
    exclude: [],
    routes: [],
  },

  loading: false,

  loadingIndicator: false,

  fetch: {
    client: false,
    server: false,
  },

  features: {
    store: false,
    middleware: false,
    transitions: false,
    deprecations: false,
    validate: false,
    asyncData: false,
    fetch: false,
    clientOnline: false,
    clientPrefetch: false,
    clientUseUrl: true,
    componentAliases: false,
    componentClientOnly: false,
  },

  render: {
    http2: {
      push: true,
      pushAssets: (req, res, publicPath, preloadFiles) =>
        preloadFiles.map((f) => `<${publicPath}${f.file}>; rel=preload; as=${f.asType}`),
    },
    asyncScripts: true,
    resourceHints: true,
    ssr: true,
    ssrLog: true,
    static: {
      // 97 days, minimum to pass lighthouse scores - https://github.com/GoogleChrome/lighthouse/issues/11380
      maxAge: 8380800000,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    indicator: false,
    terser: true,
    postcss: null,
    filenames: {
      app: ({ isDev }) => (isDev ? '[name].js' : '[contenthash].js'),
      chunk: ({ isDev }) => (isDev ? '[name].js' : '[contenthash].js'),
      css: ({ isDev }) => (isDev ? '[name].css' : '[contenthash].css'),
      img: ({ isDev }) => (isDev ? '[path][name].[ext]' : 'img/[contenthash:7].[ext]'),
      font: ({ isDev }) => (isDev ? '[path][name].[ext]' : 'fonts/[contenthash:7].[ext]'),
      video: ({ isDev }) => (isDev ? '[path][name].[ext]' : 'videos/[contenthash:7].[ext]'),
    },
    quiet: false,
    optimization: {
      splitChunks: {
        name: true,
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true,
          },
        },
      },
    },
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
        html5: true,
        removeComments: true,
      },
    },
    extractCSS: true,
  },

  generate: {
    fallback: true,
    subFolders: true,
  },

  router: {
    base: '/',
  },
};
