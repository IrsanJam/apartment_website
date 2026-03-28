<template>
  <NuxtLink :to="`/apartments/${apartment.slug}`" class="card apartment-card" :id="`apartment-card-${apartment.id}`">
    <!-- Image -->
    <div class="apartment-card__image-wrapper">
      <img
        :src="apartment.images[0]?.url"
        :alt="apartment.images[0]?.alt || apartment.name"
        class="apartment-card__image"
        loading="lazy"
      />
      <div v-if="apartment.promotionEnabled" class="apartment-card__promo-badge">
        {{ apartment.promotionLabel }}
      </div>
      <div class="apartment-card__specs-overlay">
        <span class="apartment-card__spec" v-if="apartment.bedrooms > 0">
          🛏️ {{ apartment.bedrooms }} {{ apartment.bedrooms === 1 ? 'Bed' : 'Beds' }}
        </span>
        <span class="apartment-card__spec" v-else>🏠 Studio</span>
        <span class="apartment-card__spec">🚿 {{ apartment.bathrooms }} Bath</span>
        <span class="apartment-card__spec">📐 {{ apartment.area }}m²</span>
      </div>
    </div>

    <!-- Content -->
    <div class="apartment-card__content">
      <h3 class="apartment-card__name">{{ apartment.name }}</h3>
      <p class="apartment-card__tagline">{{ apartment.tagline }}</p>

      <PriceDisplay
        :original-price="apartment.originalPrice"
        :discounted-price="apartment.discountedPrice"
        :promotion-enabled="apartment.promotionEnabled"
        :promotion-label="apartment.promotionLabel"
      />

      <div class="apartment-card__cta">
        <span class="apartment-card__cta-text">View Details</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Apartment } from '~/config/site.config'

defineProps<{
  apartment: Apartment
}>()
</script>

<style>
.apartment-card {
  display: flex;
  flex-direction: column;
  background: var(--color-white);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-base);
  cursor: pointer;
  text-decoration: none;
  color: inherit;
}

.apartment-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-2xl);
}

.apartment-card__image-wrapper {
  position: relative;
  overflow: hidden;
  aspect-ratio: 4/3;
}

.apartment-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.apartment-card:hover .apartment-card__image {
  transform: scale(1.08);
}

.apartment-card__promo-badge {
  position: absolute;
  top: var(--space-4);
  left: var(--space-4);
  padding: var(--space-1) var(--space-3);
  background: linear-gradient(135deg, var(--color-danger), #dc2626);
  color: var(--color-white);
  font-size: var(--font-size-xs);
  font-weight: 700;
  border-radius: var(--radius-full);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  box-shadow: 0 2px 8px rgba(239, 68, 68, 0.4);
}

.apartment-card__specs-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: var(--space-4);
  padding: var(--space-3) var(--space-4);
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
}

.apartment-card__spec {
  color: var(--color-white);
  font-size: var(--font-size-xs);
  font-weight: 500;
  white-space: nowrap;
}

.apartment-card__content {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-5) var(--space-5) var(--space-4);
  flex: 1;
}

.apartment-card__name {
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--color-primary);
  letter-spacing: -0.01em;
}

.apartment-card__tagline {
  font-size: var(--font-size-sm);
  color: var(--color-gray-500);
  margin-bottom: var(--space-2);
}

.apartment-card__cta {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  margin-top: auto;
  padding-top: var(--space-4);
  border-top: 1px solid var(--color-gray-100);
  color: var(--color-secondary-dark);
  font-weight: 600;
  font-size: var(--font-size-sm);
  transition: gap var(--transition-base);
}

.apartment-card:hover .apartment-card__cta {
  gap: var(--space-3);
}

.apartment-card:hover .apartment-card__cta svg {
  transform: translateX(2px);
  transition: transform var(--transition-base);
}
</style>
