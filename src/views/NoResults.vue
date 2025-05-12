<template>
  <div v-if="showNoResults" class="no-results-section">
    <div class="no-results-card">
      <button @click="closeCard" class="close-button">&times;</button>
      <div class="no-results-icon">🔍</div>
      <h3 class="no-results-title">Ничего не найдено</h3>
      <p class="no-results-text">Попробуйте изменить поисковый запрос или</p>
      <button @click="handleBrowse" class="no-results-button">Посмотреть все материалы</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps({
  searchQuery: {
    type: String,
    required: true,
  },
  searchResults: {
    type: Array,
    required: true,
  },
  searchPerformed: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['browse', 'close'])

const showNoResults = ref(false)

watch(
  () => [props.searchResults, props.searchPerformed],
  () => {
    showNoResults.value =
      props.searchPerformed && props.searchQuery.trim() !== '' && props.searchResults.length === 0
  },
  { immediate: true },
)

const handleBrowse = () => {
  emit('browse')
}

const closeCard = () => {
  emit('close')
}
</script>

<style scoped>
.no-results-section {
  margin-top: 120px;
  width: 100vw;
  height: 350px;
  padding: 0 20px;
}

.no-results-card {
  background: var(--color-bg);
  padding: 40px;
  text-align: center;
}

.close-button {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--color-text);
  cursor: pointer;
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: end;
  border-radius: 50%;
  transition: all 0.3s ease;
}
.no-results-icon {
  font-size: 3rem;
  color: var(--color-text-secondary);
  margin-bottom: 1.5rem;
}

.no-results-title {
  font-size: 1.5rem;
  color: var(--color-text-secondary);
  margin-bottom: 1rem;
}

.no-results-text {
  color: var(--color-text-secondary);
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}

.no-results-button {
  background-color: var(--color-bg);
  color: var(--color-text);
  border: var(--color-border);
  padding: 12px 24px;
  border-radius: var(--radius-md);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.no-results-button:hover {
  background-color: var(--color-bg-tertiary);
  transform: translateY(-1px);
  color: var(--color-primary);
}
</style>
