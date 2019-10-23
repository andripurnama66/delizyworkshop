<template>
    <div>
        <div class="bg-overlay">
            <div class="container">
                <div class="row">
                    <div class="col-xs-6 col-sm-6 col-md-6">
                        <img src="/delizy.png" class="float-right my-5 img-fluid" width="200px" height="200px" alt="Delizy Indonesia">
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-6">
                        <img src="/Ubaya.jpg" class="my-5 img-fluid" width="200px" height="200px" alt="Universitas Surabaya">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <h1 class="text-center text-white">Presents :</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <p class="text-center text-white">How to make Water Kefir</p>
                    </div>
                </div>
                <br><br>
                <div class="row">
                    <div class="col-sm-12 col-md-12">
                        <h4 class="text-center text-white">Lebih Lanjut</h4>
                    </div>
                    <a v-scroll-to="'#definition'" class="arrow bounce text-white"></a>
                </div>
            </div>
        </div>
    
    
    </div>
</template>
<style scoped>
.full-width{
    
    width: 100%;
    height: 100vh;
}
.bg-overlay{
    background: linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url("https://images.unsplash.com/photo-1551040078-5a2f375f9549?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    color: #fff;
    height: 100vh;
    padding-top: 50px;
}
.overlay-div{
   height:100vh;
   width: 100%;
   position:absolute;
   background-color:#000;
   opacity: 0.7;
}
h1 {
    font-size: 3rem;
}
p {
    font-size: 2rem;
}
.arrow
{
  position: relative;
  bottom: -2rem;
  left: 50%;
  margin-left:-20px;
  width: 40px;
  height: 40px;

  /**
   * Dark Arrow Down
   */
  background-image: url('/arrow.svg');
  background-size: contain;
}

.bounce {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}
</style>
<script>
export default {
    
}
</script>