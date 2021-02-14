<template>
  <div class="single-wid-product">
    <nuxt-link
      :to="{
        name: 'product-slug',
        params: { slug: product.slug },
      }"
      ><img :src="product.image" :alt="product.name" class="product-thumb"
    /></nuxt-link>
    <h2>
      <nuxt-link
        :to="{
          name: 'product-slug',
          params: { slug: product.slug },
        }"
        >{{ product.name }}</nuxt-link
      >
    </h2>
    <div v-if="product.priceSale" class="product-wid-price">
      <ins>{{ product.priceSale }}&#8381;</ins>
      <del>{{ product.price }}&#8381;</del>
    </div>
    <div v-else class="product-wid-price">
      <ins>{{ product.price }}&#8381;</ins>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopSomething",
  props: ["product"],
};
</script>