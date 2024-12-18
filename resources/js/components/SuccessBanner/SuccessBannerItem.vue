<template>
    <div class="flex flex-col align-items justify-center">
        <i class=" block text-white mr-auto ml-auto text-[80px] h-[80px]" :class="icon"></i>
        <span class="text-white text-center text-[18px] lg:text-[20px] mt-[12px]">{{ text }}</span>
    </div>
</template>

<script setup>
    const { text, icon } = defineProps({
        text: {
            type: String,
            defaultValue: ''
        },
        icon: {
            type: String,
            defaultValue: ''
        }
    });

</script>