<script setup lang="ts">
// switch to preferred locale on load
const router = useRouter()
const switchLocalePath = useSwitchLocalePath()
const locale = useLocale()

tryOnBeforeMount(() => {
  router.replace(switchLocalePath(locale.value))
})

onMounted(() => {
    document.addEventListener('gesturestart', function (e) {
      e.preventDefault();
    });
})
</script>

<template>
  <div font="text">
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
</style>