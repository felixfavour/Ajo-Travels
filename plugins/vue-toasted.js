import Vue from 'vue'

import Toasted from 'vue-toasted'

if (process.browser) {
  Vue.use(Toasted)
}
