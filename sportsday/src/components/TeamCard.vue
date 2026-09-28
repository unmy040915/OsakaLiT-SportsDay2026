<script setup>
import FitScale from './FitScale.vue'
import CommentBubble from './CommentBubble.vue'

defineProps({
  team: { type: Object, required: true },
})

const px = (v) => `${v}px`

function partStyle(part) {
  return {
    left: px(part.left),
    top: px(part.top),
    width: px(part.width),
    height: px(part.height),
    zIndex: part.z,
    transform: part.rotate ? `rotate(${part.rotate}deg)` : undefined,
    scale: part.scale,
  }
}
</script>

<template>
  <!--
    PC: 各グループを --x / --y で絶対配置（Figma 38:511 の座標どおり）
    SP: グループを縦に並べ、黒ボックスと吹き出しが中身に合わせて伸びる
  -->
  <div
    class="tc-card"
    :class="{ 'tc-card--photos-right': team.photosRight }"
    :style="{ '--body-x': px(team.bodyX) }"
  >
    <div class="tc-body"></div>

    <div
      class="tc-badge-wrap"
      :style="{
        left: px(team.badge.left),
        top: px(team.badge.top),
        width: px(team.badge.width),
        height: px(team.badge.height),
      }"
    >
      <div class="tc-badge" :style="{ background: team.color }">{{ team.name }}</div>
    </div>

    <FitScale
      class="tc-head"
      :width="team.head.width"
      :height="team.head.height"
      :style="{ '--x': px(team.head.x), '--y': px(team.head.y) }"
    >
      <div
        class="tc-photos"
        :style="{
          '--x': px(team.photos.x),
          '--y': px(team.photos.y),
          '--w': px(team.photos.width),
          '--h': px(team.photos.height),
        }"
      >
        <img
          v-for="part in team.photos.parts"
          :key="part.src"
          :class="part.alt ? 'tc-photo' : 'tc-abs'"
          :style="partStyle(part)"
          :src="part.src"
          :alt="part.alt ?? ''"
        />
      </div>
      <div
        class="tc-labels"
        :style="{
          '--x': px(team.labels.x),
          '--y': px(team.labels.y),
          '--gap': px(team.labels.gap),
        }"
      >
        <div v-for="leader in team.leaders" :key="leader.role" class="tc-label">
          <p class="tc-role">{{ leader.role }}</p>
          <p class="tc-name">{{ leader.name }}</p>
        </div>
      </div>
    </FitScale>

    <div
      class="tc-bubble"
      :style="{
        '--x': px(team.bubble.x),
        '--y': px(team.bubble.y),
        '--w': px(team.bubble.width),
        '--h': px(team.bubble.height),
        '--pad': team.bubble.pad,
      }"
    >
      <CommentBubble :color="team.color" :tab="team.photosRight ? 'right' : 'left'">
        <p class="tc-comment">{{ team.comment }}</p>
      </CommentBubble>
    </div>
  </div>
</template>

<style scoped>
.tc-card {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 27px;
  overflow: visible;
}

/* 幅 --tc-body-w は親（TeamsSection）で全団共通に決める */
.tc-body {
  position: absolute;
  left: var(--body-x);
  top: 80px;
  bottom: 0;
  width: var(--tc-body-w);
  background: #181c18;
  border: 6px solid #f9faf7;
}

/* 写真と名前のかたまり。SPではこのまま縮小して、PC・タブレットと同じ配置を保つ */
.tc-head {
  position: absolute;
  left: var(--x);
  top: var(--y);
}

.tc-photos {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: var(--w);
  height: var(--h);
}

.tc-labels {
  position: absolute;
  left: var(--x);
  top: var(--y);
  z-index: 6;
  display: flex;
  flex-direction: column;
  gap: var(--gap);
  /* FitScale が写真ごと縮小しても文字サイズは固定に保つ。
     ただし際限なく拡大すると、極端に縮小した時に名前が周りの黒箱にはみ出して
     くっついて見えるので、拡大率には上限を設ける */
  transform: scale(clamp(1, calc(1 / var(--fit-scale, 1)), 1.8));
  transform-origin: 0 0;
}

/* 吹き出しはデザインの高さを最小にして、コメントが長ければ伸びる。行内で余った高さも埋める */
.tc-bubble {
  position: relative;
  flex-grow: 1;
  width: var(--w);
  min-height: var(--h);
  margin: var(--y) 0 0 var(--x);
  z-index: 2;
}

.tc-badge-wrap {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
}

.tc-badge {
  padding: 12px 24px;
  border: 5px solid #f9faf7;
  font-size: 32px;
  color: #f9faf7;
  transform: rotate(-10.47deg);
  transform-origin: center;
  white-space: nowrap;
}

.tc-abs {
  position: absolute;
  display: block;
  pointer-events: none;
}

.tc-photo {
  position: absolute;
  display: block;
  object-fit: contain;
  object-position: center;
  pointer-events: none;
}

.tc-role,
.tc-name {
  font-size: 20px;
  color: #f9faf7;
  line-height: 34px;
  margin: 0;
  white-space: nowrap;
}

.tc-comment {
  padding: var(--pad);
  font-size: 15px;
  color: #181c18;
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 1279px) {
  /* 黒ボックスの位置がカードごとに違うので、ボックスの中心を列の中心に合わせる */
  .tc-card {
    left: calc(50% - var(--body-x) - var(--tc-body-w) / 2);
  }
}

/* 団長カード: 写真と名前はタブレットと同じ配置のまま縮小し、下に吹き出し。黒ボックスと吹き出しは中身に合わせて伸びる */
@media (max-width: 767px) {
  .tc-card {
    left: 0;
    gap: 16px;
    padding: 112px 16px 24px;
  }
  .tc-body {
    left: 0;
    right: 0;
    top: 64px;
    bottom: 0;
    width: auto;
    height: auto;
    /* タブレット幅に近い横幅(768px弱)では、カード自体が600pxで頭打ちのまま
       このボックスだけ全幅に広がって急に太く見えるのを防ぐ */
    max-width: 520px;
    margin-left: auto;
    margin-right: auto;
    border-width: 4px;
  }
  .tc-badge {
    padding: 8px 18px;
    border-width: 4px;
    font-size: 24px;
  }
  .tc-head {
    position: relative;
    left: auto;
    top: auto;
    z-index: 1;
  }
  /* 画像とテキストの間を全団で少し詰める */
  .tc-labels {
    left: calc(var(--x) - 12px);
  }
  .tc-card--photos-right .tc-labels {
    left: calc(var(--x) + 12px);
  }
  .tc-bubble {
    flex-grow: 0;
    width: 100%;
    /* 黒箱(520px)より一回り小さくして、両端に黒い余白が残るようにする（PC/タブレットの見た目と同じ比率） */
    max-width: 420px;
    min-height: 0;
    margin: 0 auto;
  }
  .tc-comment {
    padding: 40px 18px 18px;
  }
}
</style>
