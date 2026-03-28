<template>
  <div class="apartment-detail" v-if="apartment">
    <!-- Breadcrumb -->
    <div class="apartment-detail__breadcrumb-wrapper">
      <div class="container">
        <nav class="breadcrumb" id="detail-breadcrumb">
          <NuxtLink to="/" class="breadcrumb__link">Home</NuxtLink>
          <span class="breadcrumb__separator">/</span>
          <a href="/#apartments" class="breadcrumb__link">Apartments</a>
          <span class="breadcrumb__separator">/</span>
          <span class="breadcrumb__current">{{ apartment.name }}</span>
        </nav>
      </div>
    </div>

    <!-- Main Content -->
    <div class="container apartment-detail__container">
      <div class="apartment-detail__grid">
        <!-- Left: Gallery -->
        <div class="apartment-detail__gallery">
          <ImageGallery :images="apartment.images" />
        </div>

        <!-- Right: Info -->
        <div class="apartment-detail__info">
          <!-- Promo Badge -->
          <div v-if="apartment.promotionEnabled" class="apartment-detail__promo">
            <span class="price-block__badge">{{ apartment.promotionLabel }}</span>
          </div>

          <h1 class="apartment-detail__name" id="detail-name">{{ apartment.name }}</h1>
          <p class="apartment-detail__tagline">{{ apartment.tagline }}</p>

          <!-- Specs -->
          <div class="apartment-detail__specs" id="detail-specs">
            <div class="apartment-detail__spec">
              <span class="apartment-detail__spec-icon">🛏️</span>
              <span class="apartment-detail__spec-value">
                {{ apartment.bedrooms === 0 ? 'Studio' : apartment.bedrooms + (apartment.bedrooms === 1 ? ' Bedroom' : ' Bedrooms') }}
              </span>
            </div>
            <div class="apartment-detail__spec">
              <span class="apartment-detail__spec-icon">🚿</span>
              <span class="apartment-detail__spec-value">{{ apartment.bathrooms }} {{ apartment.bathrooms === 1 ? 'Bathroom' : 'Bathrooms' }}</span>
            </div>
            <div class="apartment-detail__spec">
              <span class="apartment-detail__spec-icon">📐</span>
              <span class="apartment-detail__spec-value">{{ apartment.area }} m²</span>
            </div>
            <div class="apartment-detail__spec">
              <span class="apartment-detail__spec-icon">🏢</span>
              <span class="apartment-detail__spec-value">Floor {{ apartment.floor }}</span>
            </div>
          </div>

          <!-- Price -->
          <div class="apartment-detail__price-section" id="detail-price">
            <h3 class="apartment-detail__price-label">Price</h3>
            <PriceDisplay
              :original-price="apartment.originalPrice"
              :discounted-price="apartment.discountedPrice"
              :promotion-enabled="apartment.promotionEnabled"
              :promotion-label="apartment.promotionLabel"
            />
          </div>

          <!-- CTA -->
          <div class="apartment-detail__cta" id="detail-cta">
            <WhatsAppButton :apartment="apartment" label="Book Now via WhatsApp" />
            <a :href="`tel:${config.contact.phone.replace(/\s/g, '')}`" class="btn btn--outline btn--lg" style="width:100%;justify-content:center;">
              📞 Call Our Team
            </a>
          </div>
        </div>
      </div>

      <!-- Description -->
      <div class="apartment-detail__description-section">
        <h2 class="apartment-detail__section-title">About This Unit</h2>
        <p class="apartment-detail__description" id="detail-description">{{ apartment.description }}</p>
      </div>

      <!-- Features -->
      <div class="apartment-detail__features-section">
        <h2 class="apartment-detail__section-title">Features & Amenities</h2>
        <div class="apartment-detail__features" id="detail-features">
          <div v-for="feature in apartment.features" :key="feature" class="apartment-detail__feature">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-success)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            <span>{{ feature }}</span>
          </div>
        </div>
      </div>

      <!-- Other Apartments -->
      <div class="apartment-detail__others-section" v-if="otherApartments.length">
        <div class="section-header">
          <h2 class="section-header__title">Explore Other Units</h2>
          <p class="section-header__subtitle">Discover more premium residences that suit your lifestyle.</p>
          <span class="section-header__accent"></span>
        </div>
        <div class="apartments-grid apartments-grid--others">
          <ApartmentCard
            v-for="apt in otherApartments"
            :key="apt.id"
            :apartment="apt"
          />
        </div>
      </div>
    </div>
  </div>

  <!-- 404 -->
  <div v-else class="apartment-detail__not-found">
    <div class="container" style="text-align:center;padding:120px 0;">
      <h1 style="font-size:var(--font-size-4xl);font-weight:800;margin-bottom:var(--space-4);">Apartment Not Found</h1>
      <p style="color:var(--color-gray-500);margin-bottom:var(--space-8);">The apartment you're looking for doesn't exist or may have been removed.</p>
      <NuxtLink to="/" class="btn btn--primary btn--lg">Back to Home</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import siteConfig from '~/config/site.config'

const config = siteConfig
const route = useRoute()

