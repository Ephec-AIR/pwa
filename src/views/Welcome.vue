<template>
  <div class="welcome">
    <air-show></air-show>
    <air-login></air-login>
  </div>
</template>

<script>
  import AirShow from 'components/air-show';
  import AirLogin from 'components/air-login';

  export default {
    components: {
      AirShow,
      AirLogin
    }
  }
</script>

<style lang="scss">
  $background-first-color: #FFE803;
  $background-second-color: #C0ED70;
  $background-third-color: #D4E157;

  .welcome {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    background: linear-gradient(45deg, $background-first-color, $background-second-color, $background-third-color);
  }

  @media (max-width: 530px) {
    .welcome {
      flex-direction: column;
    }
  }
</style>
