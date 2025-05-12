<script setup lang="ts">
import { ref } from 'vue'
import FloatingPanel from '../components/icons/addPanel.vue'
import BottomPopup from '../components/icons/warningPanel.vue'

const popup = ref<InstanceType<typeof BottomPopup>>()

function showNotification() {
  popup.value?.showPopup()
}
</script>

<template>
  <body>
    <FloatingPanel :interval="45000" :initial-show="true" border-color="#f72585">
      <p>You can buy something in my <a href="">shop!</a></p>
    </FloatingPanel>
    <main class="main-content">
      <div class="content-container">
        <div class="nav-col">
          <div class="nav-title-col">
            <h4>@BLOG POSTS</h4>
          </div>
          <div class="nav-info">
            <a @click="showNotification" class="trigger-btn"># Development of the Docs...</a>
            <a @click="showNotification" class="trigger-btn"># The application design is...</a>
            <a @click="showNotification" class="trigger-btn"># Updating app features and...</a>
            <a @click="showNotification" class="trigger-btn"># The shop is opening soon!</a>
            <a @click="showNotification" class="trigger-btn"># Opening an app for my...</a>
          </div>
        </div>
        <div class="col">
          <h1 class="header1"># Development of the Docs tab has begun!</h1>
          <p>May 10th, 2025 by <a href="#">zhongwy</a></p>
          <p>👁 0 ♡ 0 ↻ 0</p>
          <p>Soon!</p>
          <p><img src="../assets/Screenshot_2.png" alt="" /></p>
          <h1 class="header1"># The application design is finally finished!</h1>
          <p>May 10th, 2025 by <a href="#">zhongwy</a></p>
          <p>👁 0 ♡ 0 ↻ 0</p>
          <p>Finally!</p>
          <p><img src="../assets/Screenshot_3.png" alt="" /></p>
          <h1 class="header1"># Updating app features and using pop-up windows!</h1>
          <p>May 10th, 2025 by <a href="#">zhongwy</a></p>
          <p>👁 0 ♡ 0 ↻ 0</p>
          <p>Update!</p>
          <p><img src="../assets/Screenshot_4.png" alt="" /></p>
          <h1 class="header1"># The shop is opening soon!</h1>
          <p>May 10th, 2025 by <a href="#">zhongwy</a></p>
          <p>👁 0 ♡ 0 ↻ 0</p>
          <p>Opening!</p>
          <p><img src="../assets/Screenshot_5.png" alt="" /></p>
          <h1 class="header1"># Opening an app for my open source projects</h1>
          <p>May 9th, 2025 by <a href="#">zhongwy</a></p>
          <p>👁 0 ♡ 0 ↻ 0</p>
          <p>
            Welcome everyone to the alpha opening of my web application where news of my
            developments will be published and all developments on one page where there will be
            guides and multiple explanations of what I have done or will do, news of updates of
            various applications also made by me will also be published, the site was developed from
            scratch and here updates of what has changed on it will also be published, thank you all
            for your attention!
          </p>
          <p><img src="../assets/Screenshot_1.png" alt="" /></p>
        </div>
      </div>
    </main>
    <BottomPopup ref="popup" :auto-close-delay="2000">
      <span style="color: var(--color-text)">It doesn't work yet ж3</span>
    </BottomPopup>
  </body>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  cursor: pointer;
  color: var(--color-text);
  text-decoration: none;
}
a:hover {
  color: var(--color-link-hover);
}

.logoName {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links {
  display: flex;
  gap: 40px;
}

.nav-links a:hover {
  color: var(--color-link-hover);
}

.main-content {
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 0 20px;
}

.content-container {
  width: 1200px;
  display: flex;
  gap: 20px;
}
.nav-col {
  position: sticky;
  top: 0px;
  height: calc(100vh - 120px);
  overflow-y: auto;
  flex: 0 0 250px;
  background-color: var(--color-bg);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 125px;
}
.nav-info {
  display: flex;
  flex-direction: column;
  font-size: 14px;
}

.nav-info a {
  border-left: 2px solid var(--color-border);
  padding: 10px;
}

.nav-info a:hover {
  border-color: var(--color-primary-hover);
}
.col {
  flex: 1;
  background-color: var(--color-bg);
  padding: 20px;
  border-radius: var(--radius-md);
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 125px;
}

.col a {
  color: var(--color-primary);
}
.col a:hover {
  color: var(--color-link-hover);
}

.col img {
  max-width: 100%;
  height: auto;
  display: block;
  border-radius: var(--radius-md);
  margin-bottom: 1rem;
  box-shadow: var(--shadow-sm);
  object-fit: cover;
  margin-bottom: 70px;
}

.header1 {
  color: var(--color-primary-hover);
}
</style>
