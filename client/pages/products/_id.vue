<template>
  <div>
    Hello I am route /products/id
    {{ products }}
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState([
      'products'
    ])
  }
}
</script>

<style>

</style>
