<script lang="ts" setup>
const { t } = useI18n()

definePageMeta({
  layout: 'centercard',
})

useHead({
  title: `${t('index.grants.title')} • Biosensors`,
})
</script>

<template>
  <div class="flex flex-col max-h-screen items-center justify-around h-full  p-1 md:p-4 space-y-8 md:space-y-12 lg:px-10 lg:py-16 overflow-hidden">
    
    <!-- Header Section -->
    <div class="text-center space-y-4 mb-2 lg:mb-10">
      <h1 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 dark:text-white">
        {{ t('index.grants.title') }}
      </h1>
      <p class="text-sm sm:text-base md:text-lg lg:text-xl text-teal-600 dark:text-teal-300 max-w-3xl px-8 text-justify mx-auto">
        {{ t('index.grants.description') }}
      </p>
    </div>

    <!-- Grants Section -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-5xl mx-auto">
      
      <!-- Research Grant Card -->
      <div class="group p-1 md:p-4 md:p-6 rounded-lg bg-white dark:bg-gray-800 transform transition-all duration-300 hover:scale-105">
        <div class="flex flex-col items-center gap-1 md:gap-6 px-8">
          <i class="i-solar-black-hole-bold-duotone text-6xl text-blue-500 group-hover:text-blue-600 transition duration-500 ease-out"></i>
          <h3 class="text-lg md:text-xl font-semibold text-center dark:text-white">
            {{ t('index.grants.items.researchGrant.title') }}
          </h3>
          <p class="text-center text-xs md:text-sm lg:text-base text-gray-600 dark:text-gray-400 opacity-50 group-hover:opacity-100 overflow-hidden transition-[max-height] duration-300 ease-out break-words">
            {{ t('index.grants.items.researchGrant.description') }}
          </p>
          <a href="/grants/grant" class="mt-1 md:mt-4 px-2 md:px-6  py-1 md:py-2  group-hover:bg-blue-500/80 text-white rounded-lg font-medium transition-colors duration-300 hover:bg-blue-600">
            {{ t('index.grants.items.researchGrant.link') }}
          </a>
        </div>
      </div>

      <!-- Innovation Grant Card -->
      <div class="group p-1 md:p-4 md:p-6 rounded-lg bg-white dark:bg-gray-800 transform transition-all duration-300 hover:scale-105">
        <div class="flex flex-col items-center gap-1 md:gap-6 px-8">
          <i class="i-solar-ghost-smile-bold-duotone text-6xl text-green-500 group-hover:text-green-600 transition duration-500 ease-out"></i>
          <h3 class="text-lg md:text-xl font-semibold text-center dark:text-white">
            {{ t('index.grants.items.innovationGrant.title') }}
          </h3>
          <p class="text-center text-xs md:text-sm lg:text-base text-gray-600 dark:text-gray-400 opacity-50 group-hover:opacity-100 overflow-hidden transition-[max-height] duration-300 ease-out break-words">
            {{ t('index.grants.items.innovationGrant.description') }}
          </p>
          <a href="/grants/grant" class="mt-1 md:mt-4 px-2 md:px-6  py-1 md:py-2  group-hover:bg-green-500/80 text-white rounded-lg font-medium transition-colors duration-300 hover:bg-green-600">
            {{ t('index.grants.items.innovationGrant.link') }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Hover animation effects */
.group:hover .i-solar-black-hole-bold-duotone,
.group:hover .i-solar-ghost-smile-bold-duotone {
  animation: rotateScale 0.5s ease-out forwards, pulseAlt 1.2s ease infinite;
  animation-delay: 0s, 0.5s;
  animation-fill-mode: forwards;
  transition: transform 0.5s ease-out;
}

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
</style>
