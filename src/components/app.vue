<template>
  <div class="main">
    <air-nav></air-nav>
    <transition name="router-fade-in" mode="out-in">
      <router-view><!-- router views --></router-view>
    </transition>
    <air-toast></air-toast>
  </div>
</template>

<script>
  import Vue from 'vue';
  import AirNav from './air-nav';
  import AirToast from './air-toast';

  export default {
    components: {
      AirNav,
      AirToast
    }
  }
</script>

<style lang="scss">
  .main {
    height: 100%;
    width: 100%;
  }

  .router-fade-in-enter-active {
    transition: opacity 0.2s cubic-bezier(0, 0, 0.3, 1);
  }

  .router-fade-in-enter, .router-fade-in-leave-active {
    opacity: 0;
  }
</style>

