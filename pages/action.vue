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
      <div>
        <p>{{person.index}}</p>
        <p>{{person.guid}}</p>
        <p>{{person.isActive}}</p>
      </div>
    </section>

  </div>
</template>


<script>
export default {
  head: {
    title: 'Action',
  },
  data() {
    return {}
  },
  asyncData({ app }) {
    return app.axios.$get('http://beta.json-generator.com/api/json/get/V13mFUPQX')
      .then(response => ({ person: response }))
  },
}
// development
// production {{index()}}
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
