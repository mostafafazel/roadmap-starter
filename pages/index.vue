<script lang="ts" setup>
const { t, locale } = useCustomI18n()

useHead({
  meta: [
    {
      name: "google-site-verification",
      content: "kM6i4LlCIT4EHtZKdWSnDAVjPds09TxZUYS8pvzwxWc",
    },
  ],
});


function localizedPath(path: string) {
  return locale.value === 'fa' ? path : `/${locale.value}${path}`
  // return `/${locale.value}${path}`;

}

const links = [
  {
    path: '/roadmap',
    icon: 'i-carbon-roadmap',
    title: t('index.roadmap.title'),
    description: t('index.roadmap.description'),
  },
  {
    path: '/Data',
    icon: 'i-carbon-db2-database',
    title: t('index.Data.title'),
    description: t('index.Data.description'),
  },
  {
    path: '/news',
    icon: 'i-solar-bill-list-bold',
    title: t('index.news.title'),
    description: t('index.news.description'),
  },
  {
    path: '/grants',
    icon: 'i-solar-wallet-money-bold',
    title: t('index.grants.title'),
    description: t('index.grants.description'),
  },
  {
    path: '/Legal',
    icon: 'i-tabler-scale',
    title: t('index.Legal.title'),
    description: t('index.Legal.description'),
  },
  {
    path: '/resources',
    icon: 'i-solar-book-bookmark-outline',
    title: t('index.resources.title'),
    description: t('index.resources.description'),
  },
]
</script>

<template>
  <div class="container mx-auto px-4">
    <h1 class="my-8 text-center text-2xl md:text-6xl">
      {{ t('main.title') }}
    </h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <NuxtLink
        v-for="(link, index) in links"
        :key="index"
        :to="localizedPath(link.path)"
      >
        <Hero
          :icon="link.icon"
          :title="link.title"
          :description="link.description"
        />
      </NuxtLink>
    </div>
  </div>
</template>
