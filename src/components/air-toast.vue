<template>
  <div class="air-toast-container">
    <transition name="toast-fade-in">
      <div class="air-toast" v-show="toast.show">
        <p class="air-toast--content" v-for="(message, index) in toast.messages" :key="index">{{message}}</p>
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    word-wrap: break-word;
    position: fixed;
    padding: 0 5px;
    color: #fff;
    bottom: 15px;
    left: 15px;
    padding: 10px;
    background: #333;
    border-radius: 3px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4);
    transform: none;
    will-change: opacity, transform;
    opacity: 1;
    z-index: 1;

    &--content {
      margin: 0;
    }
  }

  .toast-fade-in-enter-active, .toast-fade-in-leave-active {
    transition: opacity .3s cubic-bezier(0, 0, 0.3, 1),
      transform .5s cubic-bezier(0, 0, 0.3, 1);
  }

  .toast-fade-in-enter, .toast-fade-in-leave-to {
    transform: translateY(100px);
    opacity: 0;
  }
</style>
