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
                { title : 'Lorem ipsum dolor sit amet', src: 'https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?h=350&amp;auto=compress&amp;cs=tinysrgb', textArticle: 'Lorem ipsum dolor sit amet' },
                { title : 'Lorem ipsum dolor sit amet', src: 'https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?h=350&amp;auto=compress&amp;cs=tinysrgb', textArticle: 'Lorem ipsum dolor sit amet' },
                { title : 'Lorem ipsum dolor sit amet', src: 'https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?h=350&amp;auto=compress&amp;cs=tinysrgb', textArticle: 'Lorem ipsum dolor sit amet' },
            ]
        }
    }
}
</script>