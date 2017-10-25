<template>
  <div class="air-graph-controls">
    <section class="air-graph-controls--choices">
      <button class="air-graph-controls--choices__day simple-button">JOUR</button>
      <button class="air-graph-controls--choices__week simple-button">SEMAINE</button>
      <button class="air-graph-controls--choices__month simple-button">MOIS</button>
      <button class="air-graph-controls--choices__year simple-button">ANNEE</button>
    </section>
    <section class="air-graph-controls--compare">
      <button class="simple-button">COMPARER</button>
    </section>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
  .air-graph-controls {
    &--choices {
      display: flex;
      flex-direction: column;
      margin: 10px 5px;

      &__day, &__week, &__month, &__year {
        background: #00C853;
        margin: 5px 0;
      }
    }

    &--compare {
      button {
        background: #FF3D00;

      }
    }
  }
</style>
