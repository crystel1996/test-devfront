<template>
    <div class="bg-white pt-[60px] lg:pl-[107px] lg:pt-[224px] lg:pr-[134px] lg:flex">
        <div class="lg:mt-[89px] lg:flex lg:flex-col lg:items-start lg:justify-start lg:w-[80%]">
            <div class="mb-[36px]">
                <Title :title="freeTraining.title"></Title>
            </div>
            <div class="mb-[40px]">
                <div class="text-textColor2-500 text-[16px] pl-[36px] pr-[36px] lg:pl-[0] lg:text-[23px]" v-for="(text, index) in freeTraining.contents" :key="index" v-html="text"></div>
            </div>
            <div class="flex items-center justify-center lg:items-start lg:justify-start">
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
        <div class="flex items-center justify-center lg:h-[668px] mt-[86px]">
            <img class="w-[356px] h-[355px] lg:w-[669px] lg:h-[668px] object-cover" src="https://picsum.photos/300/300" alt="Step image" />
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