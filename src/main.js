import Vue from 'vue'
import App from './App.vue'

// resources
import $ from 'jquery'
import moment from 'moment'
import './main.scss'

// custom components
import Books from './components/Books/Books.vue'
Vue.component('app-books', Books);

import { store } from './store/store'

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
