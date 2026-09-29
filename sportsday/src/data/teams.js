// 団長・副団長カード（Figma frame 38:511）。団の追加・名前やコメントの変更はここだけ触ればよい。
//
// 座標はすべて PC デザイン上の px。
// - bodyX:   カード左端から黒ボックス左端まで
// - badge:   団名バッジの枠（カード基準）
// - head:    写真＋名前のかたまり（カード基準）。スマホではこのかたまりごと縮小する
// - photos:  写真グループ（head 基準）。parts は配列の順に描画される
//            alt があるものは人物写真、ないものは背景の装飾
// - labels:  団長・副団長の名前（head 基準）
// - bubble:  吹き出し（カード基準）。pad はコメント文の余白
// - photosRight: 写真が右・名前が左のレイアウト（吹き出しのタブも右になる）
export const teams = [
  {
    key: 'red',
    name: '赤団',
    color: '#EE3F38',
    photosRight: false,
    bodyX: 28.7,
    badge: { left: -0.25, top: 10.75, width: 150.77, height: 103.84 },
    head: { x: 62, y: 94, width: 365, height: 220 },
    photos: {
      x: 0, y: 0, width: 245, height: 220,
      parts: [
        { src: '/assets/teams/red/hex-kuro.svg', left: 0.9, top: 26.4, width: 146.9, height: 167.2, z: 1 },
        { src: '/assets/teams/red/kurofull.png', alt: 'KURO', left: 1.57, top: -12.3, width: 194.2, height: 207.6, z: 3 },
        { src: '/assets/teams/red/pikafull.png', alt: 'ぴかボッヂ', left: 95.99, top: 60.37, width: 151.44, height: 160.77, z: 5 },
      ],
    },
    labels: { x: 265, y: 43.75, gap: 7 },
    leaders: [
      { role: '団長', name: 'KURO' },
      { role: '副団長', name: 'ぴかボッヂ' },
    ],
    bubble: { x: 80.39, y: 287.31, width: 416.661, height: 201.093, pad: '32.54px 27.91px 20px 27.92px' },
    comment:
      '皆様、こんにちは。今回の運動会は、我々赤組が優勝させていただきます。皆様には申し訳ございませんが、全ての競技において赤組が勝利し、圧倒いたします。皆様がつまらなくなってしまっても、それは我々の責任ではございません。私どもが優勝する姿を、一番近くの特等席でご覧にいれます。皆様で楽しんで運動会を進めていきましょう。',
  },
  {
    key: 'blue',
    name: '青団',
    color: '#374BFF',
    photosRight: true,
    bodyX: 57.5,
    badge: { left: 29, top: 10.75, width: 148.679, height: 103.451 },
    head: { x: 144, y: 62, width: 455, height: 264 },
    photos: {
      x: 92, y: 0, width: 363, height: 264,
      parts: [
        { src: '/assets/teams/blue/blob.svg', left: 106, top: 42.8, width: 184.3, height: 180.7, z: 1 },
        { src: '/assets/teams/blue/mapokofull.png', alt: 'まぽこ', left: 80.7, top: -7.87, width: 290.6, height: 207.3, z: 3 },
        { src: '/assets/teams/blue/yaimarufull.png', alt: 'やいまる', left: -2.97, top: 71.4, width: 213.1, height: 195.5, z: 4 },
      ],
    },
    labels: { x: 0, y: 75.75, gap: 7 },
    leaders: [
      { role: '団長', name: 'まぽこ' },
      { role: '副団長', name: 'やいまる' },
    ],
    bubble: { x: 108.41, y: 280.52, width: 410.265, height: 200.551, pad: '46.83px 24.43px 20px 30.54px' },
    comment:
      '全員ブルベの青団のうちらが華麗に優雅に優勝かましちゃうからね〜💖✨ 他のチーム全員ぶちのめして、最後に笑うのはうちらってワケ✌️💕 可愛さもかっこよさも強さも圧倒的優勝〜〜❣️ テンションぶち上げでいくよ〜〜🩵💙',
  },
  {
    key: 'yellow',
    name: '黄団',
    color: '#FFD43B',
    photosRight: false,
    bodyX: 28.9,
    badge: { left: 0, top: 0.25, width: 150.522, height: 103.791 },
    head: { x: 71, y: 91, width: 356, height: 214 },
    photos: {
      x: 0, y: 0, width: 220, height: 214,
      parts: [
        { src: '/assets/teams/yellow/blob-main.svg', left: 4.5, top: 37.4, width: 174.328, height: 155.377, z: 1, rotate: -15.65 },
        { src: '/assets/teams/yellow/blob-inner-1.svg', left: 0.1, top: 43.1, width: 138.02, height: 117.284, z: 2, rotate: -15.65 },
        { src: '/assets/teams/yellow/blob-inner-2.svg', left: 29.7, top: 98.9, width: 157.593, height: 90.367, z: 3, rotate: -15.65 },
        { src: '/assets/teams/yellow/himurafull.png', alt: 'ひむら', left: 5.25, top: 5.29, width: 143.6, height: 177.6, z: 4, scale: 1.3 },
        { src: '/assets/teams/yellow/yutoufull.png', alt: 'ゆーとぅー', left: 64.47, top: 39.23, width: 168.7, height: 192.3, z: 5 },
      ],
    },
    labels: { x: 256.02, y: 34.25, gap: 10 },
    leaders: [
      { role: '団長', name: 'ひむら' },
      { role: '副団長', name: 'ゆーとぅー' },
    ],
    bubble: { x: 80.5, y: 276.31, width: 415.902, height: 200.728, pad: '49.59px 17.86px 20px 32.59px' },
    comment:
      '古代中国の陰陽五行説において、「土」を司る「黄色」は高貴な色であり、「皇帝」の象徴とされてきました。つまり、土曜日の校庭が黄色団の天下となるのは歴史的にも必然なわけです。 今年も関西メンター運動会の頂点に君臨するのは黄色チームですので、他の団の皆さんは白旗の準備だけ忘れずに当日お越しくださいね。',
  },
  {
    key: 'green',
    name: '緑団',
    color: '#00B10C',
    photosRight: true,
    bodyX: 42.07,
    badge: { left: 12.75, top: 0.25, width: 152.514, height: 104.159 },
    head: { x: 144.75, y: 81, width: 439.25, height: 237 },
    photos: {
      x: 134.25, y: 0, width: 305, height: 237,
      parts: [
        { src: '/assets/teams/green/blob.svg', left: 92.9, top: 22.37, width: 159.2, height: 171.76, z: 1 },
        { src: '/assets/teams/green/kuriefull.png', alt: 'カーリー', left: 15.24, top: -25.5, width: 316.2, height: 265.7, z: 2 },
        { src: '/assets/teams/green/mahohofull.png', alt: 'まほほ', left: -13.22, top: 28.63, width: 213.5, height: 221.9, z: 4 },
      ],
    },
    labels: { x: 0, y: 44.25, gap: 10 },
    leaders: [
      { role: '団長', name: 'カーリー' },
      { role: '副団長', name: 'まほほ' },
    ],
    bubble: { x: 94.43, y: 277.74, width: 421.994, height: 206.285, pad: '48.16px 25.14px 20px 31.41px' },
    comment:
      '緑団の優勝以外ありえません。幸運のクローバーは我々のものだからです。 みんなを緑団に釘付けにさせます。緑は人間の目で最も認識しやすい色だからです。 さあ皆さん、新緑のごとく鮮やかに優勝をいただきに行きましょう。',
  },
]
