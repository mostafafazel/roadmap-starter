<template>
    <div class="my-component">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <img v-if="image" :src="image" alt="My Component Image" class="responsive-image" />
      <button v-if="buttonLabel" @click="handleClick">{{ buttonLabel }}</button>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      default: ''
    },
    buttonLabel: {
      type: String,
      default: ''
    }
  });
  
  // Handle button click
  const handleClick = () => {
    alert('Button clicked!');
  };
  </script>
  
  <style scoped>
  .my-component {
    border: 1px solid #ccc;
    padding: 15px;
    margin: 10px 0;
    border-radius: 5px;
    background-color: #f9f9f9;
  }
  
  .responsive-image {
    max-width: 100%;
    height: auto;
  }
  </style>
  