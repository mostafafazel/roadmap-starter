<template>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      <div
        v-for="(easing, index) in easings"
        :key="index"
        class="group flex flex-col items-center justify-center transform duration-300 hover:bg-blue-500 rounded-lg p-4"
      >
        <div  :style="{ animationTimingFunction: easing.value }"
        class="group-hover:animate-state-running animate-state-paused  animate-item w-16 h-16 bg-white rounded-full"></div>
        <p class="mt-2 text-center text-white text-xs">{{ easing.name }}</p>
      </div>
    </div>
  </template>
  
  
  <script setup>
  import { ref } from 'vue'
  
  // Array of easing functions with names and values
  const easings = [
  {name:"easeInSine", value:"cubic-bezier(0.12, 0, 0.39, 0)"},
  {name:"easeOutSine", value:"cubic-bezier(0.61, 1, 0.88, 1)"},
  {name:"easeInOutSine", value:"cubic-bezier(0.37, 0, 0.63, 1)"},
  {name:"easeInQuad", value:"cubic-bezier(0.11, 0, 0.5, 0)"},
  {name:"easeOutQuad", value:"cubic-bezier(0.5, 1, 0.89, 1)"},
  {name:"easeInOutQuad", value:"cubic-bezier(0.45, 0, 0.55, 1)"},
  {name:"easeInCubic", value:"cubic-bezier(0.32, 0, 0.67, 0)"},
  {name:"easeOutCubic", value:"cubic-bezier(0.33, 1, 0.68, 1)"},
  {name:"easeInOutCubic", value:"cubic-bezier(0.65, 0, 0.35, 1)"},
  {name:"easeInQuart", value:"cubic-bezier(0.5, 0, 0.75, 0)"},
  {name:"easeOutQuart", value:"cubic-bezier(0.25, 1, 0.5, 1)"},
  {name:"easeInOutQuart", value:"cubic-bezier(0.76, 0, 0.24, 1)"},
  {name:"easeInQuint", value:"cubic-bezier(0.64, 0, 0.78, 0)"},
  {name:"easeOutQuint", value:"cubic-bezier(0.22, 1, 0.36, 1)"},
  {name:"easeInOutQuint", value:"cubic-bezier(0.83, 0, 0.17, 1)"},
  {name:"easeInExpo", value:"cubic-bezier(0.7, 0, 0.84, 0)"},
  {name:"easeOutExpo", value:"cubic-bezier(0.16, 1, 0.3, 1)"},
  {name:"easeInOutExpo", value:"cubic-bezier(0.87, 0, 0.13, 1)"},
  {name:"easeInCirc", value:"cubic-bezier(0.55, 0, 1, 0.45)"},
  {name:"easeOutCirc", value:"cubic-bezier(0, 0.55, 0.45, 1)"},
  {name:"easeInOutCirc", value:"cubic-bezier(0.85, 0, 0.15, 1)"},
  {name:"easeInBack", value:"cubic-bezier(0.36, 0, 0.66, -0.56)"},
  {name:"easeOutBack", value:"cubic-bezier(0.34, 1.56, 0.64, 1)"},
  {name:"easeInOutBack", value:"cubic-bezier(0.68, -0.6, 0.32, 1.6)"},
  {name:"sine-ease-in", value:"cubic-bezier(0.47, 0, 0.745, 0.715)"},
  {name:"sine-ease-out", value:"cubic-bezier(0.39, 0.575, 0.565, 1)"},
  {name:"sine-ease-in-out", value:"cubic-bezier(0.39, 0.575, 0.565, 1)"},
  {name:"quad-ease-out", value:"cubic-bezier(0.25, 0.46, 0.45, 0.94)"},
  {name:"quad-ease-in", value:"cubic-bezier(0.55, 0.09, 0.68, 0.53)"},
  {name:"quad-ease-in-out", value:"cubic-bezier(0.455, 0.03, 0.515, 0.955)"},
  {name:"cubic-ease-in", value:"cubic-bezier(0.55, 0.06, 0.68, 0.19)"},
  {name:"cubic-ease-out", value:"cubic-bezier(0.22, 0.61, 0.36, 1)"},
  {name:"cubic-ease-in-out", value:"cubic-bezier(0.65, 0.05, 0.36, 1)"},
  {name:"quart-ease-in", value:"cubic-bezier(0.895, 0.03, 0.685, 0.22)"},
  {name:"quart-ease-out", value:"cubic-bezier(0.165, 0.84, 0.44, 1)"},
  {name:"quart-ease-in-out", value:"cubic-bezier(0.77, 0, 0.175, 1)"},
  {name:"quint-ease-in", value:"cubic-bezier(0.755, 0.05, 0.855, 0.06)"},
  {name:"quint-ease-out", value:"cubic-bezier(0.23, 1, 0.32, 1)"},
  {name:"quint-ease-in-out", value:"cubic-bezier(0.86, 0, 0.07, 1)"},
  {name:"circ-ease-in", value:"cubic-bezier(0.6, 0.04, 0.98, 0.335)"},
  {name:"circ-ease-out", value:"cubic-bezier(0.075, 0.82, 0.165, 1)"},
  {name:"circ-ease-in-out", value:"cubic-bezier(0.785, 0.135, 0.15, 0.86)"},
  {name:"expo-ease-out", value:"cubic-bezier(0.19, 1, 0.22, 1)"},
  {name:"expo-ease-in", value:"cubic-bezier(0.6, 0.04, 0.98, 0.335)"},
  {name:"expo-ease-in-out", value:"cubic-bezier(0.785, 0.135, 0.15, 0.86)"},
  {name:"back-in", value:"cubic-bezier(0.6, -0.28, 0.74, 0.05)"},
  {name:"back-out", value:"cubic-bezier(0.18, 0.89, 0.32, 1.28)"},
  {name:"back-in-out", value:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},
  {name:"bounce-in", value:"cubic-bezier(0.24, -0.44, 0.17, 0.27)"},
  {name:"bounce-out", value:"cubic-bezier(0.64, 0.57, 0.67, 1.53)"},
  {name:"bounce-in-out", value:"cubic-bezier(0.76, -0.245, 0.24, 1.245)"},
  {name:"snap-out", value:"cubic-bezier(0, 1, 0.5, 1)"},
  {name:"snap-in", value:"cubic-bezier(0.06, 0.98, 0.19, 0.99)"},
  {name:"smooth", value:"cubic-bezier(0.365, 0.005, 0.355, 1)"},
  {name:"sine", value:"cubic-bezier(0.39, 0.58, 0.57, 1)"},
  {name:"quad", value:"cubic-bezier(0.25, 0.46, 0.45, 0.94)"},
  {name:"cubic", value:"cubic-bezier(0.22, 0.61, 0.36, 1)"},
  {name:"circ", value:"cubic-bezier(0.075, 0.82, 0.165, 1)"},
  {name:"expo", value:"cubic-bezier(0.19, 1, 0.22, 1)"},
  {name:"bounce", value:"cubic-bezier(0.65, 1.95, 0.03, 0.32)"},
  {name:"spring", value:"cubic-bezier(0.25, 2, 0.75, 0.5)"},
  {name:"elastic", value:"cubic-bezier(0.47, 2.02, 0.31, -0.36)"},
  {name:"swing", value:"cubic-bezier(0.175, 0.885, 0.32, 1.275)"},
  {name:"overshoot", value:"cubic-bezier(0.41, 0.41, 0.35, 1.2)"},
  {name:"anticipate", value:"cubic-bezier(0.5, 0, 0.8, 0.15)"},
  {name:"hesitate", value:"cubic-bezier(0.2, 1, 0.9, -0.5)"},
  {name:"hesitate2", value:"cubic-bezier(0.5, 1, 0.5, -0.25)"},
  {name:"snap", value:"cubic-bezier(0.755, 0.05, 0.855, 0.06)"},
  {name:"sharp", value:"cubic-bezier(0.4, 0, 0.6, 1)"},
  {name:"acceleration", value:"cubic-bezier(0.4, 0, 1, 1)"},
  {name:"deceleration", value:"cubic-bezier(0, 0, 0.2, 1)"},
  {name:"standard", value:"cubic-bezier(0.4, 0, 0.2, 1)"},
  {name:"paused", value:"cubic-bezier(0, 1, 1, 0)"},
  {name:"circ-in-out", value:"cubic-bezier(0.88, 0.14, 0.12, 0.86)"},
  {name:"cubic-in-out", value:"cubic-bezier(0.66, 0, 0.34, 1)"},
  {name:"ease-in-out2", value:"cubic-bezier(0.42, 0, 0.58, 1)"},
  {name:"expo-in-out", value:"cubic-bezier(0.9, 0, 0.1, 1)"},
  {name:"quad-in-out", value:"cubic-bezier(0.48, 0.04, 0.52, 0.96)"},
  {name:"quart-in-out", value:"cubic-bezier(0.76, 0, 0.24, 1)"},
  {name:"quint-in-out", value:"cubic-bezier(0.84, 0, 0.16, 1)"},
  {name:"fast-slow", value:"cubic-bezier(0, 0.45, 0.45, 1)"},
  {name:"fast-fast-slow", value:"cubic-bezier(0, 0.9, 0.45, 1)"},
  {name:"fast-slow-slow", value:"cubic-bezier(0, 0.45, 0.1, 1)"},
  {name:"slow-fast", value:"cubic-bezier(0.45, 0, 1, 0.45)"},
  {name:"slow-fast-fast", value:"cubic-bezier(0.45, 0, 1, 0.15)"},
  {name:"slow-slow-fast", value:"cubic-bezier(0.9, 0, 1, 0.45)"},
  {name:"ant-s1", value:"cubic-bezier(1, -0.51, 0, 1.51)"},
  {name:"ant-s2", value:"cubic-bezier(0.99, -2.18, 0.01, 3.18)"},
  {name:"ant-q1", value:"cubic-bezier(0.5, -1, 0.5, 2)"},
  {name:"ant-q2", value:"cubic-bezier(0.5, -1.5, 0.5, 2.5)"},
  {name:"smooth-operator", value:"cubic-bezier(0.64, 0.03, 0.07, 0.97)"},
  {name:"endless-bummer", value:"cubic-bezier(0.99, 0.03, 0.42, 0.97)"},
  {name:"get-around", value:"cubic-bezier(1, 0.07, 0.11, 1)"},
  {name:"unknown-soldier", value:"cubic-bezier(0.33, 0.02, 0.11, 1)"},
  {name:"spanish-caravan", value:"cubic-bezier(0.76, 0, 0.43, 0.94)"},
  {name:"five-to-one", value:"cubic-bezier(0.32, 0.05, 0.27, 1)"},
  {name:"wild-in-the-streets", value:"cubic-bezier(0.5, 1, 0.35, 1)"},
  {name:"daniel", value:"cubic-bezier(0, 0.1, 0.53, 1.34)"},
  {name:"cocodrile-tears", value:"cubic-bezier(0.47, 1.35, 0.53, 1.33)"},
  {name:"crystal-ship", value:"cubic-bezier(0.99, -0.55, 0.73, 1)"},
  {name:"tencc", value:"cubic-bezier(0.14, -0.14, 0, 1)"},
  {name:"bishop", value:"cubic-bezier(1, -0.66, 0.42, 0.97)"},
  {name:"scarborough-fair", value:"cubic-bezier(1, 0.06, 0.73, 0.98)"},
  {name:"tulsa-time", value:"cubic-bezier(0.19, 2.51, 0.43, 1)"},
  {name:"norwegian-skog", value:"cubic-bezier(0.25, 0.51, 0.35, 0.95)"},
  {name:"weird-fishes", value:"cubic-bezier(0.88, 0.04, 0.88, 0.95)"},
  {name:"brave-strangers", value:"cubic-bezier(0, 0.01, 0, 1)"},
  {name:"stranger-than-diction", value:"cubic-bezier(1, 0, 0.74, 1)"},
  {name:"the-gambler", value:"cubic-bezier(0.47, -0.48, 0, 1.03)"},
  {name:"cracklin-rose", value:"cubic-bezier(0.05, 0.03, 0, 1.16)"},
  {name:"ease-10", value:"cubic-bezier(0.1, 0, 0.9, 1)"},
  {name:"ease-20", value:"cubic-bezier(0.2, 0, 0.8, 1)"},
  {name:"ease-30", value:"cubic-bezier(0.3, 0, 0.7, 1)"},
  {name:"ease-40", value:"cubic-bezier(0.4, 0, 0.6, 1)"},
  {name:"ease-50", value:"cubic-bezier(0.5, 0, 0.5, 1)"},
  {name:"ease-60", value:"cubic-bezier(0.6, 0, 0.4, 1)"},
  {name:"ease-70", value:"cubic-bezier(0.7, 0, 0.3, 1)"},
  {name:"ease-80", value:"cubic-bezier(0.8, 0, 0.2, 1)"},
  {name:"ease-90", value:"cubic-bezier(0.9, 0, 0.1, 1)"},
  {name:"ease-100", value:"cubic-bezier(1, 0, 0, 1)"},
  {name:"ease-0-10", value:"cubic-bezier(0, 0, 0.1, 1)"},
  {name:"ease-0-20", value:"cubic-bezier(0, 0, 0.2, 1)"},
  {name:"ease-0-30", value:"cubic-bezier(0, 0, 0.3, 1)"},
  {name:"ease-0-40", value:"cubic-bezier(0, 0, 0.4, 1)"},
  {name:"ease-0-50", value:"cubic-bezier(0, 0, 0.5, 1)"},
  {name:"ease-0-60", value:"cubic-bezier(0, 0, 0.6, 1)"},
  {name:"ease-0-70", value:"cubic-bezier(0, 0, 0.7, 1)"},
  {name:"ease-0-80", value:"cubic-bezier(0, 0, 0.8, 1)"},
  {name:"ease-0-90", value:"cubic-bezier(0, 0, 0.9, 1)"},
  {name:"ease-50-0", value:"cubic-bezier(0.5, 0, 0, 1)"},
  {name:"ease-50-10", value:"cubic-bezier(0.5, 0, 0.1, 1)"},
  {name:"ease-50-20", value:"cubic-bezier(0.5, 0, 0.2, 1)"},
  {name:"ease-50-30", value:"cubic-bezier(0.5, 0, 0.3, 1)"},
  {name:"ease-50-40", value:"cubic-bezier(0.5, 0, 0.4, 1)"},
  {name:"ease-50-50", value:"cubic-bezier(0.5, 0, 0.5, 1)"},
  {name:"ease-50-60", value:"cubic-bezier(0.5, 0, 0.6, 1)"},
  {name:"ease-50-70", value:"cubic-bezier(0.5, 0, 0.7, 1)"},
  {name:"ease-50-80", value:"cubic-bezier(0.5, 0, 0.8, 1)"},
  {name:"ease-50-90", value:"cubic-bezier(0.5, 0, 0.9, 1)"},
  {name:"ease-50-100", value:"cubic-bezier(0.5, 0, 1, 1)"},
  {name:"boing", value:"cubic-bezier(0.35, 2, 0.1, 0.2)"},
  {name:"boingPast", value:"cubic-bezier(0.88, 2, 0.48, 0.71)"},
  {name:"swoosh", value:"cubic-bezier(0.63, -0.28, 0.13, 1.55)"},
  {name:"gottaDash", value:"cubic-bezier(0.9, -1.4, 0.61, 1.61)"},
  {name:"slowMo", value:"cubic-bezier(0, 1.35, 1, -0.35)"},
  {name:"slowInOut", value:"cubic-bezier(0.36, -0.14, 0.29, 1.21)"},
  {name:"smallOver", value:"cubic-bezier(0.41, 0.41, 0.35, 1.1)"},
  {name:"superEase", value:"cubic-bezier(0.605, 0.165, 0.045, 0.945)"},
  {name:"strongOut", value:"cubic-bezier(0, 0, 0.255, 0.995)"},
  {name:"strongIn", value:"cubic-bezier(0.975, 0.015, 1, 1)"},
  {name:"moon-shine", value:"cubic-bezier(.19, 1.78, .73, 1.35)"},
  {name:"tailwind-in", value:"cubic-bezier(.8, 0, 1, 1)"},
  {name:"tailwind-out", value:"cubic-bezier(0, 0, .2, 1)"},
  {name:"tailwind-in-out", value:"cubic-bezier(.4, 0, .6, 1)"},
  {name:"tiny-bounce", value:"cubic-bezier(.96, 1.34, .6, .89)"},
  {name:"small-bounce", value:"cubic-bezier(.99, 1.6, 0, .72)"},
  {name:"easeout", value:"cubic-bezier(0.5, 0.5, 0, 1)"},
  {name:"jump", value:"cubic-bezier(.86, 0, .69, 1.57"}

  ]
  
  // State to track the current easing function and index
  const easingIndex = ref(0)
  const currentEasing = ref(easings[easingIndex.value].value)
  const easingName = ref(easings[easingIndex.value].name)
  
  // Function to cycle through easing functions
  function updateEasing() {
    easingIndex.value = (easingIndex.value + 1) % easings.length
    currentEasing.value = easings[easingIndex.value].value
    easingName.value = easings[easingIndex.value].name
  }
  </script>
  
  <style scoped>
  /* Keyframes for the smooth animation */
  @keyframes smoothAnimation {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
  
  /* Styling for the animation */
  .animate-item {
    animation-name: smoothAnimation;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  </style>
  