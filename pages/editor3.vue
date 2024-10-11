<template>
  <client-only>
    <h1>Rich Text Editor Page</h1>
    <!-- Use the RichTextEditor component and bind modelValue to a data property -->
    <RichTextEditor  />
    <!-- Display the editor's HTML content for testing -->
  </client-only>
</template>

<script setup>
import RichTextEditor from '~/components/edd.vue'

definePageMeta({
layout: 'newlayout',
})

</script>

<style>
.output {
  margin-top: 2rem;
  padding: 1rem;
  border: 1px solid #ddd;
  background-color: #f9f9f9;
}
</style>
