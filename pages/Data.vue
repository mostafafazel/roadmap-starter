<script lang="ts" setup>
const { t } = useI18n()

definePageMeta({
  layout: 'centercard',
})

useHead({
  title: `${t('index.Data.title')} • Nightrunner`,
})
</script>

<template>
  <Headerr :title="t('index.Data.title')" :description="t('index.Data.description')" />

  <div class="grid grid-cols-1 sm:grid-cols-1 gap-2 lg:gap-4 max-w-[500px] mx-auto md:mt-18">

    <Cardd 
      cardLink="/data/whatis"
      iconClass="i-carbon-information" 
      iconColorClass="text-blue-500" 
      :title="t('index.Data.whatIsBiosensor.title')" 
      :description="t('index.Data.whatIsBiosensor.description')"
   />

    <Cardd 
      cardLink="/data/history"
      iconClass="i-carbon-timer" 
      iconColorClass="text-yellow-500" 
      :title="t('index.Data.historyAndEvolution.title')" 
      :description="t('index.Data.historyAndEvolution.description')"
    />

    <Cardd 
      cardLink="/data/types"
      iconClass="i-carbon-tree-view-alt" 
      iconColorClass="text-green-500" 
      :title="t('index.Data.typesOfBiosensors.title')" 
      :description="t('index.Data.typesOfBiosensors.description')"
    />

    <Cardd
      cardLink="/data/applications"
      iconClass="i-carbon-collaborate" 
      iconColorClass="text-red-500" 
      :title="t('index.Data.applications.title')" 
      :description="t('index.Data.applications.description')"
    />

  </div>
</template>
