<script setup>
defineProps({
  icon: String,
  title: String,
  description: String,
})
</script>

<template>
  <div class="group flex items-center gap-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md transition-transform scale-95 border-1 border-transparent hover:border-teal hover:scale-100">
    <div :class="icon" class="group-hover:text-teal transition-colors duration-300 text-6xl" />
    <div>
      <h2 class="font-semibold text-lg">{{ title }}</h2>
      <p class="text-gray-700 dark:text-gray-300">{{ description }}</p>
    </div>
  </div>
</template>

