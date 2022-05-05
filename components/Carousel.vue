<template>
    <div class="carousel-container">
        <carousel-img 
        v-for="(pic, index) in photos" 
        :key="index" 
        :pic="pic" 
        :currentIndex="currentIndex"
        :index="index"
        />
        <carousel-controls @previous-slide="previousSlide" @next-slide="nextSlide" />
        <carousel-indicators 
        :photos="photos"
        :currentIndex="currentIndex"
         />
    </div>
</template>

<script>
import carouselImg from "./CarouselImg.vue";
import CarouselControls from "./CarouselControls.vue";
import CarouselIndicators from "./CarouselIndicators.vue";

export default {
    name: "carousel",
    components:{
        carouselImg,
        CarouselControls,
        CarouselIndicators
    },
    props:{
        photos:{
            Required: true,
            type: Array
        }
    },
    data(){
        return{
            currentIndex: 0,
            touch: {
                startX : 0,
                endX: 0
            },
            
        }
    },
    methods:{
        previousSlide(){
            this.currentIndex <= 0 ? this.currentIndex : this.currentIndex -= 1;
        },
        nextSlide(){
            this.currentIndex > this.photos.length - 2 ? this.currentIndex : this.currentIndex += 1;
        },
        touchStart(event){
            this.touch.startX = event.touches[0].clientX;
            this.touch.endX = 0
        },
        touchMove(event){
            this.touch.endX = event.touches[0].clientX
        },
        touchEnd(){
            if(!this.touch.endX || Math.abs(this.touch.end - this.touch.start) < 20){
                return
            }
            if(this.touch.endX < this.touch.startX){
                this.nextSlide()
            }else{
                this.previousSlide()
            }
        }
    },
    mounted(){
        this.$el.addEventListener('touchstart', (event) => this.touchStart(event))
        this.$el.addEventListener('touchmove', (event) => this.touchMove(event))
        this.$el.addEventListener('touchend', () => this.touchEnd())
    }
}
</script>

<style lang="scss" scoped>
    .carousel-container{
        position: relative;
        display: flex;
        width: 90vw;
        height: 50vh;
        overflow-x: auto;
    }
</style>