<script setup>
import ScheduleSection from "./ScheduleSection.vue";
import VenueMapSection from "./VenueMapSection.vue";
import PreEventInfoSection from "./PreEventInfoSection.vue";
import StaffDept from "./StaffDept.vue";
import StaffBlob from "./StaffBlob.vue";
import CommentBubble from "./CommentBubble.vue";
import FitScale from "./FitScale.vue";
import { staffRows } from "@/data/staff";
</script>

<template>
  <main class="page">
    <section class="section section--hero">
      <!-- Hero Illustration — Figma frame 32:2101 (1185.999×612.25px) -->
      <FitScale
        class="hero-illust"
        :width="1185.999"
        :height="612.25"
        aria-hidden="true"
      >
        <!-- Peripheral decoration -->
        <img
          class="illust-part"
          style="left: 68.44px; top: 0px; width: 218.565px; height: 277.026px"
          src="/assets/hero/deco-top-left.svg"
          alt=""
        />
        <img
          class="illust-part"
          style="
            left: 339.39px;
            top: 79.69px;
            width: 100.775px;
            height: 90.123px;
          "
          src="/assets/hero/deco-center-small.svg"
          alt=""
        />
        <img
          class="illust-part"
          style="
            left: 590.58px;
            top: 460.54px;
            width: 101.632px;
            height: 90.289px;
          "
          src="/assets/hero/deco-center-right.svg"
          alt=""
        />
        <img
          class="illust-part"
          style="
            left: 875.67px;
            top: 131.71px;
            width: 310.333px;
            height: 173.547px;
          "
          src="/assets/hero/deco-right.svg"
          alt=""
        />
        <img
          class="illust-part"
          style="
            left: 150.95px;
            top: 429.21px;
            width: 229.055px;
            height: 183.041px;
          "
          src="/assets/hero/deco-bottom-left-1.svg"
          alt=""
        />
        <img
          class="illust-part"
          style="
            left: 829.57px;
            top: 25.99px;
            width: 267.393px;
            height: 183.955px;
          "
          src="/assets/hero/deco-top-right-1.svg"
          alt=""
        />
        <img
          class="illust-part"
          style="
            left: 795.98px;
            top: 82.56px;
            width: 286.428px;
            height: 202.988px;
          "
          src="/assets/hero/deco-top-right-2.svg"
          alt=""
        />
        <img
          class="illust-part"
          style="left: 0px; top: 417.02px; width: 215.839px; height: 127.811px"
          src="/assets/hero/deco-far-left.svg"
          alt=""
        />
        <img
          class="illust-part"
          style="left: 75px; top: 356.08px; width: 297.435px; height: 226.864px"
          src="/assets/hero/deco-left-mid-1.svg"
          alt=""
        />
        <img
          class="illust-part"
          style="
            left: 64.13px;
            top: 305.46px;
            width: 266.56px;
            height: 189.537px;
          "
          src="/assets/hero/deco-left-mid-2.svg"
          alt=""
        />
        <img
          class="illust-part"
          style="
            left: 273.74px;
            top: 364.79px;
            width: 202.37px;
            height: 110.783px;
          "
          src="/assets/hero/deco-center-low.svg"
          alt=""
        />

        <!-- Central 運動会 background -->
        <img
          class="illust-part"
          style="
            left: 225.01px;
            top: 179.16px;
            width: 710.185px;
            height: 293.583px;
          "
          src="/assets/hero/logo-bg.svg"
          alt=""
        />

        <!-- 会 character layers: back→mid→front -->
        <img
          class="illust-part"
          style="
            left: 249.01px;
            top: 231.16px;
            width: 215.344px;
            height: 190.055px;
          "
          src="/assets/hero/kai-char-1.svg"
          alt=""
        />
        <img
          class="illust-part"
          style="
            left: 248.07px;
            top: 225.19px;
            width: 215.34px;
            height: 190.051px;
          "
          src="/assets/hero/kai-char-2.svg"
          alt=""
        />
        <img
          class="illust-part"
          style="
            left: 247.61px;
            top: 217.29px;
            width: 215.34px;
            height: 190.055px;
          "
          src="/assets/hero/kai-char-3.svg"
          alt=""
        />

        <!-- 動 character layers: back→mid→front -->
        <img
          class="illust-part"
          style="
            left: 484.51px;
            top: 218.8px;
            width: 208.88px;
            height: 199.971px;
          "
          src="/assets/hero/do-char-1.svg"
          alt=""
        />
        <img
          class="illust-part"
          style="
            left: 480.02px;
            top: 211.89px;
            width: 211.886px;
            height: 201.573px;
          "
          src="/assets/hero/do-char-2.svg"
          alt=""
        />
        <img
          class="illust-part"
          style="
            left: 476.27px;
            top: 135.76px;
            width: 211.886px;
            height: 271.137px;
          "
          src="/assets/hero/do-char-3.svg"
          alt=""
        />

        <!-- 運 character layers: back→mid→front -->
        <img
          class="illust-part"
          style="
            left: 697.15px;
            top: 217.52px;
            width: 206.13px;
            height: 217.502px;
          "
          src="/assets/hero/un-char-1.svg"
          alt=""
        />
        <img
          class="illust-part"
          style="
            left: 697.43px;
            top: 210.68px;
            width: 206.124px;
            height: 217.502px;
          "
          src="/assets/hero/un-char-2.svg"
          alt=""
        />
        <img
          class="illust-part"
          style="
            left: 698.59px;
            top: 201.56px;
            width: 206.13px;
            height: 217.497px;
          "
          src="/assets/hero/un-char-3.svg"
          alt=""
        />

        <!-- More peripheral decoration -->
        <img
          class="illust-part"
          style="
            left: 836.29px;
            top: 72.01px;
            width: 193.299px;
            height: 211.407px;
          "
          src="/assets/hero/deco-right-mid.svg"
          alt=""
        />
        <img
          class="illust-part"
          style="
            left: 638.47px;
            top: 14.82px;
            width: 168.169px;
            height: 147.037px;
          "
          src="/assets/hero/deco-top-center-right.svg"
          alt=""
        />
        <img
          class="illust-part"
          style="
            left: 140.55px;
            top: 421.71px;
            width: 252.28px;
            height: 170.783px;
          "
          src="/assets/hero/deco-bottom-left-2.svg"
          alt=""
        />
        <img
          class="illust-part"
          style="
            left: 130.53px;
            top: 279.34px;
            width: 81.634px;
            height: 65.04px;
          "
          src="/assets/hero/deco-left-small.svg"
          alt=""
        />
        <img
          class="illust-part"
          style="left: 950.36px; top: 4.5px; width: 111.104px; height: 77.127px"
          src="/assets/hero/deco-top-right-corner.svg"
          alt=""
        />

        <!-- Date banner -->
        <img
          class="illust-part"
          style="left: 760px; top: 360px; width: 406px; height: 238px"
          src="/assets/hero/date-banner.svg"
          alt=""
        />
        <img
          class="illust-part"
          style="left: 817px; top: 452px; width: 297.173px; height: 91.149px"
          src="/assets/hero/date-banner-text.svg"
          alt=""
        />
      </FitScale>
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

    <ScheduleSection />

    <!-- ============================================================
         SECTION 3: TEAM LEADERS — Figma frame 38:511
         ============================================================ -->
    <section class="section section--teams">
      <div class="bottom-badge-row">
        <div class="section-badge badge--lime-bg">団長・副団長</div>
      </div>

      <!--
        PC: 各グループを --x / --y で絶対配置（Figma 38:511 の座標どおり）
        SP: グループを縦に並べ、黒ボックスと吹き出しが中身に合わせて伸びる
      -->
      <div class="teams-grid">
        <!-- 赤団 (top-left, 596×516px) — photos left, labels right -->
        <div class="tc-card" style="--body-x: 28.7px">
          <div class="tc-body"></div>
          <div
            class="tc-badge-wrap"
            style="
              left: -0.25px;
              top: 10.75px;
              width: 150.77px;
              height: 103.84px;
            "
          >
            <div class="tc-badge" style="background: #ee3f38">赤団</div>
          </div>
          <FitScale
            class="tc-head"
            :width="365"
            :height="220"
            style="--x: 62px; --y: 94px"
          >
            <div
              class="tc-photos"
              style="--x: 0px; --y: 0px; --w: 245px; --h: 220px"
            >
              <img
                class="tc-abs"
                style="
                  left: 0.9px;
                  top: 26.4px;
                  width: 146.9px;
                  height: 167.2px;
                  z-index: 1;
                "
                src="/assets/teams/red/hex-kuro.svg"
                alt=""
              />
              <img
                class="tc-photo"
                style="
                  left: 1.57px;
                  top: -12.3px;
                  width: 194.2px;
                  height: 207.6px;
                  z-index: 3;
                "
                src="/assets/teams/red/kurofull.png"
                alt="KURO"
              />
              <img
                class="tc-photo"
                style="
                  left: 77.06px;
                  top: 40.27px;
                  width: 189.3px;
                  height: 200.96px;
                  z-index: 5;
                "
                src="/assets/teams/red/pikafull.png"
                alt="ぴかボッヂ"
              />
            </div>
            <div class="tc-labels" style="--x: 265px; --y: 43.75px; --gap: 7px">
              <div class="tc-label">
                <p class="tc-role">団長</p>
                <p class="tc-name">KURO</p>
              </div>
              <div class="tc-label">
                <p class="tc-role">副団長</p>
                <p class="tc-name">ぴかボッヂ</p>
              </div>
            </div>
          </FitScale>
          <div
            class="tc-bubble"
            style="
              --x: 80.39px;
              --y: 287.31px;
              --w: 416.661px;
              --h: 201.093px;
              --pad: 32.54px 27.91px 20px 27.92px;
            "
          >
            <CommentBubble color="#EE3F38" tab="left">
              <p class="tc-comment">
                皆様、こんにちは。今回の運動会は、我々赤組が優勝させていただきます。皆様には申し訳ございませんが、全ての競技において赤組が勝利し、圧倒いたします。皆様がつまらなくなってしまっても、それは我々の責任ではございません。私どもが優勝する姿を、一番近くの特等席でご覧にいれます。皆様で楽しんで運動会を進めていきましょう。
              </p>
            </CommentBubble>
          </div>
        </div>

        <!-- 青団 (top-right, 594×563px) — photos right, labels left -->
        <div class="tc-card tc-card--photos-right" style="--body-x: 57.5px">
          <div class="tc-body"></div>
          <div
            class="tc-badge-wrap"
            style="
              left: 29px;
              top: 10.75px;
              width: 148.679px;
              height: 103.451px;
            "
          >
            <div class="tc-badge" style="background: #374bff">青団</div>
          </div>
          <FitScale
            class="tc-head"
            :width="455"
            :height="264"
            style="--x: 144px; --y: 62px"
          >
            <div
              class="tc-photos"
              style="--x: 92px; --y: 0px; --w: 363px; --h: 264px"
            >
              <!-- 青ブロブ (Figma Group 38:524) — photos より背面 -->
              <img
                class="tc-abs"
                style="
                  left: 106px;
                  top: 42.8px;
                  width: 184.3px;
                  height: 180.7px;
                  z-index: 1;
                "
                src="/assets/teams/blue/blob.svg"
                alt=""
              />
              <img
                class="tc-photo"
                style="
                  left: 80.7px;
                  top: -7.87px;
                  width: 290.6px;
                  height: 207.3px;
                  z-index: 3;
                "
                src="/assets/teams/blue/mapokofull.png"
                alt="まぽこ"
              />
              <img
                class="tc-photo"
                style="
                  left: -2.97px;
                  top: 71.4px;
                  width: 213.1px;
                  height: 195.5px;
                  z-index: 4;
                "
                src="/assets/teams/blue/yaimarufull.png"
                alt="やいまる"
              />
            </div>
            <div class="tc-labels" style="--x: 0px; --y: 75.75px; --gap: 7px">
              <div class="tc-label">
                <p class="tc-role">団長</p>
                <p class="tc-name">まぽこ</p>
              </div>
              <div class="tc-label">
                <p class="tc-role">副団長</p>
                <p class="tc-name">やいまる</p>
              </div>
            </div>
          </FitScale>
          <div
            class="tc-bubble"
            style="
              --x: 108.41px;
              --y: 280.52px;
              --w: 410.265px;
              --h: 200.551px;
              --pad: 46.83px 24.43px 20px 30.54px;
            "
          >
            <CommentBubble color="#374BFF" tab="right">
              <p class="tc-comment">
                全員ブルベの青団のうちらが華麗に優雅に優勝かましちゃうからね〜💖✨
                他のチーム全員ぶちのめして、最後に笑うのはうちらってワケ✌️💕
                可愛さもかっこよさも強さも圧倒的優勝〜〜❣️
                テンションぶち上げでいくよ〜〜🩵💙
              </p>
            </CommentBubble>
          </div>
        </div>

        <!-- 黄団 (bottom-left, 594×527px) — photos left, labels right -->
        <div class="tc-card" style="--body-x: 28.9px">
          <div class="tc-body"></div>
          <div
            class="tc-badge-wrap"
            style="left: 0px; top: 0.25px; width: 150.522px; height: 103.791px"
          >
            <div class="tc-badge" style="background: #ffd43b">黄団</div>
          </div>
          <FitScale
            class="tc-head"
            :width="356"
            :height="214"
            style="--x: 71px; --y: 91px"
          >
            <div
              class="tc-photos"
              style="--x: 0px; --y: 0px; --w: 220px; --h: 214px"
            >
              <!-- 黄ブロブ群 (Figma Group 38:1154) -->
              <img
                class="tc-abs"
                style="
                  left: 4.5px;
                  top: 37.4px;
                  width: 174.328px;
                  height: 155.377px;
                  transform: rotate(-15.65deg);
                  z-index: 1;
                "
                src="/assets/teams/yellow/blob-main.svg"
                alt=""
              />
              <img
                class="tc-abs"
                style="
                  left: 0.1px;
                  top: 43.1px;
                  width: 138.02px;
                  height: 117.284px;
                  transform: rotate(-15.65deg);
                  z-index: 2;
                "
                src="/assets/teams/yellow/blob-inner-1.svg"
                alt=""
              />
              <img
                class="tc-abs"
                style="
                  left: 29.7px;
                  top: 98.9px;
                  width: 157.593px;
                  height: 90.367px;
                  transform: rotate(-15.65deg);
                  z-index: 3;
                "
                src="/assets/teams/yellow/blob-inner-2.svg"
                alt=""
              />
              <!-- ひむら -->
              <img
                class="tc-photo"
                style="
                  left: 5.25px;
                  top: 5.29px;
                  width: 143.6px;
                  height: 177.6px;
                  z-index: 4;
                  scale: 1.3;
                "
                src="/assets/teams/yellow/himurafull.png"
                alt="ひむら"
              />
              <!-- ゆーとぅー -->
              <img
                class="tc-photo"
                style="
                  left: 64.47px;
                  top: 39.23px;
                  width: 168.7px;
                  height: 192.3px;
                  z-index: 5;
                "
                src="/assets/teams/yellow/yutoufull.png"
                alt="ゆーとぅー"
              />
            </div>
            <div
              class="tc-labels"
              style="--x: 256.02px; --y: 34.25px; --gap: 10px"
            >
              <div class="tc-label">
                <p class="tc-role">団長</p>
                <p class="tc-name">ひむら</p>
              </div>
              <div class="tc-label">
                <p class="tc-role">副団長</p>
                <p class="tc-name">ゆーとぅー</p>
              </div>
            </div>
          </FitScale>
          <div
            class="tc-bubble"
            style="
              --x: 80.5px;
              --y: 276.31px;
              --w: 415.902px;
              --h: 200.728px;
              --pad: 49.59px 17.86px 20px 32.59px;
            "
          >
            <CommentBubble color="#FFD43B" tab="left">
              <p class="tc-comment">
                古代中国の陰陽五行説において、「土」を司る「黄色」は高貴な色であり、「皇帝」の象徴とされてきました。つまり、土曜日の校庭が黄色団の天下となるのは歴史的にも必然なわけです。
                今年も関西メンター運動会の頂点に君臨するのは黄色チームですので、他の団の皆さんは白旗の準備だけ忘れずに当日お越しくださいね。
              </p>
            </CommentBubble>
          </div>
        </div>

        <!-- 緑団 (bottom-right, 595.5×511px) — photos right, labels left -->
        <div class="tc-card tc-card--photos-right" style="--body-x: 42.07px">
          <div class="tc-body"></div>
          <div
            class="tc-badge-wrap"
            style="
              left: 12.75px;
              top: 0.25px;
              width: 152.514px;
              height: 104.159px;
            "
          >
            <div class="tc-badge" style="background: #00b10c">緑団</div>
          </div>
          <FitScale
            class="tc-head"
            :width="439.25"
            :height="237"
            style="--x: 144.75px; --y: 81px"
          >
            <div
              class="tc-photos"
              style="--x: 134.25px; --y: 0px; --w: 305px; --h: 237px"
            >
              <!-- 緑ブロブ (Figma Group 38:655) — photos より背面 -->
              <img
                class="tc-abs"
                style="
                  left: 73px;
                  top: 0.9px;
                  width: 199px;
                  height: 214.7px;
                  z-index: 1;
                "
                src="/assets/teams/green/blob.svg"
                alt=""
              />
              <img
                class="tc-photo"
                style="
                  left: 15.24px;
                  top: -38.5px;
                  width: 316.2px;
                  height: 265.7px;
                  z-index: 2;
                "
                src="/assets/teams/green/kuriefull.png"
                alt="カーリー"
              />
              <img
                class="tc-photo"
                style="
                  left: -13.22px;
                  top: 28.63px;
                  width: 213.5px;
                  height: 221.9px;
                  z-index: 4;
                "
                src="/assets/teams/green/mahohofull.png"
                alt="まほほ"
              />
            </div>
            <div class="tc-labels" style="--x: 0px; --y: 44.25px; --gap: 10px">
              <div class="tc-label">
                <p class="tc-role">団長</p>
                <p class="tc-name">カーリー</p>
              </div>
              <div class="tc-label">
                <p class="tc-role">副団長</p>
                <p class="tc-name">まほほ</p>
              </div>
            </div>
          </FitScale>
          <div
            class="tc-bubble"
            style="
              --x: 94.43px;
              --y: 277.74px;
              --w: 421.994px;
              --h: 206.285px;
              --pad: 48.16px 25.14px 20px 31.41px;
            "
          >
            <CommentBubble color="#00B10C" tab="right">
              <p class="tc-comment">
                緑団の優勝以外ありえません。幸運のクローバーは我々のものだからです。
                みんなを緑団に釘付けにさせます。緑は人間の目で最も認識しやすい色だからです。
                さあ皆さん、新緑のごとく鮮やかに優勝をいただきに行きましょう。
              </p>
            </CommentBubble>
          </div>
        </div>
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

          <div class="staff-depts">
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
      </div>
    </section>

    <!-- ============================================================
         FOOTER
         ============================================================ -->
    <footer class="page-footer">©関西メンター大運動会2026運営</footer>
  </main>
