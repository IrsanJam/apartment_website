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

export interface ApartmentVideo {
  url: string          // YouTube embed URL
  title: string
  thumbnail?: string   // Optional custom thumbnail
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
  videos: ApartmentVideo[]
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
  siteName: 'Margonda Residence 2',
  siteDescription: 'Sewa dan Jual Apartemen Margonda Residence 2 (Mares 2) Depok. Hunian nyaman, strategis, dekat Kampus UI, Gunadarma, dan Stasiun Pondok Cina.',
  siteKeywords: ['apartemen margonda', 'sewa apartemen depok', 'margonda residence 2', 'mares 2', 'apartemen dekat ui', 'apartemen stasiun pondok cina', 'jual apartemen depok'],
  siteUrl: 'https://margondaresidence2.com',

  // ----------------------------------------------------------
  // WhatsApp Configuration
  // ----------------------------------------------------------
  whatsappNumber: '6281234567890', // Ubah dengan nomor marketing asli
  whatsappMessageTemplate: 'Halo, saya tertarik dengan unit *{apartment_name}* ({apartment_type}). Info harga tertera *{price}*. Boleh minta detail lengkap dan ketersediaannya? Terima kasih!',

  // ----------------------------------------------------------
  // CDN Base URL for Images
  // ----------------------------------------------------------
  cdnBaseUrl: '',

  // ----------------------------------------------------------
  // Currency Display
  // ----------------------------------------------------------
  currency: 'IDR',
  currencyLocale: 'id-ID',

  // ----------------------------------------------------------
  // Hero Section
  // ----------------------------------------------------------
  hero: {
    headline: 'Hunian Nyaman di Jantung Kota Depok',
    subheadline: 'Apartemen Margonda Residence 2. Pilihan tepat untuk mahasiswa & profesional. Selangkah ke UI, Gunadarma, & Margo City.',
    ctaText: 'Lihat Tipe Unit',
    backgroundImage: '/images/main-apart.jpg',
  },

  // ----------------------------------------------------------
  // Promotional Banner
  // ----------------------------------------------------------
  promoBanner: {
    enabled: true,
    text: 'Promo Mahasiswa Baru! Potongan Harga & Bebas Biaya IPL 3 Bulan Pertama.',
    badgeText: 'HOT PROMO',
  },

