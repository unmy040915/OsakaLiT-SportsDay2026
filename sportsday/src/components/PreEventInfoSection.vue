<script setup>
import InfoRow from './InfoRow.vue'
import SectionBadge from './SectionBadge.vue'
import { infoRows } from '@/data/info'
</script>

<template>
  <section class="section section--info">
    <SectionBadge variant="yellow-bg">当日までに確認</SectionBadge>

    <div class="info-columns">
      <!-- Left: map embed -->
      <div class="info-map-col">
        <div class="info-map-frame">
          <iframe
            src="https://maps.google.com/maps?q=二色浜公園スポーツ広場&output=embed&hl=ja&z=16"
            width="100%"
            height="100%"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <!-- Right: info panel -->
      <div class="info-panel">
        <p class="info-item info-item--center">2026年10月10日(土)</p>
        <InfoRow
          v-for="row in infoRows"
          :key="row.key"
          :label="row.label"
          :value="row.value"
          :note="row.note"
          :warn="row.warn"
          :href="row.href"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.bottom-badge-row {
  margin-bottom: 70px;
}

/* Two-column layout: map (545px) + info panel (600px), total 1228px */
.info-columns {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1228px;
  margin: 0 auto;
}

/* Left column: map */
.info-map-col {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  width: 545px;
  overflow: hidden;
}

.info-map-frame {
  border: 5px solid #FFE600;
  height: 392px;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.info-map-label {
  font-size: 32px;
  color: #F9FAF7;
  text-align: center;
}

/* Right column: info panel */
.info-panel {
  background: #181C18;
  border: 3px solid #FFE600;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
  padding: 15px 0;
  width: 600px;
}

.info-item--center {
  font-size: 30px;
  color: #F9FAF7;
  text-align: center;
  width: 100%;
}

/* 詳細パネルが上、地図が下の縦並び */
@media (max-width: 1279px) {
  .info-columns {
    flex-direction: column;
    gap: 40px;
    width: 100%;
    max-width: 600px;
  }
  .info-map-col,
  .info-panel {
    width: 100%;
  }
  .info-panel {
    order: -1;
  }
}

@media (max-width: 767px) {
  .bottom-badge-row {
    margin-bottom: 32px;
  }
  .info-columns {
    gap: 28px;
  }
  .info-map-frame {
    height: 260px;
    border-width: 4px;
  }
  .info-map-label {
    font-size: 20px;
  }
  .info-panel {
    gap: 20px;
    padding: 16px 0;
  }
  .info-item--center {
    font-size: 20px;
  }
}
</style>
