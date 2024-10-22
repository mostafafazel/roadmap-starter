<template>
  <div class="prose-container w-full max-w-screen-xl mx-auto px-8 md:px-16 lg:px-28 my-18">
    <div class="">
      <contentDoc :path="contentPath" />
    </div>
  </div>
</template>

<script setup lang="ts">

const route = useRoute();
const { locale } = useI18n();

const slug = route.params.slug?.join('/') || '';
const contentPath = `/${locale.value}/${slug}`;
</script>