  // ----------------------------------------------------------
  // Apartment Listings
  // ----------------------------------------------------------
  apartments: [
    {
      id: '1',
      name: 'Studio Standard',
      slug: 'studio-standard',
      tagline: 'Praktis, Nyaman, dan Ekonomis',
      description: 'Unit Studio Standard dengan luas 20m² yang sangat ideal untuk mahasiswa atau pekerja single. Dilengkapi dengan fasilitas dasar, AC, tempat tidur nyaman, dan lemari pakaian. Lokasi tower sangat dekat dengan akses Kolam Renang dan Minimarket.',
      bedrooms: 0,
      bathrooms: 1,
      area: 20,
      floor: 'Lantai 5 - 12',
      originalPrice: 185000000,
      discountedPrice: 175000000,
      promotionEnabled: true,
      promotionLabel: '15% OFF',
      features: ['Full Furnished', 'AC 1/2 PK', 'Water Heater (Opsional)', 'Akses Kolam Renang', 'Parkir Motor/Mobil', 'Keamanan 24 Jam'],
      images: [
        { url: '/images/mares_studio_room.png', alt: 'Studio Standard kamar' },
        { url: '/images/mares_kitchen.png', alt: 'Studio Standard pantry' },
        { url: '/images/mares_pool.png', alt: 'Akses Kolam Renang' },
      ],
      videos: [
        { url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', title: 'Margonda Residence 2 — Room Tour' },
      ],
      available: true,
    },
    {
      id: '2',
      name: 'Studio Premium Renovated',
      slug: 'studio-premium-renovated',
      tagline: 'Desain Modern Minimalis Instagramable',
      description: 'Unit tipe Studio (24m²) yang telah direnovasi total dengan desain interior modern minimalis. Menggunakan lantai vinyl, pencahayaan LED warm white, Smart TV, kitchen set custom, dan meja belajar/kerja lipat untuk memaksimalkan ruangan.',
      bedrooms: 0,
      bathrooms: 1,
      area: 24,
      floor: 'Lantai 15 - 18',
      originalPrice: 245000000,
      discountedPrice: 230000000,
      promotionEnabled: true,
      promotionLabel: '10% OFF',
      features: ['Interior Custom', 'Smart TV 32"', 'Kitchen Set', 'Lantai Vinyl', 'Meja Belajar Multifungsi', 'Pemandangan Kota / UI'],
      images: [
        { url: '/images/mares_studio_room.png', alt: 'Studio Premium living' },
        { url: '/images/mares_kitchen.png', alt: 'Studio Premium kitchen' },
        { url: '/images/mares_exterior.png', alt: 'Eksterior Gedung' },
      ],
      videos: [
        { url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', title: 'Studio Premium — Full Tour' },
      ],
      available: true,
    },
    {
      id: '3',
      name: '1 Bedroom',
      slug: '1-bedroom-gandeng',
      tagline: 'Lebih Luas, Lebih Bebas',
      description: 'Merupakan unit gabungan (gandeng) dari 2 unit studio, menciptakan luas 40m² dengan pemisahan area ruang tamu dan kamar tidur yang jelas. Sangat cocok untuk keluarga muda atau eksekutif yang membutuhkan privasi dan ruang ekstra.',
      bedrooms: 1,
      bathrooms: 1,
      area: 40,
      floor: 'Lantai 8',
      originalPrice: 380000000,
      discountedPrice: 380000000,
      promotionEnabled: false,
      promotionLabel: '',
      features: ['1 Kamar Tidur Terpisah', 'Ruang Tamu (Living Room)', 'Kulkas 2 Pintu', 'Balkon Ganda', '2 AC', 'Lemari Pakaian Besar'],
      images: [
        { url: '/images/mares_studio_room.png', alt: '1 Bedroom Kamar Utama' },
        { url: '/images/mares_kitchen.png', alt: '1 Bedroom Dapur' },
        { url: '/images/mares_pool.png', alt: 'Fasilitas Kolam' },
      ],
      videos: [
        { url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', title: '1BR Gandeng — Interior Design' },
      ],
      available: true,
    },
  ],

  // ----------------------------------------------------------
  // Why Choose Us Section
  // ----------------------------------------------------------
  whyChooseUs: {
    title: 'Kenapa Memilih Margonda Residence 2?',
    subtitle: 'Kawasan hunian paling populer di tengah dinamika Kota Depok dengan nilai investasi tinggi.',
    items: [
      {
        icon: '🎓',
        title: 'Selangkah ke Kampus',
        description: 'Jarak berjalan kaki (walking distance) ke Universitas Indonesia dan Universitas Gunadarma.',
      },
      {
        icon: '🚆',
        title: 'Akses Transportasi Mudah',
        description: 'Tepat berada di Jl. Margonda Raya. Dekat dengan Stasiun UI dan Stasiun Pondok Cina.',
      },
      {
        icon: '🛍️',
        title: 'Pusat Perbelanjaan',
        description: 'Berseberangan dengan Depok Town Square (Detos) dan hanya 5 menit ke Margo City Mall.',
      },
      {
        icon: '🏥',
        title: 'Dekat Fasilitas Medis',
        description: 'Akses cepat ke RS Bunda Margonda, RS UI, dan apotek 24 jam di sekitar kawasan.',
      },
      {
        icon: '🏊',
        title: 'Fasilitas Lengkap',
        description: 'Kolam renang, lapangan tenis, minimarket (Indomaret/Alfamart), laundry, dan ATM center di dalam kompleks.',
      },
      {
        icon: '📈',
        title: 'Investasi Menjanjikan',
        description: 'Permintaan sewa tinggi (diburu ribuan mahasiswa baru setiap tahun) menjamin passive income Anda.',
      },
    ],
  },

  // ----------------------------------------------------------
  // Contact / Company Info
  // ----------------------------------------------------------
  contact: {
    companyName: 'Apartemen Margonda Residence 2',
    address: 'Jl. Margonda Raya Kav. 461, Beji, Kota Depok, Jawa Barat 16424',
    phone: '+62 812 3456 7890',
    email: 'info@margondaresidence2.com',
    socialLinks: [
      { platform: 'Instagram', url: 'https://instagram.com/margondaresidence2', icon: 'instagram' },
      { platform: 'Facebook', url: 'https://facebook.com/margondaresidence2', icon: 'facebook' },
      { platform: 'YouTube', url: 'https://youtube.com', icon: 'youtube' },
    ],
  },
}

export default siteConfig
