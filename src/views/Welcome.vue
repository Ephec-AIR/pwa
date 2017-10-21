<template>
  <div class="welcome">
    <air-show></air-show>
    <air-login></air-login>
  </div>
</template>

<script>
  import Vue from 'vue';
  import AirShow from 'components/air-show';
  import AirLogin from 'components/air-login';

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
  .welcome {
    height: 100%;
    display: flex;
    flex-direction: row;
  }
</style>

