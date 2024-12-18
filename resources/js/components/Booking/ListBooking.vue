<template>
    <div class="box-shadow bg-white p-[19px] flex flex-row justify-between rounded-[5px] mb-[8px]">
        <div>
            <div class="border-b border-solid border-gray-500 pb-[12px]">
                <p class="text-[13px] font-semibold">{{ date }}</p>
                <span class="text-[13px] block border-1 border-gray-500 font-semibold"><i class="fa-solid fa-location-dot"></i> {{  place  }}</span>
            </div>
            <div class="mt-[6px]">
                <Button
                    :text="city"
                    :textClass="'text-primary-500 text-[11px]'"
                    :showIcon="false"
                    :btnClass="'bg-lightGray-500 w-auto pl-[8px]'"
                ></Button>
                <span class="block mt-[2px] text-danger-500 text-[10px]">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    Dernière places à cette date
                </span>
            </div>
        </div>
        <div>
            <p class="text-[22px] text-right font-bold">{{ price }} <span class="ml-[5px] text-[10px] font-semibold line-through text-black-100">{{ oldPrice }}</span></p>
            <span class="font-sans text-right text-[8px] block">Après remboursement*</span>
            <Button
                :text="'Réserver'"
                :textClass="'text-white ml-[auto]'"
                :iconClass="'fa-solid fa-angle-right text-white ml-[auto]'"
                :btnClass="'bg-primary-500 ml-[auto] mt-[5px] w-full flex items-center justify-center'"
                :showIcon="true"
            ></Button>
            <span class="mt-[6px] font-sans text-[8px]">{{ availablePlace }} places disponibles à cette date</span>
        </div>
    </div>
</template>        

<script setup>
    import Button from '@components/UI/Button/Button.vue';
    const { date, place, city, price, oldPrice, availablePlace } = defineProps({
        date: {
            type: String,
            default: ''
        },
        place: {
            type: String,
            default: ''
        },
        city: {
            type: String,
            default: ''
        },
        price: {
            type: String,
            default: ''
        },
        oldPrice: {
            type: String,
            default: ''
        },
        availablePlace: {
            type: String,
            default: ''
        }
    })
</script>

<style scoped>
    .box-shadow {
        box-shadow: 0px 3px 6px #00000029;
    }
</style>