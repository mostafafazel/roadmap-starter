<template>
    <h2 class="fancy-header relative inline-block overflow-hidden text-4xl font-extrabold tracking-wide text-center uppercase">
      <span class="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-20 -z-10 animate-gradient-slide"></span>
      <span class="relative fancy-text" @mouseover="hovering = true" @mouseleave="hovering = false">
        <ContentSlot :use="$slots.default" unwrap="p" />
      </span>
    </h2>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const hovering = ref(false)
  </script>
  
  <style scoped>
  @keyframes gradient-slide {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
  
  .fancy-header {
    transition: transform 0.3s ease, text-shadow 0.3s ease;
  }
  .fancy-header:hover {
    transform: scale(1.1) rotate(1deg);
    text-shadow: 0px 0px 10px rgba(255, 105, 180, 0.8), 0px 0px 20px rgba(173, 216, 230, 0.5);
  }
  
  .fancy-text {
    display: inline-block;
    background: linear-gradient(90deg, #d53369, #daae51);
    -webkit-background-clip: text;
    color: transparent;
    animation: float 4s ease-in-out infinite;
  }
  
  .fancy-header:hover .fancy-text {
    animation: float 1s ease-in-out infinite;
  }
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
  }
  
  @keyframes gradient-slide {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 100% 50%;
    }
  }
  
  .animate-gradient-slide {
    animation: gradient-slide 5s infinite linear;
    background-size: 200% 200%;
  }
  </style>
  