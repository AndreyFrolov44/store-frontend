<template>
  <div ref="shop" class="shop">
    <div class="product-big-title-area">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="product-bit-title text-center">
              <h2>{{ products.results[0].category }}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="single-product-area">
      <div class="container">
        <div class="row">
          <Product
            v-for="product in products.results"
            :key="product.id"
            :product="product"
          />
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="product-pagination text-center">
              <nav>
                <ul class="pagination">
                  <li v-if="products.previous">
                    <button @click.prevent="pageNext(page - 1)">
                      <span aria-hidden="true">&laquo;</span>
                    </button>
                  </li>
                  <li v-for="p of pages" :key="p">
                    <button
                      :disabled="page === p"
                      :class="{ 'pagination-active': page === p }"
                      @click.prevent="pageNext(p)"
                    >
                      {{ p }}
                    </button>
                  </li>
                  <li v-if="products.next">
                    <button @click.prevent="pageNext(page + 1)">
                      <span aria-hidden="true">&raquo;</span>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "@/components/Product.vue";

export default {
  validate({ params, store }) {
    return store.state.categories.some(
      (category) => category.slug === params.slug
    );
  },
  async asyncData({ $axios, params, route }) {
    let page = parseInt(route.query.page);
    if (!page) page = 1;
    let products = await $axios.$get("/category/" + params.slug, {
      params: { page: page },
    });

    return {
      products,
      page,
      pages: Math.ceil(products.count / products.results.length),
    };
  },
  components: { Product },
  methods: {
    async pageNext(page) {
      await this.$axios
        .$get("/category/" + this.$route.params.slug, {
          params: { page: page },
        })
        .then((res) => {
          this.products = res;
          this.page = page;
        });
      this.$router.push({
        name: "category-slug",
        params: { slug: this.$route.params.slug },
        query: { page: page },
      });
      this.openSlide('shop')
    },
    async openSlide(el) {
      let block = this.$refs[el];
      let top = window.scrollY + block.getBoundingClientRect().y;
      window.scrollTo(0, top);
    },
  },
};
</script>