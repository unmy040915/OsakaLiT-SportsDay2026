<script setup>
import { ref, computed } from 'vue'
import { useElementSize } from '@/composables/useElementSize'

const props = defineProps({
  width: { type: Number, required: true },
  height: { type: Number, required: true },
  minScale: { type: Number, default: 0 },
})

const outerRef = ref(null)
const { width: outerWidth } = useElementSize(outerRef, { width: props.width, height: props.height })
const scale = computed(() => Math.min(1, outerWidth.value / props.width))
</script>

<template>
  <div
    ref="outerRef"
    class="fit"
    :style="{
      maxWidth: `${width}px`,
      minWidth: `${width * minScale}px`,
      height: `${height * scale}px`,
    }"
  >
    <!-- 等倍時は transform を付けない（子の z-index を親の重なり順に参加させるため） -->
    <div
      class="fit__inner"
      :style="{
        width: `${width}px`,
        height: `${height}px`,
        transform: scale < 1 ? `scale(${scale})` : 'none',
        '--fit-scale': scale,
      }"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped>
.fit {
  width: 100%;
  margin: 0 auto;
}

.fit__inner {
  position: relative;
  transform-origin: 0 0;
}
</style>
