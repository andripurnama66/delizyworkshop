<template>
<div>
  <b-navbar toggleable="lg" variant="light">
    <b-navbar-brand href="#"><img src="/delizy.png" width="63px" height="63px" alt="Delizy Indonesia"></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    
 <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">Home</b-nav-item>
        <b-nav-item v-scroll-to="'#venue'">Venue</b-nav-item>
        <b-nav-item v-scroll-to="'#mentor'">Mentor</b-nav-item>
        <b-nav-item v-scroll-to="'#articles'">Articles</b-nav-item>
        <b-nav-item v-scroll-to="'#registration'">Register</b-nav-item>
        
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>

</template>
<style scoped>

</style>
<script>
export default {
    
}
</script>