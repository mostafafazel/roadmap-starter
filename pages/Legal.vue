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
  <Headerr :title="t('index.Legal.title')" :description="t('index.Legal.description')" />

  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">

    <Cardd 
      cardLink="/en/legal/privacy"
      linkText="bezan ro0m" 
      description="دسکریپشن" 
      iconClass="i-carbon-map" 
      title="عنوان" 
      iconColorClass="text-green-500">
    </Cardd>
    

    <Cardd 
      cardLink="/en/index"
      iconClass="i-carbon-scales"
      iconColorClass="text-blue-500"
      :title="t('index.Legal.items.legalOverview.title')"
      :description="t('index.Legal.items.legalOverview.description')"
    />
    <Cardd
      iconClass="i-solar-safe-square-bold"
      iconColorClass="text-green-500"
      :title="t('index.Legal.items.dataProtection.title')"
      :description="t('index.Legal.items.dataProtection.description')"
    />
    <Cardd
      iconClass="i-tabler-hand-stop"
      iconColorClass="text-yellow-500"
      :title="t('index.Legal.items.userRights.title')"
      :description="t('index.Legal.items.userRights.description')"
    />
    <Cardd
      iconClass="i-carbon-checkmark-outline"
      iconColorClass="text-red-500"
      :title="t('index.Legal.items.complianceGuidelines.title')"
      :description="t('index.Legal.items.complianceGuidelines.description')"
    />
    <Cardd
      iconClass="i-solar-document-bold"
      iconColorClass="text-purple-500"
      :title="t('index.Legal.items.researchGrant.title')"
      :description="t('index.Legal.items.researchGrant.description')"
      link="#"
      linkText="Learn More"
      />

    <Cardd
      iconClass="i-tabler-bulb"
      iconColorClass="text-green-500"
      :title="t('index.Legal.items.innovationGrant.title')"
      :description="t('index.Legal.items.innovationGrant.description')"
      link="#"
      linkText="Learn More"
    />
  </div>
</template>
