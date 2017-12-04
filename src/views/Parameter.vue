<template>
  <div class="parameters">
    <air-param></air-param>
  </div>
</template>

<script>

import AirParam from 'components/air-param';
  export default {
    components:{
      AirParam
    },
    data () {
      return {
      }
    }
  }
</script>

<style lang="scss">
<<<<<<< HEAD

  $background-first-color: #FFE803;
  $background-second-color: #C0ED70;
  $background-third-color: #D4E157;

  .main {
    flex-grow: 1;
    background: linear-gradient(45deg, $background-first-color, $background-second-color, $background-third-color);
    overflow: hidden;
=======
  .parameters {
    display: flex;
    justify-content: center;
    align-items: center;
>>>>>>> de101d2dacecfacd5b898fcec84c83e9a0ddb8e2
  }
</style>

