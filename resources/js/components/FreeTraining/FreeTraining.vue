<template>
    <div class="bg-white pt-[60px]">
        <div class="mb-[36px]">
            <Title :title="freeTraining.title"></Title>
        </div>
        <div class="mb-[40px]">
            <div class="text-textColor2-500 text-[16px] pl-[36px] pr-[36px]" v-for="(text, index) in freeTraining.contents" :key="index" v-html="text"></div>
        </div>
        <div class="flex items-center justify-center">
            <Button 
                :text="callToActionBtn.text"
                :textStyle="callToActionBtn.textStyle"
                :textClass="callToActionBtn.textClass"
                :btnClass="callToActionBtn.btnClass"
                :iconClass="callToActionBtn.iconClass"
                :iconStyle="callToActionBtn.iconStyle"
                :showIcon="callToActionBtn.showIcon"
            ></Button>
        </div>
    </div>
</template>

<script setup>
    import Title from '@components/UI/Title/Title.vue';
    import Button from '@components/UI/Button/Button.vue';
    import { ref } from 'vue';
    import FreeTrainingData from './Data/FreeTraining.json'

    const freeTraining =ref(FreeTrainingData);
    const callToActionBtn = ref({
        text: freeTraining.value.cta,
        textClass: "text-white text-[14px] lg:text-[26px] font-title font-medium",
        btnClass: "bg-primary-500",
        iconClass:"fa-solid fa-angle-right",
        iconStyle: { color: "white" },
        showIcon: true
    });

</script>