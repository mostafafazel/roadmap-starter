<script setup lang="ts">

// Switch to preferred locale on load (client-side only)
const router = useRouter();
const switchLocalePath = useSwitchLocalePath();
const locale = useLocale();

// Locale class applied only on the client
const localeClass = ref('');

// Update localeClass based on the current locale
const updateLocaleClass = () => {
  localeClass.value = locale.value === 'fa' ? 'font-farsi' : 'font-english';
};

// Initial setup and client-only logic
onMounted(() => {
  // Set the locale class on initial load
  updateLocaleClass();

  // Redirect to the preferred locale path
  router.replace(switchLocalePath(locale.value));

  // Prevent gesture zooming
  document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
  });
});

// Watch for locale changes and update localeClass accordingly
watch(locale, updateLocaleClass);
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
