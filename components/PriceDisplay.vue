<template>
  <div class="price-block" id="price-display">
    <template v-if="promotionEnabled">
      <span class="price-block__badge">{{ promotionLabel }}</span>
      <span class="price-block__original">{{ formattedOriginal }}</span>
      <span class="price-block__current price-block__current--promo">{{ formattedDiscounted }}</span>
    </template>
    <template v-else>
      <span class="price-block__current">{{ formattedOriginal }}</span>
    </template>
  </div>
</template>

<script setup lang="ts">
import siteConfig from '~/config/site.config'

const props = defineProps<{
  originalPrice: number
  discountedPrice: number
  promotionEnabled: boolean
  promotionLabel?: string
}>()

const formatPrice = (value: number): string => {
  return new Intl.NumberFormat(siteConfig.currencyLocale, {
    style: 'currency',
    currency: siteConfig.currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}

const formattedOriginal = computed(() => formatPrice(props.originalPrice))
const formattedDiscounted = computed(() => formatPrice(props.discountedPrice))
</script>
