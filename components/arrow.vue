<script setup lang="ts">
import { ref } from 'vue';

// Reference for the arrow element
const anaghaRef = ref(null);

// Function to handle the click and move the arrow out
function handleArrowClick() {
  const element = anaghaRef.value;
  if (element) {
    element.style.transform = 'translateX(-10px)'; // Move it out
    element.style.opacity = '0%'; // Make it invisible
  }
}
</script>

<template>
  <div
    ref="anaghaRef"
    class="fixed bottom-10 left-10 w-16 h-16 rounded-full cursor-pointer transition-all duration-100 hover:bg-teal active:translate-x-2 hover:translate-x-1"
    i="tabler-arrow-left"
    @click="handleArrowClick"
  >
    <!-- Simple content inside, ripple effect or any additional UI elements can go here -->
    <div class="absolute inset-0 rounded-full bg-opacity-20 bg-violet-500"></div>
  </div>
</template>
