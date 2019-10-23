
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  env: {
    VUE_APP_GOOGLE_MAPS_API_KEY: process.env.VUE_APP_GOOGLE_MAPS_API_KEY
  },
  googleAnalytics: {
    id: "UA-150511137-1",
    dev: false
  },
  head: {
    title: 'Delizy Indonesia - How to Make Water Kefir',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Delizy Indonesia How To Make Water Kefir' },
      { metaInfo : {
       title : 'Delizy Indonesia' 
      }
    },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logoicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/google-maps'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    
    'bootstrap-vue/nuxt',
    '@nuxtjs/google-analytics',
    '@nuxtjs/dotenv',
    ['vue-scrollto/nuxt', { duration: 500 }],
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
