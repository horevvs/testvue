<template>
    <div class="mt-3">
        <div v-if="Object.keys(this.res).length !== 0">

            <div v-for="(item, index) in  res" v-bind:key="index">
                <img :src=item[0].url class="card-img-top" style="width: 10rem;" alt="...">
                <p> номер товара: {{ item[0].id }}</p>
                <p> описание товара:{{ item[0].title }}</p>
                <p> шт:{{ item[0].quantity }}</p>
            </div>
        </div>

        <div v-else>
            <p> пусто </p>
            <!-- <button type="button" class="btn btn-danger  mt-1" @click="toggleFavorite">эмит</button> -->
        </div>


        





    </div>

</template>
<script>

export default {
    name: 'Home-a',
    props: ['filteredBasket', 'hide'],
    data() {
        return {
            res: this.filteredBasket,
            baskets: false,
            dataFetch: null,
            hidebasket: this.hide,
            result: []
        };
    },
    // methods: {
    //     toggleFavorite() {
    //         this.$emit('toggle-Favorite');
    //     }
    // }

}
</script>
