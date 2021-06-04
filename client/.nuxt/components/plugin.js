import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Hero: () => import('../../components/Hero.vue' /* webpackChunkName: "components/hero" */).then(c => wrapFunctional(c.default || c)),
  LargeCard: () => import('../../components/LargeCard.vue' /* webpackChunkName: "components/large-card" */).then(c => wrapFunctional(c.default || c)),
  LargeCardDisplay: () => import('../../components/LargeCardDisplay.vue' /* webpackChunkName: "components/large-card-display" */).then(c => wrapFunctional(c.default || c)),
  Nav: () => import('../../components/Nav.vue' /* webpackChunkName: "components/nav" */).then(c => wrapFunctional(c.default || c)),
  SmallCard: () => import('../../components/SmallCard.vue' /* webpackChunkName: "components/small-card" */).then(c => wrapFunctional(c.default || c)),
  SmallCardDisplay: () => import('../../components/SmallCardDisplay.vue' /* webpackChunkName: "components/small-card-display" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
