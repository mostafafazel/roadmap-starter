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

  <div class="grid grid-cols-1 sm:grid-cols-1 gap-2 lg:gap-4 md:mx-28">
    <Cardd 
      cardLink="/en/roadmap/visuals/diagrams"
      iconClass="i-carbon-roadmap" 
      iconColorClass="text-blue-500" 
      :title="t('index.roadmap.phase1.title')" 
      :description="t('index.roadmap.phase1.description')"
    />

    <Cardd 
      cardLink="/en/roadmap/goals"
      iconClass="i-carbon-cics-sit-overrides" 
      iconColorClass="text-yellow-500" 
      :title="t('index.roadmap.phase2.title')" 
      :description="t('index.roadmap.phase2.description')"
    />

    <Cardd 
      cardLink="/en/roadmap/need"
      iconClass="i-carbon-development" 
      iconColorClass="text-green-500" 
      :title="t('index.roadmap.phase3.title')" 
      :description="t('index.roadmap.phase3.description')"
    />

    <Cardd 
      cardLink="/en/roadmap/feasibility"
      iconClass="i-carbon-test-tool" 
      iconColorClass="text-red-500" 
      :title="t('index.roadmap.phase4.title')" 
      :description="t('index.roadmap.phase4.description')"
    />
  </div>
</template>
