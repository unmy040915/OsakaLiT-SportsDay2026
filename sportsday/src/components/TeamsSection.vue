<script setup>
import SectionBadge from './SectionBadge.vue'
import TeamCard from './TeamCard.vue'
import { teams } from '@/data/teams'
</script>

<template>
  <section class="section section--teams">
    <SectionBadge variant="lime-bg">団長・副団長</SectionBadge>

    <div class="teams-grid">
      <TeamCard v-for="team in teams" :key="team.key" :team="team" />
    </div>
  </section>
</template>

<style scoped>
.teams-grid {
  /* 黒ボックスの幅。全団共通（TeamCard の .tc-body が参照する） */
  --tc-body-w: 520px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* 行の高さを一番高いカードに揃え、黒ボックスを全団同じ大きさにする */
  grid-auto-rows: 1fr;
  gap: 40px;
  width: 1228px;
  margin: 0 auto;
  padding-top: 20px;
  overflow: visible;
}

@media (max-width: 1279px) {
  .teams-grid {
    grid-template-columns: minmax(0, 1fr);
    width: 100%;
    max-width: 600px;
  }
}

@media (max-width: 767px) {
  .teams-grid {
    grid-auto-rows: auto;
    gap: 32px;
  }
}
</style>
