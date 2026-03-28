<template>
  <footer class="footer section--dark" id="contact">
    <div class="container">
      <div class="footer__grid">
        <!-- Brand -->
        <div class="footer__brand">
          <div class="footer__logo">
            <span class="footer__logo-icon">◆</span>
            <span class="footer__logo-text">{{ config.siteName }}</span>
          </div>
          <p class="footer__description">{{ config.siteDescription }}</p>
          <div class="footer__social">
            <a
              v-for="link in config.contact.socialLinks"
              :key="link.platform"
              :href="link.url"
              target="_blank"
              rel="noopener"
              class="footer__social-link"
              :aria-label="link.platform"
            >
              <span v-if="link.icon === 'instagram'">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </span>
              <span v-else-if="link.icon === 'facebook'">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.738-.9 10.126-5.864 10.126-11.854z"/></svg>
              </span>
              <span v-else-if="link.icon === 'youtube'">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </span>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="footer__section">
          <h4 class="footer__heading">Quick Links</h4>
          <ul class="footer__links">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><a href="/#apartments">Apartments</a></li>
            <li><a href="/#why-choose-us">Why Choose Us</a></li>
            <li><a href="/#contact">Contact</a></li>
          </ul>
        </div>

        <!-- Apartment Types -->
        <div class="footer__section">
          <h4 class="footer__heading">Our Units</h4>
          <ul class="footer__links">
            <li v-for="apt in config.apartments" :key="apt.id">
              <NuxtLink :to="`/apartments/${apt.slug}`">{{ apt.name }}</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="footer__section">
          <h4 class="footer__heading">Get in Touch</h4>
          <ul class="footer__contact-list">
            <li class="footer__contact-item">
              <span class="footer__contact-icon">📍</span>
              <span>{{ config.contact.address }}</span>
            </li>
            <li class="footer__contact-item">
              <span class="footer__contact-icon">📞</span>
              <span>{{ config.contact.phone }}</span>
            </li>
            <li class="footer__contact-item">
              <span class="footer__contact-icon">✉️</span>
              <span>{{ config.contact.email }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="footer__bottom">
        <p>&copy; {{ new Date().getFullYear() }} {{ config.contact.companyName }}. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import siteConfig from '~/config/site.config'

const config = siteConfig
</script>

<style>
.footer {
  padding: var(--space-16) 0 var(--space-8);
}

.footer__grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: var(--space-10);
  margin-bottom: var(--space-12);
}

.footer__logo {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--font-size-xl);
  font-weight: 700;
  margin-bottom: var(--space-4);
}

.footer__logo-icon {
  color: var(--color-secondary);
  font-size: var(--font-size-2xl);
}

.footer__description {
  color: var(--color-gray-400);
  font-size: var(--font-size-sm);
  line-height: 1.7;
  margin-bottom: var(--space-6);
}

.footer__social {
  display: flex;
  gap: var(--space-3);
}

.footer__social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.08);
  color: var(--color-gray-400);
  transition: all var(--transition-base);
}

.footer__social-link:hover {
  background: var(--color-secondary);
  color: var(--color-white);
  transform: translateY(-2px);
}

.footer__heading {
  font-size: var(--font-size-base);
  font-weight: 600;
  color: var(--color-white);
  margin-bottom: var(--space-5);
  letter-spacing: 0.02em;
}

.footer__links li {
  margin-bottom: var(--space-3);
}

.footer__links a {
  color: var(--color-gray-400);
  font-size: var(--font-size-sm);
  transition: color var(--transition-fast);
}

.footer__links a:hover {
  color: var(--color-secondary);
}

.footer__contact-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.footer__contact-item {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  color: var(--color-gray-400);
  font-size: var(--font-size-sm);
  line-height: 1.6;
}

.footer__contact-icon {
  font-size: var(--font-size-base);
  flex-shrink: 0;
  margin-top: 1px;
}

.footer__bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: var(--space-6);
  text-align: center;
}

.footer__bottom p {
  color: var(--color-gray-500);
  font-size: var(--font-size-sm);
}

@media (max-width: 1024px) {
  .footer__grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .footer__grid {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }
}
</style>
