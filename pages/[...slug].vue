<template>
  <div class="prose-container">
    <contentDoc :path="contentPath" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { locale } = useI18n()

const slug = route.params.slug?.join('/') || ''

// const contentPath = locale.value === 'fa' ? `/${slug}` : `/${locale.value}/${slug}`
const contentPath =  `/${locale.value}/${slug}`

</script>
