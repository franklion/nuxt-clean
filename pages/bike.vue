<template>
  <div>
    <section class="hero is-medium is-dark is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Taipei Ubike
          </h1>
          <h2 class="subtitle">
            Hope you find something you like.
          </h2>
        </div>
      </div>
    </section>

    <!-- <h1>{{ data }}</h1> -->
    <section class="bike-section">
      <table class="bike-table">
        <thead class="bike-thead">
          <tr>
            <th>編號</th>
            <th>區域</th>
            <th>站名</th>
            <th>地址</th>
            <th>目前數量</th>
          </tr>
        </thead>

        <tbody class="bike-tbody" v-cloak>
          <tr v-for="(bike,index) in bikes" :key="index" v-if="bike.sna">
            <td>{{ bike.sno }}</td>
            <td>{{ bike.sarea }}</td>
            <td>{{ bike.sna }}</td>
            <td>{{ bike.ar }}</td>
            <td>{{ bike.sbi }}</td>
          </tr>
        </tbody>

      </table>
    </section>

  </div>
</template>


<script>
// import axios from 'axios'

export default {
  head: {
    title: 'Bike',
  },
  data() {
    return {}
  },
  // async asyncData({ app }) {
  //   const nuxt = await app.axios.$get('59388bb4120000dc00a672e2')
  //   return {
  //     data: nuxt.nuxt,
  //   }
  // },
  asyncData({ app }) {
    // const apiUrl = process.env.NODE_ENV === 'production' ? 'http://data.taipei/youbike' : '/data/youbike'
    return app.axios.$get('/data/youbike')
      .then(response => ({ bikes: response.retVal }))
  },
}
</script>



<style lang="scss">
[v-cloak] {
  display: none;
}

.bike-section {
  padding-top: 1px;
}

.bike-table {
  margin: 0 auto;
  box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.3);

  .bike-thead {
    background-color: #a3f7ff;
    th {
      text-align: center;
      padding: 5px 10px;
    }
  }

  .bike-tbody {
    background-color: #fcd4d4;
    td {
      text-align: center;
      padding: 5px 10px;
    }
  }
}
</style>

