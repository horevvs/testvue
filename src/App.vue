<template>
  <div class="">
  
  <div class="position-relative" >
    <button type="button" v-if="show" @:click="openbasket" class="btn btn-primary  m-3 position-absolute top-0 end-0 ">  
      {{ this.dataBasket.length !== 0 ?   `В корзине товаров ${lengthArray}` : 'В корзине пусто' }}  </button>
    <button type="button" v-if="hide" @:click="openbasket" class="btn btn-primary m-3  position-absolute top-0 end-0 ">Закрыть корзину</button>
  </div>
    
  <div class="container " v-if="hide">
  <Basket v-bind:filteredBasket="this.dataBasket"
  @toggle-favorite="openbasket" />
  </div>

  <main class="container" v-if="show">
  <RouterView v-bind:basket="this.dataBasket"
   />
  </main>

  </div>

</template>

<script>
import Basket from './components/Basket.vue'



export default {
  data() {
    return {
      hide: false,
      show: true,
      dataBasket: [],
      result: this.dataBasket

    };
  },
  components: {
    'Basket': Basket,
  },
  methods: {
    openbasket() {
      this.hide = !this.hide
      this.show = !this.show
    },
    // receiveEmit() {
    //  alert('ура')
    // }
  },

  computed: {
    lengthArray() {
      if (this.dataBasket.length !== 0) {
        return this.dataBasket.length
      }
      else {
        return 'no'
      }
    }
  }
}

</script>

<style>
.basket{
  background-color: brown;
}
</style>