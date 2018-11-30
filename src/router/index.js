import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Scan from '../components/ui/Scan'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/scan',
      name: 'QR Scanner',
      component: Scan
    }

  ]
})
