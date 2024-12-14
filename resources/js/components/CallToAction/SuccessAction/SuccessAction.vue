<template>
    <li class="success-percent text-textColor text-[14px]">
        <i class="fa-regular fa-circle-check pr-[16px]" style="color:#08BF26"></i> {{ value }}
    </li>
</template>

<script setup>
    defineProps({
        value: String,
    });
</script>