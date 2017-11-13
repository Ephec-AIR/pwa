<template>
  <div class="air-graph" id="graph-container">
    <!-- graph -->
  </div>
</template>

<script>
  import {GoogleCharts} from 'google-charts';

  export default {
    mounted () {
      GoogleCharts.load(drawChart);

      function drawChart() {
        const container = document.querySelector('.air-graph');
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses'],
          ['2013',  1000,      400],
          ['2014',  1170,      460],
          ['2015',  660,       1120],
          ['2016',  1030,      540]
        ]);

        var options = {
          title: 'Company Performance',
          hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0}
        };

        var chart = new google.visualization.AreaChart(container);
        chart.draw(data, options);
      }
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
