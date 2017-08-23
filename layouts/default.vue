<!-- ./layouts/default.vue -->

<template>
  <div>
    <!-- navigation -->
    <nav class="nav has-shadow">
      <div class="container">
        <div class="nav-left">
          <nuxt-link to="/" class="nav-item">
            Awesome JS SSR Blog!
          </nuxt-link>
          <nuxt-link active-class="is-active" to="/" class="nav-item is-tab" exact>Home</nuxt-link>
          <nuxt-link active-class="is-active" to="/about" class="nav-item is-tab" exact>About</nuxt-link>
          <nuxt-link active-class="is-active" to="/posts" class="nav-item is-tab" exact>Posts</nuxt-link>
          <nuxt-link active-class="is-active" to="/action" class="nav-item is-tab" exact>Action</nuxt-link>
          <nuxt-link active-class="is-active" to="/bike" class="nav-item is-tab" exact>Bike</nuxt-link>
        </div>
      </div>
    </nav>
    <!-- /navigation -->

    <!-- displays the page component -->
    <nuxt/>

  </div>
</template>
