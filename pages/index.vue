<template>
  <div>
      <navbar />
      <carousel />
      <Definition />
      <div class="container">
        <h2 class="mt-5">Articles</h2>
        <hr />
        <card />
      </div>
      <div class="container">
        <h2 class="mt-5">Venue</h2>
        <hr />
        <Venue />
      </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Carousel from '~/components/Carousel.vue'
import Definition from '~/components/Definition.vue'
import Card from '~/components/Card.vue'
import Venue from '~/components/Venue.vue'
export default {
  components: {
    Navbar,
    Carousel,
    Definition,
    Card,
    Venue,
  }
}
</script>

<style>

</style>
