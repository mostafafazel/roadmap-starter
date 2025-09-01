<script lang="ts" setup>
import { ref } from 'vue';
const { t } = useI18n();

definePageMeta({
  layout: 'centercard',
});

useHead({
  title: `${t('index.roadmap.title')} • Biosensors`,
});

// State to track which card is open
const isOpen = ref(0); // Default to the first card being open

// Function to toggle the open state of the cards
const toggleCard = (index: number) => {
  isOpen.value = isOpen.value === index ? -1 : index; // Toggle the card, only one is open at a time
};
</script>

<template>
  <div class="text-center">
    <h1 class="title text-4xl font-bold mb-8 dark:text-white">
      {{ t('index.roadmap.title') }}
    </h1>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-1 gap-2 lg:gap-4 max-w-[500px] mx-auto md:mt-18">
    <!-- Phase 1 -->
    <Cardd 
      :index="0"
      :isOpen="isOpen" 
      :toggleCard="toggleCard" 
      buttonLink="/roadmap/visuals/diagrams"
      iconClass="i-carbon-roadmap" 
      iconColorClass="text-blue-500" 
      :title="t('index.roadmap.phase1.title')" 
      :description="t('index.roadmap.phase1.description')"
    />

    <!-- Phase 2 -->
    <Cardd 
      :index="1"
      :isOpen="isOpen" 
      :toggleCard="toggleCard" 
      buttonLink="/roadmap/goals"
      iconClass="i-carbon-cics-sit-overrides" 
      iconColorClass="text-yellow-500" 
      :title="t('index.roadmap.phase2.title')" 
      :description="t('index.roadmap.phase2.description')"
    />

    <!-- Phase 3 -->
    <Cardd 
      :index="2"
      :isOpen="isOpen" 
      :toggleCard="toggleCard" 
      buttonLink="/roadmap/need"
      iconClass="i-carbon-development" 
      iconColorClass="text-green-500" 
      :title="t('index.roadmap.phase3.title')" 
      :description="t('index.roadmap.phase3.description')"
    />

    <!-- Phase 4 -->
    <Cardd 
      :index="3"
      :isOpen="isOpen" 
      :toggleCard="toggleCard" 
      buttonLink="/roadmap/feasibility"
      iconClass="i-carbon-test-tool" 
      iconColorClass="text-red-500" 
      :title="t('index.roadmap.phase4.title')" 
      :description="t('index.roadmap.phase4.description')"
    />
  </div>
</template>
