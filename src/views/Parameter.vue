<template>
  <div class="parameters">
    <air-param></air-param>
  </div>
</template>

<script>
  import AirParam from 'components/air-param';
  export default {
    components: {
      AirParam
    },
    data () {
      return {
      }
    }
  }
</script>

<style lang="scss">
  .parameters {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
