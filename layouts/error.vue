<template>
  <section class="hero is-medium is-danger is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          {{ error.statusCode }} - {{ error.message }}
        </h1>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    props: ['error'],
  }
</script>
