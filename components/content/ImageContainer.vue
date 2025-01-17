<template>
    <figure :class="['image-container', floatClass, { 'rtl': isRTL }]">
      <div class="image-wrapper">
        <NuxtLink v-if="link" :to="localizedLink" class="block">
          <img :src="imageSrc" :alt="alt" :style="{ width, height }" class="image" />
        </NuxtLink>
        <img v-else :src="imageSrc" :alt="alt" :style="{ width, height }" class="image" />
      </div>
      <figcaption v-if="caption" class="caption">{{ caption }}</figcaption>
    </figure>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue'
  import { useI18n } from 'vue-i18n'
  
  const props = defineProps<{
    src: string
    alt?: string
    width?: string
    height?: string
    link?: string
    float?: 'left' | 'right' // جهت شناوری
    caption?: string
  }>()
  
  const { locale, localeProperties } = useI18n()
  
  const imageSrc = computed(() => {
    return props.src.startsWith('/') ? props.src : `/assets/${props.src}`
  })
  
  const localizedLink = computed(() => {
    return props.link ? (locale.value === 'fa' ? props.link : `/${locale.value}${props.link}`) : ''
  })
  
  const isRTL = computed(() => localeProperties.value.dir === 'rtl')
  
  const floatClass = computed(() => {
    if (props.float === 'left') return 'float-left'
    if (props.float === 'right') return 'float-right'
    return ''
  })
  </script>
  
  <style scoped>
  .image-container {
    display: inline-block; /* اجازه می‌دهد متن دور تصویر بچرخد */
    margin: 0rem; /* کاهش حاشیه برای فضای کمتر */
    margin-inline: 1rem;
  }
  
  .float-left {
    float: left;
  }
  
  .float-right {
    float: right;
  }
  
  .image-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.25rem; /* کاهش پدینگ برای فضای کمتر */
  }
  
  .image {
    border-radius: 0.3rem; /* کاهش شعاع حاشیه برای ظاهری ساده‌تر */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* کاهش سایه برای ظاهری مینیمالیست */
    transition: box-shadow 0.2s ease, transform 0.2s ease;
  }
  
  .image:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    transform: scale(1.02);
  }
  
  .caption {
    text-align: center;
    font-size: 0.85rem;
    color: #666;
    margin-top: 0.3rem; /* کاهش فاصله بالا برای فضای کمتر */
  }
  
  /* Clearfix برای محصور کردن عناصر شناور */
  .image-container::after {
    content: "";
    display: table;
    clear: both;
  }
  
  /* تصاویر واکنش‌گرا */
  @media (max-width: 768px) {
    .image {
      width: 100% !important;
      height: auto !important;
    }
  
    .image-container {
      float: none !important;
      margin: 0rem 1rem !important;
    }
  }
  </style>
  