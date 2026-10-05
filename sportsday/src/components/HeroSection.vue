<script setup>
import FitScale from './FitScale.vue'
import { heroParts, heroSize } from '@/data/hero'
</script>

<template>
  <section class="section section--hero">
    <FitScale
      class="hero-illust"
      :width="heroSize.width"
      :height="heroSize.height"
      role="img"
      aria-label="関西メンター大運動会2026"
    >
      <img
        v-for="part in heroParts"
        :key="part.name"
        class="illust-part"
        :style="{
          left: `${part.left}px`,
          top: `${part.top}px`,
          width: `${part.width}px`,
          height: `${part.height}px`,
        }"
        :src="`/assets/hero/${part.name}.svg`"
        alt=""
      />
    </FitScale>
  </section>
</template>

<style scoped>
.section--hero {
  padding-top: 30px;
}

.illust-part {
  position: absolute;
  display: block;
  object-fit: fill;
}

@media (max-width: 767px) {
  .section--hero {
    padding-top: 16px;
  }
}
</style>
