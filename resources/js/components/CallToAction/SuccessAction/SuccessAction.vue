<template>
    <li class="font-sans font-normal text-textColor-500 text-[14px]">
        <i class="fa-regular fa-circle-check pr-[16px]" style="color:#08BF26"></i> {{ value }}
    </li>
</template>

<script setup>
    defineProps({
        value: String,
    });
</script>