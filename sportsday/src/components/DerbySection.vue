<script setup>
import SectionBadge from './SectionBadge.vue'
</script>

<template>
  <section class="section section--derby">
    <SectionBadge variant="blue-on-white">メンターダービー</SectionBadge>
    <div class="derby-body">
      <!-- <p class="derby-description">
        全競技の勝者を予想して、1位を当てるゲーム!予想を当ててポイントをGETしよう!
      </p>
      <div class="derby-btns">
        <a class="cta-btn" href="#">参加はこちらから</a>
        <a class="howto-btn" href="#">?</a>
      </div> -->
      <p class="derby-prerelease">
        乞うご期待！
      </p>
      
    </div>
  </section>
</template>

<style scoped>
.section--derby {
  padding-top: 0;
}

/* バッジとの間隔も、中の要素同士の間隔も同じ --derby-gap にそろえる */
.derby-body {
  --derby-gap: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--derby-gap);
  margin: var(--derby-gap) 0 70px;
}

.derby-description {
  font-size: 36px;
  line-height: 1.4;
  color: #f9faf7;
  text-align: left;
  width: 100%;
  max-width: 952px;
  margin: 50px 0;
}
.derby-prerelease {
  font-size: 36px;
  line-height: 1.4;
  color: #f9faf7;
  text-align: center;
  width: 100%;
  max-width: 952px;
  margin: 50px 0;
}

.cta-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 40px;
  background: #f9faf7;
  border: 3px solid #aaff00;
  border-radius: 2px;
  font-family: "RocknRoll One", sans-serif;
  font-size: 40px;
  color: #181c18;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  margin: 0 20px;
}
.howto-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 60px;
  height: 60px;
  padding: 0;
  background: #f9faf7;
  border: 3px solid #aaff00;
  border-radius: 50%;
  line-height: 1;
  font-family: "RocknRoll One", sans-serif;
  font-size: 40px;
  color: #181c18;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
}

@media (max-width: 1279px) {
  .derby-body {
    --derby-gap: 48px;
  }
  .derby-description {
    font-size: 28px;
  }
  .cta-btn {
    font-size: 32px;
  }
  .howto-btn {
    width: 48px;
    height: 48px;
    font-size: 32px;
  }
}

@media (max-width: 767px) {
  .derby-body {
    --derby-gap: 28px;
  }
  .derby-description {
    font-size: 18px;
  }
  .cta-btn {
    padding: 8px 24px;
    font-size: 22px;
  }
  .howto-btn {
    width: 33px;
    height: 33px;
    font-size: 22px;
  }
}
</style>
