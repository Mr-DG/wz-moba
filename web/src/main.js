import axios from 'axios'
// import 'swiper/swiper-bundle.min.css'
import 'swiper/dist/css/swiper.css'
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App.vue'
import './assets/iconfont/iconfont.css'
import './assets/scss/style.scss'
import Card from './components/Card.vue'
import ListCard from './components/ListCard.vue'
import router from './router'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

Vue.config.productionTip = false

Vue.component('m-card', Card)

Vue.component('m-list-card', ListCard)

Vue.prototype.$http = axios.create({
  baseURL: process.env.VUE_APP_API_URL || '/web/api',
  baseURL: 'http://localhost:3000/web/api'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
