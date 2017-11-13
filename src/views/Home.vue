<template>
  <div class="home">
    <air-tips></air-tips>
    <chartist
      class="air-graph"
      type="Line"
      :data="chartData"
      :options="chartOptions"
      :event-handlers="eventHandlers"
    >
    </chartist>
    <section class="air-graph-controls">
      <air-graph-consumption></air-graph-consumption>
      <air-graph-controls></air-graph-controls>
    </section>
  </div>
</template>

<script>
  import AirTips from 'components/air-tips';
  import AirGraphControls from 'components/air-graph-controls';
  import AirGraphConsumption from 'components/air-graph-consumption';

  export default {
    components: {
      AirTips,
      AirGraphControls,
      AirGraphConsumption
    },
    data () {
      return {
        chartData: {
          labels: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
          series:[[
            {x: 1, y: 100},
            {x: 2, y: 50},
            {x: 3, y: 25},
            {x: 5, y: 12.5},
            {x: 8, y: 6.25}
          ]]
        },
        chartOptions: {
          onlyInteger: true
        },
        eventHandlers: [{
          event: 'draw',
          fn: (data) => {
            if(data.type === 'line' || data.type === 'area') {
              data.element.animate({
                d: {
                  begin: 2000 * data.index,
                  dur: 2000,
                  from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                  to: data.path.clone().stringify(),
                  easing: this.$chartist.Svg.Easing.easeOutQuint
                }
              });
            }
          }
        }]
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

  .air-graph {
    flex: 1;
    margin-top: 70px;
    height: 500px;
  }

  .ct-series-a .ct-line {
    stroke: red;
    stroke-width: 3px;
  }

  @media (max-width: 530px) {
    .home {
      position: relative;
      flex-direction: column;
    }
  }
</style>

