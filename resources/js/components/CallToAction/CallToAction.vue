<template>
    <div class="pt-[41px] pl-[40px] pr-[49px]">
        <h1 class="text-[26px] w-[331px] mb-[14px] leading-[32px] font-title font-bold">Test psychotechnique : 
            <span class="block">
                Récupérez <span class="underline underline-offset-8 decoration-primary-500">votre permis</span>
            </span>
        </h1>
        <span class="font-sans font-normal text-[17px]">Une démarche simple & rapide</span>
    </div>
    <div class="pt-[35px] pl-[59px]">
        <ul class="flex flex-col gap-1.5">
            <SuccessAction v-for="value in listOfSuccess" :key="value" :value="value"></SuccessAction>
        </ul>
    </div>
    <div class="pt-[35px] flex items-center justify-center">
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
    <div class="pt-[11px] flex items-center justify-center">
        <p class="text-[12px] font-body"><i class="fa-regular fa-hand-pointer pr-[8px]"></i> Entrainement Gratuit inclus</p>
    </div>
    <div class="pt-[20px] flex items-center justify-center">
        <GoogleRating :rating="3" :review="8085"></GoogleRating>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import ListOfSucessData from './Data/ListOfSuccess';
    import SuccessAction from './SuccessAction/SuccessAction.vue';
    import Button from '@components/UI/Button/Button.vue';
    import GoogleRating from '@components/Rating/GoogleRating.vue'
    
    const listOfSuccess = ref(ListOfSucessData);
    const callToActionBtn = ref({
        text: "Je réserve mon test psychotechnique",
        textClass: "text-white text-[14px] font-title font-medium",
        btnClass: "bg-primary-500",
        iconClass:"fa-solid fa-angle-right",
        iconStyle: { color: "white" },
        showIcon: true
    });
</script>