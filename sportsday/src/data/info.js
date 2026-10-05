// 当日の詳細情報。項目の追加・文言変更はここだけ触ればよい。
export const infoRows = [
  { key: '集合', label: '集合：', value: '9:30-9:50' },
  { key: '会場', label: '会場：', value: '二色浜公園スポーツ広場' },
  { key: 'アクセス', label: 'アクセス：', value: '二色浜駅から徒歩15分', note: '※車でも可' },
  {
    key: '持ち物',
    label: '持ち物：',
    value: '飲み物、動きやすい服装',
    note: 'カメラ、タオル、着替え、保険証',
    warn: '⚠️アルコール・火気・そのほか会場や備品を汚す可能性があるものの持ち込み禁止 昼ごはんは近くのコンビニやスーパーで調達OK!',
  },
  { key: '参加費', label: '参加費：', value: '4000円' },
  { key: 'アルバム', label: 'アルバムリンク：', value: 'こちら', href: 'https://photos.app.goo.gl/N7QMWmXB5R5ZfTTb9' },
]
