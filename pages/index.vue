<template>
  <div>
    <!-- Hero -->
    <HeroSection />

    <!-- Apartments Section -->
    <section class="section section--gray" id="apartments">
      <div class="container">
        <div class="section-header">
          <h2 class="section-header__title">Our Exclusive Units</h2>
          <p class="section-header__subtitle">
            Choose from our curated selection of premium residences, each crafted with meticulous attention to detail.
          </p>
          <span class="section-header__accent"></span>
        </div>

        <div class="apartments-grid">
          <ApartmentCard
            v-for="apartment in apartments"
            :key="apartment.id"
            :apartment="apartment"
          />
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="section" id="why-choose-us">
      <div class="container">
        <div class="section-header">
          <h2 class="section-header__title">{{ config.whyChooseUs.title }}</h2>
          <p class="section-header__subtitle">{{ config.whyChooseUs.subtitle }}</p>
          <span class="section-header__accent"></span>
        </div>

        <div class="features-grid">
          <div
            v-for="(item, index) in config.whyChooseUs.items"
            :key="index"
            class="feature-card"
            :id="`feature-${index}`"
          >
            <span class="feature-card__icon">{{ item.icon }}</span>
            <h3 class="feature-card__title">{{ item.title }}</h3>
            <p class="feature-card__description">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section section--dark cta-section" id="cta-section">
      <div class="container cta-section__container">
        <div class="cta-section__content">
          <h2 class="cta-section__title">Ready to Find Your Perfect Home?</h2>
          <p class="cta-section__subtitle">
            Connect with our team today. We'll help you choose the perfect unit and guide you through every step.
          </p>
          <div class="cta-section__actions">
            <a :href="whatsappLink" target="_blank" rel="noopener" class="btn btn--whatsapp btn--lg">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Chat on WhatsApp
            </a>
            <a href="tel:+6281234567890" class="btn btn--outline btn--lg">
              📞 Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import siteConfig from '~/config/site.config'

const config = siteConfig
const apartments = config.apartments

// SEO
useHead({
  title: 'Premium Apartments for Sale & Booking',
})

useSeoMeta({
  description: config.siteDescription,
  ogTitle: `${config.siteName} — Premium Apartments for Sale & Booking`,
  ogDescription: config.siteDescription,
  ogUrl: config.siteUrl,
  keywords: config.siteKeywords.join(', '),
})

const whatsappLink = computed(() => {
  return `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent('Hi, I am interested in your apartments and would like to know more.')}`
})
</script>

<style>
/* Apartments Grid */
.apartments-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-8);
}

@media (max-width: 1024px) {
  .apartments-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-6);
  }
}

@media (max-width: 768px) {
  .apartments-grid {
    grid-template-columns: 1fr;
  }
}

/* Features Grid */
.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8);
}

.feature-card {
  text-align: center;
  padding: var(--space-8) var(--space-6);
  border-radius: var(--radius-xl);
  background: var(--color-white);
  border: 1px solid var(--color-gray-100);
  transition: all var(--transition-base);
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
  border-color: var(--color-secondary);
}

.feature-card__icon {
  display: block;
  font-size: 2.5rem;
  margin-bottom: var(--space-4);
}

.feature-card__title {
  font-size: var(--font-size-lg);
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: var(--space-3);
}

.feature-card__description {
  font-size: var(--font-size-sm);
  color: var(--color-gray-500);
  line-height: 1.7;
}

@media (max-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
}

/* CTA Section */
.cta-section {
  position: relative;
  overflow: hidden;
}

.cta-section::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(201, 169, 110, 0.15), transparent 70%);
  border-radius: 50%;
}

.cta-section__container {
  position: relative;
  z-index: 1;
}

.cta-section__content {
  text-align: center;
  max-width: 650px;
  margin: 0 auto;
}

.cta-section__title {
  font-size: var(--font-size-4xl);
  font-weight: 800;
  color: var(--color-white);
  margin-bottom: var(--space-4);
  letter-spacing: -0.02em;
}

.cta-section__subtitle {
  font-size: var(--font-size-lg);
  color: var(--color-gray-400);
  margin-bottom: var(--space-8);
  line-height: 1.7;
}

.cta-section__actions {
  display: flex;
  justify-content: center;
  gap: var(--space-4);
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .cta-section__title {
    font-size: var(--font-size-2xl);
  }

  .cta-section__actions {
    flex-direction: column;
    align-items: center;
  }

  .cta-section__actions .btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
