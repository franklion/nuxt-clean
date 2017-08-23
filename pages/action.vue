<template>
  <div>
    <section class="hero is-medium is-light is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Images Page
          </h1>
          <h2 class="subtitle">
            Hope you find something you like.
          </h2>
        </div>
      </div>
    </section>

    <section>
      Configuration

      <ul>
        <li>Url: {{ url }}</li>
        <li>Port: {{ port }}</li>
      </ul>
      <figure class="figure-block">
        <img src="/sign.png" alt="" class="static-image fixed-size-image">
        <figcaption>Static Image</figcaption>
      </figure>

      <figure class="figure-block">
        <img src="~assets/lion.png" alt="" class="static-image fixed-size-image">
        <figcaption>Assets Image</figcaption>
      </figure>

      <figure class="figure-block">
        <img src="~assets/icon-purple-like.png" alt="" class="static-image">
        <figcaption>Assets Image(base-64 data URL)</figcaption>
      </figure>

    </section>

  </div>
</template>


<script>
export default {
  head: {
    title: 'Action',
  },
  data({ env }) {
    return {
      url: env.url,
      port: env.port,
    }
  },
}
</script>

<style>
.figure-block {
  display: inline-block;
  margin: 50px;
}

.fixed-size-image {
  width: 100px;
}

.static-image {
  display: block;
  max-width: 100%;
  height: auto;
  margin: 0 auto;
}
</style>
