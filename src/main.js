import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import BaseCard from './components/BaseCard.vue'
import BaseButton from './components/BaseButton.vue'
import BaseForm from './components/BaseForm.vue'
import BaseProductView from './components/BaseProductView.vue'
import BaseDelete from './components/BaseDelete.vue'

const app = createApp(App).use(router)
app.component('base-card', BaseCard)
app.component('base-button', BaseButton)
app.component('base-form', BaseForm)
app.component('base-product-view', BaseProductView)
app.component('base-delete', BaseDelete)
app.mount('#app')