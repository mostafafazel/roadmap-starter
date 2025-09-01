<script lang="ts" setup>
const { t } = useI18n()

definePageMeta({
  layout: 'centercard',
})

useHead({
  title: `${t('index.news.title')} • Biosensors`,
})
</script>

<template>
  <div class="flex flex-col max-h-screen items-center justify-around h-full  p-1 md:p-4 space-y-8 md:space-y-12 lg:px-10 lg:py-16">
    
    <!-- Header Section -->
    <div class="text-center space-y-4">
      <h1 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 dark:text-white">
        {{ t('index.news.title') }}
      </h1>
      <p class="text-xs sm:text-sm md:text-lg lg:text-xl text-teal-600 dark:text-teal-300 max-w-3xl px-8 text-justify mx-auto">
        {{ t('index.news.description') }}
      </p>
    </div>

    <!-- News Section -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:gap-6 w-full lg:w-3/4">
      
      <!-- Breakthrough News Card -->
      <div class="group p-1 md:p-4 md:p-6 rounded-lg bg-white dark:bg-gray-800 transform transition-all duration-300 hover:scale-105">
        <div class="flex flex-col items-center gap-2 md:gap-6 px-8">
          <i class="i-tabler-news text-6xl text-blue-500 group-hover:text-blue-600 transition duration-500 ease-out"></i>
          <h3 class="text-lg md:text-xl font-semibold text-center dark:text-white">
            {{ t('index.news.items.breakthrough.title') }}
          </h3>
          <p class="w-full text-justify text-xs md:text-sm lg:text-base text-gray-600 dark:text-gray-400 opacity-50 group-hover:opacity-100 overflow-hidden transition-[max-height] duration-300 ease-out break-words">
            {{ t('index.news.items.breakthrough.description') }}
          </p>
          <a href="https://phys.org/tags/biosensors/#google_vignette" class="mt-1 md:mt-4 px-2 md:px-6 py-1 md:py-2 group-hover:bg-blue-500/80 text-white rounded-lg font-medium transition-colors duration-300 hover:bg-blue-600">
            {{ t('index.news.items.breakthrough.link') }}
          </a>
        </div>
      </div>

      <!-- Divider for mobile view -->
      <div class="block lg:hidden h-px w-3/4 mx-auto bg-gray-300/30 my-4"></div>

      <!-- New Sensor News Card -->
      <div class="group p-1 md:p-4 md:p-6 rounded-lg bg-white dark:bg-gray-800 transform transition-all duration-300 hover:scale-105">
        <div class="flex flex-col items-center gap-2 md:gap-6 px-8">
          <i class="i-tabler-cube text-6xl text-green-500 group-hover:text-green-600 transition duration-500 ease-out"></i>
          <h3 class="text-lg md:text-xl font-semibold text-center dark:text-white">
            {{ t('index.news.items.newSensor.title') }}
          </h3>
          <p class="w-full text-justify text-xs md:text-sm lg:text-base text-gray-600 dark:text-gray-400 opacity-50 group-hover:opacity-100 overflow-hidden transition-[max-height] duration-300 ease-out break-words">
            {{ t('index.news.items.newSensor.description') }}
          </p>
          <a href="https://biosensors.com/intl/" class="mt-1 md:mt-4 px-2 md:px-6 py-1 md:py-2 group-hover:bg-green-500/80 text-white rounded-lg font-medium transition-colors duration-300 hover:bg-green-600">
            {{ t('index.news.items.newSensor.link') }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Rotate and scale keyframes */
@keyframes rotateScale {
  0% {
    transform: rotate(0deg) scale(1);
  }
  100% {
    transform: rotate(12deg) scale(1.1);
  }
}

@keyframes pulseAlt {
  0%, 100% {
    transform: rotate(12deg) scale(1.1);
  }
  50% {
    transform: scale(1.05);
  }
}

/* Hover animation effects */
.group:hover .i-tabler-news,
.group:hover .i-tabler-cube {
  animation: rotateScale 0.5s ease-out forwards, pulseAlt 1.2s ease infinite;
  animation-delay: 0s, 0.5s;
  animation-fill-mode: forwards;
  transition: transform 0.5s ease-out;
}
</style>
