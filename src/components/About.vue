<template>

  <div>
    <button type="button" class="btn btn-danger text-danger m-3"> <router-link class="link-light" :to="'/'"> На
        главную</router-link></button>
    <div class="   container containers mt-5  ">
      <div v-for="(item, index) in dataAfterfetch" v-bind:key="index">
        <div class="card m-1" style="width: 22rem;">
          <img :src=item.url class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">номер id - {{ item.id }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'About-a',
  data() {
    return {
      dataAfterfetch: null,
      dataFetch: null,
      id: this.$route.params.id,
    }
  },

  async mounted() {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos?');
    this.dataFetch = await response.json();
    this.dataAfterfetch = this.dataFetch.filter(item => item.id == this.id)
  }
}
</script>

<style scoped>
.containers {
  width: 400px;
  height: 00px;
  background-color: blueviolet;
}
</style>
