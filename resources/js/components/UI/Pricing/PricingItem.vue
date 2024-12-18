<template>
    <div  :class="{ 'bg-blue-500': isActive, 'bg-white': !isActive, 'rounded-tl-[7px] rounded-bl-[7px]': index === 0, 'rounded-tr-[7px] rounded-tr-[7px]': isLastIndex }" class="pl-[14px] pb-[18px] pt-[14px] pr-[14px]">
        <span :class="{ 'text-white': isActive, 'text-textColor-500': !isActive }">{{ title }}</span>
        <span :class="{ 'text-white': isActive, 'text-textColor-500': !isActive }" class="block">{{ value }}</span>
    </div>
</template>

<script setup>
    const {  title , value, isActive, index , isLastIndex} = defineProps({
        title: {
            type: String,
            default: ''
        },
        value: {
            type: String,
            default: ''
        },
        isActive: {
            type: Boolean,
            default: false
        },
        index: {
            type: Number,
            default: 0
        },
        isLastIndex: {
            type: Number,
            default: 0
        }
    })
</script>