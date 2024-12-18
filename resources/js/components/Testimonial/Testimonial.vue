<template>
    <div class="pl-[18px] pr-[11px] mb-[119px] lg:mb-[172px]">
        <div class="mt-[47px] mb-[34px]">
            <Title :title="testimonial.title"></Title>
        </div>
        <div class="
            bg-white 
            rounded-[27px] 
            pt-[49px] pl-[37px] pr-[43px] pb-[53px] 
            box-shadow
            lg:flex
            lg:items-center
            lg:justify-center
            lg:mr-[118px]
            lg:ml-[118px]
        "
        >
            <div class="hidden lg:flex lg:flex-col items-center justify-center mr-[50px]">
                <span class="font-bold text-[20px]" >{{ testimonial.status }}</span>
                <GoogleRating 
                    :rating="testimonial.globalRating" 
                    :withReview="false" 
                    :review="testimonial.review"
                    :listStartClass="bg-transparent"
                ></GoogleRating>
                <p class="text-[14px] text-center">Based on <span class="font-bold underline">{{ testimonial.review }} reviews</span></p>
                <img class="w-[120px]" src="@assets/google-logo.png" alt="Google" />
            </div>
            <Carousel :display="isLg ? 3 : 1">
                <Card 
                    v-for="(card, index) in cards"
                    :photo="card.photo" 
                    :user="card.user"
                    :createdAt="card.createdAt"
                    :rating="card.rating"
                    :content="card.content"
                ></Card>
            </Carousel>
        </div>
    </div>
</template>

<script setup>
    import Title from '@components/UI/Title/Title.vue';
    import TestimonialData from './Data/TestimonialData.json';
    import { ref } from 'vue';
    import Card from '@components/UI/Card/Card.vue';
    import Carousel from '@components/UI/Carousel/Carousel.vue';
    import GoogleRating from '@components/UI/Rating/GoogleRating.vue';

    const testimonial = ref(TestimonialData);

    const cards= testimonial.value.testimonials;

    const isLg = window.innerWidth > 1024;
    
</script>

<style scoped>
    .box-shadow {
        box-shadow: 0px 3px 6px #00000029;
    }
</style>