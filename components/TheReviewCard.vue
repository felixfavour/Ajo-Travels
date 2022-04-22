<template>
    <div class="review-card">
        <div class="review-img">
            <img src="../assets/img/review-pic.png" alt="review">
        </div>
        <div class="review-content">
            <div class="review-heading">
                <div class="review-name">
                    <h3>Temi Salau</h3>
                </div>
                <div class="star-ratings">
                    <img v-for="star in starRatings" :key="star" src="../assets/img/star-ratings.svg" alt="star ratings">
                </div>
            </div>
            <div class="review-description">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et do.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "reviewCard",
    data(){
        return{
            stars: 5,
        }
    },
    computed: {
        starRatings(){
            let starArray = [];
            for(let i = 0; i < this.stars; i++){
                starArray.push(i)
            }
            return starArray;
        }
    }
}
</script>

<style lang="scss" scoped>
    .review-card{
        @include flex-center;
        gap: 10.32px;
        align-items: flex-start;
        padding: 22px;
        box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
        border-radius: 32px;
        .review-content{
            .review-heading{
                @include flex-between;
                padding-bottom: 9px;
                border-bottom: 1px solid #E6E5E5;
                .review-name{
                    h3{
                        margin: 0%;
                    }
                }
            }
            .review-description{
                p{
                    font-weight: 300;
                    font-size: 14px;
                    line-height: 24px;
                    margin: 0%;
                }
            }
        }
    }
</style>