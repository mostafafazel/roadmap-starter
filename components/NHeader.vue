<script lang="ts" setup>
const { isDark, toggle } = useDark();
const { t, locale } = useCustomI18n(); // Assuming locale is accessible here
// const currentContent = ref('<p>Your markdown content or placeholder here</p>')
const route = useRoute()


</script>

<template>
  <header class="p-5 w-full flex-center flex-row justify-between absolute">
    <!-- Dynamically construct the link with respect to locale, and point to "/" for 'fa' -->

    <NuxtLink
      :to="locale === 'fa' ? '/' : `/${locale}`"
      class=""
      :class="locale === 'fa' ? 'left-5' : 'right-5'"
      @click.prevent
    >

      <ClientOnly>
        <div class="icon-btn text-10 i-carbon:home w-1em h-1em"></div>

        <template #fallback>...</template>
      </ClientOnly>
    </NuxtLink>

    <!-- <NuxtLink :to="{ path: '/editor3', query: { from: route.path } }">Go to Editor</NuxtLink> -->

    <!-- <NuxtLink :to="locale === 'fa' ? '/' : `/${locale}`" class="text-8 font-text" @click.prevent>
      <p class="text-8 font-text">
        <ClientOnly>
          {{ isDark ? t('theme.dark') : t('theme.light') }}
          <template #fallback>
            ...
          </template>
        </ClientOnly>
      </p>
    </NuxtLink> -->

    <div class="flex flex-row gap-2">
      <LocaleSwitch />
      <button class="icon-btn text-5" @click="(e) => { e.preventDefault(); toggle(); }">
        <div i="tabler-sun dark:tabler-moon" />
      </button>
    </div>
  </header>
</template>
