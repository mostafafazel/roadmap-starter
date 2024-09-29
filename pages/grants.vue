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
  <div class="text-center mb-5">
    <h1 class="title text-4xl font-bold mb-8 dark:text-white">
      {{ t('index.grants.title') }}
    </h1>
  </div>

  <div>
    <p class="text-lg mb-8 dark:text-gray-300">
      {{ t('index.grants.description') }}
    </p>

    <!-- Grant Opportunities -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl dark:bg-gray-800">
        <i class="i-solar-wallet-money-bold text-6xl text-blue-500 mb-4"></i>
        <h3 class="font-semibold text-lg mb-2 dark:text-white">{{ t('index.grants.items.researchGrant.title') }}</h3>
        <p class="text-gray-500 text-sm dark:text-gray-400">
          {{ t('index.grants.items.researchGrant.description') }}
        </p>
        <a href="#" class="text-blue-500 mt-3 inline-block underline">{{ t('index.grants.items.researchGrant.link') }}</a>
      </div>

      <div class="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl dark:bg-gray-800">
        <i class="i-solar-money-transaction-bold text-6xl text-green-500 mb-4"></i>
        <h3 class="font-semibold text-lg mb-2 dark:text-white">{{ t('index.grants.items.innovationGrant.title') }}</h3>
        <p class="text-gray-500 text-sm dark:text-gray-400">
          {{ t('index.grants.items.innovationGrant.description') }}</p>
        <a href="#" class="text-blue-500 mt-3 inline-block underline">{{ t('index.grants.items.innovationGrant.link') }}</a>
      </div>
    </div>
  </div>
</template>
