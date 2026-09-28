<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  width: { type: Number, required: true },
  height: { type: Number, required: true },
  minScale: { type: Number, default: 0 },
})

const outerRef = ref(null)
const scale = ref(1)
let observer

onMounted(() => {
  observer = new ResizeObserver(([entry]) => {
    scale.value = Math.min(1, entry.contentRect.width / props.width)
  })
  observer.observe(outerRef.value)
})
onUnmounted(() => observer?.disconnect())
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
