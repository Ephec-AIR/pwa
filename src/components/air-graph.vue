<template>
  <div class="air-graph" id="graph-container">
    <!-- graph -->
  </div>
</template>

<script>
  import Chartist from 'chartist';

  export default {
    mounted () {
      /* Add a basic data series with six labels and values */
      const data = {
        labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
        series: [
          {
            data: [5, 2, 4, 2, 0, 3]
          }
        ]
      };

      /* Set some base options (settings will override the default settings in Chartist.js *see default settings*). We are adding a basic label interpolation function for the xAxis labels. */
      const options = {
        axisX: {
        }
      };

      /* Now we can specify multiple responsive settings that will override the base settings based on order and if the media queries match. In this example we are changing the visibility of dots and lines as well as use different label interpolations for space reasons. */
      const responsiveOptions = [
        ['screen and (max-width: 530px)', {
          showLine: false,
          axisX: {
            labelInterpolationFnc (value) {
              return value[0];
            }
          }
        }]
      ];

      /* Initialize the chart with the above settings */
      new Chartist.Line('.air-graph', data, options, responsiveOptions);
    }
  }
</script>

<style lang="scss">
  .air-graph {
    width: 500px;
    max-width: 90%;
    height: 500px;
  }
</style>
