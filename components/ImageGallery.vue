<template>
  <div class="image-gallery" id="image-gallery">
    <!-- Main Image -->
    <div class="image-gallery__main">
      <img
        :src="images[activeIndex]?.url"
        :alt="images[activeIndex]?.alt"
        class="image-gallery__main-image"
        @click="openLightbox(activeIndex)"
      />
      <div class="image-gallery__zoom-hint">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35M11 8v6M8 11h6"/></svg>
        Click to enlarge
      </div>

      <!-- Carousel Arrows -->
      <button v-if="images.length > 1" class="image-gallery__arrow image-gallery__arrow--prev" @click="prevSlide" aria-label="Previous image">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
      </button>
      <button v-if="images.length > 1" class="image-gallery__arrow image-gallery__arrow--next" @click="nextSlide" aria-label="Next image">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
      </button>

      <!-- Dots Indicator -->
      <div v-if="images.length > 1" class="image-gallery__dots">
        <button
          v-for="(_, index) in images"
          :key="index"
          class="image-gallery__dot"
          :class="{ 'image-gallery__dot--active': index === activeIndex }"
          @click="activeIndex = index"
          :aria-label="`Go to image ${index + 1}`"
        />
      </div>
    </div>

    <!-- Thumbnails -->
    <div class="image-gallery__thumbs">
      <button
        v-for="(image, index) in images"
        :key="index"
        class="image-gallery__thumb"
        :class="{ 'image-gallery__thumb--active': index === activeIndex }"
        @click="activeIndex = index"
        :aria-label="`View image ${index + 1}`"
      >
        <img :src="image.url" :alt="image.alt" loading="lazy" />
      </button>
    </div>

    <!-- Lightbox -->
    <Teleport to="body">
      <Transition name="fade">
        <div v-if="lightboxOpen" class="lightbox" @click.self="closeLightbox" id="lightbox">
          <button class="lightbox__close" @click="closeLightbox" aria-label="Close lightbox">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>

          <button class="lightbox__nav lightbox__nav--prev" @click="prevImage" aria-label="Previous image">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>

          <img
            :src="images[lightboxIndex]?.url"
            :alt="images[lightboxIndex]?.alt"
            class="lightbox__image"
          />

          <button class="lightbox__nav lightbox__nav--next" @click="nextImage" aria-label="Next image">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>

          <div class="lightbox__counter">
            {{ lightboxIndex + 1 }} / {{ images.length }}
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import type { ApartmentImage } from '~/config/site.config'

const props = defineProps<{
  images: ApartmentImage[]
}>()

const activeIndex = ref(0)
const lightboxOpen = ref(false)
const lightboxIndex = ref(0)

const openLightbox = (index: number) => {
  lightboxIndex.value = index
  lightboxOpen.value = true
  if (import.meta.client) {
    document.body.style.overflow = 'hidden'
  }
}

const closeLightbox = () => {
  lightboxOpen.value = false
  if (import.meta.client) {
    document.body.style.overflow = ''
  }
}

const prevImage = () => {
  lightboxIndex.value = (lightboxIndex.value - 1 + props.images.length) % props.images.length
}

const nextImage = () => {
  lightboxIndex.value = (lightboxIndex.value + 1) % props.images.length
}

const prevSlide = () => {
  activeIndex.value = (activeIndex.value - 1 + props.images.length) % props.images.length
}

const nextSlide = () => {
  activeIndex.value = (activeIndex.value + 1) % props.images.length
}

const handleKeydown = (e: KeyboardEvent) => {
  if (!lightboxOpen.value) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowLeft') prevImage()
  if (e.key === 'ArrowRight') nextImage()
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<style>
.image-gallery__main {
  position: relative;
  border-radius: var(--radius-xl);
  overflow: hidden;
  cursor: pointer;
  aspect-ratio: 16/10;
}

.image-gallery__main-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.image-gallery__main:hover .image-gallery__main-image {
  transform: scale(1.03);
}

.image-gallery__zoom-hint {
  position: absolute;
  bottom: var(--space-4);
  right: var(--space-4);
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-3);
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  color: var(--color-white);
  font-size: var(--font-size-xs);
  border-radius: var(--radius-md);
  opacity: 0;
  transition: opacity var(--transition-base);
}

.image-gallery__main:hover .image-gallery__zoom-hint {
  opacity: 1;
}

.image-gallery__thumbs {
  display: flex;
  gap: var(--space-3);
  margin-top: var(--space-3);
  overflow-x: auto;
  padding-bottom: var(--space-2);
}

.image-gallery__thumb {
  flex-shrink: 0;
  width: 80px;
  height: 60px;
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all var(--transition-fast);
  padding: 0;
  background: none;
}

.image-gallery__thumb--active {
  border-color: var(--color-secondary);
  box-shadow: var(--shadow-gold);
}

.image-gallery__thumb:hover {
  border-color: var(--color-gray-300);
}

.image-gallery__thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Carousel Arrows */
.image-gallery__arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(8px);
  color: var(--color-white);
  border: none;
  border-radius: var(--radius-full);
  cursor: pointer;
  z-index: 5;
  opacity: 0;
  transition: all var(--transition-base);
  padding: 0;
}

.image-gallery__main:hover .image-gallery__arrow {
  opacity: 1;
}

.image-gallery__arrow:hover {
  background: rgba(0, 0, 0, 0.7);
  transform: translateY(-50%) scale(1.08);
}

.image-gallery__arrow--prev {
  left: var(--space-3);
}

.image-gallery__arrow--next {
  right: var(--space-3);
}

/* Dots Indicator */
.image-gallery__dots {
  position: absolute;
  bottom: var(--space-4);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
  z-index: 5;
}

.image-gallery__dot {
  width: 8px;
  height: 8px;
  border-radius: var(--radius-full);
  background: rgba(255, 255, 255, 0.45);
  border: none;
  padding: 0;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.image-gallery__dot--active {
  background: var(--color-white);
  width: 20px;
  box-shadow: 0 0 6px rgba(255, 255, 255, 0.5);
}

.image-gallery__dot:hover {
  background: rgba(255, 255, 255, 0.8);
}

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.92);
  backdrop-filter: blur(10px);
}

.lightbox__close {
  position: absolute;
  top: var(--space-6);
  right: var(--space-6);
  color: var(--color-white);
  padding: var(--space-2);
  border-radius: var(--radius-full);
  background: rgba(255, 255, 255, 0.1);
  transition: background var(--transition-fast);
  z-index: 10;
}

.lightbox__close:hover {
  background: rgba(255, 255, 255, 0.2);
}

.lightbox__image {
  max-width: 90vw;
  max-height: 85vh;
  object-fit: contain;
  border-radius: var(--radius-lg);
}

.lightbox__nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-white);
  padding: var(--space-3);
  border-radius: var(--radius-full);
  background: rgba(255, 255, 255, 0.1);
  transition: background var(--transition-fast);
  z-index: 10;
}

.lightbox__nav:hover {
  background: rgba(255, 255, 255, 0.2);
}

.lightbox__nav--prev {
  left: var(--space-6);
}

.lightbox__nav--next {
  right: var(--space-6);
}

.lightbox__counter {
  position: absolute;
  bottom: var(--space-6);
  left: 50%;
  transform: translateX(-50%);
  color: var(--color-gray-400);
  font-size: var(--font-size-sm);
  font-weight: 500;
}

/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity var(--transition-base);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
