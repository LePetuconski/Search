export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Dados Geograficos | FATEC',
    htmlAttrs: {
      lang: 'pt-BR',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],

  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue.backtotop', mode: 'client' },
    { src: '~/plugins/vue.modal' },
    { src: '~/plugins/vue.toasts', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  axios: {
    proxy: true,
  },

  proxy: {
    '/api': { target: 'http://geosearch.com.br/', pathRewrite: { '^/api': '' }, changeOrigin: true }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
