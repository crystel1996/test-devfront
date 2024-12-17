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

    onMounted(() => {
        const carouselSlide = document.querySelector('.carousel-slide');
        elements.value = carouselSlide;
        Array.from(carouselSlide.children).forEach((child, index) => {
            if (index == 0) {
                child.style.display = 'block';
            } else {
                child.style.display = 'none';
            }
        });
    });

    const nextSlide = () => {
        if (elements) {
            currentIndex.value += 1;
            if(currentIndex.value > (elements.value.children.length  - 1)) {
                currentIndex.value = 0;
            }
        }
    };
    const prevSlide = () => {
        if (elements) {
            currentIndex.value -=1;
            if(currentIndex.value < 0) {
                currentIndex.value = elements.value.children.length -1;
            }
        }
    };

    watch(currentIndex, (current, old) => {
       const children = elements.value.children;
       Array.from(children).forEach((child, index) => {
            if (current == index) {
                child.style.display = 'block';
            } else {
                child.style.display = 'none';
            }
       });
    });
    
</script>

<style scoped>
    .carousel-container {
        position: relative;
    }
    .carousel-slide {
        display: flex;
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