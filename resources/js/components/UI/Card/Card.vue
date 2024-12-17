<template>
    <div class="bg-gray-500 rounded-[12px] pl-[45px] pt-[21px] pr-[38px] pb-[16px] box-shadow">
        <div class="flex mb-[12px]">
            <div class="mr-[12px]">
                <img class="rounded-full h-[50px] w-[50px]" :src="photo" :alt="user" />
            </div>
            <div class="flex flex-col">
                <span class="block font-bold">{{ user }}</span>
                <span class="block opacity-20">{{ createdAt }}</span>
            </div>
        </div>
        <div class="flex items-start justify-start mb-[12px]">
            <GoogleRating 
                :rating="rating" 
                :withReview="false" 
                :review="5"
                :listStartClass="bg-transparent"
            >
            </GoogleRating>
        </div>
        <div class="mb-[12px]">
            <p class="font-semibold">{{ content }}</p>
        </div>
        <div class="mb-[16px]">
            <a href="#" class="opacity-20">Read more</a>
        </div>
    </div>
</template>

<script setup>
    import GoogleRating from '@components/UI/Rating/GoogleRating.vue'
    const { user, photo, rating, createdAt, content } = defineProps({
        user: {
            type: String,
            defaultValue: ''
        },
        photo: {
            type: String,
            defaultValue: ''
        },
        rating: {
            type: Number,
            defaultValue: 0
        },
        createdAt: {
            type: String,
            defaultValue: ''
        },
        content: {
            type: String,
            defaultValue: ''
        }
    })
</script>

<style scoped>
    .box-shadow {
        box-shadow: 0px 3px 6px #00000029;
    }
</style>