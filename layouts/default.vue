<script setup lang="ts">
// Hook into the locale functionality
const  locale  = useLocale()
</script>

<template>
  <div
    :dir="locale === 'fa' ? 'rtl' : 'ltr'"
    class="min-h-screen flex flex-col bg-background dark:bg-dark-background"
  >
    <NHeader />
    <main class="flex-grow mt-12 mb-12">
      <slot />
    </main>
    <!-- Optional Footer -->
    <!-- <NFooter /> -->
         <!-- Back button to navigate home -->

  </div>
</template>
