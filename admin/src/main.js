import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue';
import App from './App.vue';
import http from './http';
import router from './router';
import store from './store';
import './style.css';

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.prototype.$http = http

Vue.mixin({
  computed: {
    uploadUrl () {
      return this.$http.defaults.baseURL + '/upload'
    }
  },
  methods: {
    getAuthHeaders () {
      return {
        Authorization: `Bearer ${localStorage.token || ''}`
      }
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
