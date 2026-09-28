import { ref, onMounted, onUnmounted } from 'vue'

// 要素の表示サイズ（padding を除いた中身の幅・高さ）を追いかける
export function useElementSize(target, initial = { width: 0, height: 0 }) {
  const width = ref(initial.width)
  const height = ref(initial.height)
  let observer

  onMounted(() => {
    observer = new ResizeObserver(([entry]) => {
      width.value = entry.contentRect.width
      height.value = entry.contentRect.height
    })
    observer.observe(target.value)
  })
  onUnmounted(() => observer?.disconnect())

  return { width, height }
}
