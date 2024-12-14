<template>
    <div class="pt-[41px] pl-[40px] pr-[49px]">
        <h1 class="text-[26px] w-[331px] mb-[14px] leading-[32px]">Test psychotechnique : 
            <span class="block">
                Récupérez <span class="underline underline-offset-8 decoration-primary-500">votre permis</span>
            </span>
        </h1>
        <span class="subtitle text-[17px]">Une démarche simple & rapide</span>
    </div>
    <div class="pt-[35px] pl-[59px]">
        <ul class="flex flex-col gap-1.5">
            <SuccessAction v-for="value in listOfSuccess" :key="value" :value="value"></SuccessAction>
        </ul>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import ListOfSucessData from './Data/ListOfSuccess';
    import SuccessAction from './SuccessAction/SuccessAction.vue';
    const listOfSuccess = ref(ListOfSucessData);
</script>

<style scoped>
    h1 {
        font-family: Lato, sans-serif;
        font-weight: bold;
    }
    .subtitle {
        font-family: Nunito, sans-serif;
        font-weight: 400;
    }
    .success-percent {
        font-family: Nunito, sans-serif;
        font-weight: 400;
    }
</style>