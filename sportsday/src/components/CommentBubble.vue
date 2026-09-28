<script setup>
import { ref, computed } from 'vue'
import { useElementSize } from '@/composables/useElementSize'

const props = defineProps({
  color: { type: String, required: true },
  tab: { type: String, default: 'left' } // 'left' | 'right'
})

const rootRef = ref(null)
const { width: w, height: h } = useElementSize(rootRef, { width: 410, height: 200 })

// 実寸で描くので、高さが伸びても枠線の太さとタブの形は変わらない
const pathD = computed(() =>
  props.tab === 'left'
    // タブ左上: 赤団・黄団
    ? `M2,22 H24 L58,2 L104,22 H${w.value - 2} V${h.value - 2} H2 Z`
    // タブ右上: 青団・緑団
    : `M2,24 H${w.value - 121} L${w.value - 72},2 L${w.value - 40},24 H${w.value - 2} V${h.value - 2} H2 Z`
)
</script>

<template>
  <div ref="rootRef" class="bubble">
    <svg
      class="bubble__shape"
      :viewBox="`0 0 ${w} ${h}`"
      overflow="visible"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path :d="pathD" fill="#F9FAF7" :stroke="color" stroke-width="4" />
    </svg>
    <div class="bubble__content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.bubble {
  position: relative;
  height: 100%;
}

.bubble__shape {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.bubble__content {
  position: relative;
}
</style>
