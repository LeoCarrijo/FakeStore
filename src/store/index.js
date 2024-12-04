import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    products: [],
  },
  mutations: {
    setProducts(state, products) {
      state.products = products.map((product) => ({
        ...product,
        expanded: false,
      }))
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
  },
  getters: {},
})
