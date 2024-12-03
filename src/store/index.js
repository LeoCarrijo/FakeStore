import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      first_name: 'John',
      last_name: 'Doe',
      email: 'JohnDoe@gmail.com',
    },
    products: [],
    cart: [],
  },
  mutations: {},
  actions: {},
  getters: {},
})
