<template>
  <div class="main" ref="container">
    <air-nav></air-nav>
    <router-view class="router-view"><!-- router views --></router-view>
    <air-toast></air-toast>
  </div>
</template>

<script>
  import 'regenerator-runtime/runtime';
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
  $background-first-color: #FFE803;
  $background-second-color: #C0ED70;
  $background-third-color: #D4E157;
  $background-gradient: linear-gradient(135deg,#FFE803,#C0ED70,#D4E157);
  $background-demo: #3CC73C;
  $button-color: rgb(255, 23, 68);

  .main {
    display: grid;
    grid-template-rows: 60px 1fr;
    //flex-direction: column;
    min-height: 100vh;
    width: 100%;
  }

  .router-view {
    flex-grow: 1;
    background: $background-demo;
    transition: transform .5s cubic-bezier(0, 0, 0.3, 1);
  }

  .router-view--translate {
    transform: translateY(200px);
  }

  .simple-button {
    border: none;
    border-radius: 2px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
    color: #FFF;
    font-size: 14px;
    font-weight: bold;
    background: $button-color;
  }

  .router-fade-in-enter-active {
    transition: opacity 0.1s cubic-bezier(0, 0, 0.3, 1);
  }

  .router-fade-in-enter, .router-fade-in-leave-active {
    opacity: 0;
  }
</style>

