<template>
    <div class="flex flex-col lg:flex-row lg:justify-between lg:border-t-[10px] lg:border-t-primary-500 pb-[53px] shadow">
        <div class="flex flex-col items-center justify-center lg:items-start lg:justify-start ml-[40px] lg:ml-[107px]">
            <div class="hidden lg:block lg:mt-[91.42px]">
                <Logo></Logo>
            </div>
            <div class="mt-[41px] mr-[49px] lg:mt-[43px]">
                    <h1 class="text-[26px] mb-[14px] leading-[32px] font-title font-bold">Test psychotechnique : 
                        <span class="block lg:inline">
                            Récupérez <span class="underline underline-offset-8 decoration-primary-500">votre permis</span>
                        </span>
                    </h1>
                    <span class="font-sans font-normal text-[17px]">Une démarche simple & rapide</span>
                </div>
            <div class="mt-[35px] lg:ml-[22px] lg:mt-[37px]">
                <ul class="flex flex-col gap-1.5 lg:gap-[15px]">
                    <SuccessAction v-for="value in listOfSuccess" :key="value" :value="value"></SuccessAction>
                </ul>
            </div>
            <div class="mt-[35px] lg:mt-[32px] flex flex-col items-center justify-center">
                <Button 
                    :text="callToActionBtn.text"
                    :textStyle="callToActionBtn.textStyle"
                    :textClass="callToActionBtn.textClass"
                    :btnClass="callToActionBtn.btnClass"
                    :iconClass="callToActionBtn.iconClass"
                    :iconStyle="callToActionBtn.iconStyle"
                    :showIcon="callToActionBtn.showIcon"
                ></Button>
                <div class="mt-[11px]">
                    <p class="text-[12px] font-body"><i class="fa-regular fa-hand-pointer mr-[8px]"></i> Entrainement Gratuit inclus</p>
                </div>
                <div class="mt-[20px] gap-[31px] flex items-center justify-center">
                    <GoogleRating :rating="googleRatingData.rating" :review="googleRatingData.review"></GoogleRating>
                    <TrustPilotRating :rating="googleRatingData.rating" :review="googleRatingData.review"></TrustPilotRating>
                </div>
            </div>
        </div>
        <div class="mt-[34px] lg:mt-[0px]">
            <VideoPresentation />
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import ListOfSucessData from './Data/ListOfSuccess';
    import SuccessAction from './SuccessAction/SuccessAction.vue';
    import Button from '@components/UI/Button/Button.vue';
    import GoogleRating from '@components/UI/Rating/GoogleRating.vue'
    import TrustPilotRating from '@components/UI/Rating/TrustPilotRating.vue';
    import VideoPresentation from '@components/CallToAction/VideoPresentation/VideoPresentation.vue';
    import Logo from '@components/Logo/Logo.vue'
    
    const listOfSuccess = ref(ListOfSucessData);
    const callToActionBtn = ref({
        text: "Je réserve mon test psychotechnique",
        textClass: "text-white text-[14px] font-title font-medium",
        btnClass: "bg-primary-500",
        iconClass:"fa-solid fa-angle-right",
        iconStyle: { color: "white" },
        showIcon: true
    });
    const googleRatingData = ref({
        rating: 4.7,
        review: 8085
    })
</script>

<style scoped>
    .shadow {
        box-shadow: 0px 3px 6px #00000029;
    }
</style>