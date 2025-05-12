<template>
  <div v-if="isVisible" class="floating-panel" :class="{ 'panel-visible': isVisible }">
    <div class="panel-content">
      <button class="close-btn" @click="closePanel">×</button>
      <div class="panel-text">
        <slot>
          <p>Это важное информационное сообщение, которое появляется каждые 30 секунд.</p>
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue'

export default defineComponent({
  name: 'FloatingPanel',
  props: {
    interval: {
      type: Number,
      default: 5000, // 5 секунд по умолчанию
    },
    initialShow: {
      type: Boolean,
      default: true,
    },
    borderColor: {
      type: String,
      default: '#4361ee',
    },
  },
  setup(props) {
    const isVisible = ref<boolean>(props.initialShow)
    let timer: number | null = null

    const showPanel = (): void => {
      isVisible.value = true
      resetTimer()
    }

    const closePanel = (): void => {
      isVisible.value = false
      resetTimer()
    }

    const resetTimer = (): void => {
      if (timer) {
        clearTimeout(timer)
      }
      timer = window.setTimeout(() => {
        showPanel()
      }, props.interval)
    }

    onMounted((): void => {
      if (props.initialShow) {
        resetTimer()
      }
    })

    onBeforeUnmount((): void => {
      if (timer) {
        clearTimeout(timer)
      }
    })

    return {
      isVisible,
      closePanel,
    }
  },
})
</script>

<style scoped>
.floating-panel {
  position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
  background-color: var(--color-success);
  border-top: 2px solid var(--color-border);
  border-bottom: 2px solid var(--color-border);
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  transform: translateY(100%);
  transition: transform 0.3s ease-out;
  z-index: 1000;
}

.panel-visible {
  transform: translateY(0);
}

.panel-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 5px 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.close-btn {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #000000;
  padding: 0 10px;
  transition: color 0.2s;
}

.close-btn:hover {
  color: #c92a2a;
}

.panel-text {
  flex-grow: 1;
  padding: 0 20px;
  text-align: center;
}

.panel-text p {
  margin: 5px 0;
  color: #000000;
}

.panel-text a:hover {
  color: #0b0c0c;
}
</style>
