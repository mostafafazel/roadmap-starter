<template>
  <NuxtLink v-if="cardLink" :to="localizedCardLink" class="block">
    <div class="card-wrapper">
      <div class="flex flex-col items-center">
        <slot name="icon">
          <i :class="`${iconClass} text-4xl mb-2 ${iconColorClass}`" />
        </slot>
        <slot name="title">
          <h3 class="font-semibold text-lg mb-2 text-center">{{ title }}</h3>
        </slot>
        <slot name="description">
          <p class="text-gray-600 text-xs text-center dark:text-gray-400">{{ description }}</p>
        </slot>
        <NuxtLink
          v-if="buttonLink && linkText"
          :to="localizedButtonLink"
          class="button-link"
        >
          {{ linkText }}
        </NuxtLink>
      </div>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
// import { useRoute, useI18n } from 'vue-i18n'

const props = defineProps<{
  iconClass: string
  iconColorClass: string
  title: string
  description: string
  cardLink?: string
  buttonLink?: string
  linkText?: string
}>()

const { locale } = useI18n()

const localizedCardLink = computed(() => {
  return props.cardLink ? `/${locale.value}${props.cardLink}` : ''
})

const localizedButtonLink = computed(() => {
  return props.buttonLink ? `/${locale.value}${props.buttonLink}` : ''
})
</script>

<style scoped>
.card-wrapper {
  @apply transition transform hover:scale-105 p-4 bg-white rounded-lg shadow-md hover:shadow-lg dark:bg-gray-800 dark:text-white;
}
.button-link {
  @apply bg-blue-500 text-white font-semibold px-3 py-1 rounded-lg hover:bg-blue-600 transition duration-300 text-xs mt-2;
}
</style>
