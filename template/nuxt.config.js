import colors from 'vuetify/es5/util/colors'

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'spa',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  {{#isEnabled plugins 'auth'}}
  router: {
    middleware: ['auth']
  },
  {{/isEnabled}}
  /*
  ** Global CSS
  */
  css: [],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '@plugins/dialogs'
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/router-extras'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    {{#isEnabled plugins 'axios'}}
    '@nuxtjs/axios',
    {{/isEnabled}}
    {{#isEnabled plugins 'pwa'}}
    '@nuxtjs/pwa',
    {{/isEnabled}}
    {{#isEnabled plugins 'auth'}}
    '@nuxtjs/auth',
    {{/isEnabled}}
    {{#isEnabled plugins 'firebase'}}
    '@nuxtjs/firebase',
    {{/isEnabled}}
  ],
  {{#isEnabled plugins 'axios'}}
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  {{/isEnabled}}
  {{#isEnabled plugins 'firebase'}}
  firebase: {
    config: {
      production: {
        apiKey: '<apiKey>',
        authDomain: '<authDomain>',
        databaseURL: '<databaseURL>',
        projectId: '<projectId>',
        storageBucket: '<storageBucket>',
        messagingSenderId: '<messagingSenderId>',
        appId: '<appId>',
        measurementId: '<measurementId>'
      },
      development: {
        apiKey: '<apiKey>',
        authDomain: '<authDomain>',
        databaseURL: '<databaseURL>',
        projectId: '<projectId>',
        storageBucket: '<storageBucket>',
        messagingSenderId: '<messagingSenderId>',
        appId: '<appId>',
        measurementId: '<measurementId>'
      }
    },
    services: {
      auth: true
    }
  }
  {{/isEnabled}}
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  }
}
