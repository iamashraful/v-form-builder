import Vue from 'vue'
import App from './App.vue'
import Example from './examples/Example'

import TextInputField from '@/components/fields/TextInputField'

Vue.config.productionTip = false

const Comp = process.env['NODE_ENV'] === 'Example' ? Example : App

Vue.component(TextInputField)

// This will help to call super
Vue.prototype.$super = function(options) {
  return new Proxy(options, {
    get: (options, name) => {
    	if(options.methods && name in options.methods) {
      	return options.methods[name].bind(this);
      }
    },
  });
};

new Vue({
  render: h => h(Comp)
}).$mount('#app')
