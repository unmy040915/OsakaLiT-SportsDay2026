function seededRand(seed) {
  let s = seed
  return () => (s = (s * 9301 + 49297) % 233280) / 233280
}

export const defaultOptions = {
  cellSize: 90, // グリッドのセル幅 (px)
  wobble: 6, // グリッド線の揺れ幅 (px)
  background: '#161c16',
  gridColor: 'rgba(255,255,255,0.55)',
  gridWidth: 1.2,
  gridSeed: 42,
  noiseSeed: 99,
  noiseDensity: 1, // 傷の本数の倍率（0 で傷なし）
}

/**
 * 揺れたグリッド＋斜めの傷テクスチャを ctx に描画する。
 * w, h は CSS ピクセル（DPR の setTransform は呼び出し側で済ませておく）
 */
export function drawScratchedGrid(ctx, w, h, options = {}) {
  const { cellSize, wobble, background, gridColor, gridWidth, gridSeed, noiseSeed, noiseDensity } = {
    ...defaultOptions,
    ...options,
  }
  const rand = seededRand(gridSeed)
  const segments = 12
  const cols = Math.ceil(w / cellSize)
  const rows = Math.ceil(h / cellSize)

  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = background
  ctx.fillRect(0, 0, w, h)

  // 傷はグリッドの下（参照画像ではグリッド線が傷で途切れていない）
  if (noiseDensity > 0) drawNoise(ctx, w, h, noiseSeed, noiseDensity)

  ctx.strokeStyle = gridColor
  ctx.lineWidth = gridWidth
  ctx.lineCap = 'butt'

  // 縦線・横線
  for (let i = 0; i <= cols; i++) {
    ctx.beginPath()
    for (let s = 0; s <= segments; s++) {
      const y = (h / segments) * s
      const x = cellSize * i + (rand() - 0.5) * wobble
      s === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
    }
    ctx.stroke()
  }
  for (let j = 0; j <= rows; j++) {
    ctx.beginPath()
    for (let s = 0; s <= segments; s++) {
      const x = (w / segments) * s
      const y = cellSize * j + (rand() - 0.5) * wobble
      s === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
    }
    ctx.stroke()
  }
}
function drawNoise(ctx, w, h, seed, density) {
  const rand = seededRand(seed)
  ctx.lineCap = 'round'
  const A = 0.19 * Math.PI // 約34°。canvasはy下向きなので +A が「右下がり」

  // 密度ムラ用のホットスポット（参照画像は傷が密なセルと空のセルがはっきり分かれる）
  const spots = Array.from({ length: 7 }, () => ({
    x: rand() * w,
    y: rand() * h,
    r: Math.min(w, h) * (0.15 + rand() * 0.2),
  }))
  function samplePos() {
    if (rand() < 0.35) return [rand() * w, rand() * h]
    const sp = spots[Math.floor(rand() * spots.length)]
    const g = () => rand() + rand() + rand() - 1.5 // 簡易ガウス
    return [sp.x + g() * sp.r, sp.y + g() * sp.r]
  }

  // 1回のスワイプ = ほぼ平行な数本の束。線内は両端フェード＋途中で濃淡
  function bundle(count, baseAng, angSpread, lenMin, lenMax, opMin, opMax, width, perBundle) {
    for (let n = 0; n < count; n++) {
      const [cx, cy] = samplePos()
      const ang = baseAng + (rand() - 0.5) * angSpread
      const len = lenMin + rand() * (lenMax - lenMin)
      const k = 1 + Math.floor(rand() * perBundle)
      const dx = Math.cos(ang)
      const dy = Math.sin(ang)
      const nx = -dy // 法線方向（束の中で線をずらす）
      const ny = dx
      for (let i = 0; i < k; i++) {
        const off = (rand() - 0.5) * 14
        const shift = (rand() - 0.5) * len * 0.4
        const l = len * (0.6 + rand() * 0.4)
        const x0 = cx + nx * off + dx * shift
        const y0 = cy + ny * off + dy * shift
        const x1 = x0 - (dx * l) / 2
        const y1 = y0 - (dy * l) / 2
        const x2 = x0 + (dx * l) / 2
        const y2 = y0 + (dy * l) / 2
        const op = opMin + rand() * (opMax - opMin)
        const g = ctx.createLinearGradient(x1, y1, x2, y2)
        g.addColorStop(0, 'rgba(255,255,255,0)')
        g.addColorStop(0.15 + rand() * 0.2, `rgba(255,255,255,${op})`)
        g.addColorStop(0.55 + rand() * 0.3, `rgba(255,255,255,${op * (0.3 + rand() * 0.7)})`)
        g.addColorStop(1, 'rgba(255,255,255,0)')
        ctx.strokeStyle = g
        ctx.lineWidth = width * (0.7 + rand() * 0.6)
        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.stroke()
      }
    }
  }

  // 先細りの短い筆致（中央が太く両端が尖る。bend で軽く湾曲）
  function taperedStroke(x1, y1, ang, len, wmax, peak, bend, alpha) {
    const dx = Math.cos(ang)
    const dy = Math.sin(ang)
    const nx = -dy
    const ny = dx
    const N = 10
    const pt = (t) => {
      // 弦の中点を法線方向に bend だけ膨らませた2次ベジェ
      const b = 4 * bend * t * (1 - t)
      return [x1 + dx * len * t + nx * b, y1 + dy * len * t + ny * b]
    }
    const width = (t) => {
      const u = t < peak ? t / peak : (1 - t) / (1 - peak)
      return wmax * Math.pow(Math.max(u, 0), 0.35) // 先端だけ細る（葉っぱ型にしない）
    }
    const shape = (scaleW) => {
      ctx.beginPath()
      for (let i = 0; i <= N; i++) {
        const t = i / N
        const [px, py] = pt(t)
        const hw = (width(t) * scaleW) / 2
        i === 0 ? ctx.moveTo(px + nx * hw, py + ny * hw) : ctx.lineTo(px + nx * hw, py + ny * hw)
      }
      for (let i = N; i >= 0; i--) {
        const t = i / N
        const [px, py] = pt(t)
        const hw = (width(t) * scaleW) / 2
        ctx.lineTo(px - nx * hw, py - ny * hw)
      }
      ctx.closePath()
      ctx.fill()
    }
    // 参照画像の傷はエッジが柔らかいので、太く薄いハローの上に本体を重ねる
    ctx.fillStyle = `rgba(255,255,255,${alpha * 0.2})`
    shape(1.7)
    ctx.fillStyle = `rgba(255,255,255,${alpha})`
    shape(1)
  }

  // 短い傷・点。参照画像では「縦」だけでなく 横 / 縦 / 斜め2方向 の4系統があり、
  // 長さ・明るさ・太さ・形（先細り / 雫 / 二重線 / 破線 / 点）がばらつき、数個ずつ固まる
  function marks(count) {
    const dirs = [0, Math.PI / 2, A, -A]
    const dirW = [0.32, 0.36, 0.18, 0.14]
    const pickDir = () => {
      let r = rand()
      for (let i = 0; i < dirs.length; i++) {
        r -= dirW[i]
        if (r <= 0) return dirs[i]
      }
      return dirs[dirs.length - 1]
    }
    let last = null
    for (let n = 0; n < count; n++) {
      let x
      let y
      let ang
      if (last && rand() < 0.4) {
        // 直前の傷の近くに同方向で固める
        x = last.x + (rand() - 0.5) * 50
        y = last.y + (rand() - 0.5) * 50
        ang = last.ang + (rand() - 0.5) * 0.12
      } else {
        ;[x, y] = samplePos()
        ang = pickDir() + (rand() - 0.5) * 0.28
      }
      const len = 5 + Math.pow(rand(), 1.6) * 30 // 短いものが多め、たまに長い
      const op = 0.08 + Math.pow(rand(), 2) * 0.55 // 薄いものが大半、たまに明るい
      const wmax = 0.6 + op * 0.9 + rand() * 0.3 // 髪の毛程度。明るいほど僅かに太め
      const peak = 0.25 + rand() * 0.5 // 太さのピーク位置（左右非対称に）
      const bend = (rand() - 0.5) * len * 0.05 // ほぼ直線、ごく僅かに反る
      const kind = rand()

      if (kind < 0.1) {
        // 点
        ctx.fillStyle = `rgba(255,255,255,${op * 0.9})`
        ctx.beginPath()
        ctx.ellipse(x, y, 0.5 + rand() * 0.6, 0.6 + rand() * 1.2, ang, 0, Math.PI * 2)
        ctx.fill()
      } else if (kind < 0.25) {
        // 二重線（少しずれた平行な2本、2本目は短く薄い）
        const gap = 2 + rand() * 3
        const nx = -Math.sin(ang)
        const ny = Math.cos(ang)
        taperedStroke(x, y, ang, len, wmax, peak, bend, op)
        const shift = (rand() - 0.5) * len * 0.5
        taperedStroke(
          x + nx * gap + Math.cos(ang) * shift,
          y + ny * gap + Math.sin(ang) * shift,
          ang,
          len * (0.5 + rand() * 0.5),
          wmax * 0.8,
          peak,
          bend * 0.5,
          op * (0.5 + rand() * 0.5),
        )
      } else if (kind < 0.38) {
        // 破線（同一直線上に 2〜3 個、間隔あり）
        const pieces = 2 + Math.floor(rand() * 2)
        let cx = x
        let cy = y
        for (let i = 0; i < pieces; i++) {
          const l = len * (0.4 + rand() * 0.6)
          taperedStroke(cx, cy, ang, l, wmax * (0.7 + rand() * 0.5), peak, 0, op * (0.6 + rand() * 0.4))
          const step = l + 3 + rand() * 8
          cx += Math.cos(ang) * step
          cy += Math.sin(ang) * step
        }
      } else {
        // 単発の先細り。たまに片端に膨らみ（ピークを端に寄せる）
        const p = rand() < 0.2 ? (rand() < 0.5 ? 0.12 : 0.88) : peak
        taperedStroke(x, y, ang, len, wmax, p, bend, op)
      }
      last = { x, y, ang }
    }
  }

  // 画面サイズに比例して本数を決める（1000x800 基準）
  const scale = ((w * h) / (1000 * 800)) * density
  bundle(Math.round(80 * scale), A, 0.06 * Math.PI, 150, 500, 0.07, 0.2, 1.2, 4) // メイン: 長い右下がりハッチ
  bundle(Math.round(40 * scale), -A, 0.06 * Math.PI, 120, 400, 0.05, 0.16, 1.1, 3) // サブ: 逆斜めでクロスハッチ
  bundle(Math.round(140 * scale), A, 0.1 * Math.PI, 20, 80, 0.08, 0.22, 1.0, 2) // 短い斜めのかすれ
  marks(Math.round(380 * scale))
}
