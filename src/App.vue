<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
// import axios from 'axios'
import { onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

// const selectedProduct = ref()

// function fetchAllProducts() {
//   axios
//     .get('products')
//     .then((response) => {
//       products.value = response.data
//     })
//     .catch((error) => {
//       console.log('Erro ao buscar produtos', error)
//     })
//   console.log('Produtos buscados', products)
// }

// function fetchProduct(id) {
//   axios
//     .get(`products/${id}`)
//     .then((response) => {
//       selectedProduct.value = response.data
//     })
//     .catch((error) => {
//       console.log(`Erro ao buscar produto ${id}`, error)
//     })
// }

// function updateProduct(id, product) {
//   axios
//     .patch(`products/${id}`, product)
//     .then((response) => {
//       console.log('Produto atualizado', response.data)
//     })
//     .catch((error) => {
//       console.log(`Erro ao atualizar produto ${id}`, error)
//     })
// }

// function addProduct(product) {
//   axios
//     .post('products', product)
//     .then((response) => {
//       console.log('Produto adicionado', response.data)
//     })
//     .catch((error) => {
//       console.log('Erro ao adicionar produto', error)
//     })
// }

// function deleteProduct(id) {
//   axios
//     .delete(`products/${id}`)
//     .then((response) => {
//       console.log('Produto deletado', response.data)
//     })
//     .catch((error) => {
//       console.log(`Erro ao deletar produto ${id}`, error)
//     })
// }

onMounted(() => {
  store.dispatch('fetchAllProducts')
})
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
