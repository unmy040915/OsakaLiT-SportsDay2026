<script setup>
import SectionBadge from './SectionBadge.vue'
import StaffBlob from './StaffBlob.vue'
import StaffDept from './StaffDept.vue'
import { staffRows } from '@/data/staff'
</script>

<template>
  <section class="section section--staff">
    <div class="staff-blob-container">
      <StaffBlob class="staff-blob-svg" />

      <div class="staff-content">
        <SectionBadge variant="blue-on-white" class="staff-heading">運営</SectionBadge>

        <div class="staff-depts">
          <div
            v-for="row in staffRows"
            :key="row.modifier"
            class="staff-dept-row"
            :class="`staff-dept-row--${row.modifier}`"
          >
            <StaffDept
              v-for="dept in row.depts"
              :key="dept.key"
              :label="dept.label"
              :members="dept.members"
              :width="dept.width"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section--staff {
  padding: 0;
  margin-top: 60px;
}

.staff-blob-container {
  position: relative;
  width: 100vw;
  left: 50%;
  transform: translateX(-50%);
  min-height: 1345px;
}

.staff-blob-svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
}

.staff-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px;
  padding: 242px 60px 320px;
}

/* 見出しとの間隔は .staff-content の gap で取るので、バッジ行の上余白は付けない */
.staff-heading {
  margin-top: 0;
}

.staff-depts {
  display: flex;
  flex-direction: column;
  gap: 70px;
}

.staff-dept-row {
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  width: 1228px;
}

@media (max-width: 1279px) {
  .staff-content {
    padding-left: 16px;
    padding-right: 16px;
  }
  /* 2行に分けていた班を1つのグリッドにまとめる */
  .staff-depts {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 56px 24px;
    width: 100%;
    max-width: 720px;
  }
  .staff-dept-row {
    display: contents;
  }
  .staff-depts .staff-dept {
    width: auto;
  }
}

@media (max-width: 767px) {
  /* 他のセクションと同じ上下余白（元の実装の見た目を維持） */
  .section--staff {
    padding-top: 40px;
    padding-bottom: 48px;
  }

  /* 1445px幅の形を375px幅に押し込むとギザギザが鋭くなりすぎるので、倍幅で描いて左右を切る */
  .staff-blob-container {
    overflow: hidden;
    /* PC用の高さ(1345px)を残すと、幅だけ狭くなったキャンバスに絵が
       縦に大きく引き伸ばされてしまうので、中身の高さに任せる */
    min-height: 0;
  }
  .staff-blob-svg {
    left: -50%;
    width: 200%;
  }

  .staff-content {
    padding-bottom: 240px;
  }
  .staff-depts {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 40px 16px;
  }
  /* 9班を2列に並べると最後の1つが余るので中央に置く */
  .staff-depts .staff-dept-row--bottom .staff-dept:last-child {
    grid-column: 1 / -1;
    justify-self: center;
    width: calc(50% - 8px);
  }
}
</style>
