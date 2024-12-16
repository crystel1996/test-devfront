<template>
    <div class="flex flex-col items-start justify-start">
        <div class="w-[75px] h-[16px]">
            <img class="h-[16px] w-[52px]" src="@assets/trustpilot.svg" alt="TrustPilot" />
        </div>
        <div class="h-[25px] w-[90px] mt-[3px] flex items-center justify-center">
            <i
                v-for="index in fullStars"
                :key="'full-' + index"
                class="fa-solid fa-star"
                style="color:white;background-color: #08BF26;margin-right: 2px;padding:2px"
            ></i>
            <i
                v-if="halfStar"
                class="fa-solid fa-star"
                style="color:white;background: linear-gradient(100deg, rgba(2,0,36,1) 0%, rgba(8,191,38,1) 0%, rgba(220,220,230,1) 50%);margin-right: 2px;padding:2px"
            >
            </i>
        </div>
        <div class="flex items-start justify-start mt-[3px] text-[8px]">
            <span>Trustscore <span class="font-bold">{{ reviews }}</span> avis</span>
        </div>
    </div>
</template>

<script setup>
    const { rating, review } = defineProps({
        rating: {
            type: Number,
            default: 0
        },
        review: {
            type: Number,
            default: 0
        },
    });

    const fullStars = Math.floor(rating);
  
    const halfStar = (rating % 1) >= 0.5;
    const reviews = `${rating} | ${review}`;

</script>