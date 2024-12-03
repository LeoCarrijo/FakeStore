<template>
  <h1>Produtos</h1>
  <ul>
    <li v-for="product in products" :key="product.id">
      {{ product.title }}
    </li>
  </ul>
</template>

<script setup>
import store from '@/store'
import { computed } from 'vue'

const products = computed(() => store.state.products)
</script>

<style scoped></style>
