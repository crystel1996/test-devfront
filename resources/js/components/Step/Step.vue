<template>
    <div class="pt-[21px] pr-[32px] pl-[32px] bg-white">
        <div class="mb-[46px]">
            <Title :title="title"></Title>
        </div>
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
        textClass: "text-white text-[14px] font-title font-medium",
        btnClass: "bg-primary-500",
        iconClass:"fa-solid fa-angle-right",
        iconStyle: { color: "white" },
        showIcon: true
    });

</script>