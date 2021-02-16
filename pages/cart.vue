<template>
  <div>
    <div class="product-big-title-area">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="product-bit-title text-center">
              <h2>Ваша корзина</h2>
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
              <div class="woocommerce">
                <client-only>
                  <form v-if="products.length > 0" method="post" @submit.prevent="checkout">
                    <table cellspacing="0" class="shop_table cart">
                      <thead>
                        <tr>
                          <th class="product-remove">&nbsp;</th>
                          <th class="product-thumbnail">&nbsp;</th>
                          <th class="product-name">Название</th>
                          <th class="product-price">Цена за штуку</th>
                          <th class="product-quantity">Количество</th>
                          <th class="product-subtotal">Общая цена</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="product in products"
                          :key="product.id"
                          class="cart_item"
                        >
                          <td class="product-remove">
                            <button
                              @click.prevent="
                                $store.commit(
                                  'localStorage/removeFromCart',
                                  product
                                )
                              "
                              title="Remove this item"
                              class="remove"
                              href="#"
                            >
                              ×
                            </button>
                          </td>

                          <td class="product-thumbnail">
                            <nuxt-link
                              :to="{
                                name: 'product-slug',
                                params: { slug: product.slug },
                              }"
                              ><img
                                width="145"
                                height="145"
                                :alt="product.name"
                                class="shop_thumbnail"
                                :src="product.image"
                            /></nuxt-link>
                          </td>

                          <td class="product-name">
                            <nuxt-link
                              :to="{
                                name: 'product-slug',
                                params: { slug: product.slug },
                              }"
                              >{{ product.name }}</nuxt-link
                            >
                          </td>

                          <td class="product-price">
                            <span class="amount"
                              >{{ product.price }}&#8381;</span
                            >
                          </td>

                          <td class="product-quantity">
                            <div class="quantity buttons_added">
                              <input
                                type="button"
                                @click.prevent="
                                  $store.commit('localStorage/updateQuantity', {
                                    item: product,
                                    quantity: -1,
                                  })
                                "
                                class="minus"
                                :disabled="product.quantity === 1"
                                value="-"
                              />
                              <input
                                type="number"
                                size="4"
                                class="input-text qty text"
                                :value="product.quantity"
                                readonly
                                min="1"
                                step="1"
                              />
                              <input
                                type="button"
                                @click.prevent="
                                  $store.commit('localStorage/updateQuantity', {
                                    item: product,
                                    quantity: 1,
                                  })
                                "
                                class="plus"
                                value="+"
                              />
                            </div>
                          </td>

                          <td class="product-subtotal">
                            <span class="amount">{{ product.totalPrice }}&#8381;</span>
                          </td>
                        </tr>
                        <tr class="cart_item">
                          <td class="actions" colspan="6">
                            <span> Общая сумма заказ: {{ totalPrice }}&#8381; </span>
                            <input
                              type="submit"
                              value="Заказать"
                              name="proceed"
                              class="checkout-button button alt wc-forward"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </form>
                  <div v-else class="cart-empty text-center">
                    Вы ничего не выбрали
                  </div>
                </client-only>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Корзина | ElectroStore',
  },
  data() {
    return {
      products: this.$store.state.localStorage.cart,
    };
  },
  computed: {
    totalPrice() {
      let total = 0;

      for (let item of this.products) {
        total += item.totalPrice;
      }

      return total;
    },
  },
  methods: {
    updateQuantity(product, quantity) {
      $store.commit("localStorage/updateQuantity", {
        item: product,
        quantity: quantity,
      });
    },
    checkout(){
      this.$router.push({ path: 'checkout' })
    }
  },
};
</script>