</template>

<style scoped>
/* ===== Design tokens ===== */
.page {
  position: relative;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  font-family: "RocknRoll One", sans-serif;
  color: #f9faf7;
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
  margin-bottom: 70px;
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
  font-family: "RocknRoll One", sans-serif;
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
  color: #f9faf7;
  text-align: left;
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
}

/* ===== TEAM CARDS SECTION ===== */
/* ===== TEAM LEADERS SECTION — Figma frame 38:511 ===== */
.section--teams {
  padding-top: 60px;
}

.teams-grid {
  --tc-body-w: 520px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* 行の高さを一番高いカードに揃え、黒ボックスを全団同じ大きさにする */
  grid-auto-rows: 1fr;
  gap: 40px;
  width: 1228px;
  margin: 0 auto;
  padding-top: 20px;
  overflow: visible;
}

.tc-card {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 27px;
  overflow: visible;
}

.tc-body {
  position: absolute;
  left: var(--body-x);
  top: 80px;
  bottom: 0;
  width: var(--tc-body-w);
  background: #181c18;
  border: 6px solid #f9faf7;
}

/* 写真と名前のかたまり。SPではこのまま縮小して、PC・タブレットと同じ配置を保つ */
.tc-head {
  position: absolute;
  left: var(--x);
  top: var(--y);
}

