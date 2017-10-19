<template>
  <div class="main">
    Je suis welcome
    <air-login></air-login>
  </div>
</template>

<script>
  import Vue from 'vue';
  import AirLogin from './air-login';

  export default {
    components: {
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

