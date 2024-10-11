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

  <div class="grid grid-cols-1 sm:grid-cols-1 gap-2 lg:gap-4 md:mx-28">

    <Cardd 
      cardLink="/en/data/whatis"
      iconClass="i-carbon-information" 
      iconColorClass="text-blue-500" 
      :title="t('index.Data.whatIsBiosensor.title')" 
      :description="t('index.Data.whatIsBiosensor.description')"
   />

    <Cardd 
      cardLink="/en/data/history"
      iconClass="i-carbon-timer" 
      iconColorClass="text-yellow-500" 
      :title="t('index.Data.historyAndEvolution.title')" 
      :description="t('index.Data.historyAndEvolution.description')"
    />

    <Cardd 
      cardLink="/en/data/types"
      iconClass="i-carbon-tree-view-alt" 
      iconColorClass="text-green-500" 
      :title="t('index.Data.typesOfBiosensors.title')" 
      :description="t('index.Data.typesOfBiosensors.description')"
    />

    <Cardd
      cardLink="/en/data/applications"
      iconClass="i-carbon-collaborate" 
      iconColorClass="text-red-500" 
      :title="t('index.Data.applications.title')" 
      :description="t('index.Data.applications.description')"
    />

  </div>
</template>
