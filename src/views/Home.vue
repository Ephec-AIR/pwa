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
        console.table(series);
        return {labels, series}
      }
    },
    mounted () {
      return;
      const consumptions = [
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
          value: 510,
          serial: 0
        },{
          date: new Date(2017, 9, 24, 13),
          value: 520,
          serial: 0
        },{
          date: new Date(2017, 9, 24, 14),
          value: 560,
          serial: 0
        },{
          date: new Date(2017, 9, 24, 15),
          value: 610,
          serial: 0
        },{
          date: new Date(2017, 9, 25, 12),
          value: 630,
          serial: 0
        },{
          date: new Date(2017, 9, 25, 13),
          value: 670,
          serial: 0
        },{
          date: new Date(2017, 9, 25, 14),
          value: 700,
          serial: 0
        },{
          date: new Date(2017, 9, 25, 15),
          value: 705,
          serial: 0
        },{
          date: new Date(2017, 9, 26, 12),
          value: 710,
          serial: 0
        },{
          date: new Date(2017, 9, 26, 13),
          value: 717,
          serial: 0
        },{
          date: new Date(2017, 9, 26, 14),
          value: 800,
          serial: 0
        },{
          date: new Date(2017, 9, 26, 15),
          value: 820,
          serial: 0
        },{
          date: new Date(2017, 9, 27, 12),
          value: 850,
          serial: 0
        },{
          date: new Date(2017, 9, 27, 13),
          value: 920,
          serial: 0
        },{
          date: new Date(2017, 9, 27, 14),
          value: 970,
          serial: 0
        },{
          date: new Date(2017, 9, 27, 15),
          value: 1000,
          serial: 0
        },{
          date: new Date(2017, 9, 28, 12),
          value: 1100,
          serial: 0
        },{
          date: new Date(2017, 9, 28, 13),
          value: 1300,
          serial: 0
        },{
          date: new Date(2017, 9, 28, 14),
          value: 1350,
          serial: 0
        },{
          date: new Date(2017, 9, 28, 15),
          value: 1410,
          serial: 0
        },{
          date: new Date(2017, 9, 29, 12),
          value: 1435,
          serial: 0
        },{
          date: new Date(2017, 9, 29, 13),
          value: 1450,
          serial: 0
        },{
          date: new Date(2017, 9, 29, 14),
          value: 1480,
          serial: 0
        },{
          date: new Date(2017, 9, 29, 15),
          value: 1520,
          serial: 0
        }
      ];

      const consumptionRange = getConsumptionAccordingToType(consumptions, 'year');
      this.chartData.series = [Object.keys(consumptionRange).map(range => consumption[range].end - consumption[range].start)];
    }
  }

  function getConsumptionAccordingToType (consumption, type) {
    console.log(consumption);

    return consumption.reduce((prev, current) => {
      const index = getRangeIndex(type, current.date);
      console.log(index);
      if (prev[index] && prev[index].start) {
        prev[index].end = current.value;
      } else {
        prev[index] = {};
        prev[index].start = current.value;
      }
      return prev;
    }, {});
  }

  function getRangeIndex (type, date) {
    const types = {
      'year': date => new Date(date).getMonth(),
      'month': date => new Date(date).getDate(),
      'week': date => new Date(date).getDay(),
      'day': date => new Date(date).getHours()
    }
    return types[type];
  };
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

