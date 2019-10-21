<template>
   <div>
       <div class="container">
           <div class="row mt-5">
               <div class="col-sm-4 col-md-4 col-lg-4 col-xl-4" v-for="(content,index) in cards" :key="index">
                   <div class="card mt-5">
                        <img :src="content.src" class="card-img-top" :alt="content.title">
                        <div class="card-body">
                            <h3>{{ content.title }}</h3>
                            <p class="card-text">{{ content.textArticle }}</p>
                            <nuxt-link to="/article/title">Read More</nuxt-link>
                        </div>
                    </div>
               </div>
           </div>
       </div>
       
    </div>
</template>
<style scoped>

</style>
<script>
export default {
    data() {
        return {
            cards : [
                { title : 'Apa itu water kefir?', src: 'https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?h=350&amp;auto=compress&amp;cs=tinysrgb', textArticle: 'Water kefir merupakan minuman super probiotik yang kaya akan enzim dan asam' },
                { title : '5 Manfaat kefir bagi kesehatan', src: 'https://images.pexels.com/photos/48604/pexels-photo-48604.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', textArticle: 'Berikut ini adalah 5 manfaat kefir bagi kesehatan tubuh' },
                { title : 'Gaya Hidup Sehat Masa Kini', src: 'https://images.pexels.com/photos/3076509/pexels-photo-3076509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', textArticle: 'Hidup yang semakin dinamis, menuntut aktivitas yang tinggi' },
            ]
        }
    }
}
</script>