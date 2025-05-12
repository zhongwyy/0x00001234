<template>
  <transition name="slide-up">
    <div v-if="isVisible" class="bottom-popup">
      <div class="popup-content">
        <slot>{{ defaultMessage }}</slot>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'BottomPopup',
  props: {
    defaultMessage: {
      type: String,
      default: 'Это всплывающее сообщение',
    },
    autoCloseDelay: {
      type: Number,
      default: 0, // 0 = не закрывается автоматически
    },
  },
  setup(props) {
    const isVisible = ref(false)

    const showPopup = () => {
      isVisible.value = true
      if (props.autoCloseDelay > 0) {
        setTimeout(() => {
          closePopup()
        }, props.autoCloseDelay)
      }
    }

    const closePopup = () => {
      isVisible.value = false
    }

    return {
      isVisible,
      showPopup,
      closePopup,
    }
  },
})
</script>

<style scoped>
.bottom-popup {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 30px;
  background-color: var(--color-error);
  border: 1px solid var(--color-border);
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  align-items: center;
}

.popup-content {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.3s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
}
</style>
