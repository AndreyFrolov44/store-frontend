<template>
  <div class="footer-top-area">
    <div class="container">
      <div class="row">
        <div class="col-sm-4 col-xs-12">
          <div class="footer-about-us">
            <h2>u<span>Stora</span></h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perferendis sunt id doloribus vero quam laborum quas alias dolores
              blanditiis iusto consequatur, modi aliquid eveniet eligendi iure
              eaque ipsam iste, pariatur omnis sint! Suscipit, debitis,
              quisquam. Laborum commodi veritatis magni at?
            </p>
          </div>
        </div>

        <div class="col-sm-4 col-xs-12">
          <div class="footer-menu">
            <h2 class="footer-wid-title">Навигация пользователя</h2>
            <ul>
              <li>
                <a href="#">Избранное</a>
              </li>
              <li>
                <a href="cart.html">Корзина</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-sm-4 col-xs-12">
          <div class="footer-menu">
            <h2 class="footer-wid-title">Категории</h2>
            <ul>
              <li><nuxt-link exact to="/">Главная</nuxt-link></li>
              <li v-for="category in categories" :key="category.id">
                <nuxt-link exact no-prefetch :to="{ name: 'category-slug', params: { slug: category.slug }}">{{category.name}}</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Footer",
  computed: {
    ...mapState(['categories'])
  }
};
</script>