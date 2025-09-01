<script lang="ts" setup>
const { t } = useI18n()

definePageMeta({
  layout: 'centercard',
})

useHead({
  title: `${t('global.sample')} • Biosensors`,
})
</script>

<template>
  <SampleComponent />
</template>
