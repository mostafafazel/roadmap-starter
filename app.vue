<script setup lang="ts">
// import { useRouter, useSwitchLocalePath, useLocale } from 'vue-i18n';
// import { onMounted } from 'vue';

// Switch to preferred locale on load
const router = useRouter();
const switchLocalePath = useSwitchLocalePath();
const locale = useLocale();

// Set the locale class based on the current locale
const localeClass = computed(() => (locale.value === 'fa' ? 'font-farsi' : 'font-english'));

tryOnBeforeMount(() => {
  router.replace(switchLocalePath(locale.value));
});

onMounted(() => {
  document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
  });
});
</script>

<template>
  <div :class="localeClass">
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
html, body {
  touch-action: pan-x pan-y;
}

.font-farsi {
 font-family: 'Picoopic';
}

.font-english {
  font-family: 'Fira Code';

}
</style>
