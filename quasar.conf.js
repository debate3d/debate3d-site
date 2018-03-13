// Configuration for your app
const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = function (ctx) {
  return {
    // app plugins (/src/plugins)
    plugins: [
      'fb-button',
      'apollo'
    ],
    css: [
      'app.styl'
    ],
    extras: [
      ctx.theme.mat ? 'roboto-font' : null,
      'material-icons',
      'fontawesome'
      // 'ionicons',
      // 'mdi'
    ],
    supportIE: false,
    vendor: {
      add: [],
      remove: []
    },
    build: {
      scopeHoisting: true,
      vueRouterMode: 'hash',
      env: ctx.dev
        ? { // so on dev we'll have
          API: '"http://localhost:3000/"'
        }
        : { // and on build (production):
          API: '"https://api-debate3d.herokuapp.com/"'
        },
      // gzip: true,
      // analyze: true,
      // extractCSS: false,
      // useNotifier: false,
      extendWebpack (cfg) {
        cfg.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules|quasar)/
        })
        cfg.module.rules.push({
          test: /\.(graphql|gql)$/,
          //  exclude: /node_modules/,
          loader: 'graphql-tag/loader'
        })
        cfg.resolve.alias = {
          ...cfg.resolve.alias,
          '@': path.resolve(__dirname, './src')
        }
        cfg.plugins.push(new Dotenv())
      }
    },
    devServer: {
      // https: true,
      // port: 8080,
      open: true // opens browser window automatically
    },
    // framework: 'all' --- includes everything; for dev only!
    framework: {
      components: [
        'QLayout',
        'QLayoutHeader',
        'QLayoutDrawer',
        'QPageContainer',
        'QPage',
        'QToolbar',
        'QToolbarTitle',
        'QBtn',
        'QIcon',
        'QList',
        'QListHeader',
        'QItem',
        'QItemMain',
        'QItemSide',
        'QField',
        'QInput',
        'QBtn',
        'QCard',
        'QCardMain',
        'QCardMedia',
        'QModal',
        'QModalLayout'
      ],
      directives: [
        'Ripple'
      ],
      // Quasar plugins
      plugins: [
        'Notify',
        'Loading'
      ]
    },
    // animations: 'all' --- includes all animations
    animations: [
    ],
    pwa: {
      cacheExt: 'js,html,css,ttf,eot,otf,woff,woff2,json,svg,gif,jpg,jpeg,png,wav,ogg,webm,flac,aac,mp4,mp3',
      manifest: {
        name: 'Debate3D App',
        short_name: 'Debate3D App',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#3a4752',
        theme_color: '#3a4752',
        icons: [
          {
            'src': 'statics/icons/android-chrome-192x192.png',
            'sizes': '192x192',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/android-chrome-512x512.png',
            'sizes': '512x512',
            'type': 'image/png'
          }
        ]
      }
    },
    cordova: {
      // id: 'org.cordova.quasar.app'
    },
    electron: {
      extendWebpack (cfg) {
        // do something with cfg
      },
      packager: {
        // OS X / Mac App Store
        // appBundleId: '',
        // appCategoryType: '',
        // osxSign: '',
        // protocol: 'myapp://path',

        // Window only
        // win32metadata: { ... }
      }
    },

    // leave this here for Quasar CLI
    starterKit: '1.0.0'
  }
}
