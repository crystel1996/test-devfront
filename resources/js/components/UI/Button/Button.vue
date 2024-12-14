<template>
    <button 
        :style="btnStyle"
        class="rounded pl-[23px] pt-[8px] pb-[9px] pr-[10.71px] flex  items-center"
        :class="btnClass"
    >
        <span
            :style="textStyle"
            :class="textClass"
        >  
            {{ text }}
        </span>
        <i v-if="showIcon" :class="iconClass" :style="iconStyle" class="ml-[13.23px]"></i>
    </button>
</template>

<script setup>
    defineProps({
        btnStyle: {
            type: Object,
            default: {}
        },
        btnClass: {
            type: String,
            default: ""
        },
        text: {
            type: String,
            default: 'Click Me'
        },
        textStyle: {
            type: Object,
            default: {}
        },
        textClass: {
            type: String,
            default: ''
        },
        showIcon: {
            type: Boolean,
            default: false
        },
        iconClass: {
            type: String,
            default: 'fa fa-arrow-right'
        },
        iconStyle: {
            type: Object,
            default: {}
        }
    });
</script>

<style scoped>

</style>