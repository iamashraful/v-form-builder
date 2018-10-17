import Vue from 'vue'
import App from './App.vue'
import Example from './examples/Example'

import TextInputField from '@/components/fields/TextInputField'

Vue.config.productionTip = false

const Comp = process.env['NODE_ENV'] === 'Example' ? Example : App

Vue.component(TextInputField)

new Vue({
  render: h => h(Comp)
}).$mount('#app')
