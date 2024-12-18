<template>
    <div class="flex flex-col items-start justify-start pl-[38px] pr-[38px] lg:pl-[107px] lg:pr-[107px]">
        <Title :title="booking.title"></Title>
        <span class="text-primary-500 text-[14px] pt-[8px]">{{ booking.subtitle }}</span>
        <div class="mt-[18.4px] w-full">
            <SearchInput
                :startIcon="'fa-solid fa-location-dot'"
                :endIcon="'fa-regular fa-paper-plane'"
                :placeholder="'Saisir une ville ou un code postal'"
                :buttonText="'Rechercher'"
            />
            <div class="mt-[8px] lg:hidden">
                <Button 
                    :text="'Filtrer'"
                    :textClass="'font-sans text-[16px]'"
                    :btnClass="'bg-lightGray-500 w-full mb-[8px] custom-shadow flex flex-row justify-center items-center'"
                    :showIcon="false"
                ></Button>
                <div class="w-full">
                    <Pricing :listPricing="booking.pricings"></Pricing>
                </div>
                <div class="mt-[8px]">
                    <span class="text-[16px]">{{ booking.result }} resultat(s)</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import Title from '@components/UI/Title/Title.vue';
import { ref } from 'vue';
import bookingData from './Data/BookingData.json';
import SearchInput from '@components/UI/Input/SearchInput.vue';
import Button from '@components/UI/Button/Button.vue';
import Pricing from '@components/UI/Pricing/Pricing.vue';

    const booking = ref(bookingData);

</script>