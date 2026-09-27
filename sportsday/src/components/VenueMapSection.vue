<script setup>
import { venueTeams } from '@/data/venue'
</script>

<template>
  <section class="section section--venue">
    <div class="venue-map-wrap">
      <!-- Background SVG map (952×585.846) -->
      <img class="venue-map-bg" src="/assets/venue/border-rect.svg" alt="" />

      <!-- Title overlay -->
      <p class="venue-title">会場　二色浜公園スポーツ広場</p>

      <!-- Court border overlay -->
      <div class="venue-court"></div>

      <!-- 音響テント overlay -->
      <div class="venue-tent">
        <img src="/assets/venue/tent.svg" class="venue-tent-bg" alt="" />
        <span class="venue-tent-label">音響テント</span>
      </div>

      <!-- Team badges overlay -->
      <div class="venue-teams">
        <span
          v-for="team in venueTeams"
          :key="team.key"
          class="venue-team-badge"
          :style="{ background: team.color }"
        >{{ team.label }}</span>
      </div>

      <!-- 荷物 badges overlay -->
      <div class="venue-luggage">
        <span
          v-for="team in venueTeams"
          :key="team.key"
          class="luggage-badge"
          :style="{ background: team.color }"
        >荷物</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section--venue {
  padding-top: 60px;
}

/* SVG-based map layout: 952×586px position:relative container */
.venue-map-wrap {
  position: relative;
  width: 952px;
  height: 586px;
  margin: 0 auto;
}

.venue-map-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.venue-title {
  position: absolute;
  left: 324.67px;
  top: 50.19px;
  width: 286.778px;
  font-size: 20px;
  color: #181C18;
  text-align: center;
  z-index: 1;
}

.venue-court {
  position: absolute;
  left: 148.51px;
  top: 113.69px;
  width: 633.984px;
  height: 330.819px;
  border: 2.5px solid #181C18;
  border-radius: 89px;
  z-index: 1;
}

.venue-tent {
  position: absolute;
  left: 411.04px;
  top: 465.85px;
  width: 113.39px;
  height: 56.695px;
  z-index: 1;
}

.venue-tent-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.venue-tent-label {
  position: absolute;
  left: 16.06px;
  top: 21.67px;
  font-size: 16px;
  color: #181C18;
  white-space: nowrap;
}

.venue-teams {
  position: absolute;
  left: 554.1px;
  top: 466.01px;
  display: flex;
  gap: 12px;
  z-index: 1;
}

.venue-team-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 37px;
  border-radius: 4px;
  font-size: 16px;
  color: #F8FDFE;
  font-family: 'RocknRoll One', sans-serif;
}

.venue-luggage {
  position: absolute;
  left: 557.2px;
  top: 511.75px;
  display: flex;
  gap: 19px;
  z-index: 1;
}

.luggage-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 28px;
  border-radius: 2px;
  font-size: 14px;
  color: #fff;
  font-family: 'RocknRoll One', sans-serif;
}
</style>
