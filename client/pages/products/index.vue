<template>
  <div>
    <Nav />
    <div class="container">
      <LargeCardDisplay
        v-for="cardInfo in largeCardInfo.slice(0,1)"
        :key="cardInfo.id"
        :cards-section="cardInfo"
      />
      <SmallCardDisplay
        v-for="cardInfo in smallCardsSection.slice(0,1)"
        :key="cardInfo.id"
        :small-cards-section="cardInfo"
      />
    </div>
  </div>
</template>

<script>
import { largeCardSections, smallCardSections } from '@/assets/data.js'
export default {
  data () {
    return {
      largeCardInfo: largeCardSections,
      smallCardsSection: smallCardSections
    }
  }
}
</script>

<style>

</style>
