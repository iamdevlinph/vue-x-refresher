import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    books: [
      { id: 1, title: 'Book A', author: 'Author A', isBorrowed: false },
      { id: 2, title: 'Book B', author: 'Author B', isBorrowed: false },
      { id: 3, title: 'Book C', author: 'Author C', isBorrowed: false },
      { id: 4, title: 'Book D', author: 'Author D', isBorrowed: false },
      { id: 5, title: 'Book E', author: 'Author E', isBorrowed: false },
    ],
    borrowedBooks: [],
  },
  getters,
  mutations
});
