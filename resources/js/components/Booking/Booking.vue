<template>
    <div class="flex flex-col items-start justify-start pl-[38px] pr-[38px]">
        <Title :title="booking.title"></Title>
        <span class="text-primary-500 text-[14px] pt-[8px]">{{ booking.subtitle }}</span>
        <div class="mt-[18.4px]">
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
                    :btnClass="'bg-lightGray-500 w-[90vw] custom-shadow flex flex-row justify-center items-center'"
                    :showIcon="false"
                ></Button>
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

    const booking = ref(bookingData);

</script>