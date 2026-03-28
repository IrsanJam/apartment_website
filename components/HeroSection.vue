<template>
  <section class="hero" id="hero">
    <div class="hero__bg">
      <img :src="config.hero.backgroundImage" :alt="config.siteName + ' hero'" class="hero__bg-image" />
      <div class="hero__overlay"></div>
    </div>

    <div class="container hero__content">
      <div class="hero__text animate-fade-in-up">
        <h1 class="hero__headline" id="hero-headline">{{ config.hero.headline }}</h1>
        <p class="hero__subheadline delay-1 animate-fade-in-up">{{ config.hero.subheadline }}</p>
        <div class="hero__actions delay-2 animate-fade-in-up">
          <a href="#apartments" class="btn btn--primary btn--lg">
            {{ config.hero.ctaText }}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>
          </a>
          <a :href="whatsappLink" target="_blank" rel="noopener" class="btn btn--outline btn--lg">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Contact Us
          </a>
        </div>
      </div>

      <!-- Stats -->
      <div class="hero__stats delay-3 animate-fade-in-up">
        <div class="hero__stat">
          <span class="hero__stat-number">{{ config.apartments.length }}</span>
          <span class="hero__stat-label">Unit Types</span>
        </div>
        <div class="hero__stat-divider"></div>
        <div class="hero__stat">
          <span class="hero__stat-number">40</span>
          <span class="hero__stat-label">Floors</span>
        </div>
        <div class="hero__stat-divider"></div>
        <div class="hero__stat">
          <span class="hero__stat-number">500+</span>
          <span class="hero__stat-label">Units Available</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import siteConfig from '~/config/site.config'

const config = siteConfig

const whatsappLink = computed(() => {
  return `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent('Hi, I would like to know more about your apartments.')}`
})
</script>

<style>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero__bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(15, 23, 42, 0.92) 0%,
    rgba(15, 23, 42, 0.75) 40%,
    rgba(15, 23, 42, 0.6) 100%
  );
}

.hero__content {
  position: relative;
  z-index: 1;
  padding-top: calc(var(--navbar-height) + var(--space-16));
  padding-bottom: var(--space-16);
}

.hero__text {
  max-width: 700px;
}

.hero__headline {
  font-size: var(--font-size-6xl);
  font-weight: 800;
  color: var(--color-white);
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin-bottom: var(--space-6);
}

.hero__headline span {
  background: linear-gradient(135deg, var(--color-secondary), var(--color-secondary-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero__subheadline {
  font-size: var(--font-size-xl);
  color: var(--color-gray-300);
  line-height: 1.7;
  margin-bottom: var(--space-10);
  max-width: 560px;
}

.hero__actions {
  display: flex;
  gap: var(--space-4);
  flex-wrap: wrap;
}

.hero__stats {
  display: flex;
  align-items: center;
  gap: var(--space-8);
  margin-top: var(--space-16);
  padding: var(--space-6) var(--space-8);
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-xl);
  width: fit-content;
}

.hero__stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-1);
}

.hero__stat-number {
  font-size: var(--font-size-3xl);
  font-weight: 700;
  color: var(--color-secondary);
}

.hero__stat-label {
  font-size: var(--font-size-sm);
  color: var(--color-gray-400);
  font-weight: 500;
}

.hero__stat-divider {
  width: 1px;
  height: 40px;
  background: rgba(255, 255, 255, 0.15);
}

@media (max-width: 768px) {
  .hero {
    min-height: 90vh;
  }

  .hero__headline {
    font-size: var(--font-size-4xl);
  }

  .hero__subheadline {
    font-size: var(--font-size-lg);
  }

  .hero__stats {
    gap: var(--space-4);
    padding: var(--space-4) var(--space-5);
  }

  .hero__stat-number {
    font-size: var(--font-size-2xl);
  }

  .hero__actions {
    flex-direction: column;
  }

  .hero__actions .btn {
    text-align: center;
    justify-content: center;
  }
}

@media (max-width: 390px) {
  .hero__headline {
    font-size: var(--font-size-2xl);
  }

  .hero__subheadline {
    font-size: var(--font-size-sm);
  }

  .hero__stats {
    gap: var(--space-3);
    padding: var(--space-3) var(--space-4);
    width: 100%;
  }

  .hero__stat-number {
    font-size: var(--font-size-xl);
  }

  .hero__stat-label {
    font-size: var(--font-size-xs);
  }
}
</style>
