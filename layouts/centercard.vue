<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';

// Modal and header references for outside click detection
const modalContent = ref(null);
const headerRef = ref(null);

// Locale handling
const { locale } = useCustomI18n();
const router = useRouter();

// Function to get the correct navigation URL based on locale
function getTargetUrl() {
  return locale.value === 'fa' ? '/' : `/${locale.value}`;
}

// Function to handle navigation with a delay to allow animation
function navigateHomeWithDelay() {
  setTimeout(() => {
    router.push(getTargetUrl()); // Use router to navigate after the animation
  }, 100); // Delay to allow other animations (e.g., modal close) to finish
}

// Handle clicks outside modal, except when clicking on the header
onClickOutside(modalContent, (event) => {
  const headerElement = headerRef.value?.$el || headerRef.value;

  // Check if click is inside the header DOM element, prevent navigation if true
  if (headerElement && headerElement.contains(event.target)) {
    return;
  }

  navigateHomeWithDelay();
});

// Handle Escape key press to close the modal
function handleEscapeKey(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    navigateHomeWithDelay();
  }
}

// Add event listener for Escape key on mount and remove it on unmount
onMounted(() => {
  window.addEventListener('keydown', handleEscapeKey);
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleEscapeKey);
});
</script>

<template>
  <div :dir="locale === 'fa' ? 'rtl' : 'ltr'" class="min-h-screen flex flex-col">
    <!-- Header with reference -->
    <NHeader ref="headerRef" />

    <!-- Modal content -->
    <div class="flex-grow flex items-center justify-center p-4 w-screen">
      <div ref="modalContent" class="bg-white dark:bg-gray-800 rounded-lg  p-6 w-full max-w-full mx-8">
        <slot />
      </div>
    </div>
    <arrow></arrow>
  </div>
</template>
