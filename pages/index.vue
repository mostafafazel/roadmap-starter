<script lang="ts" setup>
const { t, locale } = useCustomI18n()
// const route = useRoute()

// Helper function to generate the localized path
function localizedPath(path: string) {
  return locale.value === 'fa' ? path : `/${locale.value}${path}`
}
</script>

<template>
  <div class="container top-[30vh] md:top-[0vh]  relative">
    <h1 class="title my-8 mx-2 text-align-center text-2xl md:text-6xl">
      {{ t('main.title') }}
    </h1>

    <!-- Responsive 2x2 grid layout -->
    <div class="mx-8 grid grid-cols-1 md:grid-cols-2 gap-8 top-28 mb-28">
      <NuxtLink :to="localizedPath('/roadmap')">
        <Hero
          icon="i-carbon-roadmap"
          :title="t('index.roadmap.title')"
          :description="t('index.roadmap.description')"
        />
      </NuxtLink>

      <NuxtLink :to="localizedPath('/Data')">
        <Hero
          icon="i-carbon-db2-database"
          :title="t('index.Data.title')"
          :description="t('index.Data.description')"
        />
      </NuxtLink>

      <NuxtLink :to="localizedPath('/news')">
        <Hero
          icon="i-solar-bill-list-bold"
          :title="t('index.news.title')"
          :description="t('index.news.description')"
        />
      </NuxtLink>

      <NuxtLink :to="localizedPath('/grants')">
        <Hero
          icon="i-solar-wallet-money-bold"
          :title="t('index.grants.title')"
          :description="t('index.grants.description')"
        />
      </NuxtLink>

      <NuxtLink :to="localizedPath('/Legal')">
        <Hero
          icon="i-tabler-scale"
          :title="t('index.Legal.title')"
          :description="t('index.Legal.description')"
        />
      </NuxtLink>

      <NuxtLink :to="localizedPath('/resources')">
        <Hero
          icon="i-solar-book-bookmark-outline"
          :title="t('index.resources.title')"
          :description="t('index.resources.description')"
        />
      </NuxtLink>
    </div>
  </div>
</template>
