<template>
  <div class="main">
    <air-show></air-show>
    <air-login></air-login>
  </div>
</template>

<script>
  import Vue from 'vue';
  import AirShow from './air-show';
  import AirLogin from './air-login';

  export default {
    components: {
      AirShow,
      AirLogin
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

