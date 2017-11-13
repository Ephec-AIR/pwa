<template>
  <div class="home">
    <air-tips></air-tips>
    <air-graph></air-graph>
    <section class="air-graph-controls">
      <air-graph-consumption></air-graph-consumption>
      <air-graph-controls></air-graph-controls>
    </section>
  </div>
</template>

<script>
  import AirTips from 'components/air-tips';
  import AirGraph from 'components/air-graph';
  import AirGraphControls from 'components/air-graph-controls';
  import AirGraphConsumption from 'components/air-graph-consumption';

  export default {
    components: {
      AirTips,
      AirGraph,
      AirGraphControls,
      AirGraphConsumption
    },
    data () {
      return {
      }
    }
  }
</script>

<style lang="scss">
  .home {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #FFD400;
    max-height: 100%;
  }

  .air-tips, .air-graph, .air-graph-controls {
    margin: 10px;
  }

  .air-graph-controls {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  @media (max-width: 530px) {
    .home {
      position: relative;
      flex-direction: column;
    }
  }
</style>

