<template>
    <div class="pl-[18px] pr-[11px]">
        <div class="mt-[47px] mb-[34px]">
            <Title :title="testimonial.title"></Title>
        </div>
        <div class="bg-white rounded-[27px] pt-[49px] pl-[37px] pr-[43px] pb-[53px] box-shadow">
            <Carousel>
                <Card 
                    v-for="(card, index) in cards"
                    :photo="card.photo" 
                    :user="card.user"
                    :createdAt="card.createdAt"
                    :rating="card.rating"
                    :content="card.content"
                    :cardClass="'carousel-item'- + index"
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

    const testimonial = ref(TestimonialData);

    const cards= testimonial.value.testimonials;
    
</script>

<style scoped>
    .box-shadow {
        box-shadow: 0px 3px 6px #00000029;
    }
</style>