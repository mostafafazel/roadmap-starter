<!-- components/InlineIcon.vue -->
<script setup>
defineProps({
  classs: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <!-- Use span to ensure inline behavior and apply class dynamically -->
  <span :class="classs" style="display:block; transform: translatey(-79px) ;left:10px; width: 6vw;  height:6vh; position: absolute;"/>
</template>

<style scoped>
.icon {
}
</style>
