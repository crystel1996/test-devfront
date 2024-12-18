<template>
    <div class="pl-[26px] lg:pl-[112px] lg:pr-[112px] pr-[25px] pt-[73px] lg:pt-[208px] pb-[62px] lg:pb-[213px] lg:bg-white">
        <div class="rounded-[9px] lg:rounded-[24px] pl-[21px] lg:pl-[103px] lg:pr-[53px] pt-[40px] lg:pt-[57px] pb-[42.31px] box-shadow">
            <h3 class="font-bold font-title text-blue-500 text-[20px]">{{ preparingTest.title }}</h3>
            <div class="mt-[45px]">
                <Accordion :listAccordion="preparingTest.items"></Accordion>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import preparingTestData from './Data/preparingTestData.json';
import Accordion from '@components/UI/Accordion/Accordion.vue';

    const preparingTest = ref(preparingTestData);
</script>

<style scoped>
    .box-shadow {
        box-shadow: 0px 3px 6px #00000029;
    }
</style>