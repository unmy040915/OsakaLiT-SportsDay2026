<script setup>
import SectionBadge from './SectionBadge.vue'
import { venueTeams } from '@/data/venue'
</script>

<template>
  <section class="section section--venue">
    <SectionBadge variant="blue-bg">配置図</SectionBadge>
    <!-- 位置は枠内（936×569.846）に対する%。PCでは Figma の座標と一致する -->
    <div class="venue-map">
      <p class="venue-title">会場　二色浜公園スポーツ広場</p>

      <div class="venue-court"></div>

      <div class="venue-tent">
        <span class="venue-tent-label">音響テント</span>
      </div>

      <div class="venue-teams">
        <span
          v-for="team in venueTeams"
          :key="team.key"
          class="venue-team-badge"
          :style="{ background: team.color }"
        >{{ team.label }}</span>
      </div>

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
.bottom-badge-row {
  margin-bottom: 70px;
}

.venue-map {
  position: relative;
  width: 100%;
  max-width: 952px;
  aspect-ratio: 952 / 585.846;
  margin: 0 auto;
  background: #F9FAF7;
  border: 8px solid #AAFF00;
  /* バッジや文字を「この枠自体の幅」に対して連続的にスケールさせ、
     ブレークポイントの境目でサイズがカクッと変わらないようにする。
     1cqw = 枠線の内側(PCで936px)の1%。PCで Figma の px と一致するよう 936 基準で換算 */
  container-type: inline-size;
}

.venue-title {
  position: absolute;
  left: 33.832%;
  top: 7.404%;
  width: 30.639%;
  font-size: clamp(12px, 2.1368cqw, 20px);
  color: #181C18;
  text-align: center;
}

.venue-court {
  position: absolute;
  left: 15.012%;
  top: 18.547%;
  width: 67.733%;
  height: 58.054%;
  border: 2.5px solid #181C18;
  /* = 89px（PC）。幅に合わせて角丸も縮む */
  border-radius: 14.038% / 26.903%;
}

.venue-tent {
  position: absolute;
  left: 43.06%;
  top: 80.346%;
  width: 12.114%;
  height: 9.949%;
  background: #F9FAF7;
  border: 2px solid #181C18;
  border-radius: 20px;
}

.venue-tent-label {
  position: absolute;
  /* テント枠(PCで内側 109.39×52.695px)に対する% にして、枠が縮んでも位置関係を保つ */
  left: 12.853%;
  top: 37.328%;
  font-size: clamp(10px, 1.7094cqw, 16px);
  color: #181C18;
  white-space: nowrap;
}

.venue-teams {
  position: absolute;
  left: 58.344%;
  top: 80.374%;
  display: flex;
  gap: clamp(3px, 1.2821cqw, 12px);
}

.venue-team-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  width: clamp(26px, 5.8761cqw, 55px);
  height: clamp(18px, 3.953cqw, 37px);
  border-radius: clamp(2px, 0.4274cqw, 4px);
  font-size: clamp(11px, 1.7094cqw, 16px);
  color: #F8FDFE;
  font-family: 'RocknRoll One', sans-serif;
  white-space: nowrap;
}

.venue-luggage {
  position: absolute;
  left: 58.675%;
  top: 88.401%;
  display: flex;
  gap: clamp(3px, 2.0299cqw, 19px);
}

.luggage-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  width: clamp(26px, 5.1282cqw, 48px);
  height: clamp(16px, 2.9915cqw, 28px);
  border-radius: clamp(1px, 0.2137cqw, 2px);
  font-size: clamp(10px, 1.4957cqw, 14px);
  color: #fff;
  font-family: 'RocknRoll One', sans-serif;
  white-space: nowrap;
}

/* SP: 図は画面幅に合わせ、文字とバッジだけ読めるサイズを保つ */
@media (max-width: 767px) {
  .venue-map {
    aspect-ratio: 952 / 720;
    border-width: 4px;
  }
  .venue-title {
    left: 0;
    width: 100%;
  }
  .venue-court {
    border-width: 1.5px;
  }
  .venue-tent {
    left: auto;
    right: calc(100% - 58.344% + 8px);
    width: auto;
    height: auto;
    padding: 4px 6px;
    border-width: 1.5px;
    border-radius: 8px;
  }
  .venue-tent-label {
    position: static;
    display: block;
    font-size: 11px;
  }
  /* 団バッジと荷物バッジの列をそろえる（幅は clamp() 側で自然に揃う） */
  .venue-luggage {
    left: 58.344%;
  }
}
</style>
