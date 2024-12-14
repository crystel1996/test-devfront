<template>
    <header class="h-[56px] w-screen flex items-center justify-center lg:hidden">
        <Logo></Logo>
    </header>
</template>

<script setup>
    import Logo from '@components/Logo/Logo.vue'
</script>

<style scoped>
    header {
        box-shadow: 0px 3px 6px #00000029;
        background: #FFFFFF 0% 0% no-repeat padding-box;
    }
</style>