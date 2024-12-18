<template>
    <div>
        <AccordionItem 
            v-for="accordion in listAccordion" 
            :key="accordion"
            :content="accordion.content"
            :question="accordion.question"
        >
        </AccordionItem>
    </div>
</template>

<script setup>
    import AccordionItem from './AccordionItem.vue';

    const { listAccordion } = defineProps({
        listAccordion: {
            defaultValue: []
        }
    });

</script>