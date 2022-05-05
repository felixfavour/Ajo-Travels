<template>
    <div class="btn-control-containers">
        <button class="btn-control prev" @click="previousSlideHandler">
            <font-awesome-icon icon="angle-left" />
        </button>
        <button class="btn-control next" @click="nextSlideHandler">
            <font-awesome-icon icon="angle-right" />
        </button>
    </div>
</template>

<script>
export default {
    name: "carousel-controls",
    methods:{
        previousSlideHandler(){
            this.$emit('previous-slide')
        },
        nextSlideHandler(){
            this.$emit('next-slide')
        }
    }
}
</script>

<style lang="scss" scoped>
    .btn-control-containers{
        .btn-control{
            position: absolute;
            padding: 20px;
            border: none;
            outline: none;
            background: rgba($color: #000000, $alpha: 0.6);
            color: white;
            top: calc(50% - 25px);
        }
        .prev{
            left: 0;
            opacity: 0.2;
            &:hover{
                opacity: 0.8;
            }
        }
        .next{
            right: 0;
            opacity: 0.2;
            &:hover{
                opacity: 0.8;
            }
        }
    }
</style>