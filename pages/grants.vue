<script lang="ts" setup>
const { t } = useI18n()

definePageMeta({
  layout: 'centercard',
})

useHead({
  title: `${t('index.grants.title')} • Nightrunner`,
})
</script>

<template>
  <div class="min-h-[80vh] flex flex-col justify-start items-center p-4 md:space-y-10 lg:h-[90vh] lg:px-20">
    
    <!-- Header Section -->
    <div class="text-center space-y-4 mb-8 lg:mb-12">
      <h1 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 dark:text-white">
        {{ t('index.grants.title') }}
      </h1>
      <p class="text-xs sm:text-sm md:text-lg lg:text-xl text-teal-600 dark:text-teal-300 max-w-3xl mx-auto">
        {{ t('index.grants.description') }}
      </p>
    </div>

    <!-- Grants Section -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:gap-6 w-full lg:w-3/4">
      
      <!-- Research Grant Card -->
      <div class="group max-w-xs sm:max-w-sm mx-auto p-4 rounded-xl bg-white dark:bg-gray-800 transform transition-all duration-300 hover:scale-105">
        <div class="flex flex-col items-center gap-2 md:gap-4">
          <i class="i-solar-black-hole-bold-duotone text-6xl text-blue-500 group-hover:text-blue-600 transition duration-500 ease-out"></i>
          <h3 class="text-nowrap text-xl md:text-2xl font-semibold text-center dark:text-white">
            {{ t('index.grants.items.researchGrant.title') }}
          </h3>
          <p class="w-full text-justify text-xs md:text-sm lg:text-base text-gray-600 dark:text-gray-400">
            {{ t('index.grants.items.researchGrant.description') }}
          </p>
          <a href="/grants/company" class="mt-2 px-5 py-2 group-hover:bg-blue-500/80 text-white rounded-lg font-medium transition-colors duration-300 hover:bg-blue-600">
            {{ t('index.grants.items.researchGrant.link') }}
          </a>
        </div>
      </div>

      <!-- Divider for mobile view -->
      <div class="block lg:hidden h-px w-3/4 mx-auto bg-gray-300/30 my-4"></div>

      <!-- Innovation Grant Card -->
      <div class="group max-w-xs sm:max-w-sm mx-auto p-4 rounded-xl bg-white dark:bg-gray-800 transform transition-all duration-300 hover:scale-105">
        <div class="flex flex-col items-center gap-2 md:gap-4">
          <i class="i-solar-ghost-smile-bold-duotone text-6xl text-green-500 group-hover:text-green-600 transition duration-500 ease-out"></i>
          <h3 class="text-nowrap text-xl md:text-2xl font-semibold text-center dark:text-white">
            {{ t('index.grants.items.innovationGrant.title') }}
          </h3>
          <p class="w-full text-justify text-xs md:text-sm lg:text-base text-gray-600 dark:text-gray-400">
            {{ t('index.grants.items.innovationGrant.description') }}
          </p>
          <a href="/grants/grant" class="mt-2 px-5 py-2 group-hover:bg-green-500/80 text-white rounded-lg font-medium transition-colors duration-300 hover:bg-green-600">
            {{ t('index.grants.items.innovationGrant.link') }}
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
.group:hover .i-solar-black-hole-bold-duotone,
.group:hover .i-solar-ghost-smile-bold-duotone {
  animation: rotateScale 0.5s ease-out forwards, pulseAlt 1.2s ease infinite;
  animation-delay: 0s, 0.5s;
  animation-fill-mode: forwards;
  transition: transform 0.5s ease-out;
}
</style>
