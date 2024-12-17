<template>
    <h2 class="text-primary-500 text-center text-[20px] lg:text-[40px] font-bold">{{ title }}</h2>
</template>

<script setup>

    defineProps({
        title: {
            type: String,
            defaultValue: ''
        }
    });

</script>