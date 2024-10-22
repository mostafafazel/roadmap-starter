<script setup lang="ts">
// import { useRoute } from 'vue-router';

// Hook into the locale functionality
const locale = useLocale();

// Get the current route
const route = useRoute();
</script>

<template>
  <div
    :dir="locale === 'fa' ? 'rtl' : 'ltr'"
    class="min-h-screen flex flex-col bg-background dark:bg-dark-background"
  >
    <NHeader />
    <div class="flex-grow mt-12 mb-12">
      <slot />
    </div>
    <!-- Optional Footer -->
    <!-- <NFooter /> -->
    
    <!-- Back button to navigate home, render only if not on the main page -->
    <arrow v-if="route.path !== '/'" />
  </div>
</template>
