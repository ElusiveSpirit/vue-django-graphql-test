import Vue from 'vue'
import store from '@/store'
import router from '@/router'


import { createProvider } from '@/apollo'



import VueYandexMetrika from 'vue-yandex-metrika'
import VueRaven from 'vue-raven'

import App from '@/App.vue'
import './registerServiceWorker'

Vue.config.productionTip = false


// Sentry for logging frontend errors
if (process.env.NODE_ENV === 'production') {
  Vue.use(VueRaven, {dsn: process.env.VUE_APP_SENTRY_PUBLIC_DSN})
}





// more info: https://github.com/vchaptsev/vue-yandex-metrika
Vue.use(VueYandexMetrika, {
  id: process.env.VUE_APP_YANDEX_METRIKA,
  env: process.env.NODE_ENV,
  router
})


new Vue({
  router,
  store,
  provide: createProvider().provide(),
  render: h => h(App)
}).$mount('#app')
