<template>
  <header class="navbar" :class="{ 'navbar--scrolled': isScrolled }" id="navbar">
    <div class="container navbar__container">
      <!-- Logo -->
      <NuxtLink to="/" class="navbar__logo" id="navbar-logo">
        <span class="navbar__logo-icon">◆</span>
        <span class="navbar__logo-text">{{ config.siteName }}</span>
      </NuxtLink>

      <!-- Desktop Nav -->
      <nav class="navbar__nav" id="navbar-nav">
        <NuxtLink to="/" class="navbar__link">Home</NuxtLink>
        <a href="/#apartments" class="navbar__link">Apartments</a>
        <a href="/#why-choose-us" class="navbar__link">About</a>
        <a href="/#contact" class="navbar__link">Contact</a>
      </nav>

      <!-- CTA -->
      <a :href="whatsappLink" target="_blank" rel="noopener" class="btn btn--primary navbar__cta" id="navbar-cta">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Chat Now
      </a>

      <!-- Mobile Hamburger -->
      <button class="navbar__hamburger" :class="{ 'navbar__hamburger--active': isMobileOpen }" @click="toggleMobile" id="navbar-hamburger" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <Transition name="slide-down">
      <div v-if="isMobileOpen" class="navbar__mobile" id="navbar-mobile">
        <nav class="navbar__mobile-nav">
          <NuxtLink to="/" class="navbar__mobile-link" @click="closeMobile">Home</NuxtLink>
          <a href="/#apartments" class="navbar__mobile-link" @click="closeMobile">Apartments</a>
          <a href="/#why-choose-us" class="navbar__mobile-link" @click="closeMobile">About</a>
          <a href="/#contact" class="navbar__mobile-link" @click="closeMobile">Contact</a>
          <a :href="whatsappLink" target="_blank" rel="noopener" class="btn btn--whatsapp navbar__mobile-cta" @click="closeMobile">
            Chat on WhatsApp
          </a>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import siteConfig from '~/config/site.config'

const config = siteConfig

const isScrolled = ref(false)
const isMobileOpen = ref(false)

const whatsappLink = computed(() => {
  return `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent('Hi, I would like to know more about your apartments.')}`
})

const toggleMobile = () => {
  isMobileOpen.value = !isMobileOpen.value
}

const closeMobile = () => {
  isMobileOpen.value = false
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: var(--navbar-height);
  transition: all var(--transition-base);
  background: transparent;
}

.promo-banner + .navbar {
  top: 40px;
}

.navbar--scrolled {
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.15);
}

.promo-banner + .navbar--scrolled {
  top: 0;
}

.navbar__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.navbar__logo {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--color-white);
  z-index: 10;
}

.navbar__logo-icon {
  color: var(--color-secondary);
  font-size: var(--font-size-2xl);
}

.navbar__nav {
  display: flex;
  align-items: center;
  gap: var(--space-8);
}

.navbar__link {
  color: var(--color-gray-300);
  font-size: var(--font-size-sm);
  font-weight: 500;
  letter-spacing: 0.02em;
  transition: color var(--transition-fast);
  position: relative;
}

.navbar__link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-secondary);
  transition: width var(--transition-base);
  border-radius: var(--radius-full);
}

.navbar__link:hover {
  color: var(--color-white);
}

.navbar__link:hover::after {
  width: 100%;
}

.navbar__cta {
  padding: var(--space-2) var(--space-5);
  font-size: var(--font-size-sm);
  border-radius: var(--radius-full);
}

.navbar__hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 28px;
  height: 28px;
  z-index: 10;
}

.navbar__hamburger span {
  display: block;
  width: 100%;
  height: 2px;
  background: var(--color-white);
  border-radius: var(--radius-full);
  transition: all var(--transition-base);
}

.navbar__hamburger--active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.navbar__hamburger--active span:nth-child(2) {
  opacity: 0;
}

.navbar__hamburger--active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

.navbar__mobile {
  position: absolute;
  top: var(--navbar-height);
  left: 0;
  right: 0;
  background: rgba(15, 23, 42, 0.98);
  backdrop-filter: blur(20px);
  padding: var(--space-6);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.navbar__mobile-nav {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.navbar__mobile-link {
  color: var(--color-gray-300);
  font-size: var(--font-size-lg);
  font-weight: 500;
  padding: var(--space-2) 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  transition: color var(--transition-fast);
}

.navbar__mobile-link:hover {
  color: var(--color-secondary);
}

.navbar__mobile-cta {
  margin-top: var(--space-2);
  text-align: center;
}

/* Slide transition */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all var(--transition-base);
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@media (max-width: 768px) {
  .navbar__nav,
  .navbar__cta {
    display: none;
  }

  .navbar__hamburger {
    display: flex;
  }

  .navbar__container {
    margin-top: 1.8rem;
  }
}
</style>
