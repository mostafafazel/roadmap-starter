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
  <div class="text-center mb-8">
    <h1 class="title text-4xl font-extrabold mb-6 dark:text-white">
      {{ t('index.grants.title') }}
    </h1>
    <p class="text-lg mb-10 max-w-3xl mx-auto dark:text-gray-300">
      {{ t('index.grants.description') }}
    </p>
  </div>

  <!-- Grant Opportunities Section -->
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10">
    <!-- Research Grant -->
    <div
      class="transition transform hover:scale-105 p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl dark:bg-gray-800 dark:text-white"
    >
      <div class="flex flex-col items-center">
        <i class="i-solar-wallet-money-bold text-6xl text-blue-500 mb-4" />
        <h3 class="font-semibold text-xl mb-3 text-center">
          {{ t('index.grants.items.researchGrant.title') }}
        </h3>
        <p class="text-gray-600 text-sm text-center mb-5 dark:text-gray-400">
          {{ t('index.grants.items.researchGrant.description') }}
        </p>
        <a
          href="#"
          class="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          {{ t('index.grants.items.researchGrant.link') }}
        </a>
      </div>
    </div>

    <!-- Innovation Grant -->
    <div
      class="transition transform hover:scale-105 p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl dark:bg-gray-800 dark:text-white"
    >
      <div class="flex flex-col items-center">
        <i class="i-carbon-money text-6xl text-green-500 mb-4" />
        <h3 class="font-semibold text-xl mb-3 text-center">
          {{ t('index.grants.items.innovationGrant.title') }}
        </h3>
        <p class="text-gray-600 text-sm text-center mb-5 dark:text-gray-400">
          {{ t('index.grants.items.innovationGrant.description') }}
        </p>
        <a
          href="#"
          class="bg-green-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
        >
          {{ t('index.grants.items.innovationGrant.link') }}
        </a>
      </div>
    </div>
  </div>
</template>
