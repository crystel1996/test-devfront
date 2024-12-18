<template>
    <div class="bg-white flex justify-between rounded-[7px]">
        <PricingItem 
            v-for="(pricing, index) in listPricing" 
            :index="index" 
            :key="pricing" 
            :title="pricing.title" 
            :value="pricing.value" 
            :isActive="pricing.isActive"
            :isLastIndex="index === listPricing.length - 1"
        >
        </PricingItem>
    </div>
</template>

<script setup>
    import PricingItem from './PricingItem.vue';
    const { listPricing } = defineProps({
        listPricing: {
            default: []
        }
    })
</script>