.tc-photos {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: var(--w);
  height: var(--h);
}

.tc-labels {
  position: absolute;
  left: var(--x);
  top: var(--y);
  z-index: 6;
  display: flex;
  flex-direction: column;
  gap: var(--gap);
  /* FitScale が写真ごと縮小しても文字サイズは固定に保つ。
     ただし際限なく拡大すると、極端に縮小した時に名前が周りの黒箱にはみ出して
     くっついて見えるので、拡大率には上限を設ける */
  transform: scale(clamp(1, calc(1 / var(--fit-scale, 1)), 1.8));
  transform-origin: 0 0;
}

/* 吹き出しはデザインの高さを最小にして、コメントが長ければ伸びる。行内で余った高さも埋める */
.tc-bubble {
  position: relative;
  flex-grow: 1;
  width: var(--w);
  min-height: var(--h);
  margin: var(--y) 0 0 var(--x);
  z-index: 2;
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
  border: 5px solid #f9faf7;
  font-size: 32px;
  color: #f9faf7;
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

.tc-role,
.tc-name {
  font-size: 20px;
  color: #f9faf7;
  line-height: 34px;
  margin: 0;
  white-space: nowrap;
}

.tc-comment {
  padding: var(--pad);
  font-size: 15px;
  color: #181c18;
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

.staff-depts {
  display: flex;
  flex-direction: column;
  gap: 70px;
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
  color: #ffe600;
  padding: 60px 0 40px;
}

/* ===== TABLET (≤1279px) ===== */
@media (max-width: 1279px) {
  .section {
    padding-left: 16px;
    padding-right: 16px;
  }
  .section--staff {
    padding: 0;
  }

  .section--derby .bottom-badge-row {
    gap: 48px;
  }
  .hero-description {
    font-size: 28px;
  }
  .cta-btn {
    font-size: 32px;
  }

  .teams-grid {
    grid-template-columns: minmax(0, 1fr);
    width: 100%;
    max-width: 600px;
  }
  /* 黒ボックスの位置がカードごとに違うので、ボックスの中心を列の中心に合わせる */
  .tc-card {
    left: calc(50% - var(--body-x) - var(--tc-body-w) / 2);
  }

  .staff-content {
    padding-left: 16px;
    padding-right: 16px;
  }
  /* 2行に分けていた班を1つのグリッドにまとめる */
  .staff-depts {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 56px 24px;
    width: 100%;
    max-width: 720px;
  }
  .staff-dept-row {
    display: contents;
  }
  .staff-depts .staff-dept {
    width: auto;
  }
}

/* ===== SP (≤767px) ===== */
@media (max-width: 767px) {
  .section {
    padding-top: 40px;
    padding-bottom: 48px;
  }
  .section--hero {
    padding-top: 16px;
  }
  .section--derby {
    padding-top: 0;
  }

  .section--derby .bottom-badge-row {
    gap: 28px;
  }
  .hero-description {
    font-size: 18px;
  }
  .cta-btn {
    padding: 8px 24px;
    font-size: 22px;
  }

  /* 団長カード: 写真と名前はタブレットと同じ配置のまま縮小し、下に吹き出し。黒ボックスと吹き出しは中身に合わせて伸びる */
  .teams-grid {
    gap: 32px;
  }
  .teams-grid {
    grid-auto-rows: auto;
  }
  .tc-card {
    left: 0;
    gap: 16px;
    padding: 112px 16px 24px;
  }
  .tc-body {
    left: 0;
    right: 0;
    top: 64px;
    bottom: 0;
    width: auto;
    height: auto;
    /* タブレット幅に近い横幅(768px弱)では、カード自体が600pxで頭打ちのまま
       このボックスだけ全幅に広がって急に太く見えるのを防ぐ */
    max-width: 520px;
    margin-left: auto;
    margin-right: auto;
    border-width: 4px;
  }
  .tc-badge {
    padding: 8px 18px;
    border-width: 4px;
    font-size: 24px;
  }
  .tc-head {
    position: relative;
    left: auto;
    top: auto;
    z-index: 1;
  }
  /* 画像とテキストの間を全団で少し詰める */
  .tc-labels {
    left: calc(var(--x) - 12px);
  }
  .tc-card--photos-right .tc-labels {
    left: calc(var(--x) + 12px);
  }
  .tc-bubble {
    flex-grow: 0;
    width: 100%;
    /* 黒箱(520px)より一回り小さくして、両端に黒い余白が残るようにする（PC/タブレットの見た目と同じ比率） */
    max-width: 420px;
    min-height: 0;
    margin: 0 auto;
  }
  .tc-comment {
    padding: 40px 18px 18px;
  }

  /* 1445px幅の形を375px幅に押し込むとギザギザが鋭くなりすぎるので、倍幅で描いて左右を切る */
  .staff-blob-container {
    overflow: hidden;
    /* PC用の高さ(1345px)を残すと、幅だけ狭くなったキャンバスに絵が
       縦に大きく引き伸ばされてしまうので、中身の高さに任せる */
    min-height: 0;
  }
  .staff-blob-svg {
    left: -50%;
    width: 200%;
  }

  .staff-content {
    padding-bottom: 240px;
  }
  .staff-depts {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 40px 16px;
  }
  /* 9班を2列に並べると最後の1つが余るので中央に置く */
  .staff-depts .staff-dept-row--bottom .staff-dept:last-child {
    grid-column: 1 / -1;
    justify-self: center;
    width: calc(50% - 8px);
  }

  .page-footer {
    font-size: 14px;
  }
}
</style>
