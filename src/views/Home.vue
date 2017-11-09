<template>
  <div class="home">
    <air-tips></air-tips>
    <air-graph></air-graph>
    <air-graph-controls></air-graph-controls>
  </div>
</template>

<script>
  import AirTips from 'components/air-tips';
  import AirGraph from 'components/air-graph';
  import AirGraphControls from 'components/air-graph-controls';

  export default {
    components: {
      AirTips,
      AirGraph,
      AirGraphControls
    },
    data () {
      return {
      }
    }
  }
</script>

<style lang="scss">
  .home {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FFD400;
    max-height: 100%;
  }

  .air-tips, .air-graph, .air-graph-controls {
    margin: 10px;
  }

</style>

