<script setup>
// Hook into the locale functionality
const locale = useLocale()
</script>

<template>
  <div :dir="locale === 'fa' ? 'rtl' : 'ltr'" class="h-screen">
    <NHeader />
    <div class="h-full flex-center flex-col gap-5 bg-background dark:bg-dark-background">
      <slot />
    </div>
  </div>
</template>
