<template>
  <div class="air-toast-container">
    <div class="air-toast">
      <p class="air-toast--content">{{message}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: String,
    duration: Number
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
  opacity: 1;
  z-index: 1;

  &.hide {
    opacity: 0;
  }
}
</style>
