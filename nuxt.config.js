const axios = require('axios')

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s | Awesome JS SSR Blog',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js project'
      },
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.4.2/css/bulma.min.css',
      },
    ],
  },
  css: ['~/assets/main.css'],
  generate: {
    routes() {
      const root = 'https://jsonplaceholder.typicode.com'
      let posts = axios.get(`${root}/posts/`)
                       .then(res => res.data.map(post => `/post/${post.id}`))
      return posts                 

        // const bilesUrl = 'http://data.taipei/data/youbike'
        // let bikes = axios.get(bilesUrl)
        //                  .then(res => res.) 

    },

    // routes(callback) {
    //   const posts = require('./posts.json')
    //   let routes = posts.map(post => `/post/${post.id}`)
    //   console.log(routes)
    //   callback(null, routes)
    // }
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#3B8070'
  },
  /*
   ** Build configuration
   */
  build: {
    vendor: ['axios'],
    // publicPath: 'http://thor.iprefer.com.tw/iprefer/labs/frank/nuxt-clean/'
    /*
     ** Run ESLINT on save
     */
    // extend (config, ctx) {
    //   if (ctx.dev && ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
 ],
  proxy: [
    ['/api/data', { target: 'http://data.taipei/', pathRewrite: { '^/api/data': '' } }],
    ['/api', { target: 'http://www.mocky.io', pathRewrite: { '^/api': '/v2' } }]
  ],
  axios: {
    credentials: false
  }
    
}
