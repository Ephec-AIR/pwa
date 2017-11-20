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
  //import Chartist from 'chartist';
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
        months: ["Jan", "Fev", "Mar", "Avr", "Mai", "Juin", "Jui", "Août", "Sept", "Oct", "Nov", "Dec"],
        daysOfWeek: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
        hours: ["00h00", "01h00", "02h00", "03h00", "04h00", "05h00", "06h00", "07h00", "08h00",
          "09h00", "10h00", "11h00", "12h00", "13h00", "14h00", "15h00", "16h00", "17h00", "18h00",
          "19h00", "20h00", "21h00", "22h00", "23h00"],
        chartOptions: {
          onlyInteger: true,
          fullWidth: true,
          chartPadding: {
            right: 40
          },
          low: 0,
          showPoint: true,
          showArea: true,
          axisY: {
            offset: 60,
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
        }],
        labelsFunc: {
          year: (stop) => {
            return this.months.slice(0, stop);
          },
          month: (stop) => {
            const currentMonth = new Date().getMonth() + 1;
            const daysOfMonth = [];
            for (let i = 1; i <= stop; i++) {
              daysOfMonth.push(`${(i < 10 ? '0' + i : i)}/${currentMonth}`);
            }
            return daysOfMonth;
          },
          week: (stop) => {
            return this.daysOfWeek.slice(0, stop);
          },
          day: (stop) => {
            return this.hours.slice(0, stop)
          }
        }
      }
    },
    methods: {
      labels (type, stop) {
        return this.labelsFunc[type](stop);
      }
    },
    computed: {
      chartData () {
        const type = this.$store.state.consumptionLabelType;
        const labels = this.labels(type, this.$store.state.consumption.length);
        const series = [this.$store.state.consumption];
        return {labels, series}
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
    stroke-width: 10px;
    stroke-linecap: round;
  }

  .ct-chart-bar .ct-label, .ct-chart-line .ct-label {
    display: flex;
  }

  .ct-label.ct-vertical.ct-start {
    align-items: flex-end;
    justify-content: flex-end;
    fill: rgba(0,0,0,.4);
    color: rgba(0,0,0,.4);
    font-size: .75rem;
    line-height: 1;
  }

  .ct-label.ct-horizontal.ct-end {
    fill: rgba(0,0,0,.4);
    color: rgba(0,0,0,.4);
    font-size: .85rem;
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

