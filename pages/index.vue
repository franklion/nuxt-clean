<!-- ./pages/index.vue -->
<template>
  <div>
    <section class="hero is-medium is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Welcome to the JavaScript SSR Blog.
          </h1>
          <h2 class="subtitle">
            Hope you find something you like.
          </h2>
        </div>
      </div>
    </section>
  </div>

</template>

<script>
import Posts from '~/components/Posts.vue'

export default {
  head() {
    return {
      title: 'Home',
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' },
      ],
    }
  },
  components: {
    Posts,
  },
}
</script>
