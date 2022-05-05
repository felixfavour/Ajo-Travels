<template>
    <div class="review-card">
        <div class="review-left">
            <div class="img-container">
                <img :src="review.profile_photo_url" :alt="review.author_name">
            </div>
        </div>
        <div class="review-content">
            <div class="review-name">
                <h2>{{review.author_name}}</h2>
            </div>
            <div class="review-rating">
                <div class="star-ratings">
                    <img v-for="star in starRatings" :key="star" src="../assets/img/star-ratings.svg" alt="star ratings">
                </div>
                <div class="time-posted">
                    <p>{{review.relative_time_description}}</p>
                </div>
            </div>
            <div class="review-description">
                <p>
                    {{review.text}}
                </p>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
    name: "reviewFull",
    props:{
        review:{
            Required: true,
            type: Object
        }
    },
    computed: {
        starRatings(){
            let starArray = [];
            for(let i = 0; i < this.review.rating; i++){
                starArray.push(i)
            }
            return starArray;
        }
    },
}
</script>

<style lang="scss" scoped>
    .review-card{
        @include flex-center;
        gap: 10.32px;
        padding-left: 30px;
        padding: 16px 0px 19px;
        border-bottom: 1px solid #CECECE;
        align-items: flex-start;
        .review-left{
            .img-container{
                height: 60px;
                img{
                    width: 42.1px;
                    object-fit: contain;
                }
            }
        }
        .review-content{
            // padding-bottom: 16px;
            .review-name{
                h2{
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 16px;
                }
            }
            .review-description{
                p{
                    font-weight: 300;
                    font-size: 10px;
                    line-height: 16px;
                    width: 80vw;
                }
            }
            .review-rating{
                display: flex;
                align-items: center;
                gap: 10px;
                .time-posted{
                    p{
                        font-size: 10px;
                    }
                }
            }
        }
    }
</style>