<template>
  <div class="app-layout">
    <PromoBanner />
    <Navbar />
    <main class="app-layout__main">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import siteConfig from '~/config/site.config'

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} — ${siteConfig.siteName}` : siteConfig.siteName
  },
})

useSeoMeta({
  ogSiteName: siteConfig.siteName,
  ogType: 'website',
  twitterCard: 'summary_large_image',
})
</script>

<style>
.app-layout__main {
  min-height: calc(100vh - var(--navbar-height));
}
</style>
