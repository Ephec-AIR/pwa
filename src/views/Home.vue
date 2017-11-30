<template>
  <div class="home">
    <air-tips></air-tips>
    <section class="air-graph__container">
      <air-price></air-price>
      <chartist
        class="air-graph"
        type="Line"
        :data="chartData"
        :options="chartOptions"
        :responsive-options="responsiveOptions"
        :event-handlers="eventHandlers"
      >
      </chartist>
    </section>
    <section class="air-graph-controls">
      <!--<air-graph-legend></air-graph-legend>-->
      <air-graph-consumption></air-graph-consumption>
      <air-graph-controls></air-graph-controls>
    </section>
  </div>
</template>

<script>
  import AirTips from 'components/air-tips';
  import AirPrice from 'components/air-price';
  import AirGraphControls from 'components/air-graph-controls';
  import AirGraphConsumption from 'components/air-graph-consumption';
  import AirGraphLegend from 'components/air-graph-legend';
  import AirGraphBest from 'components/air-graph-best';

  export default {
    components: {
      AirTips,
      AirPrice,
      AirGraphControls,
      AirGraphConsumption,
      AirGraphLegend,
      AirGraphBest
    },
    data () {
      return {

        // chartData: {
        //   series: [],
        //   labels: []
        // },
        chartOptions: {
          seriesBarDistance: 15,
          onlyInteger: false,
          fullWidth: true,
          chartPadding: {
            right: 40
          },
          height: 500,
          low: 0,
          showPoint: true,
          showArea: true,
          axisY: {
            offset: 100,
            labelInterpolationFnc: value => `${value} kwh`
          },
          plugins: [
            //Chartist.plugins.ctThreshold({
            //  threshold: 50
            //})
          ]
        },
        responsiveOptions: [
          ['screen and (max-width: 530px)', {
            showPoint: false,
            axisX: {
              labelInterpolationFnc: value => value[0]
            }
          }]
        ],
        eventHandlers: [{
          event: 'draw',
          fn: (data) => {

          }
        }]
      }
    },
    computed: {
      chartData () {
        return this.$store.state.chartist;
      }
    }
  }
</script>

<style lang="scss">
  $graph-first-color: #d70206;
  $graph-second-color: #f05b4f;
  $graph-third-color: #f4c63d;

  .home {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .air-tips, .air-graph__container, .air-graph-controls {
    margin: 10px;
  }

  .air-graph__container {
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-left: 50px;
    height: 95%;
  }

  .air-graph-controls {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  .air-graph {
    background: #453D3F;
    border-radius: 3px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
    padding-top: 10px;
    // flex: 1;
    // margin-left: 50px;
    // height: 95%;
  }

  .air-graph--nodata {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 140px auto;
    font-size: 22px;
    font-weight: bold;
    text-align: center;
    background: none;
    box-shadow: none;
    color: #de002a;

    & svg {
      display: none;
    }
  }

  .ct-grid {
    stroke: rgba(0,0,0,.2);
    stroke-width: 1px;
    stroke-dasharray: 2px
  }

  .ct-series-a .ct-area, .ct-series-b .ct-area, .ct-series-c .ct-area {
    fill: none;
    fill-opacity: 0.1;
    stroke: none;
  }

  // .ct-series-a .ct-area {
  //   fill: $graph-first-color;
  // }

  // .ct-series-b .ct-area {
  //   fill: $graph-second-color;
  // }

  // .ct-series-c .ct-area {
  //   fill: $graph-third-color;
  // }

  .ct-series-a .ct-line, .ct-series-b .ct-line, .ct-series-c .ct-line {
    fill: none;
    stroke-width: 3px;
  }

  .ct-series-a .ct-line {
    stroke: $graph-first-color;
    stroke-dasharray: 4px;
    animation: dashmove 1s linear infinite;
  }

  .ct-series-b .ct-line {
    stroke: $graph-second-color;
  }

  .ct-series-c .ct-line {
    stroke: $graph-third-color;
  }

  .ct-series-a .ct-point, .ct-series-b .ct-point, .ct-series-c .ct-point {
    stroke-width: 7px;
    stroke-linecap: round;
  }

  .ct-series-a .ct-point {
    stroke: $graph-first-color
  }

  .ct-series-b .ct-point {
    stroke: $graph-second-color;
    animation: bouncing-stroke 1.5s ease infinite;
  }

  .ct-series-c .ct-point {
    stroke: $graph-third-color;
    animation: exploding-stroke 1s ease-out infinite;
  }

  .ct-chart-bar .ct-label, .ct-chart-line .ct-label {
    display: flex;
  }

  .ct-label.ct-vertical.ct-start {
    align-items: flex-end;
    justify-content: flex-end;
    fill: rgba(0,0,0,.4);
    //color: rgba(0,0,0,.4);
    color: #94878a;
    font-size: .75rem;
    line-height: 1;
  }

  .ct-label.ct-horizontal.ct-end {
    fill: rgba(0,0,0,.4);
    //color: rgba(0,0,0,.4);
    color: #94878a;
    font-size: .65rem;
    line-height: 1;
  }

  .ct-line.ct-threshold-above, .ct-point.ct-threshold-above, .ct-bar.ct-threshold-above {
    stroke: #f05b4f;
  }

  .ct-line.ct-threshold-below, .ct-point.ct-threshold-below, .ct-bar.ct-threshold-below {
    stroke: #59922b;
  }

  .ct-area.ct-threshold-above {
    fill: #f05b4f;
  }

  .ct-area.ct-threshold-below {
    fill: #59922b;
  }

  @keyframes dashmove {
    0% {
      stroke-dashoffset: 0;
    }
    100% {
      stroke-dashoffset: -16px;
    }
  }

  @keyframes bouncing-stroke {
    0%, 100% {
      stroke-width: 5px;
    }
    50% {
      stroke-width: 10px;
    }
  }

  @keyframes exploding-stroke {
    0% {
      stroke-width: 2px;
      opacity: 1;
    }
    100% {
      stroke-width: 20px;
      opacity: 0;
    }
  }

  @media (max-width: 880px) {
    .ct-series-a .ct-point, .ct-series-b .ct-point, .ct-series-c .ct-point {
      stroke-width: 5px;
    }

    .ct-series-a .ct-line, .ct-series-b .ct-line, .ct-series-c .ct-line {
      stroke-width: 2px;
    }
  }

  @media (max-width: 680px) {
    .home {
      position: relative;
      flex-direction: column;
    }

    .air-graph {
      margin-top: 140px;
    }
  }
</style>

