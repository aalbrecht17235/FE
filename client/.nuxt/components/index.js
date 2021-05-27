import { wrapFunctional } from './utils'

export { default as Hero } from '../../components/Hero.vue'
export { default as LargeCard } from '../../components/LargeCard.vue'
export { default as LargeCardDisplay } from '../../components/LargeCardDisplay.vue'

export const LazyHero = import('../../components/Hero.vue' /* webpackChunkName: "components/hero" */).then(c => wrapFunctional(c.default || c))
export const LazyLargeCard = import('../../components/LargeCard.vue' /* webpackChunkName: "components/large-card" */).then(c => wrapFunctional(c.default || c))
export const LazyLargeCardDisplay = import('../../components/LargeCardDisplay.vue' /* webpackChunkName: "components/large-card-display" */).then(c => wrapFunctional(c.default || c))
