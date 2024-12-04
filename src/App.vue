<template>
  <RouterLink to="/login">Login</RouterLink>
  <RouterLink to="/products">Produtos</RouterLink>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

onMounted(() => {
  store.dispatch('fetchAllProducts')
  store.dispatch('fetchAllProductsCategories')
})
</script>

<style scoped>
/* Estilização para Dispositivos Móveis */

@media (min-width: 1024px) {
  /* Estilização para Desktops */
}
</style>
