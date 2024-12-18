<template>
    <div class="relative bg-white px-[8px] py-[8px] rounded-[45px] w-full box-shadow" >
        <div class="flex items-center rounded-md">
            <span class="absolute left-3 text-gray-500">
                <i class="text-slateGray-500 w-[12px] h-[17px]" :class="startIcon"></i>
            </span>
            <input 
                type="text"
                :placeholder="placeholder" 
                v-model="inputValue" 
                class="pl-10 pr-10 py-2 w-full bg-none border-none rounded-md focus:outline-none placeholder-slateGray-500"
            />
            <span v-if="!inputValue" class="absolute right-[135px] text-gray-500">
                <i class="text-slateGray-500 w-[12px] h-[17px]" :class="endIcon"></i>
            </span>
            <button 
                @click="handleButtonClick"
                class="absolute right-[5px] w-[105px] rounded-full ml-3 px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
            >
                {{ buttonText }}
            </button>
        </div>
    </div>
</template>

<script setup>
import {  ref } from 'vue'
    const {  startIcon, endIcon, placeholder, buttonText} = defineProps({
        startIcon: {
            type: String,
            default: 'fa fa-search', // Icône par défaut pour le start icon
        },
        endIcon: {
            type: String,
            default: 'fa fa-times', // Icône par défaut pour l'end icon
        },
        placeholder: {
            type: String,
            default: 'Entrez votre texte...',
        },
        buttonText: {
            type: String,
            default: ''
        }
    });
    const inputValue = ref('');
    const handleButtonClick = () => {
        console.log('Button clicked:', inputValue.value);
        inputValue.value = ''
    };
</script>

<style scoped>
    .box-shadow {
        box-shadow: 0px 3px 6px #00000029;
    }
</style>