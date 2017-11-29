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
      <air-graph-consumption></air-graph-consumption>
      <air-graph-controls></air-graph-controls>
    </section>
  </div>
</template>

<script>
  import getDaysInMonth from 'date-fns/get_days_in_month';
  import AirTips from 'components/air-tips';
  import AirPrice from 'components/air-price';
  import AirGraphControls from 'components/air-graph-controls';
  import AirGraphConsumption from 'components/air-graph-consumption';

  export default {
    components: {
      AirTips,
      AirPrice,
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
        chartData: {
          series: [],
          labels: []
        },
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
        }],
        labelsFunc: {
          year: (start, length) => {
            return this.months;
            //const stop = Number(start) + length;
            //return this.months.slice(start, stop);
          },
          month: (start, length) => {
            //const stop = Number(start) + length;
            const currentMonth = new Date().getMonth() + 1;
            const stop = getDaysInMonth(new Date());
            const daysOfMonth = [];
            for (let i = 1; i <= 24; i++) {
              daysOfMonth.push(`${(i < 10 ? '0' + i : i)}/${currentMonth}`);
            }
            return daysOfMonth;
          },
          week: (start, length) => {
            return this.daysOfWeek;
            //const stop = Number(start) + length;
            //return this.daysOfWeek.slice(start, stop);
          },
          day: (start, length) => {
            return this.hours;
            //const stop = Number(start) + length;
            //return this.hours.slice(start, stop);
          }
        }
      }
    },
    methods: {
      labels (type, start, stop) {
        return this.labelsFunc[type](start, stop);
      },
      fillArray (consumption) {
        const cpt = [];
        for (let i = 0; i <= this.chartData.labels.length; i++) {
          if (consumption[i]) {
            cpt[i] = consumption[i];
          } else {
            cpt[i] = null
          }
        }
        return cpt;
      },
      onToggleNowConsumption (evt) {
        const consumption = this.$store.state.consumption.now.values;
        console.log(this.fillArray(consumption));
        this.$set(this.chartData.series, 0, evt.target.checked ? this.fillArray(consumption) : []);
      },
      onToggleLastConsumption (evt) {
        const consumption = this.$store.state.consumption.before.values;
        this.$set(this.chartData.series, 1, evt.target.checked ? this.fillArray(consumption) : []);
      },
      onToggleAverageConsumption (evt) {
        const consumption = this.$store.state.average.values;
        this.$set(this.chartData.series, 2, evt.target.checked ? this.fillArray(consumption) : [])
      },
      onUpdate (evt) {
        const checkboxes = document.querySelectorAll('.consumption-checkbox');
        checkboxes.forEach(checkbox => {
          const customEvent = new CustomEvent(checkbox.dataset.type, {
            bubbles: true
          });
          checkbox.dispatchEvent(customEvent);
        });
        const type = this.$store.state.consumptionLabelType;
        const consumption = this.$store.state.consumption.now.values;
        const labels = this.labels(type, Object.keys(consumption)[0], Object.keys(consumption).length);
        this.chartData.labels = labels;
      }
    },
    mounted () {
      document.addEventListener('toggle-now-consumption', this.onToggleNowConsumption);
      document.addEventListener('toggle-last-consumption', this.onToggleLastConsumption);
      document.addEventListener('toggle-average-consumption', this.onToggleAverageConsumption);
      document.addEventListener('update', this.onUpdate);
    },
    destroyed () {
      document.removeEventListener('toggle-now-consumption', this.onToggleNowConsumption);
      document.removeEventListener('toggle-last-consumption', this.onToggleLastConsumption);
      document.removeEventListener('toggle-average-consumption', this.onToggleAverageConsumption);
      document.removeEventListener('update', this.onUpdate);
    }
  }
</script>

<style lang="scss">
  $graph-first-color: #d70206;
  $graph-second-color: #616729;
  $graph-third-color: #ff9800;

  .home {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .air-tips, .air-graph, .air-graph-controls {
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
    // flex: 1;
    // margin-left: 50px;
    // height: 95%;
  }

  .air-graph--nodata {
    margin: 140px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    font-weight: bold;
    text-align: center;
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
    fill-opacity: 0.1;
    stroke: none;
  }

  .ct-series-a .ct-area {
    fill: $graph-first-color;
  }

  .ct-series-b .ct-area {
    fill: $graph-second-color;
  }

  .ct-series-c .ct-area {
    fill: $graph-third-color;
  }

  .ct-series-a .ct-line, .ct-series-b .ct-line, .ct-series-c .ct-line {
    fill: none;
    stroke-width: 3px;
  }

  .ct-series-a .ct-line {
    stroke: $graph-first-color;
  }

  .ct-series-b .ct-line {
    stroke: $graph-second-color;
  }

  .ct-series-c .ct-line {
    stroke: $graph-third-color;
  }

  .ct-series-a .ct-point, .ct-series-b .ct-point, .ct-series-c .ct-point {
    stroke-width: 10px;
    stroke-linecap: round;
  }

  .ct-series-a .ct-point {
    stroke: $graph-first-color
  }

  .ct-series-b .ct-point {
    stroke: $graph-second-color;
  }

  .ct-series-c .ct-point {
    stroke: $graph-third-color;
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

