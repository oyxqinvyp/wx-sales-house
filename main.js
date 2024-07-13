import uvUI from '@/uni_modules/uv-ui-tools'

// #ifndef VUE3
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'
Vue.use(uvUI);
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
import * as Pinia from 'pinia'
import {
	createUnistorage
} from '@/uni_modules/pinia-plugin-unistorage'
export function createApp() {
  const app = createSSRApp(App)
	const store = Pinia.createPinia()
	store.use(createUnistorage())
	app.use(store)
  app.use(uvUI);
  return {
    app,
		store
  }
}
// #endif