<template>
    <div class="bg-primary-500 pl-[75px] pr-[75px] pt-[20px] pb-[20px] flex flex-col gap-[40px] lg:flex lg:flex-row lg:pt-[80px] lg:pb-[80px]">
        <SuccessBannerItem v-for="banner in successBanner" :key="banner.text" :icon="banner.icon" :text="banner.text"></SuccessBannerItem>
    </div>
</template>

<script setup>
    import {  ref } from 'vue';
    import SuccessBannerItem from './SuccessBannerItem.vue';
    import successBannerData from './Data/SuccessBanner.json'
    const successBanner = ref(successBannerData);
</script>