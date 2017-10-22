<template>
  <div class="air-toast-container">
    <transition name="toast-fade-in">
      <div class="air-toast" v-show="toast.message">
        <p class="air-toast--content">{{toast.message}}</p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  computed: {
    toast () {
      return this.$store.state.toast;
    }
  }
}
</script>

<style lang="scss">
  .air-toast {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    padding: 0 10px;
    color: #fff;
    bottom: 15px;
    right: 15px;
    padding: 0 10px;
    background: #444;
    border-radius: 3px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
    transition: opacity 0.3s cubic-bezier(0, 0, 0.3, 1);
    will-change: opacity;
    opacity: 1;
    z-index: 1;
  }

  .toast-fade-in-enter-active {
    transition: opacity .3s cubic-bezier(0, 0, 0.3, 1);
  }

  .toast-fade-in-enter, .toast-fade-in-leave-active {
    opacity: 0;
  }
</style>
