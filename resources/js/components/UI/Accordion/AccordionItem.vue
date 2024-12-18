<template>
    <div class="pr-[23px]">
        <div class="flex items-center justify-between border-b-[1px] border-b-textColor3-200 pb-[20px] pt-[20px]">
            <p class="font-sans text-[14px] text-textColor3-500">{{ question }}</p>
            <i v-if="isOpen" @click="viewContent" class="fa fa-minus text-textColor3-200 cursor-pointer"></i>
            <i v-if="!isOpen" @click="viewContent" class="fa fa-plus text-textColor3-200 cursor-pointer"></i>
        </div>
        <transition name="accordion">
            <div v-if="isOpen">
                <p class="text-textColor3-500 text-[14px] font-sans">{{ content }}</p>
            </div>
        </transition>
    </div>
</template>

<script setup>
import { ref } from 'vue'
    const { content, question } = defineProps({
        content: {
            type: String,
            defaultValue: ''
        },
        question: {
            type: String,
            defaultValue: ''
        }
    });

    const isOpen = ref(false);

    const viewContent = (e) => {
        e?.preventDefault();
        isOpen.value = !isOpen.value;
    };

</script>