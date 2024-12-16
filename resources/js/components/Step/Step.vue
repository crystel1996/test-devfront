<template>
    <div class="pt-[21px] pr-[32px] pl-[32px] bg-white">
        <Title :title="title"></Title>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import Title from '@components/Title/Title.vue';

    const title = ref('Votre test psychotechnique en 3 étapes :');

</script>