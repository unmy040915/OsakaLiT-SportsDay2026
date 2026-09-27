<script setup>
import ScheduleSection from './ScheduleSection.vue'
import VenueMapSection from './VenueMapSection.vue'
import PreEventInfoSection from './PreEventInfoSection.vue'
import StaffDept from './StaffDept.vue'
import StaffBlob from './StaffBlob.vue'
import CommentBubble from './CommentBubble.vue'
import { staffRows } from '@/data/staff'
</script>

<template>
  <main class="page">

    <!-- ============================================================
         SECTION 1: HERO
         ============================================================ -->
    <section class="section section--hero">

      <!-- Hero Illustration — Figma frame 32:2101 (1185.999×612.25px) -->
      <div class="hero-illust" aria-hidden="true">
        <!-- Peripheral decoration -->
        <img class="illust-part" style="left:68.44px;top:0px;width:218.565px;height:277.026px"    src="/assets/hero/deco-top-left.svg" alt="" />
        <img class="illust-part" style="left:339.39px;top:79.69px;width:100.775px;height:90.123px" src="/assets/hero/deco-center-small.svg" alt="" />
        <img class="illust-part" style="left:590.58px;top:460.54px;width:101.632px;height:90.289px" src="/assets/hero/deco-center-right.svg" alt="" />
        <img class="illust-part" style="left:875.67px;top:131.71px;width:310.333px;height:173.547px" src="/assets/hero/deco-right.svg" alt="" />
        <img class="illust-part" style="left:150.95px;top:429.21px;width:229.055px;height:183.041px" src="/assets/hero/deco-bottom-left-1.svg" alt="" />
        <img class="illust-part" style="left:829.57px;top:25.99px;width:267.393px;height:183.955px"  src="/assets/hero/deco-top-right-1.svg" alt="" />
        <img class="illust-part" style="left:795.98px;top:82.56px;width:286.428px;height:202.988px"  src="/assets/hero/deco-top-right-2.svg" alt="" />
        <img class="illust-part" style="left:0px;top:417.02px;width:215.839px;height:127.811px"      src="/assets/hero/deco-far-left.svg" alt="" />
        <img class="illust-part" style="left:75px;top:356.08px;width:297.435px;height:226.864px"     src="/assets/hero/deco-left-mid-1.svg" alt="" />
        <img class="illust-part" style="left:64.13px;top:305.46px;width:266.56px;height:189.537px"   src="/assets/hero/deco-left-mid-2.svg" alt="" />
        <img class="illust-part" style="left:273.74px;top:364.79px;width:202.37px;height:110.783px"  src="/assets/hero/deco-center-low.svg" alt="" />

        <!-- Central 運動会 background -->
        <img class="illust-part" style="left:225.01px;top:179.16px;width:710.185px;height:293.583px" src="/assets/hero/logo-bg.svg" alt="" />

        <!-- 会 character layers: back→mid→front -->
        <img class="illust-part" style="left:249.01px;top:231.16px;width:215.344px;height:190.055px" src="/assets/hero/kai-char-1.svg" alt="" />
        <img class="illust-part" style="left:248.07px;top:225.19px;width:215.34px;height:190.051px"  src="/assets/hero/kai-char-2.svg" alt="" />
        <img class="illust-part" style="left:247.61px;top:217.29px;width:215.34px;height:190.055px"  src="/assets/hero/kai-char-3.svg" alt="" />

        <!-- 動 character layers: back→mid→front -->
        <img class="illust-part" style="left:484.51px;top:218.8px;width:208.88px;height:199.971px"   src="/assets/hero/do-char-1.svg" alt="" />
        <img class="illust-part" style="left:480.02px;top:211.89px;width:211.886px;height:201.573px"  src="/assets/hero/do-char-2.svg" alt="" />
        <img class="illust-part" style="left:476.27px;top:135.76px;width:211.886px;height:271.137px"  src="/assets/hero/do-char-3.svg" alt="" />

        <!-- 運 character layers: back→mid→front -->
        <img class="illust-part" style="left:697.15px;top:217.52px;width:206.13px;height:217.502px"  src="/assets/hero/un-char-1.svg" alt="" />
        <img class="illust-part" style="left:697.43px;top:210.68px;width:206.124px;height:217.502px" src="/assets/hero/un-char-2.svg" alt="" />
        <img class="illust-part" style="left:698.59px;top:201.56px;width:206.13px;height:217.497px"  src="/assets/hero/un-char-3.svg" alt="" />

        <!-- More peripheral decoration -->
        <img class="illust-part" style="left:836.29px;top:72.01px;width:193.299px;height:211.407px"  src="/assets/hero/deco-right-mid.svg" alt="" />
        <img class="illust-part" style="left:638.47px;top:14.82px;width:168.169px;height:147.037px"  src="/assets/hero/deco-top-center-right.svg" alt="" />
        <img class="illust-part" style="left:140.55px;top:421.71px;width:252.28px;height:170.783px"  src="/assets/hero/deco-bottom-left-2.svg" alt="" />
        <img class="illust-part" style="left:130.53px;top:279.34px;width:81.634px;height:65.04px"    src="/assets/hero/deco-left-small.svg" alt="" />
        <img class="illust-part" style="left:950.36px;top:4.5px;width:111.104px;height:77.127px"     src="/assets/hero/deco-top-right-corner.svg" alt="" />

        <!-- Date banner -->
        <img class="illust-part" style="left:760px;top:360px;width:406px;height:238px"              src="/assets/hero/date-banner.svg" alt="" />
        <img class="illust-part" style="left:817px;top:452px;width:297.173px;height:91.149px"        src="/assets/hero/date-banner-text.svg" alt="" />
      </div>
    </section>
    <section class="section section--derby">
      <div class="bottom-badge-row">
        <div class="section-badge badge--blue-on-white">メンターダービー</div>
          <p class="hero-description">
            メンターダービーの説明100文字くらいあああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
          </p>
          <a class="cta-btn" href="#">参加はこちらから　→</a>
      </div>
    </section>


    <!-- ============================================================
         SECTION 2: SCHEDULE
         ============================================================ -->
    <ScheduleSection />


    <!-- ============================================================
         SECTION 3: TEAM LEADERS — Figma frame 38:511
         ============================================================ -->
    <section class="section section--teams">
      <div class="bottom-badge-row">
        <div class="section-badge badge--lime-bg">団長・副団長</div>
      </div>

      <div class="teams-grid">

        <!-- 赤団 (top-left, 596×516px) — photos left, labels right -->
        <div class="tc-card" style="height:516px">
          <div class="tc-body" style="left:28.7px;top:82.09px;width:520.051px;height:433.203px;"></div>
          <div class="tc-badge-wrap" style="left:-0.25px;top:10.75px;width:150.77px;height:103.84px;">
            <div class="tc-badge" style="background:#EE3F38;">赤団</div>
          </div>
          <img class="tc-abs" style="left:62.9px;top:120.4px;width:146.9px;height:167.2px;z-index:1" src="/assets/teams/red/kuro-hex-fill.svg" alt="" />
          <img class="tc-abs" style="left:68.7px;top:187.7px;width:104.9px;height:88.0px;z-index:1" src="/assets/teams/red/kuro-blob.svg" alt="" />
          <img class="tc-abs" style="left:62.9px;top:120.4px;width:146.9px;height:167.2px;z-index:2" src="/assets/teams/red/hex-kuro.svg" alt="" />
          <img class="tc-abs" style="left:93.5px;top:107.2px;width:151.2px;height:173.3px;transform:rotate(5.47deg);z-index:2" src="/assets/teams/red/kuro-photo-frame.svg" alt="" />
          <img class="tc-abs" style="left:160.87px;top:159.1px;width:145.698px;height:154.333px;transform:rotate(20.83deg);z-index:2" src="/assets/teams/red/hex-pika.svg" alt="" />
          <img class="tc-photo" style="left:72.82px;top:94.64px;width:175.724px;height:171.271px;transform:rotate(-7.87deg);z-index:3" src="/assets/teams/red/photo-kuro.png" alt="KURO" />
          <img class="tc-photo" style="left:173.13px;top:161.67px;width:110.518px;height:122.079px;transform:rotate(6.7deg);z-index:4" src="/assets/teams/red/photo-pika.png" alt="ぴかボッヂ" />
          <div class="tc-label" style="left:327px;top:137.75px;">
            <p class="tc-role">団長</p>
            <p class="tc-name">KURO</p>
          </div>
          <div class="tc-label" style="left:327.49px;top:212.75px;">
            <p class="tc-role">副団長</p>
            <p class="tc-name">ぴかボッヂ</p>
          </div>
          <CommentBubble color="#EE3F38" tab="left" class="tc-abs" style="left:80.39px;top:287.31px;width:416.661px;height:201.093px;z-index:2" />
          <p class="tc-comment" style="left:108.31px;top:319.85px;width:360.83px;">皆様、こんにちは。今回の運動会は、我々赤組が優勝させていただきます。皆様には申し訳ございませんが、全ての競技において赤組が勝利し、圧倒いたします。皆様がつまらなくなってしまっても、それは我々の責任ではございません。私どもが優勝する姿を、一番近くの特等席でご覧にいれます。皆様で楽しんで運動会を進めていきましょう。</p>
        </div>

        <!-- 青団 (top-right, 594×563px) — photos right, labels left -->
        <div class="tc-card" style="height:563px">
          <div class="tc-body" style="left:57.5px;top:80.99px;width:512.067px;height:426.553px;"></div>
          <div class="tc-badge-wrap" style="left:29px;top:10.75px;width:148.679px;height:103.451px;">
            <div class="tc-badge" style="background:#374BFF;">青団</div>
          </div>
          <!-- 青ブロブ (Figma Group 38:524) — photos より背面 -->
          <img class="tc-abs" style="left:342px;top:104.8px;width:184.3px;height:180.7px;z-index:1" src="/assets/teams/blue/blob.svg" alt="" />
          <img class="tc-abs" style="left:324px;top:100.62px;width:211.401px;height:150.72px;transform:rotate(4.36deg);z-index:2" src="/assets/teams/blue/mapoco-bg.svg" alt="" />
          <img class="tc-photo" style="left:325.93px;top:62.87px;width:272.684px;height:189.828px;transform:rotate(4.36deg);z-index:3" src="/assets/teams/blue/photo-mapoco.png" alt="まぽこ" />
          <!-- やいまる背景の六角フレーム (Figma 38:540) -->
          <img class="tc-abs" style="left:275px;top:172px;width:140.677px;height:119.496px;transform:scaleX(-1) rotate(-19.71deg);z-index:2" src="/assets/teams/blue/hex-yaimaru.svg" alt="" />
          <img class="tc-photo" style="left:236px;top:143px;width:218px;height:183px;transform:rotate(-5.72deg);z-index:4" src="/assets/teams/blue/photo-yaimaru.png" alt="やいまる" />
          <div class="tc-label" style="left:144px;top:137.75px;">
            <p class="tc-role">団長</p>
            <p class="tc-name">まぽこ</p>
          </div>
          <div class="tc-label" style="left:144px;top:212.75px;">
            <p class="tc-role">副団長</p>
            <p class="tc-name">やいまる</p>
          </div>
          <CommentBubble color="#374BFF" tab="right" class="tc-abs" style="left:108.41px;top:280.52px;width:410.265px;height:200.551px;z-index:2" />
          <p class="tc-comment" style="left:138.95px;top:327.35px;width:355.291px;">全員ブルベの青団のうちらが華麗に優雅に優勝かましちゃうからね〜💖✨ 他のチーム全員ぶちのめして、最後に笑うのはうちらってワケ✌️💕 可愛さもかっこよさも強さも圧倒的優勝〜〜❣️ テンションぶち上げでいくよ〜〜🩵💙</p>
        </div>

        <!-- 黄団 (bottom-left, 594×527px) — photos left, labels right -->
        <div class="tc-card" style="height:527px">
          <div class="tc-body" style="left:28.9px;top:71.46px;width:519.104px;height:432.414px;"></div>
          <div class="tc-badge-wrap" style="left:0px;top:0.25px;width:150.522px;height:103.791px;">
            <div class="tc-badge" style="background:#FFD43B;">黄団</div>
          </div>
          <!-- 黄ブロブ群 (Figma Group 38:1154) -->
          <img class="tc-abs" style="left:75.5px;top:128.4px;width:174.328px;height:155.377px;transform:rotate(-15.65deg);z-index:1" src="/assets/teams/yellow/blob-main.svg" alt="" />
          <img class="tc-abs" style="left:71.1px;top:134.1px;width:138.02px;height:117.284px;transform:rotate(-15.65deg);z-index:2" src="/assets/teams/yellow/blob-inner-1.svg" alt="" />
          <img class="tc-abs" style="left:100.7px;top:189.9px;width:157.593px;height:90.367px;transform:rotate(-15.65deg);z-index:3" src="/assets/teams/yellow/blob-inner-2.svg" alt="" />
          <!-- ひむら -->
          <img class="tc-abs" style="left:88.3px;top:91.6px;width:119.5px;height:187px;transform:rotate(3.67deg);z-index:4" src="/assets/teams/yellow/hex-himura.svg" alt="" />
          <img class="tc-photo" style="left:95.09px;top:103.88px;width:94.022px;height:154.924px;transform:rotate(-9.88deg);z-index:5" src="/assets/teams/yellow/photo-himura.png" alt="ひむら" />
          <!-- ゆーとぅー -->
          <img class="tc-abs" style="left:151.6px;top:163.4px;width:139.341px;height:140.733px;transform:rotate(2.76deg);z-index:4" src="/assets/teams/yellow/hex-yutou.svg" alt="" />
          <img class="tc-photo" style="left:147.39px;top:137.06px;width:142.524px;height:142.524px;transform:rotate(8.31deg);z-index:5" src="/assets/teams/yellow/photo-yutou.png" alt="ゆーとぅー" />
          <div class="tc-label" style="left:327.02px;top:125.25px;">
            <p class="tc-role">団長</p>
            <p class="tc-name">ひむら</p>
          </div>
          <div class="tc-label" style="left:327.15px;top:203.25px;">
            <p class="tc-role">副団長</p>
            <p class="tc-name">ゆーとぅー</p>
          </div>
          <CommentBubble color="#FFD43B" tab="left" class="tc-abs" style="left:80.5px;top:276.31px;width:415.902px;height:200.728px;z-index:2" />
          <p class="tc-comment" style="left:113.09px;top:325.9px;width:365.449px;">コメント</p>
        </div>

        <!-- 緑団 (bottom-right, 595.5×511px) — photos right, labels left -->
        <div class="tc-card" style="height:511px">
          <div class="tc-body" style="left:42.07px;top:72.5px;width:526.707px;height:438.748px;"></div>
          <div class="tc-badge-wrap" style="left:12.75px;top:0.25px;width:152.514px;height:104.159px;">
            <div class="tc-badge" style="background:#00B10C;">緑団</div>
          </div>
          <!-- 緑ブロブ (Figma Group 38:655) — photos より背面 -->
          <img class="tc-abs" style="left:352px;top:81.9px;width:199px;height:214.7px;z-index:1" src="/assets/teams/green/blob.svg" alt="" />
          <img class="tc-abs" style="left:368px;top:88.5px;width:196.5px;height:212.7px;z-index:2" src="/assets/teams/green/kurie-deco.svg" alt="" />
          <img class="tc-abs" style="left:279.8px;top:133.1px;width:177.9px;height:184.8px;transform:rotate(-13.66deg);z-index:2" src="/assets/teams/green/hex-mahoho.svg" alt="" />
          <img class="tc-photo" style="left:321.72px;top:81.9px;width:261.254px;height:186.905px;transform:rotate(5.32deg);z-index:3" src="/assets/teams/green/photo-kurie.png" alt="カーリー" />
          <img class="tc-photo" style="left:320.6px;top:160.8px;width:94.184px;height:121.149px;transform:rotate(-8.28deg);z-index:4" src="/assets/teams/green/photo-mahoho.png" alt="まほほ" />
          <div class="tc-label" style="left:144.75px;top:125.25px;">
            <p class="tc-role">団長</p>
            <p class="tc-name">カーリー</p>
          </div>
          <div class="tc-label" style="left:144.75px;top:203.25px;">
            <p class="tc-role">副団長</p>
            <p class="tc-name">まほほ</p>
          </div>
          <CommentBubble color="#00B10C" tab="right" class="tc-abs" style="left:94.43px;top:277.74px;width:421.994px;height:206.285px;z-index:2" />
          <p class="tc-comment" style="left:125.84px;top:325.9px;width:365.449px;">コメント</p>
        </div>

      </div>

      <!-- 配置図 section badge -->
      <div class="bottom-badge-row">
        <div class="section-badge badge--blue-bg">配置図</div>
      </div>
    </section>


    <!-- ============================================================
         SECTION 4: VENUE MAP
         ============================================================ -->
    <VenueMapSection />


    <!-- ============================================================
         SECTION 5: PRE-EVENT INFO
         ============================================================ -->
    <PreEventInfoSection />


    <!-- ============================================================
         SECTION 6: STAFF ORG CHART
         ============================================================ -->
    <section class="section section--staff">
      <div class="staff-blob-container">
        <StaffBlob class="staff-blob-svg" />

        <div class="staff-content">
          <div class="section-badge badge--blue-on-white">運営</div>

          <div
            v-for="row in staffRows"
            :key="row.modifier"
            class="staff-dept-row"
            :class="`staff-dept-row--${row.modifier}`"
          >
            <StaffDept
              v-for="dept in row.depts"
              :key="dept.key"
              :label="dept.label"
              :members="dept.members"
              :width="dept.width"
            />
          </div>
        </div>
      </div>
    </section>


    <!-- ============================================================
         FOOTER
         ============================================================ -->
    <footer class="page-footer">
      ©関西メンター大運動会2026運営
    </footer>

  </main>
