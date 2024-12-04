<template>
  <h1 class="titulo">Produtos</h1>
  <section class="filtros">
    <select v-model="selectedCategory" class="filtro__categorias">
      <option value="all">Todas as categorias</option>
      <option
        class="opt__categoria"
        v-for="category in productsCategories"
        :key="category"
        :value="category"
      >
        {{ category }}
      </option>
    </select>
  </section>
  <ul class="lista__produtos">
    <li
      class="item__produto"
      v-for="product in selectedProducts"
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
import { ref, computed } from 'vue'

const allProducts = computed(() => store.state.products)
const productsCategories = computed(() => store.state.products_categories)
const selectedCategory = ref('all')
const selectedProducts = computed(() => {
  if (selectedCategory.value === 'all') {
    return allProducts.value
  }
  return allProducts.value.filter((product) => product.category === selectedCategory.value)
})

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
