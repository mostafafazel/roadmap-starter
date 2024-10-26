<script setup lang="ts">
// import { onClickOutside } from '@vueuse/core';
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
  // return  `/${locale.value}`;

}

// Function to handle navigation with a delay to allow animation
function navigateHomeWithDelay() {
  setTimeout(() => {
    router.push(getTargetUrl()); // Use router to navigate after the animation
  }, 100); // Delay to allow other animations (e.g., modal close) to finish
}

// Handle clicks outside modal, except when clicking on the header
// onClickOutside(modalContent, (event) => {
//   const headerElement = headerRef.value?.$el || headerRef.value;

//   // Check if click is inside the header DOM element, prevent navigation if true
//   if (headerElement && headerElement.contains(event.target)) {
//     return;
//   }

//   navigateHomeWithDelay();
// });

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


const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})

</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
      <Head>
        <template v-for="link in head.link" :key="link.id">
          <Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
        </template>
        <template v-for="meta in head.meta" :key="meta.id">
          <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
        </template>
      </Head>
      
      <Body class="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
        <NHeader ref="headerRef"/>
        <div class="flex-grow flex items-start pt-[75px] justify-center w-full">
          <div ref="modalContent" class="modal bg-gray-100 dark:bg-gray-900 rounded-lg p-6 mx-auto">
            <slot />
          </div>
        </div>
        <arrow />
      </Body>
    </Html>
  </div>
</template>

<style scoped>
.modal {
  width: 120vh;
  /* max-width: 90%; */
  margin-top: 0px;
  height: 120%;
  /* max-height: 80vh; */
  overflow-y: auto;
}
</style>
