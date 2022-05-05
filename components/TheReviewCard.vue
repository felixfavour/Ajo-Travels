<template>
    <div class="review-card-component">
        <div class="review-card">
            <div class="review-img">
                <img :src="review.profile_photo_url" :alt="review.author_name">
            </div>
            <div class="review-content">
                <div class="review-heading">
                    <div class="review-name">
                        <h3>{{review.author_name}}</h3>
                    </div>
                    <div class="star-ratings">
                        <img v-for="star in starRatings" :key="star" src="../assets/img/star-ratings.svg" alt="star ratings">
                    </div>
                </div>
                <div class="review-description">
                    <p>
                        {{review.text}}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "reviewCard",
    props:{
        review:{
            Required: true,
            type: Object
        }
    },
    data(){
        return{
            stars: 5,
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
    async fetch({ store }){
        await this.$store.dispatch("getUser", review.user_id);
        console.log("Fetching...");
    }
}
</script>

<style lang="scss" scoped>
.review-card-component{
        width: 267px;
}
    .review-card{
        @include flex-center;
        width: 100%;
        gap: 10.32px;
        align-items: flex-start;
        padding: 22px;
        box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
        border-radius: 32px;
        .review-img{
            img{
                // width: 42.1px;
                height: 45px;
                border-radius: 6px;
                object-fit: cover;
            }
        }
        .review-content{
            width: 186px;
            height: 166px;
            .review-heading{
                @include flex-between;
                padding-bottom: 9px;
                border-bottom: 1px solid #E6E5E5;
                .star-ratings{
                    width: 100px;
                }
                .review-name{
                    h3{
                        margin: 0%;
                    }
                }
            }
            .review-description{
                overflow-y: auto;
                overflow-x: hidden;
                height: 100px;
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