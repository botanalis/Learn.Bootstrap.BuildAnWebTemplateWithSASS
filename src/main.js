import Vue from 'vue'
import App from './App.vue'

import router from './router'

Vue.config.productionTip = false

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import "font-awesome/css/font-awesome.min.css"
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

//自定義Style
import "./assets/scss/main.scss";

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
