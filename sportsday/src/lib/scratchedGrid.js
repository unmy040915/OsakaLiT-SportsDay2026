function seededRand(seed) {
  let s = seed
  return () => (s = (s * 9301 + 49297) % 233280) / 233280
}

/**
 * 1本の線に沿った滑らかな揺れを返す。周波数の違う正弦波を3本重ねることで、
 * 単純な正弦波の規則正しさも、点ごとに独立した乱数のギザギザも避ける。
 * cycles は線全体で基本波が何周するか（線の長さから決めるので、縦線と横線で
 * 波長がそろう）。返り値は t(0..1) を受け取り -amp..+amp の変位を返す関数。
 */
function makeWave(rand, amp, cycles) {
  const octaves = [
    { f: cycles * (0.8 + rand() * 0.4), a: 1 },
    { f: cycles * (2.1 + rand() * 0.8), a: 0.5 },
    { f: cycles * (4.2 + rand() * 1.2), a: 0.22 },
  ].map((o) => ({ ...o, p: rand() * Math.PI * 2 }))
  const norm = octaves.reduce((sum, o) => sum + o.a, 0)
  return (t) =>
    (amp / norm) * octaves.reduce((sum, o) => sum + o.a * Math.sin(o.f * t * Math.PI * 2 + o.p), 0)
}

/** 点列を中点経由の2次ベジェでつなぎ、角の出ない滑らかな線として描く */
function strokeSmooth(ctx, pts) {
  ctx.beginPath()
  ctx.moveTo(pts[0][0], pts[0][1])
  for (let i = 1; i < pts.length - 1; i++) {
    const [x0, y0] = pts[i]
    const [x1, y1] = pts[i + 1]
    ctx.quadraticCurveTo(x0, y0, (x0 + x1) / 2, (y0 + y1) / 2)
  }
  const last = pts[pts.length - 1]
  ctx.lineTo(last[0], last[1])
  ctx.stroke()
}

export const defaultOptions = {
  // 画面に出したい縦線の本数。cellSize = 画面幅 / verticalLines を自動計算し、
  // 線を半セル分ずらして引くので、どの画面幅でもこの本数が左右の端にくっつかずに並ぶ
  // （画面の端はセルの中心を通る / Figma のデザイン準拠）。
  // null にすると cellSize をそのまま使う固定サイズのグリッドになる。
  verticalLines: 7,
  cellSize: 90, // verticalLines が null のときのセル幅 (px)
  wobble: 4, // グリッド線の波の振幅。セル幅に比例してスケールする
  waveCells: 0.3, // 波ひとつぶんの長さ（セル何個ぶんか）。小さいほど細かく波打つ
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
  const opts = { ...defaultOptions, ...options }
  const { wobble, waveCells, background, gridColor, gridWidth, gridSeed, noiseSeed, noiseDensity } =
    opts
  const rand = seededRand(gridSeed)
  const segments = 24

  // 線は半セル分ずらして引く。画面の端が線ではなくセルの中心を通るので、
  // verticalLines 本の縦線が左右の端にくっつかずに並ぶ。
  // セルは正方形なので、横線の本数は高さから決まる。
  const cellSize = opts.verticalLines ? w / opts.verticalLines : opts.cellSize
  const cols = opts.verticalLines ?? Math.ceil(w / cellSize)
  const rows = Math.ceil(h / cellSize)

  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = background
  ctx.fillRect(0, 0, w, h)

  // 傷はグリッドの下（参照画像ではグリッド線が傷で途切れていない）
  // 傷の寸法はセル幅に連動させる（基準セル幅 90px）。セルが大きいほど傷も大きく・まばらに。
  if (noiseDensity > 0) drawNoise(ctx, w, h, noiseSeed, noiseDensity, cellSize / 90)

  ctx.strokeStyle = gridColor
  ctx.lineWidth = gridWidth
  ctx.lineCap = 'butt'

  // 縦線・横線。振幅も波長もセル幅に比例させ、どの画面幅でも同じ「なみなみ感」にする。
  const waveAmp = wobble * (cellSize / 90)
  const waveLength = waveCells * cellSize

  for (let i = 0; i < cols; i++) {
    const wave = makeWave(rand, waveAmp, h / waveLength)
    const pts = []
    for (let s = 0; s <= segments; s++) {
      const t = s / segments
      pts.push([cellSize * (i + 0.5) + wave(t), h * t])
    }
    strokeSmooth(ctx, pts)
  }
  for (let j = 0; j < rows; j++) {
    const wave = makeWave(rand, waveAmp, w / waveLength)
    const pts = []
    for (let s = 0; s <= segments; s++) {
      const t = s / segments
      pts.push([w * t, cellSize * (j + 0.5) + wave(t)])
    }
    strokeSmooth(ctx, pts)
  }
}
function drawNoise(ctx, w, h, seed, density, texScale) {
  // 長さ・間隔はセル幅に比例させるが、線の太さは参照画像に合わせて控えめに伸ばす
  const wScale = Math.sqrt(texScale)
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
        const off = (rand() - 0.5) * 14 * texScale
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
        x = last.x + (rand() - 0.5) * 50 * texScale
        y = last.y + (rand() - 0.5) * 50 * texScale
        ang = last.ang + (rand() - 0.5) * 0.12
      } else {
        ;[x, y] = samplePos()
        ang = pickDir() + (rand() - 0.5) * 0.28
      }
      const len = (5 + Math.pow(rand(), 1.6) * 30) * texScale // 短いものが多め、たまに長い
      const op = 0.08 + Math.pow(rand(), 2) * 0.55 // 薄いものが大半、たまに明るい
      const wmax = (0.6 + op * 0.9 + rand() * 0.3) * wScale // 髪の毛程度。明るいほど僅かに太め
      const peak = 0.25 + rand() * 0.5 // 太さのピーク位置（左右非対称に）
      const bend = (rand() - 0.5) * len * 0.05 // ほぼ直線、ごく僅かに反る
      const kind = rand()

      if (kind < 0.1) {
        // 点
        ctx.fillStyle = `rgba(255,255,255,${op * 0.9})`
        ctx.beginPath()
        const rx = (0.5 + rand() * 0.6) * wScale
        const ry = (0.6 + rand() * 1.2) * wScale
        ctx.ellipse(x, y, rx, ry, ang, 0, Math.PI * 2)
        ctx.fill()
      } else if (kind < 0.25) {
        // 二重線（少しずれた平行な2本、2本目は短く薄い）
        const gap = (2 + rand() * 3) * wScale
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
          const step = l + (3 + rand() * 8) * texScale
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
  const scale = ((w * h) / (1000 * 800)) * density / (texScale * texScale)
  const T = texScale // 長さ方向
  const W = wScale // 太さ方向
  // メイン: 長い右下がりハッチ
  bundle(Math.round(80 * scale), A, 0.06 * Math.PI, 150 * T, 500 * T, 0.07, 0.2, 1.2 * W, 4)
  // サブ: 逆斜めでクロスハッチ
  bundle(Math.round(40 * scale), -A, 0.06 * Math.PI, 120 * T, 400 * T, 0.05, 0.16, 1.1 * W, 3)
  // 短い斜めのかすれ
  bundle(Math.round(140 * scale), A, 0.1 * Math.PI, 20 * T, 80 * T, 0.08, 0.22, 1.0 * W, 2)
  marks(Math.round(380 * scale))
}