</template>

<style scoped>
/* ===== Design tokens ===== */
.page {
  position: relative;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  font-family: 'RocknRoll One', sans-serif;
  color: #F9FAF7;
}

/* ===== Section base ===== */
.section {
  position: relative;
  width: 100%;
  padding: 60px 0 80px;
}

/* ===== HERO SECTION ===== */
.section--hero {
  padding-top: 30px;
}
.section--derby {
  padding-top: 0;
}

.section--derby .bottom-badge-row {
  flex-direction: column;
  align-items: center;
  gap: 70px;
}

/* Hero illustration: Figma frame 32:2101 (1185.999×612.25px) */
.hero-illust {
  position: relative;
  width: 1185.999px;
  height: 612.25px;
  margin: 0 auto;
  overflow: visible;
}

.illust-part {
  position: absolute;
  display: block;
  object-fit: fill;
}

/* Navigation banners — positioned via inline style */
.nav-banner {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-banner__bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  transform-origin: center;
}

.nav-banner__text {
  position: relative;
  z-index: 1;
  font-family: 'RocknRoll One', sans-serif;
  font-size: 1.5vw;
  white-space: nowrap;
  transform-origin: center;
  text-shadow: none;
}

/* Hero text content */
.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px;
  padding: 60px 244px 0;
  text-align: center;
}

