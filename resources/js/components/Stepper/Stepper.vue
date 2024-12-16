<template>
    <div class="flex pb-[44px] relative">
        <div class="w-[42px] h-[42px] bg-white rounded-full flex items-center justify-center shadow step">
            <span class="text-primary-500 pt-[9px] pb-[9px] pl-[15px] pr-[15px] font-bold font-[24px]">{{ step }}</span>
        </div>
        <div class="ml-[18px]">
            <p class="font-bold">{{ title }}<span class="font-normal">{{ description }}</span></p>
        </div>
        <div v-if="step < numberStep" class="h-[100%] border-l-2 border-primary-500 absolute top-[42px] left-[21px] transform -translate-x-1/2"></div>
    </div>
</template>

<script setup>  
    const { title, description, step, numberStep } = defineProps({
        title: {
            type: String,
            defaultValue: ''
        },
        description: {
            type: String,
            defaultValue: ''
        },
        step: {
            type: Number,
            defaultValue: 0
        },
        numberStep: {
            type: Number,
            defaultValue: 0
        }
    });

</script>

<style scoped>
    .shadow {
        box-shadow: 0px 3px 6px #00000029;
    }
    .step {
        position: relative;
    }
</style>