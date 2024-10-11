<script lang="ts" setup>
const { t } = useI18n()

definePageMeta({
  layout: 'centercard',
})

useHead({
  title: `${t('index.roadmap.title')} • Nightrunner`,
})
</script>

<template>
  <div class="text-center mb-5">
    <h1 class="title text-4xl font-bold mb-8 dark:text-white">
      {{ t('index.roadmap.title') }}
    </h1>
  </div>

  <div class="max-w-md mx-auto">
    <p class="text-lg mb-8 dark:text-gray-300 ">
      {{ t('index.roadmap.description') }}
    </p>

    <!-- Roadmap Timeline -->
    <div class="roadmap relative border-l border-gray-200 dark:border-gray-700">
      <div class="mb-1 rounded-lg cursor-pointer cursor-pointer border-transparent border-[0.1px] hover:border-teal/50 ml-6 flex flex-row gap-4 bg-transparent hover:bg-gray/10 p-4">
        <span class="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg p-1 -left-4 dark:bg-blue-800 ">
          <i class="i-carbon-roadmap text-blue-500 text-2xl" />
        </span>
        <div class="flex flex-col">
          <h3 class="text-lg font-semibold text-nowrap text-gray-900 dark:text-gray-100">
            {{ t('index.roadmap.phase1.title') }}
          </h3>
          <p class="font-normal text-sm text-gray-500 dark:text-gray-400">
            {{ t('index.roadmap.phase1.description') }}
          </p>
        </div>
      </div>
      <div class="mb-1 rounded-lg cursor-pointer cursor-pointer border-transparent border-[0.1px] hover:border-teal/50 ml-6 flex flex-row gap-4 bg-transparent hover:bg-gray/10 p-4">
        <span class="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-lg p-1 -left-4 dark:bg-yellow-800">
          <i class="i-carbon-cics-sit-overrides text-yellow-500 text-2xl" />
        </span>
        <div class="flex flex-col">
          <h3 class="text-lg font-semibold text-nowrap text-gray-900 dark:text-gray-100">
            {{ t('index.roadmap.phase2.title') }}
          </h3>
          <p class="font-normal text-sm text-gray-500 dark:text-gray-400">
            {{ t('index.roadmap.phase2.description') }}
          </p>
        </div>
      </div>
      <div class="mb-1 rounded-lg cursor-pointer cursor-pointer border-transparent border-[0.1px] hover:border-teal/50 ml-6 flex flex-row gap-4 bg-transparent hover:bg-gray/10 p-4">
        <span class="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg p-1 -left-4 dark:bg-green-800">
          <i class="i-carbon-development text-green-500 text-2xl" />
        </span>
        <div class="flex flex-col">
          <h3 class="text-lg font-semibold text-nowrap text-gray-900 dark:text-gray-100">
            {{ t('index.roadmap.phase3.title') }}
          </h3>
          <p class="font-normal text-sm text-gray-500 dark:text-gray-400">
            {{ t('index.roadmap.phase3.description') }}
          </p>
        </div>
      </div>
      <div class="mb-1 rounded-lg cursor-pointer cursor-pointer border-transparent border-[0.1px] hover:border-teal/50 ml-6 flex flex-row gap-4 bg-transparent hover:bg-gray/10 p-4">
        <span class="flex items-center justify-center w-12 h-12 bg-red-100 rounded-lg p-1 -left-4 dark:bg-red-800">
          <i class="i-carbon-test-tool text-red-500 text-2xl" />
        </span>
        <div class="flex flex-col">
          <h3 class="text-lg font-semibold text-nowrap text-gray-900 dark:text-gray-100">
            {{ t('index.roadmap.phase4.title') }}
          </h3>
          <p class="font-normal text-sm text-gray-500 dark:text-gray-400">
            {{ t('index.roadmap.phase4.description') }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
