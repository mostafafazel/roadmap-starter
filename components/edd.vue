<template>
    <div class="editor-container">
      <client-only>
        <!-- {{ editorContent }} -->
        <p>Content Path: {{ fullPath }}</p>
        <Editor v-model="editorContent" />
        <div class="output-group">
          <label>Content Output</label>
          <code>{{ editorContent }}</code>
        </div>
      </client-only>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import Editor from '@/components/TiptapEditor.vue'
  
  // Initializing state and dependencies
  const route = useRoute()
//   const { locale } = useI18n()
  const locale = ref('en')
  const editorContent = ref('')
  const sourcePath = route.query.from || '/'
  const fullPath = ref(`/${locale.value || 'en'}${sourcePath}`)
  
  // Ensure locale defaults to 'en'
  
  
  // Fetch page content and set metadata
  const { data: page } = await useAsyncData('page-content', () => queryContent(fullPath.value).findOne())
  if (page.value) {
    useContentHead(page.value)
    editorContent.value = page.value.body ? convertJsonToHtml(page.value.body) : '<p>No content found.</p>'
  }
  
  // Convert JSON content to HTML
  function convertJsonToHtml(contentJson) {
    if (!contentJson) return ''
    if (contentJson.type === 'text') return contentJson.value || ''
    if (contentJson.type === 'element') {
      const attrs = Object.entries(contentJson.props || {}).map(([k, v]) => ` ${k}="${v}"`).join('')
      const childrenHtml = (contentJson.children || []).map(convertJsonToHtml).join('')
      return `<${contentJson.tag}${attrs}>${childrenHtml}</${contentJson.tag}>`
    }
    return (contentJson.children || []).map(convertJsonToHtml).join('')
  }
  
  // Watch for route or locale changes to refresh content
  watch([route, locale], async () => {
    fullPath.value = `/${locale.value}${sourcePath}`
    const { data: updatedPage } = await useAsyncData('page-content', () => queryContent(fullPath.value).findOne())
    editorContent.value = updatedPage.value ? convertJsonToHtml(updatedPage.value.body) : '<p>No content found.</p>'
  })
  </script>
  
  <style scoped>
  .editor-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 1rem;
  }
  .output-group {
    margin-top: 1rem;
    background-color: #f3f4f6;
    padding: 1rem;
    border-radius: 8px;
    font-family: monospace;
  }
  </style>
  