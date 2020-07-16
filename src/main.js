import Vue from 'vue'
import App from './App.vue'
import DragAndDrop from 'vue-drag-and-drop'
import VueTour from 'vue-tour'
import Vue2TouchEvents from 'vue2-touch-events'
import VueAnalytics from 'vue-analytics'

require('vue-tour/dist/vue-tour.css')

Vue.use(VueAnalytics, {
  id: 'UA-172818561-1'
})
Vue.config.productionTip = false
Vue.use(DragAndDrop)
Vue.use(VueTour)
Vue.use(Vue2TouchEvents)


new Vue({
  render: h => h(App)
}).$mount('#app')
