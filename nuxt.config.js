const webpack = require('webpack')
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'frontend-nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'http://fonts.googleapis.com/css?family=Titillium+Web:400,200,300,700,600' },
      { rel: 'stylesheet', type: 'text/css', href: 'http://fonts.googleapis.com/css?family=Roboto+Condensed:400,700,300' },
      { rel: 'stylesheet', type: 'text/css', href: 'http://fonts.googleapis.com/css?family=Raleway:400,100' },
    ],
    script: [
      {src: 'https://code.jquery.com/jquery.min.js', defer: true},
      {src: 'http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js', defer: true},
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/bootstrap.min.css',
    '~/assets/css/font-awesome.min.css',
    '~/assets/style.css',
    '~/assets/css/responsive.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/jquery.sticky.js', mode: 'client'},
    {src: '~/plugins/main.js', mode: 'client'},
    {src: '~/plugins/swiper.js'}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-vuex-localstorage',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'http://localhost:8000/api', // Used as fallback if no runtime config is provided
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    plugins: [
      new webpack.ProvidePlugin({
         $: 'jquery',
          jquery: 'jquery',
          'window.jQuery': 'jquery',
      })
    ],
  }
}
