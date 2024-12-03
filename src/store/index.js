import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    products: [],
  },
  mutations: {
    async fetchAllProducts() {
      try {
        const response = await axios.get('products')
        this.products = response.data
      } catch (error) {
        console.log('Erro ao buscar produtos', error)
      }
      console.log('Produtos buscados', this.products)
    },
  },
  actions: {},
  getters: {},
})
