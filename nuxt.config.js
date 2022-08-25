import dotenv from 'dotenv'
const axios = require('axios')

dotenv.config()

const useLocal = process.env.USE_LOCAL

const setting = {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'IMAVI',
        titleTemplate: '%s || IMAVI',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/logo.svg' },
        ],

    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        '~/assets/scss/style.scss'
    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        '~/plugins/vue-awesome-swiper.js',
        '~/plugins/Mixitup.client.js',
        /* {
            src: "~/plugins/aos",
            ssr: false
        }, */
        {
            src: '~plugins/vue-backtotop.js',
            ssr: false
        },
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
        '@nuxtjs/style-resources',
        '@nuxtjs/axios',
        '@nuxtjs/proxy',
        '@nuxtjs/pwa',
        '@nuxtjs/dotenv'
    ],

    styleResources: {
        scss: [
            '~/assets/scss/common/_variables.scss',
        ]
    },

    router: {
        linkExactActiveClass: 'active',
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        extractCSS: true,
        extend (config, ctx) {
        },
        babel: {
            compact: true,
           },
    },
    target : 'static',

    generate: {
        async routes (callback) {
            let mainUrl = 'http://localhost:3005/imavi/'
            if (useLocal === 'false') {
                mainUrl = 'https://api.imavi.org/imavi/'
            }

            const routeList = [];

            const indexRoute = await axios.get(mainUrl + 'generals/imavi-landing', {
                headers: {
                  Id: process.env.APP_ID,
                  Secret: process.env.APP_SECRET,
                  Partner: process.env.PARTNER
                }
            }).then((res) => {
                const payload = res.data
                return {
                  route: '/',
                  payload
                }
            }).catch(callback)
            routeList.push(indexRoute)

            callback(null, routeList)
        }
    },
}

let baseURL
if (useLocal === 'true') {
  baseURL = 'http://localhost:8888'
} else {
  baseURL = ''
}
setting.axios = {
  baseURL
}

export default setting
