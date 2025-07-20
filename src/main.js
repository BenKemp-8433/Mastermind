import { createApp } from 'vue'

import View from '/src/View.vue'
import router from '/src/router'

import '/src/assets/css/app.css'

const view = createApp(View)

view.use(router)

view.mount('body')