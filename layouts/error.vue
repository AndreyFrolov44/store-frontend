<template>
  <div class="container">
    <div v-if="error.statusCode === 404" class="404">
      <h1 class="center">404</h1>
      <h2 class="error-text">Страница не найдена</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "error",
};
</script>

<style scoped>
.center {
  text-align: center;
  color: red;
  font-size: 50px;
}
.error-text{
    text-align: center;
}
</style>