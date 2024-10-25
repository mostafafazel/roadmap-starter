<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue';
const { t } = useI18n()

definePageMeta({
  layout: 'centercard',
})

useHead({
  title: `${t('index.Data.title')} • Nightrunner`,
})

// Retrieve the value from localStorage if it exists, otherwise default to the first card
const isOpen = ref(parseInt(localStorage.getItem('isOpen') || '0'));

// Watch for changes in isOpen and store the new value in localStorage
watch(isOpen, (newValue) => {
  localStorage.setItem('isOpen', newValue.toString());
});

// Function to toggle the open state of the cards
const toggleCard = (index: number) => {
  isOpen.value = isOpen.value === index ? -1 : index; // Toggle the card, only one is open at a time
};

</script>

<template>
  <Headerr :title="t('index.Data.title')" :description="t('index.Data.description')" />

  <div class="grid grid-cols-1 sm:grid-cols-1 gap-2 lg:gap-4 max-w-[500px] mx-auto md:mt-18">
    
    <!-- First Card -->
    <Cardd
      :index="0"
      :isOpen="isOpen" 
      :toggleCard="toggleCard" 
      buttonLink="/data/whatis"
      iconClass="i-carbon-information" 
      iconColorClass="text-blue-500" 
      :title="t('index.Data.whatIsBiosensor.title')" 
      :description="t('index.Data.whatIsBiosensor.description')"
    />

    <!-- Second Card -->
    <Cardd
      :index="1"
      :isOpen="isOpen" 
      :toggleCard="toggleCard" 
      buttonLink="/data/history"
      iconClass="i-carbon-timer" 
      iconColorClass="text-yellow-500" 
      :title="t('index.Data.historyAndEvolution.title')" 
      :description="t('index.Data.historyAndEvolution.description')"
    />

    <!-- Third Card -->
    <Cardd
      :index="2"
      :isOpen="isOpen" 
      :toggleCard="toggleCard" 
      buttonLink="/data/types"
      iconClass="i-carbon-tree-view-alt" 
      iconColorClass="text-green-500" 
      :title="t('index.Data.typesOfBiosensors.title')" 
      :description="t('index.Data.typesOfBiosensors.description')"
    />

    <!-- Fourth Card -->
    <Cardd
      :index="3"
      :isOpen="isOpen" 
      :toggleCard="toggleCard" 
      buttonLink="/data/applications"
      iconClass="i-carbon-collaborate" 
      iconColorClass="text-red-500" 
      :title="t('index.Data.applications.title')" 
      :description="t('index.Data.applications.description')"
    />
    
  </div>
</template>
