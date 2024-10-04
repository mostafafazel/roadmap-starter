<script lang="ts" setup>
const { t } = useI18n()

definePageMeta({
  layout: 'centercard',
})

useHead({
  title: `${t('index.news.title')} • Nightrunner`,
})
</script>

<template>
  <div class="text-center mb-8">
    <h1 class="title text-4xl font-extrabold mb-6 dark:text-white">
      {{ t('index.news.title') }}
    </h1>
    <p class="text-lg mb-10 max-w-3xl mx-auto dark:text-gray-300">
      {{ t('index.news.description') }}
    </p>
  </div>

  <!-- News Section -->
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10">
    <!-- Breakthrough News -->
    <div
      class="transition transform hover:scale-105 p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl dark:bg-gray-800 dark:text-white"
    >
      <div class="flex flex-col items-center">
        <i class="i-tabler-news text-6xl text-blue-500 mb-4"></i>
        <h3 class="font-semibold text-xl mb-3 text-center">
          {{ t('index.news.items.breakthrough.title') }}
        </h3>
        <p class="text-gray-600 text-sm text-center mb-5 dark:text-gray-400">
          {{ t('index.news.items.breakthrough.description') }}
        </p>
        <a
          href="#"
          class="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          {{ t('index.news.items.breakthrough.link') }}
        </a>
      </div>
    </div>

    <!-- New Sensor News -->
    <div
      class="transition transform hover:scale-105 p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl dark:bg-gray-800 dark:text-white"
    >
      <div class="flex flex-col items-center">
        <i class="i-tabler-cube text-6xl text-green-500 mb-4"></i>
        <h3 class="font-semibold text-xl mb-3 text-center">
          {{ t('index.news.items.newSensor.title') }}
        </h3>
        <p class="text-gray-600 text-sm text-center mb-5 dark:text-gray-400">
          {{ t('index.news.items.newSensor.description') }}
        </p>
        <a
          href="#"
          class="bg-green-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
        >
          {{ t('index.news.items.newSensor.link') }}
        </a>
      </div>
    </div>
  </div>
</template>
