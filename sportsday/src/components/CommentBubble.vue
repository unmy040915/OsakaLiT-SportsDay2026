<script setup>
import { computed } from 'vue'

const props = defineProps({
  color: { type: String, required: true },
  tab: { type: String, default: 'left' } // 'left' | 'right'
})

const pathD = computed(() =>
  props.tab === 'left'
    // タブ左上: 赤団・黄団
    ? 'M2,22 H24 L58,2 L104,22 H408 V198 H2 Z'
    // タブ右上: 青団・緑団
    : 'M2,24 H289 L338,2 L370,24 H408 V198 H2 Z'
)
</script>

<template>
  <svg
    viewBox="0 0 410 200"
    preserveAspectRatio="none"
    overflow="visible"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path :d="pathD" fill="#F9FAF7" :stroke="color" stroke-width="4" />
  </svg>
</template>
