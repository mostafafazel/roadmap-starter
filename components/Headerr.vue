<template>
    <div class="text-center my-10">
      <h1 class="title text-3xl font-bold mb-2 md:mb-4 dark:text-white">
        {{ title }}
      </h1>
      <p class="text-xs text-start mb-2 md:mb-6  max-w-2xl mx-auto dark:text-gray-300">
        {{ description }}
      </p>
    </div>
  </template>
  
  <script lang="ts" setup>
  
  const props = defineProps<{ title: string; description: string }>()
  </script>
  