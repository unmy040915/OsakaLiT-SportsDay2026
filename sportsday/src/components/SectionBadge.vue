<script setup>
defineProps({
  // main.css の .badge--* の * 部分（例: "lime-on-dark", "blue-bg"）
  variant: { type: String, required: true },
})
</script>

<template>
  <div class="bottom-badge-row">
    <div class="section-badge" :class="`badge--${variant}`">
      <slot />
    </div>
  </div>
</template>
