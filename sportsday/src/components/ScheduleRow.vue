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
  <div class="schedule-row">
    <span class="schedule-time">{{ time }}</span>
    <div
      class="schedule-event"
      :class="variant === 'outline' ? 'schedule-event--outline' : 'schedule-event--filled'"
      :style="hasArrow ? 'cursor: pointer' : ''"
      @click="toggle"
    >
      <div class="schedule-event-inner">
        {{ label }}
        <span v-if="hasArrow" class="event-arrow" :class="{ 'is-open': isOpen }">
          <svg width="26" height="26" viewBox="0 0 25.6719 25.6094" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.6777 0.208008L25.6719 0.416992L24.583 21.2676L24.3555 25.6094L20.0479 25.0225L0 22.2861L1.08203 14.3594L16.8203 16.5068L17.6836 0L21.6777 0.208008Z" fill="#F9FAF7"/>
          </svg>
        </span>
      </div>
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
</style>
