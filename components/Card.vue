<template>
   <div>
       <div class="card" v-for="card in cards" :key="'kartu.id'">
            <img src="#" class="card-img-top" :alt="'card.title'">
            <div class="card-body">
                <p class="card-text">{{ card.textArticle }}</p>
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
                { id: 1, title : '', src: '', textArticle: 'Lorem ipsum dolor sit amet' },
                { id: 2, title : '', src: '', textArticle: '' },
                { id: 3, title : '', src: '', textArticle: '' },
            ]
        }
    }
}
</script>