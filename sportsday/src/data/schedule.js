// タイムスケジュール。項目の追加・時刻変更はここだけ触ればよい。
export const scheduleItems = [
  { time: '9:30-9:50', label: '集合', variant: 'outline' },
  { time: '10:00', label: '開会式', variant: 'filled' },
  { time: '10:30', label: '華のステージ', variant: 'filled', hasArrow: true, description: 'マットの上にぎゅうぎゅう集まれ！落ちるな、揺れるな、息を合わせて記録更新。団結力が試されるハラハラ競技！' },
  { time: '11:00', label: '並べ！メンターたち', variant: 'filled', hasArrow: true, description: 'お題に合わせて正しく整列！メンターならどんなお題にも臨機応変に対応できる……はず！表現力・判断力・協力する心をフル活用して、満点を目指せ！' },
  { time: '11:30', label: '障害物競争', variant: 'filled', hasArrow: true, description: '今年もやってきた障害物走！チームメイトとの協力要素も加わった今年の障害物競争、6つの障害を華麗に制覇していく勝者は誰だ！お腹を空かせた方がいいかも...？' },
  { time: '12:00', label: 'おひるごはん', variant: 'filled' },
  { time: '13:00', label: '借人競争', variant: 'filled', hasArrow: true, description: '「赤い靴の人！」「眼鏡の人！」カードに書かれた人を探して全力ダッシュ！一緒にゴールをめざそう！！' },
  { time: '13:45', label: '逆玉入れ', variant: 'filled', hasArrow: true, description: 'かごを背負った相手の王様を狙って玉を投げ込め！相手のかごにたくさん入れたチームの勝ち！逃げ切れるか、王様！入れられるか、団員！' },
  { time: '14:20', label: 'ピッタリを目指せ！50:50ゲーム', variant: 'filled', hasArrow: true, description: '各団が考えた二択のお題に、みんなで一斉に移動して回答！人数がより半々に分かれるほど高得点を狙えるゲーム！目指せピッタリ賞！' },
  { time: '14:55', label: '団対抗リレー', variant: 'filled', hasArrow: true, description: '5人でバトンをつなぐ王道リレー。走る距離がどんどん伸びていくぞ！シンプルだからこそいちばんアツい戦い。' },
  { time: '15:30', label: '閉会式', variant: 'filled' },
]
