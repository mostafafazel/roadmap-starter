<!-- components/CollapsiblePane.vue -->
<template>
    <div class="mb-4">
      <button @click="toggle" class="bg-gray-200 p-2 rounded w-full text-left">
        {{ title }}
      </button>
      <div v-show="isOpen" class="mt-2">
        <slot />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Props
  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
  });
  
  // Local state to manage whether the pane is open or closed
  const isOpen = ref(true);
  
  // Toggle function to switch open/close state
  const toggle = () => {
    isOpen.value = !isOpen.value;
  };
  </script>
  
  <style scoped>
  button {
    cursor: pointer;
  }
  </style>
  