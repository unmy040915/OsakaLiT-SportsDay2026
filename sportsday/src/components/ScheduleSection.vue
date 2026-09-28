<script setup>
import ScheduleRow from './ScheduleRow.vue'
import { scheduleItems } from '@/data/schedule'
</script>

<template>
  <section class="section section--schedule">
      <div class="bottom-badge-row">
        <div class="section-badge badge--lime-on-dark">スケジュール</div>
      </div>
    <div class="schedule-date">
      <p>2026年10月10日(土)</p>
      <p>＠二色浜公園スポーツ広場</p>
    </div>
    <div class="schedule-table">
      <ScheduleRow
        v-for="item in scheduleItems"
        :key="item.time"
        :time="item.time"
        :label="item.label"
        :variant="item.variant"
        :has-arrow="item.hasArrow"
        :description="item.description"
      />
    </div>
  </section>
</template>

<style scoped>
.section--schedule {
  padding-top: 60px;
}

.bottom-badge-row {
  margin-bottom: 70px;
}

.schedule-date {
  width: 100%;
  max-width: 952px;
  margin: 0 auto 40px;
  text-align: center;
  font-size: 36px;
  color: #F9FAF7;
  line-height: normal;
}

.schedule-date p {
  margin: 0;
}

.schedule-table {
  display: flex;
  flex-direction: column;
  gap: 38px;
  width: 100%;
  max-width: 952px;
  margin: 0 auto;
}

@media (max-width: 1279px) {
  .schedule-date {
    font-size: 28px;
  }
}

@media (max-width: 767px) {
  .schedule-date {
    margin-bottom: 28px;
    font-size: 18px;
  }
  .schedule-table {
    gap: 20px;
  }
}
</style>
