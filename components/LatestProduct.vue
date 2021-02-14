<template>
  <div class="maincontent-area">
    <div class="zigzag-bottom"></div>
    <div class="container">
      <div class="latest-product">
        <h2 class="section-title">Лучшие продукты</h2>
        <div class="product-nav">
          <div class="product-button-prev product-button" slot="button-prev">
            Назад
          </div>
          <div class="product-button-next product-button" slot="button-next">
            Далее
          </div>
        </div>
        <swiper class="product-carousel" :options="swiperOption">
          <swiper-slide
            class="single-product"
            v-for="product in latestProducts"
            :key="product.id"
          >
            <div class="product-f-image">
              <img :src="product.image" :alt="product.name" />
              <div class="product-hover">
                <!-- <a
                  href=""
                  @click.prevent="
                    $store.commit('localStorage/addToCart', {
                      item: product,
                      quantity: 1,
                    })
                  "
                  class="add-to-cart-link"
                  ><i class="fa fa-shopping-cart"></i> Добавить в корзину</a
                > -->
                <a
                  v-if="
                    !$store.state.localStorage.cart.find(
                      (p) => p.id === product.id
                    )
                  "
                  class="add-to-cart-link"
                  href=""
                  @click.prevent="
                    $store.commit('localStorage/addToCart', {
                      item: product,
                      quantity: 1,
                    })
                  "
                >
                  <i class="fa fa-shopping-cart"></i> Добавить в корзину
                </a>
                <a v-else class="add-to-cart-link cart_added" href="" @click.prevent="">
                  <i class="fa fa-shopping-cart"></i> Добавлено
                </a>

                <nuxt-link
                  class="view-details-link"
                  :to="{
                    name: 'product-slug',
                    params: { slug: product.slug },
                  }"
                  ><i class="fa fa-link"></i> Подробнее</nuxt-link
                >
              </div>
            </div>

            <h2>
              <nuxt-link
                :to="{
                  name: 'product-slug',
                  params: { slug: product.slug },
                }"
                >{{ product.name }}</nuxt-link
              >
            </h2>

            <div v-if="product.priceSale" class="product-carousel-price">
              <ins>{{ product.priceSale }}&#8381;</ins>
              <del>{{ product.price }}</del>
            </div>
            <div v-else class="product-carousel-price">
              <ins>{{ product.price }}&#8381;</ins>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LatestProduct",
  props: ["latestProducts"],
  data() {
    return {
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 20,
        loop: true,
        navigation: {
          nextEl: ".product-button-next",
          prevEl: ".product-button-prev",
        },
      },
    };
  },
};
</script>