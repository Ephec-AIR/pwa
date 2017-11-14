<template>
  <div class="main">
    <div class="menu-underlay"></div>
    <air-nav></air-nav>
    <transition name="router-fade-in" mode="out-in">
      <router-view><!-- router views --></router-view>
    </transition>
    <air-toast></air-toast>
  </div>
</template>

<script>
  import 'regenerator-runtime/runtime';
  import idb from 'idb';
  import AirNav from './air-nav';
  import AirToast from './air-toast';

  export default {
    components: {
      AirNav,
      AirToast
    },
    created () {
      this.$store.dispatch('SET_USER_IF_EXIST');
    }
  }
</script>

<style lang="scss">
  .main {
    height: 100%;
    width: 100%;

    .menu-underlay {
      height: 100%;
      width: 100%;
      background: #000;
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
      transition: opacity cubic-bezier(0, 0, 0.3, 1);
      will-change: opacity;
      pointer-events: none;
      z-index: 3;
    }
  }

  .simple-button {
    padding: 10px 25px;
    border: none;
    border-radius: 2px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
    color: #FFF;
    font-size: 14px;
    font-weight: bold;
  }

  .router-fade-in-enter-active {
    transition: opacity 0.2s cubic-bezier(0, 0, 0.3, 1);
  }

  .router-fade-in-enter, .router-fade-in-leave-active {
    opacity: 0;
  }
</style>

