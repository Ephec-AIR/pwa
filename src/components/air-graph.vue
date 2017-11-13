<template>
  <div class="air-graph" id="graph-container">
    <!-- graph -->
  </div>
</template>

<script>
  //import anychart from 'anychart';

  export default {
    mounted () {
      return;
      const chart = anychart.pie([
          ["Chocolate", 5],
          ["Rhubarb compote", 2],
          ["Crêpe Suzette", 2],
          ["American blueberry", 2],
          ["Buttermilk", 1]
      ]);
      chart.title("Top 5 pancake fillings");
      // set the container where chart will be drawn
      chart.container("graph-container");
      //  draw the chart on the page
      chart.draw();
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
