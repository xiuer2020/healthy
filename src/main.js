import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/less/iconfont.less'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
