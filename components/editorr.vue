<template>
    <div :dir="textDirection" class="min-h-screen flex flex-col bg-background dark:bg-dark-background">
      <!-- Toolbar for setting up draggable actions -->
      <div class="toolbar">
        <button @click="sortItems" class="btn btn-secondary">Reset Order</button>
      </div>
  
      <!-- Draggable component with transition support -->
      <draggable
        v-model="items"
        :component-data="{ name: !drag ? 'flip-list' : null }"
        v-bind="dragOptions"
        @start="drag = true"
        @end="drag = false"
        item-key="order"
        class="draggable-list"
      >
        <!-- Draggable item template -->
        <template #item="{ element }">
          <div class="draggable-item">
            <span class="handle">Move</span>
            <span>{{ element.name }}</span>
            <button @click="togglePin(element)" class="pin-toggle">
              <i :class="element.fixed ? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'"></i>
            </button>
          </div>
        </template>
      </draggable>
  
      <!-- Display raw list for debugging or state monitoring -->
      <rawDisplayer class="col-3" :value="items" title="Item List" />
    </div>
  </template>
  
  <script>
  import { computed, ref } from 'vue';
  import { useHead } from '@vueuse/head'; // Make sure you have @vueuse/head installed for Nuxt projects
  import draggable from 'vuedraggable';
  
  export default {
    components: {
      draggable,
    },
    setup() {
      // Determine if the layout should be RTL based on user settings or locale
      const isRtl = computed(() => /* logic to set RTL, such as user setting or locale */ false);
  
      // Dynamically set the `dir` attribute in <html> via Nuxt's `useHead`
      useHead({
        htmlAttrs: {
          dir: isRtl.value ? 'rtl' : 'ltr',
        },
      });
  
      // Define the text direction for in-component usage
      const textDirection = computed(() => (isRtl.value ? 'rtl' : 'ltr'));
  
      // Initialize the items list with default order
      const items = ref([
        { name: 'Vue.js', order: 1, fixed: false },
        { name: 'Nuxt.js', order: 2, fixed: false },
        { name: 'Vuedraggable', order: 3, fixed: false },
        { name: 'VueUse', order: 4, fixed: false },
      ]);
  
      // Drag state
      const drag = ref(false);
  
      // Drag options
      const dragOptions = computed(() => ({
        animation: 200,
        group: 'items',
        ghostClass: 'ghost',
      }));
  
      // Method to reset the list to its original order
      function sortItems() {
        items.value = items.value.slice().sort((a, b) => a.order - b.order);
      }
  
      // Method to toggle the pinned state of an item
      function togglePin(item) {
        item.fixed = !item.fixed;
      }
  
      return {
        textDirection,
        items,
        drag,
        dragOptions,
        sortItems,
        togglePin,
      };
    },
  };
  </script>
  
  <style>
  /* Basic layout styles */
  .toolbar {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  
  .draggable-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  /* Draggable item styles */
  .draggable-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    background-color: #f7f7f7;
    border: 1px solid #ddd;
    cursor: move;
  }
  
  .handle {
    cursor: grab;
    margin-right: 1rem;
  }
  
  .pin-toggle {
    background: none;
    border: none;
    cursor: pointer;
  }
  
  .ghost {
    opacity: 0.5;
    background-color: #e0e0e0;
  }
  
  /* Transition classes */
  .flip-list-move {
    transition: transform 0.5s;
  }
  </style>
  