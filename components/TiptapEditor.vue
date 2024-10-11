<template>
  <div class="editor-container">
    <div class="menu-bar" v-if="editor">
      <button @click="toggleBold" :class="{ 'is-active': editor.isActive('bold') }">
        <i :class="`${iconClass('text-bold')} text-2xl`"></i>
      </button>
      <button @click="toggleItalic" :class="{ 'is-active': editor.isActive('italic') }">
        <i :class="`${iconClass('text-italic')} text-2xl`"></i>
      </button>
      <button @click="toggleUnderline" :class="{ 'is-active': editor.isActive('underline') }">
        <i :class="`${iconClass('text-underline')} text-2xl`"></i>
      </button>
      <button @click="toggleStrike" :class="{ 'is-active': editor.isActive('strike') }">
        <i :class="`${iconClass('text-strikethrough')} text-2xl`"></i>
      </button>
      <button @click="toggleCode" :class="{ 'is-active': editor.isActive('code') }">Code</button>
      <button @click="toggleHeading(1)" :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">
        <i :class="`${iconClass('heading')} text-2xl`"></i>
      </button>
      <button @click="toggleHeading(2)" :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }">H2</button>
      <button @click="toggleBulletList" :class="{ 'is-active': editor.isActive('bulletList') }">
        <i :class="`${iconClass('list-bullets')} text-2xl`"></i>
      </button>
      <button @click="toggleOrderedList" :class="{ 'is-active': editor.isActive('orderedList') }">Ordered List</button>
      <button @click="toggleAlign('left')" :class="{ 'is-active': editor.isActive({ textAlign: 'left' }) }">Left</button>
      <button @click="toggleAlign('center')" :class="{ 'is-active': editor.isActive({ textAlign: 'center' }) }">Center</button>
      <button @click="toggleAlign('right')" :class="{ 'is-active': editor.isActive({ textAlign: 'right' }) }">Right</button>
      <button @click="addImage">Image</button>
      <button @click="toggleLink">Link</button>
    </div>
    <editor-content v-if="editor" :editor="editor" class="tiptap" />
  </div>
</template>


<script>
import { Editor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Bold from '@tiptap/extension-bold'
import Italic from '@tiptap/extension-italic'
import Underline from '@tiptap/extension-underline'
import Strike from '@tiptap/extension-strike'
import Code from '@tiptap/extension-code'
import Heading from '@tiptap/extension-heading'
import Link from '@tiptap/extension-link'
import BulletList from '@tiptap/extension-bullet-list'
import OrderedList from '@tiptap/extension-ordered-list'
import ListItem from '@tiptap/extension-list-item'
import TextAlign from '@tiptap/extension-text-align'
import Image from '@tiptap/extension-image'


export default {
  components: {
    EditorContent,
  },
  props: {
    modelValue: {
      type: String,
      default: '',
    },
  },
  emits: ['update:modelValue'],
  data() {
    return {
      editor: null,
    }
  },
  mounted() {
    this.editor = new Editor({
      extensions: [
        StarterKit,
        Bold,
        Italic,
        Underline,
        Strike,
        Heading.configure({ levels: [1, 2] }),
        BulletList,
        ListItem,
        TextAlign.configure({ types: ['heading', 'paragraph'] }),
      ],
      content: this.modelValue,
      onUpdate: ({ editor }) => {
        this.$emit('update:modelValue', editor.getHTML())
      },
    })
  },
  beforeUnmount() {
    if (this.editor) {
      this.editor.destroy()
    }
  },
  methods: {
  toggleBold() {
    this.editor.chain().focus().toggleBold().run()
  },
  toggleItalic() {
    this.editor.chain().focus().toggleItalic().run()
  },
  toggleUnderline() {
    this.editor.chain().focus().toggleUnderline().run()
  },
  toggleStrike() {
    this.editor.chain().focus().toggleStrike().run()
  },
  toggleCode() {
    this.editor.chain().focus().toggleCode().run()
  },
  toggleHeading(level) {
    this.editor.chain().focus().toggleHeading({ level }).run()
  },
  toggleBulletList() {
    this.editor.chain().focus().toggleBulletList().run()
  },
  toggleOrderedList() {
    this.editor.chain().focus().toggleOrderedList().run()
  },
  toggleAlign(alignment) {
    this.editor.chain().focus().setTextAlign(alignment).run()
  },
  addImage() {
    const url = window.prompt('Enter image URL')
    if (url) {
      this.editor.chain().focus().setImage({ src: url }).run()
    }
  },
  toggleLink() {
    const previousUrl = this.editor.getAttributes('link').href
    const url = window.prompt('URL', previousUrl)
    if (url === null) {
      return
    }
    if (url === '') {
      this.editor.chain().focus().unsetLink().run()
      return
    }
    this.editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
  },
  iconClass(iconName) {
    const iconMap = {
      'text-bold': 'i-carbon-text-bold',
      'text-italic': 'i-carbon-text-italic',
      'text-underline': 'i-carbon-text-underline',
      'text-strikethrough': 'i-carbon-text-strikethrough',
      'heading': 'i-tabler-heading',
      'list-bullets': 'i-carbon-list-bulleted',
    }
    return iconMap[iconName] || ''
  },
}
}
</script>

<style>
.editor-container {
  position: relative;
}

.menu-bar {
  margin-bottom: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  background-color: #f9fafb;
  padding: 0.5rem;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

button {
  padding: 0.5rem;
  border: none;
  background-color: #f3f4f6;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  color: #111827;
  display: flex;
  align-items: center;
  justify-content: center;
}

button:hover {
  background-color: #e5e7eb;
  transform: translateY(-2px);
}

button:active {
  background-color: #d1d5db;
  transform: translateY(0);
}

.is-active {
  background-color: #d1d5db;
  box-shadow: inset 0 0 0 2px #4b5563;
}

.tiptap {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 5px;
  min-height: 300px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: 'Inter', sans-serif;
  line-height: 1.5;
  color: #111827;
  position: relative;
}

.tiptap:hover::before {
  content: '';
  position: absolute;
  top: 0;
  left: -10px;
  height: 100%;
  width: 5px;
  background-color: #3b82f6;
}

.tiptap h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: #1f2937;
  font-weight: bold;
}

.tiptap h2 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #1f2937;
  font-weight: bold;
}

.tiptap p {
  margin-bottom: 1rem;
}

.tiptap a {
  color: #3b82f6;
  text-decoration: underline;
}

.tiptap ul {
  list-style-type: disc;
  margin-left: 1.5rem;
  margin-bottom: 1rem;
}

.tiptap ol {
  list-style-type: decimal;
  margin-left: 1.5rem;
  margin-bottom: 1rem;
}

.tiptap li {
  margin-bottom: 0.5rem;
}

.tiptap img {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 1rem;
}

.tiptap blockquote {
  border-left: 4px solid #d1d5db;
  padding-left: 1rem;
  margin-bottom: 1rem;
  color: #6b7280;
  font-style: italic;
}

.tiptap code {
  background-color: #f3f4f6;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  font-family: 'Courier New', monospace;
  color: #9ca3af;
}

.tiptap pre {
  background-color: #f3f4f6;
  padding: 1rem;
  border-radius: 5px;
  overflow-x: auto;
  margin-bottom: 1rem;
  font-family: 'Courier New', monospace;
  color: #374151;
}
</style>







