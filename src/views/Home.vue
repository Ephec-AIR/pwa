<template>
  <div class="home">
    <air-tips></air-tips>
    <chartist
      class="air-graph"
      type="Line"
      :data="chartData"
      :options="chartOptions"
      :responsive-options="responsiveOptions"
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
        chartOptions: {
          onlyInteger: true,
          fullWidth: true,
          chartPadding: {
            right: 40
          },
          low: 0,
          showPoint: true,
          showArea: true
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
        const labels = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
        const consumption = this.$store.state.consumption;
        const series = [Object.keys(consumption).map(range => consumption[range].end - consumption[range].start)];
        return {labels, series}
      }
    },
    mounted () {
      return;
      const consumption = [
        {
          date: new Date(2017, 9, 23, 12),
          value: 300,
          serial: 0
        },{
          date: new Date(2017, 9, 23, 13),
          value: 350,
          serial: 0
        },{
          date: new Date(2017, 9, 23, 14),
          value: 400,
          serial: 0
        },{
          date: new Date(2017, 9, 23, 15),
          value: 450,
          serial: 0
        },{
          date: new Date(2017, 9, 24, 12),
          value: 250,
          serial: 0
        },{
          date: new Date(2017, 9, 24, 13),
          value: 350,
          serial: 0
        },{
          date: new Date(2017, 9, 24, 14),
          value: 450,
          serial: 0
        },{
          date: new Date(2017, 9, 24, 15),
          value: 550,
          serial: 0
        },{
          date: new Date(2017, 9, 25, 12),
          value: 300,
          serial: 0
        },{
          date: new Date(2017, 9, 25, 13),
          value: 200,
          serial: 0
        },{
          date: new Date(2017, 9, 25, 14),
          value: 500,
          serial: 0
        },{
          date: new Date(2017, 9, 25, 15),
          value: 450,
          serial: 0
        },{
          date: new Date(2017, 9, 26, 12),
          value: 300,
          serial: 0
        },{
          date: new Date(2017, 9, 26, 13),
          value: 400,
          serial: 0
        },{
          date: new Date(2017, 9, 26, 14),
          value: 400,
          serial: 0
        },{
          date: new Date(2017, 9, 26, 15),
          value: 450,
          serial: 0
        },{
          date: new Date(2017, 9, 27, 12),
          value: 300,
          serial: 0
        },{
          date: new Date(2017, 9, 27, 13),
          value: 300,
          serial: 0
        },{
          date: new Date(2017, 9, 27, 14),
          value: 400,
          serial: 0
        },{
          date: new Date(2017, 9, 27, 15),
          value: 400,
          serial: 0
        },{
          date: new Date(2017, 9, 28, 12),
          value: 400,
          serial: 0
        },{
          date: new Date(2017, 9, 28, 13),
          value: 410,
          serial: 0
        },{
          date: new Date(2017, 9, 28, 14),
          value: 420,
          serial: 0
        },{
          date: new Date(2017, 9, 28, 15),
          value: 430,
          serial: 0
        },{
          date: new Date(2017, 9, 29, 12),
          value: 440,
          serial: 0
        },{
          date: new Date(2017, 9, 29, 13),
          value: 350,
          serial: 0
        },{
          date: new Date(2017, 9, 29, 14),
          value: 400,
          serial: 0
        },{
          date: new Date(2017, 9, 29, 15),
          value: 450,
          serial: 0
        }
      ];

      const stackedConsumption = consumption.reduce((prev, current) => {
        const weekDay = current.date.getDay();
        if (prev[weekDay]) {
          prev[weekDay] += current.value;
        } else {
          prev[weekDay] = current.value;
        }
        return prev;
      }, {});

      this.chartData.series = [Object.keys(stackedConsumption).map(weekDay => stackedConsumption[weekDay])];
    }
  }
</script>

<style lang="scss">
  $background-first-color: #FFE803;
  $background-second-color: #C0ED70;
  $background-third-color: #D4E157;

  .home {
    position: relative;
    display: flex;
    align-items: center;
    flex-grow: 1;
    justify-content: space-between;
    background: linear-gradient(135deg, $background-first-color, $background-second-color 20%, $background-third-color 90%);
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
    margin-left: 50px;
    height: 95%;
  }

  .ct-grid {
    stroke: rgba(0,0,0,.2);
    stroke-width: 1px;
    stroke-dasharray: 2px
  }

  .ct-series-a .ct-area {
    fill: #d70206;
    fill-opacity: 0.1;
    stroke: none;
  }

  .ct-series-a .ct-line {
    stroke: #d70206;
    fill: none;
    stroke-width: 3px;
  }

  .ct-series-a .ct-point {
    stroke: #d70206;
    stroke-width: 5px;
    stroke-linecap: round;
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

  @media (max-width: 530px) {
    .home {
      position: relative;
      flex-direction: column;
    }

    .air-graph {
      margin-top: 140px;
    }
  }
</style>

