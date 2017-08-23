<!-- ./pages/posts.vue -->
<template>
  <section>
    <div class="hero is-medium is-success is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Posts page
          </h1>
          <h2 class="subtitle">
            Hope you find something you like.
          </h2>
        </div>
      </div>
    </div>
    <Posts :posts="posts"></Posts>
  </section>
</template>

<script>
import axios from 'axios'
import Posts from '~/components/Posts.vue'

export default {
  transition: 'page',
  head: {
    title: 'Posts',
  },
  data() {
    return {}
  },
  components: {
    Posts,
  },
  async asyncData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts'
    const { data } = await axios.get(apiUrl)
    return { posts: data }
  },

  //    asyncData () {
  //
  //      let apiUrl = 'https://jsonplaceholder.typicode.com/posts'
  //      return axios.get(apiUrl)
  //                  .then((response) => {
  //                    console.log(response)
  //                    return { posts: response.data}
  //                  })
  //    }
}
</script>
