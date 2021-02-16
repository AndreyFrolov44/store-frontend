<template>
  <div id="main-page">
    <MainSlider :banners="banners" />
    <LatestProduct :latestProducts="latestProducts" />

    <div class="product-widget-area">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <div class="single-product-widget">
              <h2 class="product-wid-title">Высокие скидки</h2>
              <TopSomething
                v-for="product in topSale"
                :product="product"
                :key="product.id"
              />
            </div>
          </div>
          <div class="col-sm-6">
            <div class="single-product-widget">
              <h2 class="product-wid-title">Новые продукты</h2>
              <TopSomething
                v-for="product in newProduct"
                :product="product"
                :key="product.id"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainSlider from "@/components/MainSlider.vue";
import LatestProduct from "@/components/LatestProduct.vue";
import TopSomething from "@/components/TopSomething.vue";

export default {
  name: "index",
  head: {
    title: 'Главная | ElectroStore'
  },
  components: {
    MainSlider,
    LatestProduct,
    TopSomething,
  },
  async asyncData({ $axios }) {
    let banners = await $axios.$get("/product/banner");
    let latestProducts = await $axios.$get("/product/latest");
    let topSale = await $axios.$get("/product/top-sale");
    let newProduct = await $axios.$get("/product/new-product");
    return { banners, latestProducts, topSale, newProduct };
  },
};
</script>

<style>
</style>
