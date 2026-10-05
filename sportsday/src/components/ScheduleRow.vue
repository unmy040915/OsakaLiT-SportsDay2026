<script setup>
import { ref } from 'vue'

const props = defineProps({
  time: { type: String, required: true },
  label: { type: String, required: true },
  variant: { type: String, default: 'filled' }, // 'outline' | 'filled'
  hasArrow: { type: Boolean, default: false },
  description: { type: String, default: '' },
})

const isOpen = ref(false)
function toggle() {
  if (props.hasArrow) isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="schedule-row" :class="{ 'schedule-row--outline': variant === 'outline' }">
    <span class="schedule-time">{{ time }}</span>
    <div
      class="schedule-event"
      :class="variant === 'outline' ? 'schedule-event--outline' : 'schedule-event--filled'"
    >
      <button
        v-if="hasArrow"
        type="button"
        class="schedule-event-inner schedule-event-toggle"
        :aria-expanded="isOpen"
        @click="toggle"
      >
        {{ label }}
        <span class="event-arrow" :class="{ 'is-open': isOpen }" aria-hidden="true">
          <svg width="26" height="26" viewBox="0 0 25.6719 25.6094" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.6777 0.208008L25.6719 0.416992L24.583 21.2676L24.3555 25.6094L20.0479 25.0225L0 22.2861L1.08203 14.3594L16.8203 16.5068L17.6836 0L21.6777 0.208008Z" fill="#F9FAF7"/>
          </svg>
        </span>
      </button>
      <div v-else class="schedule-event-inner">{{ label }}</div>
      <Transition name="expand">
        <p v-if="isOpen && description" class="schedule-description">{{ description }}</p>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.schedule-row {
  position: relative;
}

.schedule-time {
  position: absolute;
  left: 24px;
  top: 16px;
  font-size: 36px;
  color: #F9FAF7;
  white-space: nowrap;
  z-index: 1;
}

.schedule-event {
  display: flex;
  flex-direction: column;
  min-height: 84px;
  font-size: 36px;
  color: #F9FAF7;
}

.schedule-event--outline {
  margin-top: -8px;
  margin-bottom: -8px;
  background: #181C18;
  border: 8px solid #374BFF;
}

.schedule-event--filled {
  background: #374BFF;
  border: 3px solid #F9FAF7;
  border-radius: 4px;
}

.schedule-event-inner {
  height: 84px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 37px;
  position: relative;
  flex-shrink: 0;
}

/* button のブラウザ既定スタイルを消して、div 版と同じ見た目にそろえる */
.schedule-event-toggle {
  width: 100%;
  background: none;
  border: 0;
  font: inherit;
  color: inherit;
  cursor: pointer;
}

.schedule-event-toggle:focus-visible {
  outline: 3px solid #ffe600;
  outline-offset: -6px;
}

.event-arrow {
  position: absolute;
  right: 48px;
  top: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-50%) rotate(41.62deg);
  transition: transform 0.3s ease;
}

.event-arrow.is-open {
  transform: translateY(-50%) rotate(221.62deg);
}

.schedule-description {
  font-size: 20px;
  line-height: 1.5;
  color: #F9FAF7;
  text-align: left;
  padding: 0 48px 24px 177px;
}

.expand-enter-active,
.expand-leave-active {
  transition: opacity 0.25s ease, max-height 0.3s ease;
  overflow: hidden;
  max-height: 200px;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  max-height: 0;
}

@media (max-width: 1279px) {
  .schedule-time,
  .schedule-event {
    font-size: 28px;
  }
  .schedule-time {
    top: 20px;
  }
  .schedule-description {
    padding-left: 140px;
  }
}

/* SP: 時刻は帯の左端。競技名は帯の中央（左右の余白を同じにする）に置き、長ければ折り返す */
@media (max-width: 767px) {
  .schedule-time {
    left: 12px;
    top: 0;
    height: 62px;
    display: flex;
    align-items: center;
    font-size: 14px;
    pointer-events: none;
  }
  .schedule-row--outline .schedule-time {
    height: 66px;
  }
  .schedule-event {
    min-height: 56px;
    font-size: 16px;
  }
  .schedule-event--outline {
    margin: 0;
    border-width: 5px;
  }
  .schedule-event-inner {
    height: auto;
    min-height: 56px;
    padding: 8px 88px;
    line-height: 1.4;
    text-align: center;
  }
  .event-arrow {
    right: 16px;
    width: 20px;
    height: 20px;
  }
  .event-arrow svg {
    width: 16px;
    height: 16px;
  }
  .schedule-description {
    padding: 0 16px 16px;
    font-size: 15px;
  }
}
</style>
