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
  .welcome {
    display: flex;
    flex-direction: row;
    height: 100%;
    background: #FFD400;
  }

  @media (max-width: 530px) {
    .welcome {
      flex-direction: column;
    }
  }

  @media (min-width: 531px) {
    .welcome {
      height: 100%;
    }
  }
</style>

