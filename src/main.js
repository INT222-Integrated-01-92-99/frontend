import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import BaseCard from './components/BaseCard.vue'
import BaseButton from './components/BaseButton.vue'
import BaseForm from './components/BaseForm.vue'
import BaseProductView from './components/BaseProductView.vue'
import BaseDelete from './components/BaseDelete.vue'
import BaseSelectColor from './components/BaseSelectColor.vue'
// import Vue from 'vue'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

import './store/subscriber'


// Vue.config.productionTip = false

// store.dispatch('auth/attempt', localStorage.getItem('token')).then(() => {
//     new Vue({
//         router,
//         store,
//         render: h => h(App)
//     }).$mount('#app')
// })

const app = createApp(App).use(router).use(VueAxios, axios).use(store)
app.component('base-card', BaseCard)
app.component('base-button', BaseButton)
app.component('base-form', BaseForm)
app.component('base-product-view', BaseProductView)
app.component('base-delete', BaseDelete)
app.component('base-select-color', BaseSelectColor)
app.mount('#app')