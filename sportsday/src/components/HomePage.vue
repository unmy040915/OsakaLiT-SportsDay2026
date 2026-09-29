<script setup>
import HeroSection from "./HeroSection.vue";
import NavSection from "./NavSection.vue";
import DerbySection from "./DerbySection.vue";
import ScheduleSection from "./ScheduleSection.vue";
import TeamsSection from "./TeamsSection.vue";
import VenueMapSection from "./VenueMapSection.vue";
import PreEventInfoSection from "./PreEventInfoSection.vue";
import StaffSection from "./StaffSection.vue";
</script>

<template>
  <main class="page">
    <HeroSection />
    <NavSection />
    <div id="derby"><DerbySection /></div>
    <div id="schedule"><ScheduleSection /></div>
    <div id="teams"><TeamsSection /></div>
    <div id="venue"><VenueMapSection /></div>
    <div id="preinfo"><PreEventInfoSection /></div>
    <div id="staff"><StaffSection /></div>

    <footer class="page-footer">©関西メンター大運動会2026運営</footer>
  </main>
</template>

<style scoped>
.page {
  position: relative;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  font-family: "RocknRoll One", sans-serif;
  color: #f9faf7;
}

.page-footer {
  text-align: center;
  font-size: 20px;
  color: #ffe600;
  padding: 60px 0 40px;
}

@media (max-width: 767px) {
  .page-footer {
    font-size: 14px;
  }
}
</style>
