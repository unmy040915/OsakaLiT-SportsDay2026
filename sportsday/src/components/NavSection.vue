<script setup>
const navItems = [
  { number: '01', label: 'スケジュール', id: 'schedule' },
  { number: '02', label: '当日までに確認', id: 'preinfo' },
  { number: '03', label: '配置図', id: 'venue' },
  { number: '04', label: '団長・副団長', id: 'teams' },
  { number: '05', label: 'メンターダービー', id: 'derby' },
  { number: '06', label: '運営', id: 'staff' },
]
</script>

<template>
  <section class="section section--nav">
    <h2 class="nav-title">CHECK IT OUT</h2>
    <div class="nav-items">
      <a
        v-for="item in navItems"
        :key="item.number"
        class="nav-item"
        :href="`#${item.id}`"
      >
        <div class="nav-shadow"></div>
        <div class="nav-btn">{{ item.label }}</div>
        <div class="nav-badge">
          <img src="/assets/nav-badge.svg" alt="" width="45" height="25" />
          <span class="nav-badge-num">{{ item.number }}</span>
        </div>
      </a>
    </div>
  </section>
</template>

<style scoped>
.section--nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
  padding-top: 60px;
  padding-bottom: 60px;
}

.nav-title {
  font-family: 'Ceviche One', sans-serif;
  font-size: 64px;
  font-weight: 400;
  color: #ffe600;
  line-height: 1;
  white-space: nowrap;
}

.nav-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 21px;
}

/* Each nav item: relative container that holds shadow, btn, badge */
.nav-item {
  position: relative;
  width: 188px;  /* 184px button + 4px shadow offset */
  height: 73px;  /* 54px button + 19px shadow offset */
  text-decoration: none;
  cursor: pointer;
  flex-shrink: 0;
  transition: transform 0.15s ease;
}

.nav-item:hover {
  transform: scale(1.06);
}

/* White shadow box (bottom-right offset) */
.nav-shadow {
  position: absolute;
  left: 4px;
  top: 19px;
  width: 184px;
  height: 54px;
  background: #f9faf7;
  border: 1px solid #374bff;
}

/* Blue button */
.nav-btn {
  position: absolute;
  left: 0;
  top: 15px;
  width: 184px;
  height: 54px;
  background: #374bff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'RocknRoll One', sans-serif;
  font-size: 20px;
  color: #f9faf7;
  white-space: nowrap;
  z-index: 1;
}

/* Badge (number label in top-left) */
.nav-badge {
  position: absolute;
  left: 11px;
  top: 0;
  width: 45px;
  height: 25px;
  z-index: 2;
}

.nav-badge img {
  position: absolute;
  inset: 0;
  width: 45px;
  height: 25px;
  display: block;
}

.nav-badge-num {
  position: absolute;
  left: 10px;
  top: 1px;
  width: 24px;
  font-family: 'RocknRoll One', sans-serif;
  font-size: 16px;
  color: #000;
  text-align: center;
  line-height: 1.3;
}

@media (max-width: 1279px) {
  .nav-title {
    font-size: 48px;
  }

  .nav-items {
    gap: 16px;
  }
}

@media (max-width: 767px) {
  .nav-title {
    font-size: 36px;
  }

  /* スケジュール表と同じ幅（section の左右 16px を除いた全幅）に 2 列で収める */
  .nav-items {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px 12px;
    width: 100%;
  }

  .nav-item {
    width: 100%;
  }

  .nav-shadow,
  .nav-btn {
    width: calc(100% - 4px);
  }
}
</style>
