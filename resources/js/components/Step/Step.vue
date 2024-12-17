<template>
    <div class="pt-[21px] lg:pt-[127px] pr-[32px] pl-[32px] lg:pl-[112px] bg-white lg:flex lg:flex-row-reverse">
        <div class="pb-[51px] lg:pl-[211px] lg:pt-[60px]">
            <div class="mb-[46px]">
                <Title :title="title"></Title>
            </div>
            <div class="pl-[33px]">
                <Stepper 
                    v-for="(step, index) in listOfSteps" 
                    :key="step" 
                    :step="index + 1" 
                    :title="step.title" 
                    :description="step.description"
                    :numberStep="listOfSteps.length"
                >
                </Stepper>
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
        </div>
        <div class="flex items-center justify-center lg:w-[80%]">
            <div class="relative  box-image">
                <img class="w-[356px] h-[355px] lg:w-[669px] lg:h-[668px] object-cover" src="https://picsum.photos/300/300" alt="Step image" />
                <div class="absolute top-[15px] left-[-25px] lg:left-[auto] lg:right-[-150px]">
                    <img class="w-[156px] h-[157px] lg:w-[297px] lg:h-[297px] rounded-[100%] object-cover box-image" src="https://picsum.photos/300/300" alt="Step image" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import Title from '@components/Title/Title.vue';
    import Stepper from '@components/Stepper/Stepper.vue';
    import ListOfStepper from './Data/ListOfStepper.json';
    import Button from '@components/UI/Button/Button.vue';

    const title = ref('Votre test psychotechnique en 3 étapes :');
    const listOfSteps = ref(ListOfStepper);
    const callToActionBtn = ref({
        text: "Je réserve mon test psychotechnique",
        textClass: "text-white text-[14px] lg:text-[26px] font-title font-medium",
        btnClass: "bg-primary-500",
        iconClass:"fa-solid fa-angle-right",
        iconStyle: { color: "white" },
        showIcon: true
    });

</script>

<style scoped>
    .box-image {
        box-shadow: 7px 6px 12px #00000029;
    }
</style>