<!-- ./pages/post/_id/index.vue -->
<template>
  <section>
    <div class="hero is-medium is-info is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Post page
          </h1>
          <h2 class="subtitle">
            Hope you find something you like.
          </h2>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-content">
        <p class="title">{{ post.title }}</p>
        <p class="subtitle">{{ post.body }}</p>
        <small>Article Id: {{ post.id }}</small>
      </div>
    </div>
  </section>
</template>

<script>
/* eslint-disable */

import axios from 'axios'

export default {
  validate({ params }) {
    return /^\d+$/.test(params.id)
  },
  asyncData: function ({ params }, callback) {

    let postUrl = 'https://jsonplaceholder.typicode.com';
    return axios.get(postUrl + '/posts/' + parseInt(params.id))
                .then((response) => {
                  return callback(null, { post: response.data })
                })
                .catch((err) => {
                  return callback({ statusCode: 404, message: 'Documentation page not found' })
                })
  },
  //    async asyncData ({params}, callback) {
  //
  //      let postUrl  = 'https://jsonplaceholder.typicode.com'
  //      let response = await axios.get(postUrl + '/posts/' + parseInt(params.id))
  //
  //      if (!response.data) {
  //        return callback({statusCode: 404, message: 'Documentation page not found'})
  //      }
  //      return callback(null, {post: response.data})
  //    },
  head() {
    return {
      title: this.post.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.summary
        }
      ]
    }
  },
  mounted() { }
}
</script>


<style lang="css" scoped="">
.card {
  margin-top: 50px;
}
</style>
