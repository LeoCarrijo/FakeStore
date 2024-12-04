import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    products: [],
    products_categories: [],
  },
  mutations: {
    setProducts(state, products) {
      state.products = products.map((product) => ({
        ...product,
        expanded: false,
      }))
    },
    setProductsCategories(state, categories) {
      state.products_categories = categories
    },
    addProduct(state, product) {
      state.products.push({
        ...product,
        expanded: false,
      })
    },
  },
  actions: {
    async fetchAllProducts({ commit }) {
      try {
        const response = await axios.get('products')
        const products = await response.data
        commit('setProducts', products)
      } catch (error) {
        console.log('Erro ao buscar produtos', error)
      }
      console.log('Produtos buscados', this.state.products)
    },
    async addProduct({ commit }, product) {
      try {
        const response = await axios.post('products', product)
        const newProduct = await response.data
        commit('addProduct', newProduct)
        console.log('Produto adicionado', newProduct)
        return newProduct
      } catch (error) {
        console.log('Erro ao adicionar produto', error)
        throw error
      }
    },
    async fetchAllProductsCategories({ commit }) {
      try {
        const response = await axios.get('products/categories')
        const categories = await response.data
        commit('setProductsCategories', categories)
      } catch (error) {
        console.log('Erro ao buscar categorias', error)
      }
      console.log('Categorias buscadas', this.state.products_categories)
    },
  },
  getters: {},
})
