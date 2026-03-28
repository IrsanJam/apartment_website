<template>
  <div v-if="config.promoBanner.enabled" class="promo-banner" id="promo-banner">
    <div class="container">
      <span class="promo-banner__badge">{{ config.promoBanner.badgeText }}</span>
      <span class="promo-banner__text">{{ config.promoBanner.text }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import siteConfig from '~/config/site.config'

const config = siteConfig
</script>

<style>
.promo-banner__text {
  position: relative;
  z-index: 1;
}
</style>