const slug = route.params.id as string

const apartment = computed(() => {
  return config.apartments.find((a) => a.slug === slug) || null
})

const otherApartments = computed(() => {
  return config.apartments.filter((a) => a.slug !== slug).slice(0, 3)
})

// SEO
if (apartment.value) {
  const apt = apartment.value
  const bedroomType = apt.bedrooms === 0 ? 'Studio' : `${apt.bedrooms} BR`

  useHead({
    title: `${apt.name} — ${bedroomType} | ${apt.area}m²`,
  })

  useSeoMeta({
    description: apt.description,
    ogTitle: `${apt.name} — ${config.siteName}`,
    ogDescription: apt.tagline,
    ogImage: apt.images[0]?.url,
    ogUrl: `${config.siteUrl}/apartments/${apt.slug}`,
    keywords: `${apt.name}, ${bedroomType} apartment, ${config.siteName}`,
  })

  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Apartment',
          name: apt.name,
          description: apt.description,
          numberOfRooms: apt.bedrooms || 1,
          floorSize: {
            '@type': 'QuantitativeValue',
            value: apt.area,
            unitCode: 'MTK',
          },
          image: apt.images.map((i) => i.url),
        }),
      },
    ],
  })
}
</script>

<style>
.apartment-detail__breadcrumb-wrapper {
  padding-top: calc(var(--navbar-height) + var(--space-8) + 40px);
  padding-bottom: var(--space-6);
  background: var(--color-gray-50);
  border-bottom: 1px solid var(--color-gray-200);
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--font-size-sm);
}

.breadcrumb__link {
  color: var(--color-gray-500);
  transition: color var(--transition-fast);
}

.breadcrumb__link:hover {
  color: var(--color-secondary-dark);
}

.breadcrumb__separator {
  color: var(--color-gray-300);
}

.breadcrumb__current {
  color: var(--color-primary);
  font-weight: 600;
}

.apartment-detail__container {
  padding-top: var(--space-10);
  padding-bottom: var(--space-20);
}

.apartment-detail__grid {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: var(--space-12);
  margin-bottom: var(--space-16);
}

.apartment-detail__promo {
  margin-bottom: var(--space-2);
}

.apartment-detail__name {
  font-size: var(--font-size-3xl);
  font-weight: 800;
  color: var(--color-primary);
  letter-spacing: -0.02em;
  margin-bottom: var(--space-2);
}

.apartment-detail__tagline {
  color: var(--color-gray-500);
  font-size: var(--font-size-lg);
  margin-bottom: var(--space-6);
}

.apartment-detail__specs {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-3);
  margin-bottom: var(--space-6);
}

.apartment-detail__spec {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-4);
  background: var(--color-gray-50);
  border-radius: var(--radius-lg);
  font-size: var(--font-size-sm);
  font-weight: 500;
  color: var(--color-gray-700);
}

.apartment-detail__spec-icon {
  font-size: var(--font-size-lg);
}

.apartment-detail__price-section {
  padding: var(--space-6);
  background: var(--color-gray-50);
  border-radius: var(--radius-xl);
  border: 1px solid var(--color-gray-200);
  margin-bottom: var(--space-6);
}

.apartment-detail__price-label {
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: var(--color-gray-500);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: var(--space-2);
}

.apartment-detail__cta {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.apartment-detail__section-title {
  font-size: var(--font-size-2xl);
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: var(--space-6);
  letter-spacing: -0.01em;
}

.apartment-detail__description-section {
  margin-bottom: var(--space-12);
}

.apartment-detail__description {
  font-size: var(--font-size-lg);
  color: var(--color-gray-600);
  line-height: 1.8;
  max-width: 800px;
}

.apartment-detail__features-section {
  margin-bottom: var(--space-16);
}

.apartment-detail__features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-4);
}

.apartment-detail__feature {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  background: var(--color-gray-50);
  border-radius: var(--radius-lg);
  font-size: var(--font-size-sm);
  font-weight: 500;
  color: var(--color-gray-700);
  border: 1px solid var(--color-gray-100);
  transition: all var(--transition-fast);
}

.apartment-detail__feature:hover {
  border-color: var(--color-secondary);
  background: var(--color-white);
}

.apartment-detail__others-section {
  border-top: 1px solid var(--color-gray-200);
  padding-top: var(--space-16);
}

.apartments-grid--others {
  grid-template-columns: repeat(3, 1fr);
}

@media (max-width: 1024px) {
  .apartment-detail__grid {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }

  .apartment-detail__features {
    grid-template-columns: repeat(2, 1fr);
  }

  .apartments-grid--others {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .apartment-detail__breadcrumb-wrapper {
    padding-top: calc(var(--navbar-height) + var(--space-4) + 40px);
  }

  .apartment-detail__name {
    font-size: var(--font-size-2xl);
  }

  .apartment-detail__specs {
    grid-template-columns: 1fr;
  }

  .apartment-detail__features {
    grid-template-columns: 1fr;
  }

  .apartments-grid--others {
    grid-template-columns: 1fr;
  }
}
</style>
