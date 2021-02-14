<template>
  <div>

    <div class="site-branding-area">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <div class="logo">
              <h1>
                <nuxt-link exact to="/"><img src="@/assets/img/logo.png" /></nuxt-link>
              </h1>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="shopping-item">
              <nuxt-link to="/cart"
                >Корзина
                <i class="fa fa-shopping-cart"></i>
                <span v-show="this.$store.state.localStorage.cart.length > 0" class="product-count">{{this.$store.state.localStorage.cart.length}}</span></nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mainmenu-area">
      <div class="container">
        <div class="row">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
              <li class="active"><nuxt-link exact to="/">Главная</nuxt-link></li>
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
  name: "Nav",
  computed: {
    ...mapState(['categories'])
  },
  methods: {
    openCategory(slug){
      this.$router.push('/category/' + slug)
    }
  }
};
</script>