<script setup>
defineProps({
  label: { type: String, required: true },
  value: { type: String, required: true },
  note: { type: String, default: '' },
  warn: { type: String, default: '' },
})
</script>

<template>
  <div class="info-group">
    <div class="info-row">
      <span class="info-key">{{ label }}</span>
      <span class="info-val">{{ value }}</span>
    </div>
    <p v-if="note" class="info-sub">{{ note }}</p>
    <p v-if="warn" class="info-warn">{{ warn }}</p>
  </div>
</template>

<style scoped>
.info-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  padding: 0 30px;
  width: 100%;
}

.info-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 30px;
  white-space: nowrap;
}

.info-key {
  color: #FFE600;
}

.info-val {
  color: #F9FAF7;
}

.info-sub {
  font-size: 30px;
  color: #F9FAF7;
  text-align: right;
  width: 100%;
}

.info-warn {
  font-size: 18px;
  color: #F9FAF7;
  text-align: center;
  width: 100%;
  line-height: 1.5;
}

@media (max-width: 767px) {
  .info-group {
    padding: 0 16px;
  }
  .info-row {
    gap: 12px;
    font-size: 16px;
  }
  .info-key {
    flex-shrink: 0;
  }
  .info-val {
    white-space: normal;
    text-align: right;
  }
  .info-sub {
    font-size: 16px;
  }
  .info-warn {
    font-size: 14px;
  }
}
</style>
