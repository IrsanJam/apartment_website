<template>
  <div
    v-if="config.promoBanner.enabled"
    class="promo-banner"
    :class="{ 'promo-banner--visible': isVisible }"
    id="promo-banner"
  >
    <div class="container">
      <span class="promo-banner__badge">{{ config.promoBanner.badgeText }}</span>
      <span class="promo-banner__text">{{ config.promoBanner.text }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import siteConfig from '~/config/site.config'

const config = siteConfig
const isVisible = ref(false)

onMounted(() => {
  // Add a slight delay to allow layout to settle before fading in
  setTimeout(() => {
    isVisible.value = true
  }, 50)
})
</script>

<style>
.promo-banner {
  opacity: 0;
  transform: translateY(-10px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.promo-banner--visible {
  opacity: 1;
  transform: translateY(0);
}

.promo-banner__text {
  position: relative;
  z-index: 1;
}
</style>
