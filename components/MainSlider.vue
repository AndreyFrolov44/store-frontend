<template>
  <div class="slider-area">
    <div class="block-slider block-slider4">
      <swiper ref="mySwiper" :options="swiperOptions" :auto-update="true">
        <swiper-slide v-for="banner in banners" :key="banner.id">
          <img :src="banner.banner_image" alt="Slide" />
          <div class="caption-group">
            <h2 class="caption title">
              <nuxt-link
                class="caption title"
                :to="{
                  name: 'product-slug',
                  params: { slug: banner.slug },
                }"
                >{{ banner.name }}</nuxt-link
              >
            </h2>

            <nuxt-link
              class="caption button-radius"
              :to="{
                name: 'product-slug',
                params: { slug: banner.slug },
              }"
              ><span class="icon"></span>Подробнее</nuxt-link
            >
          </div>
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainSlider",
  props: ["banners"],
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        loop: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
      },
    };
  },
};
</script>