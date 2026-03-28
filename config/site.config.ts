/**
 * Site Configuration
 * ==================
 * Central configuration file for the apartment booking website.
 * Modify this file to update pricing, discounts, images, and WhatsApp settings.
 */

export interface ApartmentImage {
  url: string
  alt: string
}

export interface Apartment {
  id: string
  name: string
  slug: string
  tagline: string
  description: string
  bedrooms: number
  bathrooms: number
  area: number // in sqm
  floor: string
  originalPrice: number
  discountedPrice: number
  promotionEnabled: boolean
  promotionLabel: string
  features: string[]
  images: ApartmentImage[]
  available: boolean
}

export interface SiteConfig {
  // Site metadata
  siteName: string
  siteDescription: string
  siteKeywords: string[]
  siteUrl: string

  // WhatsApp
  whatsappNumber: string
  whatsappMessageTemplate: string // Use {apartment_name}, {apartment_type}, {price} placeholders

  // CDN
  cdnBaseUrl: string

  // Currency
  currency: string
  currencyLocale: string

  // Hero Section
  hero: {
    headline: string
    subheadline: string
    ctaText: string
    backgroundImage: string
  }

  // Promo Banner
  promoBanner: {
    enabled: boolean
    text: string
    badgeText: string
  }

  // Apartments
  apartments: Apartment[]

  // Features / Why Choose Us
  whyChooseUs: {
    title: string
    subtitle: string
    items: {
      icon: string
      title: string
      description: string
    }[]
  }

  // Contact / Company Info
  contact: {
    companyName: string
    address: string
    phone: string
    email: string
    socialLinks: {
      platform: string
      url: string
      icon: string
    }[]
  }
}

// ============================================================
// EDIT YOUR CONFIGURATION BELOW
// ============================================================

