<template>
  <h1 class="titulo">Produtos</h1>
  <button class="adicionar__produto" @click="openModal()">Adicionar Produto</button>
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
    <div>
      <h3 class="filtro__valores__titulo">Ordenar por Valor:</h3>
      <input v-model="selectedValue" type="radio" name="filtro__valor" id="desc" value="desc" />
      <label for="desc">Decrescente</label>
      <input v-model="selectedValue" type="radio" name="filtro__valor" id="asc" value="asc" />
      <label for="asc">Ascendente</label>
    </div>
  </section>
  <ul class="lista__produtos">
    <li
      class="item__produto"
      v-for="product in sortedProducts"
      :key="product.id"
      @click="expandProduct(product)"
    >
      {{ product.title }}
      <section v-show="product.expanded" class="container__produto">
        <ul class="detalhes__produto">
          <li>US$ {{ product.price }}</li>
          <li>{{ product.category }}</li>
          <li>{{ product.description }}</li>
          <img class="imagem__produto" :src="product.image" alt="Imagem do produto" />
        </ul>
      </section>
    </li>
  </ul>
  <div v-show="showModal" class="modal__produto">
    <div class="modal__conteudo">
      <h2>{{ editingProduct ? 'Editar Produto' : 'Novo Produto' }}</h2>
      <form @submit.prevent="saveProduct()">
        <div class="container__input">
          <label for="title">Título</label>
          <input type="text" name="title" id="title" />
        </div>
        <div class="container__input">
          <label for="price">Valor</label>
          <input type="number" step="0.01" name="price" id="price" />
        </div>
        <div class="container__input">
          <label for="category">Categoria</label>
          <select name="newProductCategory" id="newProductCategory">
            <option v-for="category in productsCategories" :key="category" :value="category">
              {{ category }}
            </option>
          </select>
        </div>
        <div class="container__input">
          <label for="description">Descrição</label>
          <textarea
            name="description"
            id="description"
            rows="5"
            cols="33"
            placeholder="Escreva aqui a descrição do produto"
          ></textarea>
        </div>
        <div class="modal__acoes">
          <button @click="showModal = false">Cancelar</button>
          <input type="submit" value="Salvar" />
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import store from '@/store'
import { ref, computed, reactive } from 'vue'

const allProducts = computed(() => store.state.products)
const productsCategories = computed(() => store.state.products_categories)
const selectedCategory = ref('all')
const selectedValue = ref('desc')
const selectedProducts = computed(() => {
  if (selectedCategory.value === 'all') {
    return allProducts.value
  }
  return allProducts.value.filter((product) => product.category === selectedCategory.value)
})
const sortedProducts = computed(() => {
  const products = [...selectedProducts.value]
  if (selectedValue.value === 'desc') {
    return products.sort((a, b) => b.price - a.price)
  }
  return products.sort((a, b) => a.price - b.price)
})
const editingProduct = ref(false)
const showModal = ref(false)
const newProduct = ref(null)
const formProduct = reactive({
  title: '',
  price: 0,
  category: '',
  description: '',
  image: '',
})

function openModal(product = null) {
  formProduct.value = product
  if (product) {
    formProduct.value = { ...product }
  } else {
    formProduct.value = {
      title: '',
      price: 0,
      category: '',
      description: '',
      image: '',
    }
  }
  showModal.value = true
}

async function saveProduct() {
  formProduct.value = {
    title: document.getElementById('title').value,
    price: document.getElementById('price').value,
    category: document.getElementById('newProductCategory').value,
    description: document.getElementById('description').value,
    image: 'https://via.placeholder.com/150',
  }
  newProduct.value = { ...formProduct.value }
  try {
    console.log('formulario', formProduct.value)
    console.log('produto novo: ', newProduct.value)
    const response = await store.dispatch('addProduct', newProduct.value)
    alert('Produto salvo com sucesso!')
    console.log(response)
  } catch (error) {
    alert('Erro ao salvar produto!')
    console.error(error)
  }
  showModal.value = false
}

function expandProduct(product) {
  product.expanded = !product.expanded
}
</script>

<style scoped>
.filtro__valores__titulo {
  padding: 10px;
  display: inline;
}

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
