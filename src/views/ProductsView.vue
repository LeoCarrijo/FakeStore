<template>
  <h1 class="titulo">Produtos</h1>
  <ul class="lista__produtos">
    <li
      class="item__produto"
      v-for="product in products"
      :key="product.id"
      @click="expandProduct(product)"
    >
      {{ product.title }}
      <section v-show="product.expanded" class="container__produto">
        <ul class="detalhes__produto">
          <li>{{ product.price }}</li>
          <li>{{ product.category }}</li>
          <li>{{ product.description }}</li>
          <img class="imagem__produto" :src="product.image" alt="Imagem do produto" />
        </ul>
      </section>
    </li>
  </ul>
</template>

<script setup>
import store from '@/store'
import { computed } from 'vue'

const products = computed(() => store.state.products)

function expandProduct(product) {
  product.expanded = !product.expanded
}
</script>

<style scoped>
.item__produto {
  cursor: pointer;
  border: 1px solid #ccc;
  padding: 8px;
  margin: 8px;
}

.imagem__produto {
  width: 100px;
  height: 100px;
}
</style>
