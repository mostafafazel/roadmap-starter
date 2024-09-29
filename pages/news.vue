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
  <div class="text-center mb-5">
    <h1 class="title text-4xl font-bold mb-8 dark:text-white">
      {{ t('index.news.title') }}
    </h1>
  </div>

  <div>
    <p class="text-lg mb-8 dark:text-gray-300">
      {{ t('index.news.description') }}
    </p>

    <!-- News Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl dark:bg-gray-800">
        <i class="i-solar-news-bold text-6xl text-blue-500 mb-4"></i>
        <h3 class="font-semibold text-lg mb-2 dark:text-white">{{ t('index.news.items.breakthrough.title') }}</h3>
        <p class="text-gray-500 text-sm dark:text-gray-400">
          {{ t('index.news.items.breakthrough.description') }}
        </p>
        <a href="#" class="text-blue-500 mt-3 inline-block underline">{{ t('index.news.items.breakthrough.link') }}</a>
      </div>

      <div class="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl dark:bg-gray-800">
        <i class="i-solar-cube-bold text-6xl text-green-500 mb-4"></i>
        <h3 class="font-semibold text-lg mb-2 dark:text-white">{{ t('index.news.items.newSensor.title') }}</h3>
        <p class="text-gray-500 text-sm dark:text-gray-400">
          {{ t('index.news.items.newSensor.description') }}
        </p>
        <a href="#" class="text-blue-500 mt-3 inline-block underline">{{ t('index.news.items.newSensor.link') }}</a>
      </div>
    </div>
  </div>
</template>
