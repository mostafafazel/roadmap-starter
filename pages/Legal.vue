<script lang="ts" setup>
const { t } = useI18n()

definePageMeta({
  layout: 'centercard',
})

useHead({
  title: `${t('index.Legal.title')} • Nightrunner`,
})
</script>

<template>
  <div class="text-center mb-6">
    <h1 class="title text-3xl font-bold mb-4 dark:text-white">
      {{ t('index.Legal.title') }}
    </h1>
    <p class="text-base mb-6 max-w-2xl mx-auto dark:text-gray-300">
      {{ t('index.Legal.description') }}
    </p>
  </div>

  <!-- Legal Information Section -->
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
    
    <!-- Legal Overview -->
    <div
      class="transition transform hover:scale-105 p-4 bg-white rounded-lg shadow-md hover:shadow-lg dark:bg-gray-800 dark:text-white"
    >
      <div class="flex flex-col items-center">
        <i class="i-carbon-scales text-4xl text-blue-500 mb-2" />
        <h3 class="font-semibold text-lg mb-2 text-center">
          {{ t('index.Legal.items.legalOverview.title') }}
        </h3>
        <p class="text-gray-600 text-xs text-center dark:text-gray-400">
          {{ t('index.Legal.items.legalOverview.description') }}
        </p>
      </div>
    </div>

    <!-- Data Protection -->
    <div
      class="transition transform hover:scale-105 p-4 bg-white rounded-lg shadow-md hover:shadow-lg dark:bg-gray-800 dark:text-white"
    >
      <div class="flex flex-col items-center">
        <i class="i-solar-safe-square-bold text-4xl text-green-500 mb-2" />
        <h3 class="font-semibold text-lg mb-2 text-center">
          {{ t('index.Legal.items.dataProtection.title') }}
        </h3>
        <p class="text-gray-600 text-xs text-center dark:text-gray-400">
          {{ t('index.Legal.items.dataProtection.description') }}
        </p>
      </div>
    </div>

    <!-- User Rights -->
    <div
      class="transition transform hover:scale-105 p-4 bg-white rounded-lg shadow-md hover:shadow-lg dark:bg-gray-800 dark:text-white"
    >
      <div class="flex flex-col items-center">
        <i class="i-tabler-hand-stop text-4xl text-yellow-500 mb-2" />
        <h3 class="font-semibold text-lg mb-2 text-center">
          {{ t('index.Legal.items.userRights.title') }}
        </h3>
        <p class="text-gray-600 text-xs text-center dark:text-gray-400">
          {{ t('index.Legal.items.userRights.description') }}
        </p>
      </div>
    </div>

    <!-- Compliance Guidelines -->
    <div
      class="transition transform hover:scale-105 p-4 bg-white rounded-lg shadow-md hover:shadow-lg dark:bg-gray-800 dark:text-white"
    >
      <div class="flex flex-col items-center">
        <i class="i-carbon-checkmark-outline text-4xl text-red-500 mb-2" />
        <h3 class="font-semibold text-lg mb-2 text-center">
          {{ t('index.Legal.items.complianceGuidelines.title') }}
        </h3>
        <p class="text-gray-600 text-xs text-center dark:text-gray-400">
          {{ t('index.Legal.items.complianceGuidelines.description') }}
        </p>
      </div>
    </div>

    <!-- Legal Research Grant -->
    <div
      class="transition transform hover:scale-105 p-4 bg-white rounded-lg shadow-md hover:shadow-lg dark:bg-gray-800 dark:text-white"
    >
      <div class="flex flex-col items-center">
        <i class="i-solar-document-bold text-4xl text-purple-500 mb-2" />
        <h3 class="font-semibold text-lg mb-2 text-center">
          {{ t('index.Legal.items.researchGrant.title') }}
        </h3>
        <p class="text-gray-600 text-xs text-center dark:text-gray-400">
          {{ t('index.Legal.items.researchGrant.description') }}
        </p>
        <a
          href="#"
          class="bg-blue-500 text-white font-semibold px-3 py-1 rounded-lg hover:bg-blue-600 transition duration-300 text-xs mt-2"
        >
          {{ t('index.Legal.items.researchGrant.link') }}
        </a>
      </div>
    </div>

    <!-- Legal Innovation Grant -->
    <div
      class="transition transform hover:scale-105 p-4 bg-white rounded-lg shadow-md hover:shadow-lg dark:bg-gray-800 dark:text-white"
    >
      <div class="flex flex-col items-center">
        <i class="i-tabler-bulb text-4xl text-green-500 mb-2" />
        <h3 class="font-semibold text-lg mb-2 text-center">
          {{ t('index.Legal.items.innovationGrant.title') }}
        </h3>
        <p class="text-gray-600 text-xs text-center dark:text-gray-400">
          {{ t('index.Legal.items.innovationGrant.description') }}
        </p>
        <a
          href="#"
          class="bg-green-500 text-white font-semibold px-3 py-1 rounded-lg hover:bg-green-600 transition duration-300 text-xs mt-2"
        >
          {{ t('index.Legal.items.innovationGrant.link') }}
        </a>
      </div>
    </div>
  </div>
</template>
