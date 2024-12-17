<template>
    <div class="flex flex-col items-center justify-center">
        <div v-if="withReview" class="w-[29px] h-[16px] bg-white flex items-center justify-center">
            <img class="w-[12px] h-[12px]" src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="Google" />
        </div>
        <div class="h-[25px] w-[90px] mt-[3px] flex items-center justify-center" :class="listStartClass">
            <i
                v-for="index in fullStars"
                :key="'full-' + index"
                class="fa-solid fa-star"
                style="color:#FFD43B"
            ></i>
        </div>
        <div v-if="withReview" class="flex items-center justify-center mt-[3px] text-[8px]">
            <span><span class="font-bold">{{ reviews }}</span> avis</span>
        </div>
    </div>
</template>

<script setup>
    const { rating, review, withReview, listStartClass } = defineProps({
        rating: {
            type: Number,
            defaultValue: 0
        },
        review: {
            type: Number,
            defaultValue: 0
        },
        withReview: {
            type: Boolean,
            defaultValue: true
        },
        listStartClass: {
            type: String,
            defaultValue: ''
        }
    });

    const fullStars= Math.round(rating);
    const reviews = `${rating} | ${review}`;

</script>