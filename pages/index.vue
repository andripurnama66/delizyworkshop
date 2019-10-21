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
      <div class="container">
        <h2 class="mt-5">Mentor</h2>
        <hr />
        <Mentor />
      </div>
      <div class="container">
        <h2 class="mt-5">Pendaftaran</h2>
        <hr />
        <Registrasi />
      </div>
      <div class="container mt-5">
        
        <hr />
        <Footer />
      </div>
      
      <a href=" https://wa.me/6281331577625" class="float">
      <p class="my-float">Butuh Bantuan ?</p> 
      </a>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Carousel from '~/components/Carousel.vue'
import Definition from '~/components/Definition.vue'
import Card from '~/components/Card.vue'
import Footer from '~/components/Footer.vue'
import Mentor from '~/components/Mentor.vue'
import Registrasi from '~/components/Registrasi.vue'
import Venue from '~/components/Venue.vue'
export default {
  components: {
    Navbar,
    Carousel,
    Definition,
    Card,
    Venue,
    Footer,
    Registrasi,
    Mentor,
  }
}
</script>

<style scoped>
html,body {
  overflow-x: hidden;
}
.float{
	position:fixed;
	width:200px;
	height:60px;
	bottom:40px;
	right:40px;
	background-color:#0C9;
	color:#FFF;
	border-radius:10px;
	text-align:center;
	box-shadow: 2px 2px 3px #999;
}

.my-float{
	margin-top:22px;
}
</style>
