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
  }

  @media (max-width: 530px) {
    .welcome {
      flex-direction: column;
    }
  }
</style>
