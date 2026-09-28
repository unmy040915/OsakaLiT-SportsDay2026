<script setup>
defineProps({
  label: { type: String, required: true },
  members: { type: Array, required: true },
  width: { type: Number, required: true },
})
</script>

<template>
  <div class="staff-dept" :style="{ '--dept-w': `${width}px` }">
    <div class="dept-label">{{ label }}</div>
    <div class="dept-members">
      <span v-for="name in members" :key="name">{{ name }}</span>
    </div>
  </div>
</template>

<style scoped>
.staff-dept {
  width: var(--dept-w);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;
}

.dept-label {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  background: #181C18;
  border: 5px solid #F9FAF7;
  font-size: 32px;
  color: #F9FAF7;
  white-space: nowrap;
  width: 100%;
}

.dept-members {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  font-size: 30px;
  color: #000;
  width: 100%;
  text-align: center;
}

.dept-members span {
  white-space: nowrap;
}

@media (max-width: 1279px) {
  .dept-label {
    font-size: 26px;
  }
  .dept-members {
    font-size: 24px;
  }
}

@media (max-width: 767px) {
  .dept-label {
    padding: 8px 10px;
    border-width: 4px;
    font-size: 18px;
  }
  .dept-members {
    font-size: 18px;
  }
}
</style>
