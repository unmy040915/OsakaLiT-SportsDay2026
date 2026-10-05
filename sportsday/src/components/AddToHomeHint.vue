<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const STORAGE_KEY = 'a2hs-hint-dismissed'

const visible = ref(false)
const isIos = ref(false)
// Android Chrome などが発火する beforeinstallprompt を保持して、ボタンから呼び出す
const installEvent = ref(null)

function readDismissed() {
  try {
    return localStorage.getItem(STORAGE_KEY) === '1'
  } catch {
    return false
  }
}

function dismiss() {
  visible.value = false
  try {
    localStorage.setItem(STORAGE_KEY, '1')
  } catch {
    // 保存できなくても今回の表示を閉じるだけ
  }
}

async function install() {
  const event = installEvent.value
  if (!event) return
  installEvent.value = null
  event.prompt()
  const { outcome } = await event.userChoice
  if (outcome === 'accepted') dismiss()
}

function onBeforeInstallPrompt(e) {
  e.preventDefault()
  installEvent.value = e
}

function onAppInstalled() {
  dismiss()
}

onMounted(() => {
  const isStandalone =
    window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true
  const isTouch = window.matchMedia('(pointer: coarse)').matches
  // すでにホーム画面から開いている / PC / 一度閉じた場合は出さない
  if (isStandalone || !isTouch || readDismissed()) return

  const ua = window.navigator.userAgent
  isIos.value =
    /iPhone|iPad|iPod/.test(ua) || (ua.includes('Macintosh') && navigator.maxTouchPoints > 1)

  window.addEventListener('beforeinstallprompt', onBeforeInstallPrompt)
  window.addEventListener('appinstalled', onAppInstalled)
  visible.value = true
})

onBeforeUnmount(() => {
  window.removeEventListener('beforeinstallprompt', onBeforeInstallPrompt)
  window.removeEventListener('appinstalled', onAppInstalled)
})
</script>

<template>
  <aside v-if="visible" class="a2hs" aria-label="ホーム画面に追加のご案内">
    <div class="a2hs-body">
      <p class="a2hs-title">ホーム画面に追加すると便利！</p>
      <p v-if="installEvent" class="a2hs-text">当日すぐスケジュールを確認できます。</p>
      <p v-else-if="isIos" class="a2hs-text">
        共有ボタンから「ホーム画面に追加」を選んでね。
      </p>
      <p v-else class="a2hs-text">ブラウザのメニューから「ホーム画面に追加」を選んでね。</p>
      <button v-if="installEvent" type="button" class="a2hs-btn" @click="install">
        ホーム画面に追加
      </button>
    </div>
    <button type="button" class="a2hs-close" aria-label="この案内を閉じる" @click="dismiss">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" stroke-width="2.5" stroke-linecap="square" />
      </svg>
    </button>
  </aside>
</template>

<style scoped>
.a2hs {
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 16px 20px;
  background: #181c18;
  border: 3px solid #ffe600;
  color: #f9faf7;
}

.a2hs-body {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
}

.a2hs-title {
  /* 右上の閉じるボタンと重ならないようにする */
  padding-right: 32px;
  font-size: 16px;
  color: #ffe600;
}

.a2hs-text {
  font-size: 14px;
  line-height: 1.5;
}

.a2hs-btn {
  align-self: flex-end;
  margin-top: 4px;
  padding: 6px 20px;
  background: #ffe600;
  border: 3px solid #ffe600;
  border-radius: 6px;
  font: inherit;
  font-size: 16px;
  color: #181c18;
  cursor: pointer;
}

.a2hs-close {
  position: absolute;
  /* ×の右端を、カードの右パディング(20px)＝追加ボタンの右端に揃える */
  top: 8px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 40px;
  height: 36px;
  background: none;
  border: 0;
  color: #f9faf7;
  cursor: pointer;
}

.a2hs-btn:focus-visible,
.a2hs-close:focus-visible {
  outline: 3px solid #f9faf7;
  outline-offset: 2px;
}
</style>
