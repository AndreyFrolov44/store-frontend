<template>
  <div class="product-option-shop">
    <client-only>
      <button
        v-if="!isProductAdded"
        class="add_to_cart_button"
        @click.prevent="
          $store.commit('localStorage/addToCart', {
            item: product,
            quantity: 1,
          })
        "
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
    </client-only>
  </div>
</template>

<script>
export default {
  props: ["product"],
  computed: {
    isProductAdded() {
      return this.$store.state.localStorage.cart.find(
        (p) => p.id === this.product.id
      );
    },
  },
};
</script>