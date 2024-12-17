<template>
    <div class="carousel-container">
        <div class="carousel-slide">
           <slot></slot>
        </div>
        <button @click="prevSlide" class="carousel-nav prev">&#10094;</button>
        <button @click="nextSlide" class="carousel-nav next">&#10095;</button>
    </div>
</template>

<script setup>

    import { ref, onMounted, watch } from 'vue'
    
    const currentIndex = ref(0);
    const elements = ref(null);

    const { display } = defineProps({
        display: {
            type: Number,
            defaultValue: 1
        }
    });

    onMounted(() => {
        const carouselSlide = document.querySelector('.carousel-slide');
        elements.value = carouselSlide;
        updateDisplay();
    });

    const updateDisplay = () => {
        const children = elements.value ? Array.from(elements.value.children) : [];
        children.forEach((child, index) => {
            const start = currentIndex.value *display;
            const end = start + display;

            if (index >= start && index < end) {
                child.style.display = 'block';
            } else {
                child.style.display = 'none';
            }
        });
    }

    const nextSlide = () => {
        if (elements) {
            currentIndex.value = (currentIndex.value + 1) % Math.ceil(elements.value.children.length / display);
            updateDisplay();
        }
    };
    const prevSlide = () => {
        if (elements) {
            currentIndex.value = (currentIndex.value - 1 + Math.ceil(elements.value.children.length / display)) % Math.ceil(elements.value.children.length / display);
            updateDisplay();
        }
    };

    watch(currentIndex, updateDisplay);
    
</script>

<style scoped>
    .carousel-container {
        position: relative;
    }
    .carousel-slide {
        display: flex;
        transition: transform 0.5s ease;
        gap: 25px;
    }
    .carousel-nav {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        color: rgba(0, 0, 0, 0.4);
        border: none;
        padding: 10px;
        cursor: pointer;
        font-size: 24px;
    }

    .carousel-nav.prev {
        left: -35px;
    }

    .carousel-nav.next {
        right: -35px;
    }
</style>