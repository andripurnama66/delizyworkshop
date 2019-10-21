<template>
  <div id="venue">
    <div class="row">
        <div class="col-md-6">
            <gmap-map :center="center" :map-type-id="mapTypeId" :zoom="18">
            <gmap-marker
                v-for="(item, index) in markers"
                :key="index"
                :position="item.position"
                @click="center = item.position"
            />
            </gmap-map>
        </div>
        <div class="col-md-6">
            <h2>Universitas Surabaya</h2>
            <p>Laboratorium Bionutrisi dan Inovasi Pangan</p>
            <p>Fakultas Teknobiologi Gedung TG Lantai 6</p>
            <p>Jl. Tenggilis Mejoyo, Kali Rungkut, Kec. Rungkut, Kota SBY, Jawa Timur 60293</p>
            <span></span>
        </div>
    </div>

    
  </div>
</template>

<script>
export default {
  data() {
    return {
      center: { lat: -7.319988, lng: 112.767942 },
      mapTypeId: "terrain",
      markers: [
        { position: { lat: -7.319988, lng: 112.767942 } },
        
      ]
    };
  }
};
</script>

<style scoped>
.vue-map-container {
  height: 450px;
  max-width: 992px;
  width: 100%;
}
p{
    font-size: 1.2rem;
}
</style>
