<template>
  <div>
    <div class=" d-flex flex-wrap justify-content-center  ">

      <div tag="div" v-for="(item, index) in dataFetch" v-bind:key="index">
        <div class="card m-1" style="width: 18rem;">
          <img :src=item.url class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">номер id - {{ item.id }}</p>

            <button type="button" class="btn btn-danger text-danger mt-1"> <router-link class="link-light"
                :to="'/' + item.id"> Посмотреть товар</router-link></button>
            <button type="button" class="btn btn-danger  mt-1" @click="addTobasket(item.id)">В корзину</button>
          </div>
        </div>
      </div>

    </div>
    <div class="text-center">
      <button type="button" @:click="addlist" class="btn btn-primary m-3">Добавить список</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home-a',
  emits: ['toggle-favorite'],
  props: ['basket'],
  data() {
    return {
      res: this.basket,
      res2: [],
      res3: [],
      dataFetch: null,
      num: 20,

    }
  },
  methods: {
    addTobasket(id) {
      this.res.push(this.dataFetch.filter(item => item.id == id))
      // this.res2.push(this.dataFetch.filter(item => item.id == id))

      this.res.every(item => {
        if (item[0].id == id) {
          item[0].quantity++
          return false;
        } else {
          return true;
        }
      });


  

      this.res.filter((obj, index) => {
        return index === this.res.findIndex(o => obj.id === o.id && obj.name === o.name);
      });
      console.log(this.res3)

      
    },
    async addlist() {
      this.num = this.num + 10
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit= ${this.num}`);
      this.dataFetch = await response.json();
      this.dataFetch.forEach((item) => {
        item.quantity = 0
      });
    },
  },

  async mounted() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${this.num}`);
    this.dataFetch = await response.json();
    this.dataFetch.forEach((item) => {
      item.quantity = 0
    });

    // console.log(this.dataFetch)
  }




}
</script>
