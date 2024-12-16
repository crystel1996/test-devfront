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
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import Title from '@components/Title/Title.vue';
    import Stepper from '@components/Stepper/Stepper.vue';
    import ListOfStepper from './Data/ListOfStepper.json'

    const title = ref('Votre test psychotechnique en 3 étapes :');
    const listOfSteps = ref(ListOfStepper);

</script>