const siteConfig: SiteConfig = {
  // ----------------------------------------------------------
  // Site Metadata (used for SEO)
  // ----------------------------------------------------------
  siteName: 'LuxeApartments',
  siteDescription: 'Discover premium apartments in the heart of the city. Modern living spaces with world-class amenities, available for purchase or booking.',
  siteKeywords: ['apartments', 'luxury apartments', 'buy apartment', 'book apartment', 'real estate', 'modern living', 'premium residence'],
  siteUrl: 'https://luxeapartments.com',

  // ----------------------------------------------------------
  // WhatsApp Configuration
  // ----------------------------------------------------------
  whatsappNumber: '6281234567890', // International format without +
  whatsappMessageTemplate: 'Hi, I am interested in *{apartment_name}* ({apartment_type}). The listed price is *{price}*. I would like to get more details and proceed with booking. Thank you!',

  // ----------------------------------------------------------
  // CDN Base URL for Images
  // Change this to your CDN domain. Image paths in apartments
  // will be appended to this base URL.
  // ----------------------------------------------------------
  cdnBaseUrl: 'https://images.unsplash.com',

  // ----------------------------------------------------------
  // Currency Display
  // ----------------------------------------------------------
  currency: 'IDR',
  currencyLocale: 'id-ID',

  // ----------------------------------------------------------
  // Hero Section
  // ----------------------------------------------------------
  hero: {
    headline: 'Find Your Dream Apartment',
    subheadline: 'Premium residences with stunning views, world-class amenities, and modern design — all in the heart of the city.',
    ctaText: 'Explore Apartments',
    backgroundImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=80',
  },

  // ----------------------------------------------------------
  // Promotional Banner
  // Set enabled to false to hide the promo banner entirely.
  // ----------------------------------------------------------
  promoBanner: {
    enabled: true,
    text: 'Early Bird Special — Get up to 15% off on select units!',
    badgeText: 'LIMITED OFFER',
  },

  // ----------------------------------------------------------
  // Apartment Listings
  // ----------------------------------------------------------
  apartments: [
    {
      id: '1',
      name: 'Studio Elegance',
      slug: 'studio-elegance',
      tagline: 'Perfect starter home with premium finishes',
      description: 'A beautifully designed studio apartment featuring floor-to-ceiling windows, premium hardwood flooring, and a fully equipped modern kitchenette. Ideal for young professionals or investors looking for a prime city-center unit with excellent rental yield potential.',
      bedrooms: 0,
      bathrooms: 1,
      area: 35,
      floor: '12th - 25th',
      originalPrice: 850000000,
      discountedPrice: 722500000,
      promotionEnabled: true,
      promotionLabel: '15% OFF',
      features: ['Floor-to-ceiling Windows', 'Smart Home System', 'Built-in Wardrobe', 'Premium Kitchen', 'Gym Access', 'Swimming Pool'],
      images: [
        { url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80', alt: 'Studio Elegance living area' },
        { url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80', alt: 'Studio Elegance bedroom view' },
        { url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80', alt: 'Studio Elegance kitchen' },
        { url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80', alt: 'Studio Elegance bathroom' },
      ],
      available: true,
    },
    {
      id: '2',
      name: 'Urban Suite 1BR',
      slug: 'urban-suite-1br',
      tagline: 'Spacious one-bedroom with panoramic city views',
      description: 'Spacious one-bedroom suite with an open-plan living and dining area, complemented by a private balcony offering panoramic city views. Features include imported marble countertops, a rain shower system, and premium appliances throughout.',
      bedrooms: 1,
      bathrooms: 1,
      area: 55,
      floor: '15th - 30th',
      originalPrice: 1200000000,
      discountedPrice: 1080000000,
      promotionEnabled: true,
      promotionLabel: '10% OFF',
      features: ['Private Balcony', 'Marble Countertops', 'Rain Shower', 'Walk-in Closet', 'Concierge Service', 'Rooftop Garden'],
      images: [
        { url: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80', alt: 'Urban Suite living room' },
        { url: 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800&q=80', alt: 'Urban Suite bedroom' },
        { url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80', alt: 'Urban Suite dining area' },
        { url: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80', alt: 'Urban Suite bathroom' },
      ],
      available: true,
    },
    {
      id: '3',
      name: 'Grand Residence 2BR',
      slug: 'grand-residence-2br',
      tagline: 'Luxurious two-bedroom family home',
      description: 'A luxurious two-bedroom residence designed for families who appreciate refined living. Features a master suite with an en-suite bathroom, a dedicated study nook, and a generous living area that flows seamlessly into a chef-grade kitchen.',
      bedrooms: 2,
      bathrooms: 2,
      area: 85,
      floor: '20th - 35th',
      originalPrice: 2100000000,
      discountedPrice: 1890000000,
      promotionEnabled: true,
      promotionLabel: '10% OFF',
      features: ['Master En-suite', 'Study Nook', 'Chef Kitchen', 'Double Balcony', 'Private Elevator Lobby', 'Children\'s Playground'],
      images: [
        { url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80', alt: 'Grand Residence exterior' },
        { url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80', alt: 'Grand Residence living room' },
        { url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80', alt: 'Grand Residence master bedroom' },
        { url: 'https://images.unsplash.com/photo-1600573472591-ee6981cf81d6?w=800&q=80', alt: 'Grand Residence kitchen' },
      ],
      available: true,
    },
    {
      id: '4',
      name: 'Penthouse Royale 3BR',
      slug: 'penthouse-royale-3br',
      tagline: 'The pinnacle of luxury living',
      description: 'The crown jewel of our collection. This three-bedroom penthouse offers unparalleled luxury with a private rooftop terrace, panoramic floor-to-ceiling windows on all sides, a wine cellar, and a home theater room. Finished with the finest Italian marble and custom millwork throughout.',
      bedrooms: 3,
      bathrooms: 3,
      area: 150,
      floor: '38th - 40th',
      originalPrice: 5500000000,
      discountedPrice: 5500000000,
      promotionEnabled: false,
      promotionLabel: '',
      features: ['Private Rooftop Terrace', 'Home Theater', 'Wine Cellar', 'Italian Marble', 'Panoramic Views', 'Private Pool', 'Butler Service', 'Helipad Access'],
      images: [
        { url: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80', alt: 'Penthouse Royale living area' },
        { url: 'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=800&q=80', alt: 'Penthouse Royale master suite' },
        { url: 'https://images.unsplash.com/photo-1560448075-cbc16bb4af8e?w=800&q=80', alt: 'Penthouse Royale terrace' },
        { url: 'https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=800&q=80', alt: 'Penthouse Royale kitchen' },
      ],
      available: true,
    },
  ],

  // ----------------------------------------------------------
  // Why Choose Us Section
  // ----------------------------------------------------------
  whyChooseUs: {
    title: 'Why Choose LuxeApartments',
    subtitle: 'We deliver more than just a home — we craft an elevated living experience.',
    items: [
      {
        icon: '🏗️',
        title: 'Premium Construction',
        description: 'Built with the highest standards using imported materials and cutting-edge engineering.',
      },
      {
        icon: '📍',
        title: 'Prime Location',
        description: 'Strategically located in the city center with easy access to business districts, malls, and transit.',
      },
      {
        icon: '🔒',
        title: '24/7 Security',
        description: 'Multi-layered security system including CCTV, access cards, and on-site security personnel.',
      },
      {
        icon: '🏊',
        title: 'World-Class Amenities',
        description: 'Infinity pool, sky garden, fitness center, co-working space, and more — all at your doorstep.',
      },
      {
        icon: '📈',
        title: 'High ROI Potential',
        description: 'Prime location and premium quality ensure excellent investment returns and rental yields.',
      },
      {
        icon: '🤝',
        title: 'Flexible Payment',
        description: 'Multiple payment options including installments, KPA, and special early-bird discounts.',
      },
    ],
  },

  // ----------------------------------------------------------
  // Contact / Company Info
  // ----------------------------------------------------------
  contact: {
    companyName: 'LuxeApartments Development',
    address: 'Jl. Sudirman No. 123, Jakarta Selatan 12190',
    phone: '+62 812 3456 7890',
    email: 'info@luxeapartments.com',
    socialLinks: [
      { platform: 'Instagram', url: 'https://instagram.com/luxeapartments', icon: 'instagram' },
      { platform: 'Facebook', url: 'https://facebook.com/luxeapartments', icon: 'facebook' },
      { platform: 'YouTube', url: 'https://youtube.com/@luxeapartments', icon: 'youtube' },
    ],
  },
}

export default siteConfig
