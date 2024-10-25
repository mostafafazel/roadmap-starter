<template>
  <div>
    <!-- Card with link -->
    <div
      v-if="buttonLink"
      class="block border-b-1 border-b-gray pb-2"
      @click="toggleCard(index)" 
    >
      <div class="transition-all duration-800 ease-in-out transform scale-95 hover:scale-100 p-1 rounded-lg"
      :class="{
              'bg-white dark:bg-gray-800 dark:text-white': isOpen !== index, 
              'bg-gray/10 dark:bg-white/10 ': isOpen === index
            }"

      >
        <div class="flex flex-col items-center ">
          <div class="flex flex-row-reverse w-full items-center justify-between px-2">
            <i :class="`${iconClass} text-4xl my-2 ${iconColorClass}`" />
            <h3 class="font-semibold text-lg mb-2">
              <slot name="title">{{ title }}</slot>
            </h3>
          </div>
          <!-- Sliding effect for description -->
          <p
            :class="{
              'mx-4 max-h-0 overflow-hidden': isOpen !== index, 
              'm-4 max-h-[500px]': isOpen === index
            }"
            class="text-gray-600 text-base  text-start dark:text-gray-400 transition-all duration-200 ease-in-out"
          >
            <slot name="description">{{ description }}</slot>
          </p>
          <NuxtLink
  v-show="isOpen === index && buttonLink && linkText"
  :to="localizedButtonLink"
  @click.stop
  class="bg-blue-500 text-white font-semibold px-3 py-1 rounded-lg hover:bg-blue-600 transition transform scale-95 hover:scale-100 duration-300 text-xs mt-2"
>
  <slot name="linkText">{{ linkText }}</slot>
</NuxtLink>
        </div>
      </div>
    </div>

    <!-- Card without link -->
    <div
      v-else
      class="transition transform hover:scale-105 p-1  rounded-lg dark:bg-gray-800 dark:text-white"
      :class="{
              'bg-red': isOpen !== index, 
              'bg-blue': isOpen === index
            }"

      @click="toggleCard(index)" 
    >
      <div class="flex flex-col items-center">
        <div class="flex flex-row-reverse w-full items-center justify-between">
          <i :class="`${iconClass} text-4xl mb-2 ${iconColorClass}`" />
          <h3 class="font-semibold text-lg mb-2">
            <slot name="title">{{ title }}</slot>
          </h3>
        </div>
        <!-- Sliding effect for description -->
        <p
          :class="{
            'max-h-0 overflow-hidden': isOpen !== index, 
            'max-h-[500px]': isOpen === index
          }"
          class="text-gray-600 text-xs text-start dark:text-gray-400 transition-all duration-500 ease-in-out"
        >
          <slot name="description">{{ description }}</slot>
        </p>
        <NuxtLink
          v-if="buttonLink && linkText"
          :to="localizedButtonLink"
          class="bg-blue-500 text-white font-semibold px-3 py-1 rounded-lg hover:bg-blue-600 transition duration-300 text-xs mt-2"
        >
          <slot name="linkText">{{ linkText }}</slot>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

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
  index: {
    type: Number,
    required: true,
  },
  isOpen: {
    type: Number,
    required: true, // Expect isOpen from the parent
  },
  toggleCard: {
    type: Function,
    required: true, // Expect toggleCard function from the parent
  }
});

const { t } = useI18n();
const LocalePath = useLocalePath();
const localizedCardLink = computed(() => {
  return LocalePath(props.cardLink);
});

const localizedButtonLink = computed(() => {
  return LocalePath(props.buttonLink);
});

const linkText = computed(() => t('global.readMore', 'Read more...'));
</script>
