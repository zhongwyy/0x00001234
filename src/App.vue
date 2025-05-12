<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import BottomPopup from './components/icons/warningPanel.vue'
import NoResults from './views/NoResults.vue'

const popup = ref<InstanceType<typeof BottomPopup>>()

function showNotification() {
  popup.value?.showPopup()
}

const router = useRouter()

const goToFaq = () => {
  router.push('/faq')
}
const goToDocs = () => {
  router.push('/docs')
}
const goToBlog = () => {
  router.push('/blog')
}
const goToHome = () => {
  router.push('/')
}
const searchQuery = ref('')
const searchResults = ref<unknown[]>([])
const searchPerformed = ref(false)

const performSearch = () => {
  searchPerformed.value = true
  // Ваша логика поиска
}

const showAllContent = () => {
  console.log('Показать все материалы')
}

const hideNoResults = () => {
  searchPerformed.value = false
  searchQuery.value = ''
}
</script>

<template>
  <nav class="navbar">
    <div class="navbar-container">
      <img class="logo" src="./assets/angleLight.png" height="52" />
      <div class="logoName" @click="goToHome">zcode</div>
      <div class="search">
        <input
          type="text"
          v-model="searchQuery"
          @keyup.enter="performSearch"
          placeholder="Search Docs and Blog"
        />
      </div>
      <div class="nav-links">
        <a @click="goToDocs" class="trigger-btn">Docs</a>
        <a @click="goToBlog" class="trigger-btn">Blog</a>
        <a @click="showNotification" class="trigger-btn">Updates</a>
        <a @click="goToFaq" class="trigger-btn">FAQ</a>
      </div>
    </div>
  </nav>
  <NoResults
    :search-query="searchQuery"
    :search-results="searchResults"
    :search-performed="searchPerformed"
    @browse="showAllContent"
    @close="hideNoResults"
  />
  <RouterView />
  <footer>
    <div class="container">
      <div class="footer-content">
        <div class="footer-links">
          <a href="#">GitHub</a>
          <a href="#">Contact</a>
        </div>
        <p class="copyright">© 2025 zcode Personal Projects</p>
      </div>
    </div>
  </footer>
  <BottomPopup ref="popup" :auto-close-delay="2000">
    <span style="color: var(--color-text)">It doesn't work yet ж3</span>
  </BottomPopup>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--color-bg);
  color: var(--color-text);
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  z-index: 1000;
}

.navbar-container {
  width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}
.logoName {
  cursor: pointer;
}

.search {
  flex: 1;
  padding: 40px;
}

.search input {
  background: var(--color-bg-tertiary);
  color: var(--color-text-tertiary);
  width: 100%;
  padding: 8px 15px;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  outline: none;
  font-size: 1rem;
}

.search input:focus {
  border: 1px solid var(--color-primary);
}

footer {
  background-color: var(--color-bg);
  color: var(--color-text);
  padding: 40px 0;
  text-align: center;
}

.footer-content {
  max-width: 600px;
  margin: 0 auto;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;
}

.footer-links a {
  color: var(--color-primary);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: var(--color-primary-hover);
}

.copyright {
  color: var(--color-text-tertiary);
  font-size: 0.9rem;
}
</style>
