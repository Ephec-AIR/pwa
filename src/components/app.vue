<template>
  <div class="main">
    <air-nav></air-nav>
    <router-view>

    </router-view>
  </div>
</template>

<script>
  import Vue from 'vue';
  import AirNav from './air-nav';

  export default {
    components: {
      AirNav
    },
    data () {
      return {
      }
    }
  }
</script>

<style lang="scss">
  .main {
    height: 100%;
  }
</style>

