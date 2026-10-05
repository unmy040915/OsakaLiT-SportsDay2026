<script setup>
defineProps({
  href: { type: String, required: true },
})

// 左から photoimage1, 3, 2 の順に並べる
const photos = [
  { src: '/assets/photoimage1.jpg', alt: '' },
  { src: '/assets/photoimage3.jpg', alt: '' },
  { src: '/assets/photoimage2.jpg', alt: '' },
]
</script>

<template>
  <div class="photo-card">
    <div class="photo-stack" aria-hidden="true">
      <figure v-for="(photo, i) in photos" :key="photo.src" class="polaroid" :class="`polaroid--${i + 1}`">
        <img :src="photo.src" :alt="photo.alt" loading="lazy" />
      </figure>
    </div>

    <div class="photo-body">
      <p class="photo-title">当日の写真をみんなでシェアしよう!</p>
      <p class="photo-lead">撮った写真はこのアルバムに入れてね</p>
      <div class="photo-actions">
        <a class="photo-btn photo-btn--fill" :href="href" target="_blank" rel="noopener noreferrer">写真を見る</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.photo-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  width: 1228px;
  margin: 60px auto 0;
  padding: 30px 50px;
  background: #181C18;
  border: 3px solid #FFE600;
}

/* 傾けたポラロイドを重ねる */
.photo-stack {
  position: relative;
  flex-shrink: 0;
  width: 400px;
  height: 230px;
}

.polaroid {
  position: absolute;
  top: 0;
  width: 170px;
  padding: 10px 10px 36px;
  background: #F9FAF7;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.5);
}

.polaroid img {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  background: #FFE600;
}

.polaroid--1 {
  left: 0;
  top: 14px;
  transform: rotate(-9deg);
}

.polaroid--2 {
  left: 115px;
  top: 0;
  transform: rotate(4deg);
  z-index: 1;
}

.polaroid--3 {
  left: 230px;
  top: 18px;
  transform: rotate(11deg);
  z-index: 2;
}

.photo-body {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  text-align: center;
  flex: 1;
}

.photo-title {
  font-size: 30px;
  color: #FFE600;
}

.photo-lead {
  font-size: 20px;
  color: #F9FAF7;
}

.photo-actions {
  display: flex;
  margin-top: 8px;
}

.photo-btn {
  padding: 8px 32px;
  border: 3px solid #FFE600;
  border-radius: 6px;
  font-size: 24px;
  text-decoration: none;
  white-space: nowrap;
  transition: opacity 0.2s;
}

.photo-btn:hover {
  opacity: 0.8;
}

.photo-btn--fill {
  background: #FFE600;
  color: #181C18;
}

@media (max-width: 1279px) {
  .photo-card {
    flex-direction: column;
    width: 100%;
    max-width: 600px;
    gap: 24px;
    padding: 28px 20px;
  }
}

@media (max-width: 767px) {
  .photo-card {
    margin-top: 32px;
  }
  .photo-stack {
    width: 290px;
    height: 170px;
  }
  .polaroid {
    width: 120px;
    padding: 7px 7px 26px;
  }
  .polaroid--2 {
    left: 85px;
  }
  .polaroid--3 {
    left: 170px;
  }
  .photo-title {
    font-size: 20px;
  }
  .photo-lead {
    font-size: 14px;
  }
  .photo-btn {
    padding: 6px 20px;
    font-size: 16px;
  }
}
</style>