.hero-description {
  font-size: 36px;
  line-height: 1.4;
  color: #F9FAF7;
  text-align: left;
  width: 952px;
}

.cta-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 40px;
  background: #F9FAF7;
  border: 3px solid #AAFF00;
  border-radius: 2px;
  font-family: 'RocknRoll One', sans-serif;
  font-size: 40px;
  color: #181C18;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
}


/* ===== TEAM CARDS SECTION ===== */
/* ===== TEAM LEADERS SECTION — Figma frame 38:511 ===== */
.section--teams {
  padding-top: 60px;
}

.teams-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  width: 1228px;
  margin: 0 auto;
  padding-top: 20px;
  overflow: visible;
}

.tc-card {
  position: relative;
  width: 100%;
  overflow: visible;
}

.tc-body {
  position: absolute;
  background: #181C18;
  border: 6px solid #F9FAF7;
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
  border: 5px solid #F9FAF7;
  font-size: 32px;
  color: #F9FAF7;
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

.tc-label {
  position: absolute;
  z-index: 6;
}

.tc-role,
.tc-name {
  font-size: 20px;
  color: #F9FAF7;
  line-height: 34px;
  margin: 0;
}

.tc-comment {
  position: absolute;
  z-index: 3;
  font-size: 15px;
  color: #181C18;
  line-height: 1.6;
  margin: 0;
}


/* ===== STAFF SECTION ===== */
.section--staff {
  padding: 0;
  margin-top: 60px;
}

.staff-blob-container {
  position: relative;
  width: 100vw;
  left: 50%;
  transform: translateX(-50%);
  min-height: 1345px;
}

.staff-blob-svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
}

.staff-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px;
  padding: 242px 60px 320px;
}

.staff-dept-row {
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  width: 1228px;
}


/* ===== FOOTER ===== */
.page-footer {
  text-align: center;
  font-size: 20px;
  color: #FFE600;
  padding: 60px 0 40px;
}
</style>
