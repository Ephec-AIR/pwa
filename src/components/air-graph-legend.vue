<template>
  <div class="air-graph-legend">
    <h2 class="air-graph-legend__title">Légende</h2>
    <div class="air-graph-legend__now">
      <span class="air-graph-legend__now__color"></span>
      <span class="air-graph-legend__now__text">Ma consommation</span>
    </div>
    <div class="air-graph-legend__before">
      <span class="air-graph-legend__before__color"></span>
      <span class="air-graph-legend__before__text">Ma consommation d'avant</span>
    </div>
    <div class="air-graph-legend__average">
      <span class="air-graph-legend__average__color"></span>
      <span class="air-graph-legend__average__text">La consommation moyenne des utilisateurs</span>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
  $text-color: rgba(0, 0, 0, 0.54);
  $graph-now-color: #d70206;
  $graph-before-color: #616729;
  $graph-average-color: #ff9800;

  .air-graph-legend {
    display: flex;
    flex-direction: column;
    padding: 5px;
    background: #FFF;
    border-radius: 3px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);

    &__title {
      margin: 0;
      text-align: center;
      font-size: 20px;
      color: $text-color;
    }

    &__now, &__before, &__average {
      display: flex;
      align-items: center;
      margin: 3px 0;
    }

    &__now__color, &__before__color, &__average__color {
      display: block;
      margin: 0 5px;
      height: 10px;
      width: 50px;
    }

    &__now__color {
      background: $graph-now-color;
    }

    &__before__color {
      background: $graph-before-color
    }

    &__average__color {
      background: $graph-average-color
    }

    &__now__text, &__before__text, &__average__text {
      font-size: 12px;
    }
  }
</style>
