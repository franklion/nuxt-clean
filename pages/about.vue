<!-- ./pages/about.vue -->
<template>
  <section>
    <div class="hero is-medium is-info is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            About page
          </h1>
          <h2 class="subtitle">
            Hope you find something you like.
          </h2>
        </div>
      </div>
    </div>

    <div class="main-content">
      <div class="container">
        <h2 class="title is-2">About this website.</h2>
        <p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong>
          blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.
        </p>
        <br>
        <h4 class="title is-4">What we hope to achieve:</h4>
        <ul>
          <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
          <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
          <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
          <li>Ut non enim metus.</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    transition: 'bounce',
    head: {
      title: 'About',
    },
  }
</script>
