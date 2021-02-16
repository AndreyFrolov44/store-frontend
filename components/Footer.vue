<template>
  <div class="footer-top-area">
    <div class="container">
      <div class="row">
        <div class="col-sm-4 col-xs-12">
          <div class="footer-about-us">
            <p>
              В нашем магазине вы можете произвести оплату в WebMoney Transfer со своего электронного кошелька. Мы начинаем работу по доставке вашего товара сразу после того, как товар будет оплачен.
            </p>
            <a href="https://passport.webmoney.ru/asp/certview.asp?wmid=333243249167" target=_blank>
              <img src="@/assets/img/135_wm_merchant.png" title="Здесь находится аттестат нашего WM идентификатора " border="0">
              <br>
              <font size=1>Проверить аттестат</font>
            </a> 
          </div>
        </div>

        <div class="col-sm-4 col-xs-12">
          <div class="footer-menu">
            <h2 class="footer-wid-title">Навигация пользователя</h2>
            <ul>
              <li>
                <nuxt-link to="/cart">Корзина</nuxt-link>
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
    ...mapState(["categories"]),
  },
};
</script>