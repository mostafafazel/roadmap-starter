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
  <span :class="classs" style="display: block;transform: translateY(-20px);right: 30px;width: 20%;opacity: 20%;height: 20%;position: absolute;"/>
</template>

<style scoped>
.icon {
  
}
</style>
