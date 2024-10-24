<script setup lang="ts">
// import { useRoute } from 'vue-router';
import VueJsonPretty from 'vue-json-pretty';
import 'vue-json-pretty/lib/styles.css';

import { useIsHomePage } from '@/utils/helpers';
const isHomePage = useIsHomePage();
const { t } = useI18n()

// Hook into the locale functionality
const locale = useLocale()

// Get the current route
const route = useRoute()

const isClicked = ref(false)

function toggle() {
  isClicked.value = !isClicked.value
}

const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})


</script>

<template>
  

<ClientOnly>
<div class="min-h-screen flex flex-col bg-background dark:bg-dark-background">
    <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
      <Head>
        <!-- <Title>{{ title }}</Title> -->
        <template v-for="link in head.link" :key="link.id">
          <Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
        </template>
        <template v-for="meta in head.meta" :key="meta.id">
          <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
        </template>
      </Head>
      <Body>
        <NHeader />
        <div class="flex-grow mt-12 mb-12">
          <slot />
        </div>
        <!-- Optional Footer -->
        <!-- <NFooter /> -->
        <!-- Back button to navigate home, render only if not on the main page -->
        <arrow v-if="!isHomePage" />      </Body>
    </Html>
  </div>
  </ClientOnly>


 

</template>






<!-- 
<button @click="toggle" class="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 z-50">
  {{ isClicked ? 'Hide Debug' : 'Show Debug'  }}
</button>
<div v-if="isClicked" class="mt-18 fixed inset-0 bg-white bg-opacity-95 overflow-auto z-40 p-6">
  <div class="max-w-4xl mx-auto space-y-6">
    <h2 class="text-2xl font-bold text-gray-800 mb-4">Debug Information</h2>
    
    <CollapsiblePane title="Head Data">
      <vue-json-pretty :data="head" />
    </CollapsiblePane>

    <CollapsiblePane title="Locale Data">
      <vue-json-pretty :data="locale" />
    </CollapsiblePane>

    <CollapsiblePane title="Route Data">
      <vue-json-pretty :data="route" />
    </CollapsiblePane>
  </div>
</div> -->
