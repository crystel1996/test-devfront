<template>
    <div class="pl-[18px] pr-[11px]">
        <div class="mt-[47px] mb-[34px]">
            <Title :title="testimonial.title"></Title>
        </div>
        <div class="bg-white rounded-[27px] pt-[49px] pl-[37px] pr-[43px] pb-[53px] box-shadow">
            <Card 
                :photo="card.photo" 
                :user="card.user"
                :createdAt="card.createdAt"
                :rating="card.rating"
                :content="card.content"
            ></Card>
        </div>
    </div>
</template>

<script setup>
    import Title from '@components/UI/Title/Title.vue';
    import TestimonialData from './Data/TestimonialData.json';
    import { ref } from 'vue';
    import Card from '../UI/Card/Card.vue';

    const testimonial = ref(TestimonialData);

    const card= {
        photo: testimonial.value.testimonials[0].photo,
        user: testimonial.value.testimonials[0].user,
        createdAt: testimonial.value.testimonials[0].createdAt,
        rating: testimonial.value.testimonials[0].rating,
        content: testimonial.value.testimonials[0].content,
    }
    
</script>

<style scoped>
    .box-shadow {
        box-shadow: 0px 3px 6px #00000029;
    }
</style>