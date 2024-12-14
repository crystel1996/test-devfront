<template>
    <header class="h-[56px] w-screen header-box-shadow">
        <div class="flex items-center justify-center h-[56px]">
            <Logo></Logo>
        </div>
    </header>
</template>

<script setup>
    import Logo from '@components/Logo/Logo.vue'
</script>

<style scoped>
    .header-box-shadow {
        box-shadow: 0px 3px 6px #00000029;
        background: #FFFFFF 0% 0% no-repeat padding-box;
    }
</style>