import Vue from 'vue'
import App from './App.vue'
import Example from './examples/Example'

Vue.config.productionTip = false

const Comp = process.env['NODE_ENV'] === 'Example' ? Example : App

new Vue({
  render: h => h(Comp)
}).$mount('#app')
