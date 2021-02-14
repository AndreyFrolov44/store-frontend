<template>
  <div class="col-md-3 col-sm-6">
    <div class="single-shop-product">
      <div class="product-upper">
        <img :src="product.image" :alt="product.name" />
      </div>
      <h2>
        <nuxt-link
          :to="{ name: 'product-slug', params: { slug: product.slug } }"
          >{{ product.name }}</nuxt-link
        >
      </h2>
      <div v-if="product.priceSale" class="product-carousel-price">
        <ins>{{ product.priceSale }}&#8381;</ins>
        <del v-if="product.price">{{ product.price }}&#8381;</del>
      </div>
      <div v-else class="product-carousel-price">
        <ins>{{ product.price }}&#8381;</ins>
      </div>
      <BuyButton :product="product" />
    </div>
  </div>
</template>

<script>
import BuyButton from '~~/components/BuyButton'

export default {
  props: ["product"],
  methods: {
    isCart(product){
      console.log(this.$store.state.localStorage.cart.indexOf(product) >= 0)
      return this.$store.state.localStorage.cart.indexOf(product) >= 0
    }
  },
  components: {BuyButton}
};
</script>