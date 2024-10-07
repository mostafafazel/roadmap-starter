<template>
  <NuxtLink v-if="cardLink" :to="cardLink" class="block">
    <div class="transition transform hover:scale-105 p-4 bg-white rounded-lg shadow-md hover:shadow-lg dark:bg-gray-800 dark:text-white">
      <div class="flex flex-col items-center">
        <i :class="`${iconClass} text-4xl mb-2 ${iconColorClass}`" />
        
        <!-- Title Slot -->
        <h3 class="font-semibold text-lg mb-2 text-center">
          <slot name="title">{{ title }}</slot>
        </h3>
        
        <!-- Description Slot -->
        <p class="text-gray-600 text-xs text-center dark:text-gray-400">
          <slot name="description">{{ description }}</slot>
        </p>
        
        <!-- Button Link Slot -->
        <NuxtLink
          v-if="buttonLink && linkText"
          :to="buttonLink"
          class="bg-blue-500 text-white font-semibold px-3 py-1 rounded-lg hover:bg-blue-600 transition duration-300 text-xs mt-2"
        >
          <slot name="linkText">{{ linkText }}</slot>
        </NuxtLink>
      </div>
    </div>
  </NuxtLink>

  <!-- Fallback without NuxtLink wrapper if no cardLink is provided -->
  <div v-else class="transition transform hover:scale-105 p-4 bg-white rounded-lg shadow-md hover:shadow-lg dark:bg-gray-800 dark:text-white">
    <div class="flex flex-col items-center">
      <i :class="`${iconClass} text-4xl mb-2 ${iconColorClass}`" />

      <!-- Title Slot -->
      <h3 class="font-semibold text-lg mb-2 text-center">
        <slot name="title">{{ title }}</slot>
      </h3>

      <!-- Description Slot -->
      <p class="text-gray-600 text-xs text-center dark:text-gray-400">
        <slot name="description">{{ description }}</slot>
      </p>

      <!-- Button Link Slot -->
      <NuxtLink
        v-if="buttonLink && linkText"
        :to="buttonLink"
        class="bg-blue-500 text-white font-semibold px-3 py-1 rounded-lg hover:bg-blue-600 transition duration-300 text-xs mt-2"
      >
        <slot name="linkText">{{ linkText }}</slot>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  iconClass: {
    type: String,
    default: 'i-default-icon',
  },
  iconColorClass: {
    type: String,
    default: 'text-gray-500',
  },
  title: {
    type: String,
    default: 'Default Title',
  },
  description: {
    type: String,
    default: 'Default Description',
  },
  cardLink: String,
  buttonLink: String,
  linkText: {
    type: String,
    default: 'Learn More',
  },
})
</script>
