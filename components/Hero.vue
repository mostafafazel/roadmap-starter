<template>
    <div class="group hero max-h-64 md:h-28  bg-gray/10 hover:bg-gray/25 transition-scale duration-100 hover:border-teal border-1 border-transparent scale-95 hover:scale-100 cursor-pointer rounded-lg p-4">
      <div class="hero-icon">
        <!-- Use dynamic icon class with the `i` directive -->
        <div :class="icon" class="icon"></div>
      </div>
      <div class="hero-content mx-2">
        <h2 class="hero-title mb-2">{{ title }}</h2>
        <p class="hero-description group-hover:text-teal">{{ description }}</p>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  defineProps({
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  })
  </script>
  
  <style scoped>
  .hero {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .icon {
    font-size: 40px;
  }
  
  .hero-title {
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .hero-description {
    font-size: 1rem;
    color: #666;
  }
  </style>
  