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
