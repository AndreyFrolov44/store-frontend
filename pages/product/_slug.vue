<template>
  <div ref="shop" class="shop">
    <div class="product-big-title-area">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="product-bit-title text-center">
              <h2>Магазин</h2>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="single-product-area">
      <div class="zigzag-bottom"></div>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="product-content-right">
              <div class="product-breadcroumb">
                <nuxt-link to="/">Главная</nuxt-link>
                <nuxt-link
                  :to="{
                    name: 'category-slug',
                    params: { slug: categorySlug },
                  }"
                  >{{ product.category }}</nuxt-link
                >
                <nuxt-link
                  :to="{ name: 'product-slug', params: { slug: product.slug } }"
                  >{{ product.name }}</nuxt-link
                >
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <div class="product-images">
                    <div
                      v-if="product.images.length === 0"
                      class="product-main-img"
                    >
                      <img :src="product.image" :alt="product.name" />
                    </div>
                    <swiper
                      v-else
                      class="product-main-img"
                      :options="swiperOptionTop"
                      ref="swiperTop"
                    >
                      <swiper-slide
                        v-for="image in product.images"
                        :key="image.id"
                        class="slide-2"
                        ><img :src="image.image" alt=""
                      /></swiper-slide>
                      <div
                        class="swiper-button-next swiper-button-white"
                        slot="button-next"
                      ></div>
                      <div
                        class="swiper-button-prev swiper-button-white"
                        slot="button-prev"
                      ></div>
                    </swiper>
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="product-inner">
                    <h2 class="product-name">{{ product.name }}</h2>
                    <div v-if="product.priceSale" class="product-inner-price">
                      <ins>{{ product.priceSale }}&#8381;</ins>
                      <del v-if="product.price">{{ product.price }}&#8381;</del>
                    </div>
                    <div v-else class="product-inner-price">
                      <ins>{{ product.price }}&#8381;</ins>
                    </div>
                    <form @submit.prevent="addItem(product)" class="cart">
                      <div class="quantity">
                        <input
                          type="number"
                          size="4"
                          v-model="quantity"
                          class="input-text qty text"
                          onkeypress="return event.charCode >= 48"
                          value="1"
                          name="quantity"
                          min="1"
                          step="1"
                        />
                      </div>
                      <button
                        v-if="!isProductAdded"
                        class="add_to_cart_button"
                        type="submit"
                      >
                        Добавить в корзину
                      </button>
                      <button
                        v-else
                        class="add_to_cart_button cart_added"
                        disabled
                      >
                        Добавлено
                      </button>
                    </form>

                    <div class="product-inner-category">
                      <p>
                        Категория:
                        <nuxt-link
                          :to="{
                            name: 'category-slug',
                            params: { slug: categorySlug },
                          }"
                          >{{ product.category }}</nuxt-link
                        >
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="description">
                <div class="description-title-block">
                  <div class="description-title">Описание</div>
                </div>
                <div
                  class="description-block"
                  v-html="product.description"
                ></div>
              </div>

              <div
                v-if="product.related_products.length > 0"
                class="related-products-wrapper"
              >
                <h2 class="related-products-title">Похожие товары</h2>
                <div class="product-nav">
                  <div
                    class="product-button-prev product-button"
                    slot="button-prev"
                  >
                    Назад
                  </div>
                  <div
                    class="product-button-next product-button"
                    slot="button-next"
                  >
                    Далее
                  </div>
                </div>
                <swiper
                  calss="related-products-carousel"
                  :options="swiperOption"
                >
                  <swiper-slide
                    v-for="related in product.related_products"
                    :key="related.id"
                    class="single-product"
                  >
                    <div class="product-f-image">
                      <img :src="related.image" :alt="related.name" />
                      <div class="product-hover">
                        <a
                          v-if="
                            !$store.state.localStorage.cart.find(
                              (p) => p.id === related.id
                            )
                          "
                          class="add-to-cart-link"
                          href=""
                          @click.prevent="
                            $store.commit('localStorage/addToCart', {
                              item: related,
                              quantity: 1,
                            })
                          "
                        >
                          <i class="fa fa-shopping-cart"></i> Добавить в корзину
                        </a>
                        <a
                          v-else
                          class="add-to-cart-link cart_added"
                          @click.prevent=""
                        >
                          <i class="fa fa-shopping-cart"></i> Добавлено
                        </a>

                        <nuxt-link
                          class="view-details-link"
                          :to="{
                            name: 'product-slug',
                            params: { slug: related.slug },
                          }"
                          ><i class="fa fa-link"></i> Подробнее</nuxt-link
                        >
                      </div>
                    </div>

                    <h2>
                      <nuxt-link
                        :to="{
                          name: 'product-slug',
                          params: { slug: related.slug },
                        }"
                        >{{ related.name }}</nuxt-link
                      >
                    </h2>
                    <div
                      v-if="related.priceSale"
                      class="product-carousel-price"
                    >
                      <ins>{{ related.priceSale }}&#8381;</ins>
                      <del>{{ related.price }}</del>
                    </div>
                    <div v-else class="product-carousel-price">
                      <ins>{{ related.price }}&#8381;</ins>
                    </div>
                  </swiper-slide>
                </swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { transliterate as tr, slugify } from "transliteration";
import BuyButton from "~~/components/BuyButton";

export default {
  data() {
    return {
      swiperOptionTop: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 10,
        navigation: {
          nextEl: ".product-button-next",
          prevEl: ".product-button-prev",
        },
      },
      quantity: 1,
    };
  },
  async asyncData({ $axios, params, error }) {
    try {
      const product = await $axios.$get(`/product/${params.slug}`);
      const categorySlug = slugify(product.category);
      return { product, categorySlug };
    } catch (err) {
      return error({
        statusCode: 404,
        message: "Товар не найдена или сервер не доступен",
      });
    }
  },
  methods: {
    addItem(product) {
      this.$store.commit("localStorage/addToCart", {
        item: product,
        quantity: this.quantity,
      });
    },
  },
  components: {
    BuyButton,
  },
  computed: {
    isProductAdded() {
      return this.$store.state.localStorage.cart.find(
        (p) => p.id === this.product.id
      );
    },
  },
};
</script>