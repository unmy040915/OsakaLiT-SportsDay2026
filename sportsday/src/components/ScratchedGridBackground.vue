<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { drawScratchedGrid, defaultOptions } from '@/lib/scratchedGrid'

const props = defineProps({
  cellSize: { type: Number, default: defaultOptions.cellSize },
  wobble: { type: Number, default: defaultOptions.wobble },
  background: { type: String, default: defaultOptions.background },
  gridColor: { type: String, default: defaultOptions.gridColor },
  gridWidth: { type: Number, default: defaultOptions.gridWidth },
  gridSeed: { type: Number, default: defaultOptions.gridSeed },
  noiseSeed: { type: Number, default: defaultOptions.noiseSeed },
  noiseDensity: { type: Number, default: defaultOptions.noiseDensity },
})

const canvasRef = ref(null)

function draw() {
  const canvas = canvasRef.value
  if (!canvas) return
  const dpr = window.devicePixelRatio || 1
  const w = window.innerWidth
  const h = window.innerHeight
  canvas.width = w * dpr
  canvas.height = h * dpr
  const ctx = canvas.getContext('2d')
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  drawScratchedGrid(ctx, w, h, props)
}

onMounted(() => {
  draw()
  window.addEventListener('resize', draw)
})
onUnmounted(() => {
  window.removeEventListener('resize', draw)
})
watch(props, draw)
</script>

<template>
  <canvas ref="canvasRef" class="bg-canvas"></canvas>
</template>

<style scoped>
.bg-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}
</style>
