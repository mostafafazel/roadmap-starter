<template>
  <div  :dir="locale === 'fa' ? 'rtl' : 'ltr'" class="h-screen" >
    <NHeader />
    <div class="h-max flex-center flex-col gap-5">
      <slot />
    </div>
  </div>
</template>

<script setup>

// Hook into the locale functionality
const locale = useLocale();

</script>
