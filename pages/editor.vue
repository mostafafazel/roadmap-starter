<template>

  <client-only>
    <Editor v-model="content" />

  <div class="output-group">
    <label>Content</label>
    <code>{{ content }}</code>
  </div>
</client-only>
</template>

<script setup>
import Editor from '@/components/TiptapEditor.vue'


definePageMeta({
layout: 'newlayout',
})

const content = ref('<p>A Vue.js wrapper component for Tiptap to use <code>v-model</code>.</p>')
</script>



